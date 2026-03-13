export const news4 = {
  id: "04",
  slug: "achema-2026-frankfurt-preview",
  category: "Corporate Update",
  date: "Jan 15, 2026",
  location: "Frankfurt, Germany",
  title: "Chemvict Participation in ACHEMA 2026 Frankfurt",
  abstract: "Chemvict is set to showcase its latest advancements in cascaded energy systems and modular separation units at the world's leading forum for the process industries.",
  image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
  
  // No keyFacts here (the green box will not render)
  
  content: {
    introduction: "As the chemical industry pivots toward modularity and rapid deployment, Chemvict will unveil its 'Plug-and-Process' series at ACHEMA 2026. \n\nOur presence in Hall 4.0 aims to address the growing demand for decentralized production facilities in the specialty chemical sector.",
    sections: [
      {
        title: "Modular Separation Units",
        body: "The centerpiece of our exhibit is the 'Nexus-5' modular column. Unlike site-built infrastructure, these units are pre-assembled and FAT-tested (Factory Acceptance Test) at our Singapore HQ before being shipped in standard containers. \n\nThis approach reduces on-site commissioning time by up to 60%, a critical factor for manufacturers responding to volatile market demands.",
        featured: false
      },
      {
        title: "Cascaded Energy Systems",
        body: "We will also demonstrate our new cascaded energy loops that allow low-grade waste heat from primary distillation to power secondary purification stages. \n\nBy maximizing the utility of every thermal unit, we are helping our partners achieve their ESG targets without compromising on throughput.",
        featured: true // Triggers the gray highlight box
      }
    ]
  }
};