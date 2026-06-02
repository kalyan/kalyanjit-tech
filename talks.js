// Complete list of talks, decks, and project files
const talksData = [
  // ==================== STARTUP & INCUBATION ====================
  {
    title: "Google AI Studio: Startup Incubator & Prompt Database",
    path: "100startups.html",
    category: "startup",
    icon: "fa-rocket"
  },
  {
    title: "AI Studio Startup Incubator",
    path: "101startups.html",
    category: "startup",
    icon: "fa-rocket"
  },
  {
    title: "Google AI Studio SaaS Incubator",
    path: "saas_incubator.html",
    category: "startup",
    icon: "fa-rocket"
  },
  {
    title: "Google AI Studio SaaS & Web3 Incubator",
    path: "saas_web3_incubator.html",
    category: "startup",
    icon: "fa-rocket"
  },
  {
    title: "AI Studio: Industry Solutions & Startup Incubator (V1)",
    path: "startup_ideas.html",
    category: "startup",
    icon: "fa-lightbulb"
  },
  {
    title: "AI Studio: Industry Solutions & Startup Incubator (V2)",
    path: "startups.html",
    category: "startup",
    icon: "fa-lightbulb"
  },
  {
    title: "Start-Up Legal & Ethical Steps - Digital Companion",
    path: "2026/2026_nitkkr_talk.html",
    category: "startup",
    icon: "fa-gavel"
  },
  {
    title: "GreenTech 100: Startup Ecosystem - NIT Kurukshetra",
    path: "2026/greentech_startupideas.html",
    category: "startup",
    icon: "fa-leaf"
  },
  {
    title: "NeuralDefend: Investment Due Diligence & India Market Analysis",
    path: "2026/neuraldefend.html",
    category: "startup",
    icon: "fa-shield-halved"
  },

  // ==================== AI & TECH MANAGEMENT ====================
  {
    title: "HR Tech & AI Transformation | Strategic Enablers",
    path: "HR_Tech_Transformation_App.html",
    category: "ai",
    icon: "fa-users-gear"
  },
  {
    title: "ANRF AI-SE Mission: Partnership Opportunity Explorer",
    path: "anrf_aimission.html",
    category: "ai",
    icon: "fa-microscope"
  },
  {
    title: "Silicon Future: India's Chip Design Roadmap",
    path: "chipdesign_india.html",
    category: "ai",
    icon: "fa-microchip"
  },
  {
    title: "Oil India Ltd. | Intelflow AI Strategic Integration Report",
    path: "intelflownews_oil.html",
    category: "ai",
    icon: "fa-oil-well"
  },
  {
    title: "StoryScene AI | Concept to Cinema",
    path: "storysceneai.html",
    category: "ai",
    icon: "fa-film"
  },
  {
    title: "AI & Banking Leadership: Transforming State Bank of India",
    path: "statebank.html",
    category: "ai",
    icon: "fa-building-columns"
  },
  {
    title: "AI for Future Managers: Infographic",
    path: "2026/ai_for_future_managers.html",
    category: "ai",
    icon: "fa-chart-pie"
  },
  {
    title: "Casting Director | Gemini Character Visualization Suite V3",
    path: "2026/casting_director.html",
    category: "ai",
    icon: "fa-user-gear"
  },
  {
    title: "Digital Twins: The Engineering Frontier",
    path: "2026/digital_twins_engg_infographic.html",
    category: "ai",
    icon: "fa-clone"
  },
  {
    title: "Digital Twins: Strategic Management Overview",
    path: "2026/digital_twins_for_MBA.html",
    category: "ai",
    icon: "fa-business-time"
  },
  {
    title: "Hugging Face: The AI Community Hub",
    path: "2026/hugging_face_research.html",
    category: "ai",
    icon: "fa-face-smile"
  },
  {
    title: "Industrial Manufacturing: Stage-Wise Process Manager",
    path: "2026/manufacturing_process.html",
    category: "ai",
    icon: "fa-industry"
  },
  {
    title: "The AI Frontier: Local Ideas to Global Giants",
    path: "2026/nit_silchar_AI.html",
    category: "ai",
    icon: "fa-brain"
  },
  {
    title: "Quantum Path Pro | Engineering Roadmap",
    path: "2026/quantum_computing_engg.html",
    category: "ai",
    icon: "fa-atom"
  },
  {
    title: "Top 10 Development Stacks for Tech Engineers",
    path: "2026/top_10_development_stacks.html",
    category: "ai",
    icon: "fa-code"
  },
  {
    title: "GenBook: Universal Production Framework | Command Center",
    path: "2026/universal_book_generator_framework.html",
    category: "ai",
    icon: "fa-book"
  },
  {
    title: "Vibe Programming Tools & Ecosystems",
    path: "2026/vibe_programming_tools.html",
    category: "ai",
    icon: "fa-laptop-code"
  },
  {
    title: "Cyber Security: The Digital Frontier",
    path: "2026/cyber_security_engg.html",
    category: "ai",
    icon: "fa-shield-halved"
  },
  {
    title: "Retrieval-Augmented Generation (RAG) Architecture & Setup",
    path: "2026/rag-setup.html",
    category: "ai",
    icon: "fa-gears"
  },

  // ==================== WEB3 & BLOCKCHAIN ====================
  {
    title: "The Magic Digital Notebook: Blockchain",
    path: "2026/blockchain_class5.html",
    category: "web3",
    icon: "fa-cubes"
  },
  {
    title: "Blockchain: The Trust Protocol",
    path: "2026/blockchain_engg.html",
    category: "web3",
    icon: "fa-link"
  },
  {
    title: "Blockchain & Tokenization: Top 20 Industry Use Cases",
    path: "2026/blockchain_usecases.html",
    category: "web3",
    icon: "fa-coins"
  },
  {
    title: "Web3 Builder's Blueprint: Community, Dev & Growth",
    path: "2026/web3_builders_blueprint.html",
    category: "web3",
    icon: "fa-hammer"
  },
  {
    title: "Web3 & Blockchain Career Roadmap",
    path: "2026/web3_career_roadmap.html",
    category: "web3",
    icon: "fa-route"
  },
  {
    title: "Web3 Marketing: The Interactive Report",
    path: "2026/web3_marketing.html",
    category: "web3",
    icon: "fa-bullhorn"
  },

  // ==================== REGIONAL & POLICY ====================
  {
    title: "APN 2025 CRRP: Interactive Proponent Guide",
    path: "apn2025_project.html",
    category: "regional",
    icon: "fa-map-location-dot"
  },
  {
    title: "BTC Irrigation Innovation Explorer",
    path: "btc_irrigation.html",
    category: "regional",
    icon: "fa-water"
  },
  {
    title: "EcoLens NE: Climate Cinema Series Proposal",
    path: "climate_films_for_NE.html",
    category: "regional",
    icon: "fa-video"
  },
  {
    title: "The Pandit: Cinematic Research Dashboard",
    path: "hcgoswami.html",
    category: "regional",
    icon: "fa-masks-theater"
  },
  {
    title: "PollMatrix TN 2026 - Marketing Brochure",
    path: "kerala.html",
    category: "regional",
    icon: "fa-square-poll-vertical"
  },
  {
    title: "MAHA MedTech Mission - Strategic Prioritization",
    path: "maha_medtech_mission.html",
    category: "regional",
    icon: "fa-briefcase-medical"
  },
  {
    title: "Project Nexus: MAHA MedTech Mission",
    path: "medtech_bhaskar.html",
    category: "regional",
    icon: "fa-heart-pulse"
  },
  {
    title: "Vijay Sankalp: Assam Strategic Intelligence Dashboard",
    path: "vision_2026.html",
    category: "regional",
    icon: "fa-flag"
  },
  {
    title: "Empowering Bongaigaon: Digital Education Catalyst",
    path: "2026/bongaigoan_education_and_income_upliftment.html",
    category: "regional",
    icon: "fa-school"
  },
  {
    title: "Empowering Dhemaji: Digital Education Catalyst",
    path: "2026/dhemaji_education_and_income_upliftment.html",
    category: "regional",
    icon: "fa-graduation-cap"
  },
  {
    title: "The Golden Ladder: Lum Sohpetbneng Cultural Analysis",
    path: "2026/golden-ladder.html",
    category: "regional",
    icon: "fa-stairs"
  },
  {
    title: "India-EU Strategic Corridor 2026 | Interactive Brief",
    path: "2026/india-eu-fta.html",
    category: "regional",
    icon: "fa-globe"
  },
  {
    title: "NDIM North East Strategy Brief",
    path: "2026/ndim_ne_strategy_dashboard.html",
    category: "regional",
    icon: "fa-chart-column"
  },
  {
    title: "Scaling Social Ventures with Deep Tech - TISS Module",
    path: "2026/tiss_mumbai.html",
    category: "regional",
    icon: "fa-hand-holding-hand"
  },
  {
    title: "Scaling Social Ventures with Deep Tech - TISS Module (Alternate Version)",
    path: "2026/tiss_mumbai0.html",
    category: "regional",
    icon: "fa-hand-holding-hand"
  },

  // ==================== INDUSTRY & CAREERS ====================
  {
    title: "Business Viability: Long Line Tuna Liners (Andaman EEZ)",
    path: "longlinetuna.html",
    category: "career",
    icon: "fa-anchor"
  },
  {
    title: "India's Shipping Container Manufacturing Report",
    path: "shipping_container.html",
    category: "career",
    icon: "fa-ship"
  },
  {
    title: "NyayaVani - Judicial Excellence Reimagined",
    path: "judge.html",
    category: "career",
    icon: "fa-scale-balanced"
  },
  {
    title: "Strategic Roadmap: Acting Career Details",
    path: "2026/acting_career.html",
    category: "career",
    icon: "fa-clapperboard"
  },
  {
    title: "AI in Renewable Energy: Present & Future",
    path: "2026/ai_in_renewable_energy.html",
    category: "career",
    icon: "fa-sun"
  },
  {
    title: "India Drone & IoT Regulatory Landscape",
    path: "2026/droneiot_laws.html",
    category: "career",
    icon: "fa-plane-up"
  },
  {
    title: "The Speaker's Command Center | Reference Guide",
    path: "2026/mastering_the_art_of_public_speaking.html",
    category: "career",
    icon: "fa-microphone"
  },
  {
    title: "Mycelium Packaging | Interactive Business Report",
    path: "2026/mycopack.html",
    category: "career",
    icon: "fa-box-open"
  },
  {
    title: "Nano Banana: Interactive Prompt Reference",
    path: "2026/nano_banana.html",
    category: "career",
    icon: "fa-terminal"
  },
  {
    title: "Nano Banano | Historical Visualization Suite",
    path: "2026/nano_banana_history.html",
    category: "career",
    icon: "fa-clock-rotate-left"
  },
  {
    title: "Nano Banano: Technical Capabilities Report",
    path: "2026/nano_banana_image_process.html",
    category: "career",
    icon: "fa-image"
  },
  {
    title: "Private Equity Transaction Lifecycle Explorer",
    path: "2026/private_equity_transaction_lifecycle.html",
    category: "career",
    icon: "fa-arrow-progress"
  },
  {
    title: "Quant Engineering Career Roadmap",
    path: "2026/quant_career_roadmap.html",
    category: "career",
    icon: "fa-arrow-trend-up"
  }
];

