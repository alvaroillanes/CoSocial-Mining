export interface Project {
  id: string;
  name: string;
  resource: string;
  location: string;
  status: string;
  description?: string;
  vehicle?: string;
  featured?: boolean;
  hasCalendly?: boolean;
  hasParticipation?: boolean;
  participationPrice?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "maricunga",
    name: "Proyecto de Tierras Raras en el Salar de Maricunga",
    resource: "Tierras Raras",
    location: "Región de Atacama",
    status: "Desarrollo",
    description: "El Salar de Maricunga, en la Región de Atacama, es una zona de alto interés geológico. Este proyecto se enfoca en el desarrollo de recursos asociados a tierras raras, con creciente relevancia en industrias tecnológicas y energéticas.",
    vehicle: "Sociedad por acciones (SpA)",
    featured: true,
    hasCalendly: true,
    hasParticipation: true,
    participationPrice: "$1.000.000 CLP",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Desierto_florido.jpg"
  },
  {
    id: "cobar-1",
    name: "Proyecto Cobar 1",
    resource: "Cobre",
    location: "Región de Antofagasta",
    status: "Exploración Avanzada",
    featured: false,
    hasCalendly: false,
    hasParticipation: false,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Mina_de_Chuquicamata%2C_Calama%2C_Chile%2C_2016-02-01%2C_DD_110-112_PAN.JPG/1280px-Mina_de_Chuquicamata%2C_Calama%2C_Chile%2C_2016-02-01%2C_DD_110-112_PAN.JPG"
  },
  {
    id: "litio-sur",
    name: "Proyecto Litio Sur",
    resource: "Litio",
    location: "Región de Coquimbo",
    status: "Prospecto",
    featured: false,
    hasCalendly: false,
    hasParticipation: false,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Valle_della_Luna_01.jpg/1280px-Valle_della_Luna_01.jpg"
  }
];
