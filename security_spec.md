# Security Specification for Proyecto Maricunga 2.0

## 1. Data Invariants
- A lead must have a valid email and a creation timestamp.
- Lead IDs must be alphanumeric and limited in length.
- The `createdAt` field must be equal to `request.time`.
- Only the creator (if authenticated) or an admin can read lead data. For anonymous submissions, we might allow creation without authentication depending on requirements, but standard setup uses Google Auth.
- Since we are using standard setup, we'll enforce `isSignedIn()`.

## 2. The "Dirty Dozen" Payloads (Selection)
1. **Payload 1 (Identity Spoofing):** Attempt to create a lead with a different `userId`.
2. **Payload 2 (Resource Poisoning):** Lead with 1MB string in `name`.
3. **Payload 3 (Temporal Inconsistency):** `createdAt` set to a future date.
4. **Payload 4 (Admin Elevation):** Attempt to write to a `/admins/` collection.
5. **Payload 5 (Path Traversal/Poisoning):** Lead ID containing `../`.
6. **Payload 6 (Schema Violation):** Lead without required `email`.
7. **Payload 7 (Type Poisoning):** `interestLevel` as a number instead of an enum string.
8. **Payload 8 (Bulk Scraping):** Attempt to `list` all leads as a normal user.
9. **Payload 9 (Update Gap):** Attempt to change `createdAt` on an existing lead.
10. **Payload 10 (Ghost Field):** Adding `isVerified: true` to a lead document.
11. **Payload 11 (ID Injection):** Using a 2KB string as a document ID.
12. **Payload 12 (PII Exposure):** Attempting to read another user's lead email.

## 3. Test Runner
We will generate `firestore.rules` that address these systematically.