// Document Elements
document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("talksGrid");
  const searchInput = document.getElementById("talksSearch");
  const filterBtns = document.querySelectorAll(".filter-tab-btn");
  const statsCounter = document.getElementById("talksStats");

  // Mobile Navigation toggle specifically for talks page
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Active state filter
  let currentCategory = "all";
  let searchQuery = "";

  // Render Talks grid
  function renderTalks() {
    // Clear Grid
    gridContainer.innerHTML = "";

    // Filter Logic
    const filtered = talksData.filter(talk => {
      const matchesCategory = currentCategory === "all" || talk.category === currentCategory;
      const matchesSearch = talk.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            talk.path.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Update Stats Counter
    statsCounter.textContent = `Showing ${filtered.length} of ${talksData.length} files`;

    // Empty state check
    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="talks-no-results">
          <i class="fas fa-search"></i>
          <h3>No talks or project files found</h3>
          <p>Try adjusting your search keywords or choosing a different category tab.</p>
        </div>
      `;
      return;
    }

    // Populate Cards
    filtered.forEach(talk => {
      // Get category display label
      let catDisplay = talk.category;
      if (talk.category === "startup") catDisplay = "Startup & Incubation";
      if (talk.category === "ai") catDisplay = "AI & Technology";
      if (talk.category === "web3") catDisplay = "Web3 & Blockchain";
      if (talk.category === "regional") catDisplay = "Regional & Policy";
      if (talk.category === "career") catDisplay = "Careers & Industry";

      const card = document.createElement("div");
      card.className = "talk-item-card";
      card.innerHTML = `
        <div class="talk-card-top">
          <div class="talk-card-header">
            <span class="talk-category-badge badge-${talk.category}">${catDisplay}</span>
            <div class="talk-icon-wrapper icon-${talk.category}">
              <i class="fas ${talk.icon}"></i>
            </div>
          </div>
          <h3 class="talk-card-title">${talk.title}</h3>
          <div class="talk-card-path">
            <i class="fas fa-file-code"></i>
            <span>${talk.path}</span>
          </div>
        </div>
        <div class="talk-card-footer">
          <a href="${talk.path}" target="_blank" class="btn-view-talk">
            <i class="fas fa-arrow-up-right-from-square"></i> Open Deck / Document
          </a>
        </div>
      `;
      gridContainer.appendChild(card);
    });
  }

  // Handle Search Input
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      searchQuery = e.target.value;
      renderTalks();
    });
  }

  // Handle Category Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove("active"));
      // Add active to this
      this.classList.add("active");
      
      currentCategory = this.getAttribute("data-category");
      renderTalks();
    });
  });

  // Initial Render
  renderTalks();
});
