import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { rateLimit } from "express-rate-limit";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 1000, // Increase limit for dev
    standardHeaders: 'draft-7',
    legacyHeaders: false,
  });
  app.use("/api/", limiter);

  // Disable caching for development
  app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in development mode with Vite...");
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (e) {
      console.error("Failed to start Vite:", e);
    }
  } else {
    console.log("Starting in production mode (Serving static files)...");
    const distPath = path.join(process.cwd(), 'dist');
    
    // Check if dist exists
    app.use(express.static(distPath));
    
    // Catch-all for SPA
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
