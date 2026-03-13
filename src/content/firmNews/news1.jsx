/**
 * FIRM NEWS DATA SCHEMA & TRIGGER GUIDE:
 * * 1. [keyFacts]: Array of {label, value}. Triggers the green performance box in sidebar.
 * 2. [pullQuote]: String. Triggers the large, full-width italicized quote.
 * 3. [featured]: Boolean inside a section. Triggers the light-gray highlight box.
 * 4. [whitespace-pre-line]: The layout now respects line breaks (\n) for real paragraphs.
 */

export const news1 = {
  id: "01",
  slug: "operational-launch-2026",
  category: "Project Milestone",
  date: "March 2026",
  location: "Jurong Island, Singapore",
  title: "Operational Launch of Tier-1 Oleochemical Facility",
  abstract: "Chemvict has finalized the commissioning of a large-scale multi-stage distillation complex, setting a new global benchmark for purity and energy efficiency.",
  image: "https://images.unsplash.com/photo-1565374395427-468f10783f82?q=80&w=1200&auto=format&fit=crop",
  
  // TRIGGER: Performance Box
  keyFacts: [
    { label: "Purity Yield", value: "99.8%" },
    { label: "Energy Reduction", value: "22%" },
    { label: "Total Investment", value: "$142M" }
  ],

  // TRIGGER: Large Quote
  pullQuote: "Every joule of energy and every drop of feedstock is now fully accounted for through cascaded recovery.",

  content: {
    introduction: "The Southeast Asian industrial landscape reached a new milestone this month as Chemvict officially began operations at the 'Emerald-1' facility. Designed as a multi-stage distillation hub, the site is engineered to process diverse bio-based feedstocks into high-purity industrial fatty acids. \n\nThis project was completed on schedule despite global supply chain headwinds, representing a total capital investment that underscores our commitment to regional dominance in chemical processing.",
    
    sections: [
      {
        title: "Thermal Management and Recovery",
        body: "Thermal management was the primary engineering challenge. By implementing a 'Closed-Loop Vapor Recompression' (CLVR) system, the facility captures latent heat from the overhead vapors and reinjects it into the pre-heating phase. \n\nThis cycle is self-sustaining during peak operation, significantly lowering the load on external steam generators. Initial data suggests that this approach has stabilized the thermal gradient across all four columns.",
        featured: false // Standard text layout
      },
      {
        title: "The Technical Specification",
        body: "The system delivers a 99.8% purity yield for industrial fatty acids. This level of precision is critical for our clients in the high-performance lubricant and pharmaceutical sectors. \n\nBy utilizing proprietary molecular distillation paths, we have successfully removed trace heavy metals that were previously considered inseparable at this scale.",
        featured: true // TRIGGER: Gray Highlight Box
      },
      {
        title: "Digital Twin Integration",
        body: "The entire complex is mapped to a real-time Digital Twin. Over 4,500 sensors feed data into an AI-driven control layer that predicts fouling in heat exchangers and suggests optimal reflux ratios based on current feedstock viscosity. \n\nThis proactive maintenance stance ensures that the facility operates at peak capacity with minimal intervention from manual operators, increasing safety and consistency.",
        featured: false
      }
    ]
  }
};