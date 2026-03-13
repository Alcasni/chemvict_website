export const news6 = {
  id: "06",
  slug: "high-performance-polymer-purification",
  category: "Material Science",
  date: "Dec 18, 2025",
  location: "Frankfurt R&D",
  title: "Molecular Distillation for High-Performance Polymers",
  abstract: "Optimizing precursor purification to enhance thermal stability in composite material manufacturing for aerospace applications.",
  image: "https://images.unsplash.com/photo-1532187863486-abf51ad95699?q=80&w=1200&auto=format&fit=crop",
  
  keyFacts: [
    { label: "Min. Purity level", value: "99.95%" },
    { label: "Processing Temp.", value: " < 40°C" }
  ],

  content: {
    introduction: "The aerospace industry demands materials that can withstand extreme thermal cycling. Chemvict’s R&D team has developed a new molecular distillation protocol that removes trace monomers from polymer precursors with unprecedented precision.",
    sections: [
      {
        title: "Short-Path Thermal Processing",
        body: "By reducing the distance between the evaporator and the condenser to less than 2cm, we minimize the residence time of heat-sensitive monomers. \n\nThis prevents the 'charring' or thermal cracking that occurs in traditional long-path columns, ensuring the final composite remains flexible at sub-zero temperatures.",
        featured: true 
      },
      {
        title: "", // NO TITLE HERE: The green bar will not show
        body: "This specific protocol has now been validated for use with PEEK and PEI precursors. Following the success of the pilot run, Chemvict will begin offering specialized purification services to Tier-1 aerospace suppliers starting in Q3 2026. \n\nFuture iterations of the system will look to scale this process for the medical implant market, where biocompatibility depends heavily on the removal of residual catalysts.",
        featured: false
      }
    ]
  }
};