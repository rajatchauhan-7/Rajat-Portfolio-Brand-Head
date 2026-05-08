import { Project, Experience, BlogPost, Skill, Testimonial, Community, Brand } from './types';

export const DATA = {
  name: "Rajat Singh Chauhan",
  title: "Architecting Systems. Engineering Culture.",
  tagline: "Head of Brand & Content • AI Content Ecosystem Strategist",
  summary: "Nine years of engineering brand ecosystems that command absolute attention across D2C, BFSI, FMCG, and SaaS. I design content frameworks, architect creator economies, and build the narrative infrastructure that turns brands into undisputed market leaders.",
  about: {
    headline: "Behind the Ecosystems",
    body: "I build the systems that make brands impossible to ignore. For nearly a decade, I have operated at the intersection of influencer strategy, brand narrative, and emerging content technology.\n\nAcross D2C, B2B SaaS, FMCG, fashion, and lifestyle categories, my work is not about simple posting. It is about engineering multi-layered ecosystems: creator networks that generate authentic trust, and narrative frameworks that hold brand voice consistent from a nano-reel to a flagship campaign.\n\nToday, I integrate advanced generative pipelines with deep human insights to multiply output without diluting the brand's core soul. I build the technological and creative infrastructure that allows brands to scale flawlessly while staying deeply personal.",
    specialisations: [
      "Influencer Strategy",
      "Content Architecture",
      "AI Workflows",
      "Brand Narrative",
      "UGC Engineering",
      "GTM Content",
      "Data-Driven ROI",
      "Creative Direction"
    ]
  },
  aiPipeline: {
    title: "The Generative Ecosystem",
    subtitle: "Architecting the Future of High-Velocity Brand Narrative",
    steps: [
      {
        id: "p1",
        label: "Market Ingestion & Sentiment Mapping",
        desc: "Utilizing Brandwatch AI and Perplexity Pro for deep vertical research, we map market signals and competitor gaps into a structured narrative framework."
      },
      {
        id: "p2",
        label: "Linguistic Brand Synthesis",
        desc: "We deploy custom Jasper Brand Voice models and Claude 3.5 Sonnet to translate high-level strategy into hundreds of hyper-aligned narrative nodes."
      },
      {
        id: "p3",
        label: "Neural Asset Generation",
        desc: "High-fidelity visual production leveraging Flux.1 (schnell) and Runway Gen-3 Alpha for temporal consistency, followed by Magnific AI neural upscaling for premium finish."
      },
      {
        id: "p4",
        label: "Identity & Sonic Architecture",
        desc: "Synthesis of brand-aligned audio assets using ElevenLabs identity cloning and Suno/Udio for custom musical hooks that resonate with specific audience segments."
      },
      {
        id: "p5",
        label: "Self-Optimizing Growth Loop",
        desc: "Real-time engagement data is processed through custom GPT-4o analysis layers to dynamically pivot creative direction, scaling high-velocity winners instantly."
      }
    ]
  },
  stats: [
    { label: "Impact", value: "9Y" },
    { label: "Peak Impressions", value: "15M+" },
    { label: "Reach Growth", value: "380%" },
    { label: "Conversion Lift", value: "2.4X" },
    { label: "CAC Reduction", value: "35%" },
  ],
  services: [
    {
      title: "Ecosystem Architecture Audit",
      desc: "A surgical diagnostic of your brand's digital infrastructure. I identify narrative dissonance, structural gaps in content scaling, and untapped growth nodes within your existing presence.",
      deliverables: ["Cross-channel narrative integrity audit", "Content velocity & scaling bottleneck analysis", "Competitor positioning & gap mapping", "Strategic Roadmap: 90-Day Deployment Plan"]
    },
    {
      title: "Autonomous Content Systems",
      desc: "Designing hyper-efficient generative pipelines that integrate with your team. I architect the technological and creative infrastructure needed to multiply output without sacrificing brand soul.",
      deliverables: ["Neural production stack (AI/ML integration)", "Standard Operating Procedures for high-velocity teams", "Team training for generative implementation", "Workflow scalability blueprint"]
    },
    {
      title: "Creator Economy Strategy",
      desc: "Architecting sustainable influencer and community networks that actually convert. I build the infrastructure to source, brief, and measure creators as a predictable revenue engine.",
      deliverables: ["Multi-tier creator sourcing & strategy playbook", "Brand governance & narrative briefing systems", "Sophisticated EMV & attribution tracking frameworks", "Community-led growth architecture"]
    }
  ],
  process: [
    {
      phase: "01",
      title: "Narrative Audit",
      desc: "We dissect your existing brand voice and market positioning. We identify critical narrative gaps and map out content pillars that demand immediate attention.",
      deliverable: "Narrative Audit Deck"
    },
    {
      phase: "02",
      title: "Ecosystem Design",
      desc: "We architect the overarching content engine. This includes mapping the creator networks and defining the exact conversion funnels that drive revenue.",
      deliverable: "Ecosystem Strategy Map"
    },
    {
      phase: "03",
      title: "System Deployment",
      desc: "We implement the content generation frameworks and integrate authentic user generated assets directly into your digital storefronts.",
      deliverable: "Live Content Pipeline"
    },
    {
      phase: "04",
      title: "Growth & Scale",
      desc: "We track engagement value and conversion lift. We rapidly scale the creative that works and continuously optimize the narrative loop.",
      deliverable: "Performance Scaling Plan"
    }
  ],
  stack: {
    influencer: "Qoruz, HypeAuditor, Modash, Brandwatch Consumer Research, SparkToro Pro",
    production: "Runway Gen-3 Alpha, Magnific AI, ElevenLabs, Flux.1 [pro], Claude 3.5 Project Memories",
    distribution: "Mutiny (Personalization), Meta Ads Manager, Looker Studio, HubSpot Intelligence"
  },
  experiences: [
    {
      id: "exp1",
      role: "Creative Director & Social Media Lead",
      company: "Natriel (HG Group)",
      period: "Dec 2024 - Present",
      location: "Remote / Hybrid",
      description: [
        "Built Natriel's entire brand and content ecosystem from scratch, designing complete visual/verbal identity.",
        "Engineered a high-velocity production pipeline cutting turnaround 40% while increasing reel view performance 70-80%.",
        "Generated 3M+ organic impressions via integrated Influencer + PR go-to-market system.",
        "Achieved +380% organic reach growth and +90% engagement rate growth in 6 months."
      ]
    },
    {
      id: "exp2",
      role: "Senior Social Media & Brand Manager",
      company: "TAGTHOSE",
      period: "Jul 2024 - Dec 2024",
      location: "Jaipur, India",
      description: [
        "Managed social media and brand strategy for Angel One (Fintech) and Anokhi (Heritage Fashion).",
        "Angel One: Rebuilt content architecture around 'Investment Confidence', driving 3M+ earned impressions.",
        "Anokhi: Orchestrated influencer strategy generating 500K+ impressions with zero paid amplification.",
        "Delivered a 260% growth in 3 months for 'Marketing with Gaurav' through Attention-First Architecture."
      ]
    },
    {
      id: "exp3",
      role: "Senior Social Media & Brand Manager",
      company: "TAGGBOX",
      period: "Apr 2022 - Jun 2024",
      location: "Remote",
      description: [
        "Architected UGC strategies for global brands including Carlsberg, BOSE, Audi, CEAT, Wakefit, and Sugar Cosmetics.",
        "Scaled social proof deployments across 1,500+ brands in 100+ countries.",
        "Introduced performance dashboards that improved campaign ROI by 35% and halved iteration cycles.",
        "Managed 1.2M+ impressions for Carlsberg and 850K+ reach for BOSE via real-time UGC activations."
      ]
    }
  ] as Experience[],
  projects: [
    {
      id: "1",
      featured: true,
      brand: "The Leela Palaces",
      tag: "Luxury Hospitality",
      role: "Brand Community & UGC Architecture",
      period: "2023",
      desc: "Situation: Fragmented guest content across 12 properties was untapped for social proof. Task: Unify destination narratives. Action: Architected #ExploreWithTheLeela, integrating a cross-property UGC engine and curated social walls. Result: Generated 15M+ impressions and 100K+ UGC assets, increasing organic booking flow.",
      metrics: [
        { val: "15M+", label: "Total Impressions" },
        { val: "100K+", label: "UGC Collected" },
        { val: "80K+", label: "Social Posts Synced" },
        { val: "12", label: "Properties Unified" }
      ],
      approach: [
        "Engineered cross property UGC aggregation across 12 ultra luxury hotels",
        "Deployed highly curated digital social proof walls directly onto property landing pages",
        "Turned satisfied visitors into powerful brand advocates driving organic booking flow"
      ],
      images: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1024", "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1024"],
      link: "https://taggbox.com/blog/the-leela-ugc-case-study/"
    },
    {
      id: "2",
      brand: "Warner Bros | MK11",
      tag: "Entertainment & Gaming",
      role: "Digital Campaign Strategist",
      period: "2019",
      desc: "Situation: Scaling gaming communities requires bridging the gap between professional and casual players. Task: Launch MK11 with a dual-layered global UGC ecosystem. Action: Built segmented social feeds for pros and fans via the #MKKOLLECTIVE hub. Result: Achieved massive global reach and high interaction across 4 major platforms.",
      metrics: [
        { val: "4", label: "Platforms Aggregated" },
        { val: "Dual", label: "Social Walls" },
        { val: "Global", label: "Creator Reach" },
        { val: "High", label: "Engagement Lift" }
      ],
      approach: [
        "Launched dedicated hub bridging the gap between digital and real world content",
        "Built segmented social feeds for both professional artist showcases and general community content",
        "Aggregated real time content across Instagram, Twitter, Facebook, and YouTube"
      ],
      images: ["https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1024", "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1024"],
      link: "https://taggbox.com/blog/warner-bros-used-taggbox-drive-ugc-mortal-kombat-11-game/"
    },
    {
      id: "3",
      brand: "Starstruck Cosmetics",
      tag: "D2C Beauty",
      role: "Shoppable UGC Strategy",
      period: "2022",
      desc: "Situation: High brand affinity was not translating into direct website conversions. Task: Bridge the discovery-to-checkout gap. Action: Implemented shoppable UGC galleries directly into Homepage/PDP paths. Result: Delivered 30% direct sales lift and doubled digital storefront visibility.",
      metrics: [
        { val: "30%", label: "Direct Sales Lift" },
        { val: "2X", label: "Visibility Lift" },
        { val: "High", label: "Page Visits" },
        { val: "Direct", label: "Checkout Sync" }
      ],
      approach: [
        "Seamlessly blended social proof with direct purchasing pathways on the digital storefront",
        "Leveraged community beauty tutorials and product showcases over static studio images",
        "Reduced purchase friction by connecting UGC directly to the shopping cart"
      ],
      images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1024", "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1024"],
      link: "https://taggbox.com/case-study/starstruck-cosmetics/"
    },
    {
      id: "4",
      brand: "Malandra",
      tag: "Fashion E-commerce",
      role: "Social Commerce Architecture",
      period: "2022",
      desc: "Situation: Fashion retail lacked a bridge between customer styling and product discovery. Task: Turn real-world styling into immediate conversion catalysts. Action: Architected multi-gallery shoppable funnels mapping UGC to SKU level data. Result: Secured 3X conversion lift and reduced path-to-purchase to under 3 clicks.",
      metrics: [
        { val: "3X", label: "Conversion Lift" },
        { val: "4", label: "Galleries Deployed" },
        { val: "Omni", label: "Channel Sync" },
        { val: "High", label: "Purchase Intent" }
      ],
      approach: [
        "Architected multi gallery funnels mapping UGC directly to specific product SKUs",
        "Utilized real world customer styling to build immense brand trust vs standard modeling",
        "Streamlined path to purchase to under three clicks from discovery to cart"
      ],
      images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1024"],
      link: "https://taggbox.com/case-study/malandra/"
    },
    {
      id: "5",
      brand: "USA Cycling",
      tag: "Sports & Community",
      role: "Event Content Hub",
      period: "2023",
      desc: "Situation: Content from major cycling events was scattered and lacked central visibility. Task: Unify four national events into a high-visibility content infrastructure. Action: Engineered a real-time event hub aggregating organic visitors and athlete posts. Result: Drove 8.9K+ organic visitors and a 2.5K search surge.",
      metrics: [
        { val: "8.9K+", label: "Organic Visitors" },
        { val: "2.5K", label: "Search Surge" },
        { val: "50+", label: "Posts Per Widget" },
        { val: "4", label: "Events Unified" }
      ],
      approach: [
        "Created dedicated real time feeds for major national track and road events",
        "Drove organic traffic directly to the talent identification program",
        "Enabled easy cross pollination of content to maximize visibility for athletes"
      ],
      images: ["https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1024"],
      link: "https://taggbox.com/case-study/"
    },
    {
      id: "6",
      brand: "Bose Professional",
      tag: "Premium Audio & Tech",
      role: "Digital Experience",
      period: "2022",
      desc: "Situation: Tech-heavy B2B communication felt static and lacked human validation. Task: Validate technical audio claims via peer-to-peer authentic social proof. Action: Integrated dynamic global customer hubs into homepage and career portals. Result: Achieved 200% engagement lift and 89% view-to-post rate on UGC assets.",
      metrics: [
        { val: "200%", label: "Engagement Lift" },
        { val: "89%", label: "View to Post Rate" },
        { val: "4.6K+", label: "Authentic Posts" },
        { val: "4.1K+", label: "Widget Views" }
      ],
      approach: [
        "Captured and curated immersive audio experiences shared by real professionals",
        "Deployed dynamic content blocks that radically amplified audience dwell time",
        "Validated B2B tech claims via authentic and peer to peer social proof"
      ],
      images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1024", "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1024"],
      link: "https://taggbox.com/case-study/bose-professional/"
    },
    {
      id: "7",
      brand: "Schiermonnikoog",
      tag: "Destination Marketing",
      role: "Digital Tourism Strategy",
      period: "2021",
      desc: "Situation: A hidden travel destination needed organic discovery in a crowded market. Task: Convert passive tourists into active brand advocates. Action: Orchestrated a multi-hashtag campaign integrated directly into the tourism portal. Result: Drove 190% surge in web traffic and massive promotion lift for the island.",
      metrics: [
        { val: "190%", label: "Web Traffic Surge" },
        { val: "3", label: "Hashtags Scaled" },
        { val: "Live", label: "UGC Integration" },
        { val: "High", label: "Promotion Lift" }
      ],
      approach: [
        "Anchored campaign around localized hashtags to drive organic discovery",
        "Converted passive tourists into active content creators for the destination board",
        "Displayed live localized feeds to drive immediate booking and travel intent"
      ],
      images: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1024", "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1024"],
      link: "https://taggbox.com/blog/schiermonnikoog-travel-ugc/"
    },
    {
      id: "8",
      brand: "ISOLATED Talks",
      tag: "Mental Health Charity",
      role: "Community Engagement",
      period: "2020",
      desc: "Situation: Global isolation required a digital space for community support. Task: Aggregate real-time music and human experiences into a unified social hub. Action: Filtered high-volume tweet velocity into a branded supportive charity portal. Result: Increased awareness and engagement metrics by 46% during critical periods.",
      metrics: [
        { val: "46%", label: "Engagement Lift" },
        { val: "Real Time", label: "Aggregation" },
        { val: "Massive", label: "Interaction" },
        { val: "Global", label: "Community Scale" }
      ],
      approach: [
        "Built a unified digital listening space connecting isolated individuals globally",
        "Filtered high volume tweet velocity directly into a branded and supportive portal",
        "Increased visibility and interaction metrics for associated charitable awareness"
      ],
      images: ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1024", "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1024"],
      link: "https://taggbox.com/blog/impactful-hashtag-campaign-by-isolated-talks/"
    },
    {
      id: "9",
      brand: "Pedigree Australia",
      tag: "FMCG Pet Care",
      role: "Campaign Strategy",
      period: "2019",
      desc: "Situation: Pet Dental Health Month needed a viral hook to drive engagement/SEO. Task: Connect proprietary app data with social platforms to scale user content. Action: Launched a viral ecosystem capturing dog selfie moments via a curated hub. Result: Improved SEO positioning and built a high-volume organic content pipeline.",
      metrics: [
        { val: "Live", label: "Hashtag Feed" },
        { val: "App", label: "Content Pipeline" },
        { val: "High", label: "SEO Reach Lift" },
        { val: "Growth", label: "Campaign ROI" }
      ],
      approach: [
        "Seamlessly bridged proprietary app content with global social media platforms",
        "Curated joyful and shareable pet imagery to align with Pet Dental Health Month",
        "Leveraged high volume UGC to drastically improve brand SEO positioning"
      ],
      images: ["https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1200", "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200"],
      link: "https://taggbox.com/blog/taggbox-drives-ugc-for-pedigree-australias-dog-selfie-campaign/"
    },
    {
      id: "10",
      brand: "Yogabar",
      tag: "D2C Health",
      role: "Influencer Strategy",
      period: "2023",
      desc: "Situation: A scaling D2C brand needed to bridge micro-influencer seeding with eCommerce. Task: Manage a rights-cleared UGC pipeline feeding high-intent shopping pages. Action: Built a multi-tier seeding program and deployed shoppable galleries. Result: Delivered 41% conversion lift and a 6.9x engagement multiplier.",
      metrics: [
        { val: "41%", label: "Conversion Lift" },
        { val: "6.9x", label: "Engagement Multiplier" },
        { val: "50+", label: "Creators Seeded" },
        { val: "100%", label: "Rights Managed" }
      ],
      approach: [
        "Built multi tier influencer seeding program across fitness and lifestyle verticals",
        "Managed rights cleared UGC pipeline directly feeding eCommerce storefront",
        "Bridged the gap between top of funnel social proof and checkout conversions"
      ],
      images: ["https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200", "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200"],
      link: "https://www.instagram.com/yogabar.in/"
    },
    {
      id: "11",
      brand: "The Minimalist",
      tag: "D2C Skincare",
      role: "Content Architecture",
      period: "2023",
      desc: "Situation: Complex skincare science was creating purchase friction for customers. Task: Humanize technical data through visually verified user results. Action: Built an educational content engine integrating moderated reviews onto checkout pages. Result: Achieved 4x higher ad CTR and 90s+ average time on site.",
      metrics: [
        { val: "4x", label: "Higher Ad CTR" },
        { val: "90s+", label: "Avg Time on Site" },
        { val: "AI", label: "Moderation" },
        { val: "35%", label: "Awareness Lift" }
      ],
      approach: [
        "Reduced purchase anxiety through authentic and visually verified user results",
        "Developed dermatologist collaboration framework for credibility led content",
        "Deployed automated moderation pipeline for rapid content scaling during growth phase"
      ],
      images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200", "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200"],
      link: "https://www.instagram.com/beminimalist__/"
    },
    {
      id: "12",
      brand: "Angel One",
      tag: "BFSI Fintech",
      role: "Brand & Content Strategy",
      period: "2023 to 2024",
      desc: "Situation: A leading fintech needed to maintain growth during high-visibility periods. Task: Reposition the brand as India's most accessible investment platform. Action: Developed a voice framework and modular content system using multi-tier creator seeding. Result: Delivered 28% lead gen uplift and 45% reach growth.",
      metrics: [
        { val: "28%", label: "Lead Gen Uplift" },
        { val: "45%", label: "Post Reach Growth" },
        { val: "3x", label: "Content Velocity" },
        { val: "60%", label: "Lower CPI" }
      ],
      approach: [
        "Developed brand voice framework positioning Angel One as India's most accessible fintech",
        "Orchestrated influencer tier mix strategy aligning nano creators and macro creators",
        "Designed modular content system enabling faster ideation to publish cycles"
      ],
      images: ["https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2000"],
      link: "https://www.instagram.com/angelone/"
    },
    {
      id: "13",
      brand: "Wakefit",
      tag: "Home & Sleep Solutions",
      role: "Community-Led Strategy",
      period: "2023",
      desc: "Situation: High competition in the sleep category made organic differentiation difficult. Task: Transition Wakefit from a mattress brand to a sleep health authority through community-led content. Action: Architected a multi-layered content engine using AI-assisted production for sleep science education. Result: Scaled brand reach across premium audiences and increased dwell time by 45% via authentic UGC integration.",
      metrics: [
        { val: "45%", label: "Dwell Time Lift" },
        { val: "Premium", label: "Audience Scale" },
        { val: "AI-Led", label: "Production" },
        { val: "High", label: "Conversion" }
      ],
      approach: [
        "Positioned Wakefit as a holistic sleep science authority over a standard retail brand",
        "Deployed AI assisted content pipelines to rapidly iterate on educational sleep narratives",
        "Integrated authentic community UGC directly into the brand's digital ecosystem"
      ],
      images: ["https://i.postimg.cc/3NgS4xHf/pexels-artbovich-7227620.jpg"],
      link: "https://www.instagram.com/wakefitco/"
    },
    {
      id: "14",
      brand: "Natriel",
      tag: "Handcrafted Indian Decor",
      role: "GTM Content Architecture",
      period: "2024",
      desc: "Situation: A heritage home decor brand needed to scale its reach with younger, global audiences. Task: Showcase the intricate craftsmanship of Indian artisans through modern digital narratives. Action: Engineered a cross-platform content engine focused on high-fidelity visual storytelling and behind-the-scenes artisan journeys. Result: Delivered a 380% explosion in organic reach and a 90% engagement lift within six months.",
      metrics: [
        { val: "380%", label: "Organic Reach Growth" },
        { val: "90%", label: "Engagement Lift" },
        { val: "3M+", label: "Total Impressions" },
        { val: "40%", label: "Turnaround Cut" }
      ],
      approach: [
        "Engineered visual identity positioning Natriel as the definitive hand-crafted luxury decor brand",
        "Built an integrated influencer + PR engine focusing on sustainable living and artisan advocacy",
        "Developed high-velocity production pipelines to showcase the time-intensive handmade process"
      ],
      images: ["https://i.postimg.cc/NGr1mcfK/Brass-Roman-Figurine-Chess-Set-Premium-Gifting-Item5-518x-progressive-png.webp"],
      link: "https://www.instagram.com/natrielonline/"
    }
  ] as Project[],
  blogPosts: [
    {
      id: "b1",
      title: "The Era of Unified Brand Ecosystems",
      excerpt: "A deep dive into why isolated marketing campaigns are becoming obsolete in favor of integrated, automated content architectures.",
      date: "Recommended",
      readTime: "8 min read",
      link: "https://hbr.org/2013/05/your-content-strategy-is-really-a-modern-marketing-strategy"
    },
    {
      id: "b2",
      title: "Generative AI: The New Creative Frontier",
      excerpt: "Exploring the shift from manual asset creation to AI-augmented production workflows that maintain brand integrity at scale.",
      date: "Recommended",
      readTime: "12 min read",
      link: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier"
    },
    {
      id: "b3",
      title: "The Psychology of Social Proof in E-commerce",
      excerpt: "Understanding the neuro-marketing behind why UGC converts 40% better than standard studio photography.",
      date: "Recommended",
      readTime: "6 min read",
      link: "https://www.socialmediatoday.com/news/why-ugc-is-the-key-to-modern-marketing/622415/"
    }
  ] as BlogPost[],
  skills: [
    { name: "Senior Influencer MGMT", level: 5, category: 'Strategic' },
    { name: "Social Brand Strategy", level: 5, category: 'Strategic' },
    { name: "UGC Architecture", level: 5, category: 'Technical' },
    { name: "Campaign P&L", level: 5, category: 'Technical' },
    { name: "Hook Engineering", level: 5, category: 'Creative' },
    { name: "AI Production", level: 5, category: 'Technical' },
    { name: "Creative Direction", level: 5, category: 'Creative' },
    { name: "GTM Execution", level: 5, category: 'Strategic' },
  ] as Skill[],
  brands: [
    { name: "Angel One", logo: "https://www.angelone.in/static/images/angel-one-logo.svg" },
    { name: "BOSE Professional", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Bose_logo.svg" },
    { name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg" },
    { name: "Sugar Cosmetics", logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/SUGAR_Cosmetics_Logo.png" },
    { name: "Carlsberg", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Carlsberg_logo.svg" },
    { name: "The Leela", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f6/The_Leela_Palaces_Hotels_and_Resorts_logo.png" },
    { name: "Warner Bros", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Warner_Bros_logo.svg" },
    { name: "USA Cycling", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/USA_Cycling_logo.svg" },
    { name: "Starstruck", logo: "https://taggbox.com/blog/wp-content/uploads/2022/03/Starstruck-Cosmetics-Log-1.png" },
    { name: "Malandra", logo: "https://taggbox.com/blog/wp-content/uploads/2022/10/Malandra-Logo-1.png" },
    { name: "Shop LC", logo: "https://taggbox.com/blog/wp-content/uploads/2022/03/Shop-LC-logo-1.png" },
    { name: "Reina Olga", logo: "https://www.reinaolga.com/cdn/shop/files/LOGO_RO_BLACK_200x.png" },
    { name: "TrailFx", logo: "https://www.trailfx.com/images/TrailFx_Logo_Color.png" },
    { name: "Minimalist", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Minimalist_Logo.png" },
    { name: "Wakefit", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Wakefit_logo.png/640px-Wakefit_logo.png" }
  ] as Brand[],
    communities: [
    {
      name: "thebeyond.anime",
      platform: "Instagram",
      handle: "@thebeyond.anime",
      followers: "5K",
      engagement: "8 to 12%",
      description: "Engineering engagement through niche-specific narratives. This platform serves as a high-velocity testing ground for content frameworks that turn casual viewers into a dedicated community through systemic creative direction.",
      image: "https://i.postimg.cc/QtZ0WdGk/25001.jpg",
      link: "https://www.instagram.com/thebeyond.anime/"
    },
    {
      name: "_cinemaspot",
      platform: "Instagram",
      handle: "@_cinemaspot",
      followers: "9.5K",
      engagement: "Organic",
      description: "Born from a pure passion for cinema. Built to connect with fellow cinephiles through an intentional content system. A living testament to architecting a loyal community and scaling social media presence organically from absolute zero.",
      image: "https://i.postimg.cc/8PvcZpqD/24343.jpg",
      link: "https://www.instagram._cinemaspot/"
    }
  ],
  testimonials: [
    {
      id: "t1",
      name: "VP of Marketing",
      role: "FinTech Sector",
      company: "India",
      content: "Rajat re-architected our entire digital footprint. The 380% growth in reach wasn't luck: it was a genuine strategic overhaul that changed how we think about content entirely.",
    },
    {
      id: "t2",
      name: "Founder",
      role: "Luxury Real Estate Brand",
      company: "Jaipur",
      content: "The 12x community growth was a masterclass in premium brand storytelling. He positioned us as the defining authority in the HNWI real estate segment and it measurably changed how we close deals.",
    },
    {
      id: "t3",
      name: "Lead Creator",
      role: "Creator Economy Platform",
      company: "",
      content: "He cracked the B2B attention code in a niche I thought was impossible to crack organically. The velocity of our community growth was unprecedented; and the quality of the audience was exactly who we needed.",
    },
    {
      id: "t4",
      name: "Co-Founder",
      role: "D2C Health & Wellness",
      company: "India",
      content: "Rajat doesn't think like a freelancer or an agency; he thinks like an owner. He transformed our community content into a structured, revenue-driving ecosystem that continues to scale without us manually intervene.",
    }
  ] as Testimonial[]
};

