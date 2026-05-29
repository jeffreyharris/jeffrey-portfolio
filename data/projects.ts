import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "american-integrity-insurance",
    title: "American Integrity Insurance",
    platform: "Sitefinity",
    category: "Enterprise Website",
    summary:
      "Developed responsive templates, pages, and components for a new enterprise site that included a gated section supporting insurance agents.",
    detailSummary: [
"After supporting American Integrity's older Sitefinity setup for a couple of years, they asked us for help with a interim reskin of their current site followed by a full rebuild and redesign on Sitefinity's latest .Net Core CMS platform.",

"The rebuild project was conceptualized, scoped and carefully executed by cross collaborating teams over many months. The new platform is Sitefinity's new three-tier architecture that decouples the frontend (the Renderer) from the backend content management system (the CMS instance). This approach allows for greater flexibility, performance, and independent development cycles",

"My role on this project included collaborating with the client on new feature requirements, creating responsive HTML/CSS builds from the designer’s Figma mockups, and integrating those designs into reusable components within Sitefinity’s renderer layer."
],
tech: ["HTML", "CSS", "JavaScript", "Razor", ".NET Core"],
    role:
      "Built and integrated front-end templates, pages, and components in the Sitefinity renderer for a responsive Sitefinity implementation.",
    outcome:
      "Chosen by Progress as their Sitefinity Site of the Month in April 2026. Launched a new responsive website with a gated section for agents while supporting multiple user groups across the business.",
    awardUrl:
  "https://www.progress.com/sitefinity-cms/user-awards/american-integrity-insurance",
awardLabel: "Progress Sitefinity Site of the Month",
videoUrl: "https://www.youtube.com/watch?v=HRR1PEWG5Jo&t=1s",
videoLabel: "Watch promo video",
    liveUrl: "https://www.aii.com/",
    image: "/images/American-Integrity-Home.png",
  },
  {
    slug: "bluepearl-vet",
    title: "BluePearl Vet",
    platform: "WordPress",
    category: "Landing Pages + Content Modules",
    summary:
      "Built WordPress landing pages and reusable content modules to support publishing flexibility and content management.",
      detailSummary: [
"Blue Pearl Vet came to us with a few of their WordPress sites that were in need of a refresh and then ultimately a full redesign. I began by implementing new UI/UX layouts and functionality into their existing sites while the new design was still in the works.",

"Next, following the direction of their team combined with the input of our designers, we leveraged Advanced Custom Fields to add new data and flexibility to their services and location pages while also moving their site into a completely new brand and design.",

"Following the successful launch, we continued collaborating with the client to optimize page speed, improve ADA scores, and refine their location and services pages to boost conversion."
],
tech: ["WordPress", "ACF", "HTML", "CSS", "JavaScript", "PHP"],
    role:
      "Worked as a WordPress front-end developer collaboration with the client and out team to execute custom page work, new design implementation, and site optimizations.",
    outcome:
      "Consolidated multiple sites into one, implemented a new brand guideline and design to the site, and improved the publishing workflow by giving content teams more flexible, reusable page-building options.",
      liveUrl: "https://bluepearlvet.com/",
    image: "/images/bluepearl-vet.png",
  },
  {
    slug: "electron-microscopy-sciences",
    title: "Electron Microscopy Sciences",
    platform: "NopCommerce",
    category: "E-commerce Build",
    summary:
      "Built and integrated a custom front-end theme for a responsive e-commerce experience supporting scientific product discovery and purchasing.",
    detailSummary: [
  "Electron Microscopy Sciences is a comprehensive source of products for microscopy, laboratory research, and related scientific fields.",

  "Their e-commerce site supports a large product catalog with detailed specifications, extensive categorization, and tools designed to help customers find highly specific products.",

  "The challenge was creating a front-end experience that could support the breadth of their catalog while still feeling organized, engaging, and easy to use.",

  "I helped translate the design direction into responsive front-end templates that balanced product discovery, clear categorization, strong imagery, and a smoother shopping experience.",

  "For a specialized e-commerce site with a large catalog, responsive design, clear product presentation, and a reliable checkout flow are critical to helping EMS stand apart from competitors.",
],
tech: ["HTML", "CSS", "SASS", "JavaScript", "Razor","C#"],
    role:
      "Built and integrated the custom front-end theme for a NopCommerce implementation based on the approved design.",
    outcome:
      "Delivered a responsive e-commerce experience supporting product discovery and purchasing for specialized scientific tools and supplies.",
    liveUrl: "https://www.emsdiasum.com/",
    image: "/images/Electron-Microscopy-Home.png",
    featureVideo: "/videos/ems-feature.mp4",
    featureVideoLabel: "Sliders and Animations",
  },
  {
    slug: "florida-state-golf-association",
    title: "Florida State Golf Association",
    platform: "NopCommerce",
    category: "Event + Commerce Platform",
    summary:
      "Developed a responsive e-commerce and event experience with tournament registration flows and API-powered tournament data views.",
    detailSummary: [
  "FSGA needed a complete site replatform that could bring years of legacy content, membership data, tournament information, signup workflows, and e-commerce functionality into a modern website experience.",

  "The project required careful front-end planning because the site needed to serve multiple user needs, from members browsing tournament information to visitors completing signup flows and purchasing items through the online shop.",

  "While the back-end developers worked through the tournament API integration, I built a responsive scoreboard solution that displayed match data in a clean, easy-to-read format across desktop and mobile devices.",

  "I translated approved Figma mockups into NopCommerce Razor views and recoded the NopCommerce shop experience so it aligned with the updated design direction.",

  "During tournament signup periods, the site supports thousands of visitors in a single day, making front-end usability, performance, and responsive behavior critical to the organization.",
],
tech: ["HTML", "CSS", "JavaScript", "Razor","C#"],
    role:
      "Built and integrated the front-end theme and user experience for tournament registration and related event features.",
    outcome:
      "Created a responsive event and commerce experience with API-powered tournament data views and registration workflows.",
    liveUrl: "https://fsga.org",
    image: "/images/FSGA-Home.png",
    featureVideo: "/videos/fsga-feature.mp4",
    featureVideoLabel: "Tournament Scoreboard",
  },
  {
    slug: "lcs-living",
    title: "LCS Living",
    platform: "Sitefinity",
    category: "CMS Platform Build",
    summary:
      "Built and integrated front-end templates, pages, and reusable components for a responsive Sitefinity platform with dynamic navigation supporting two distinct business areas.",
    tech: ["HTML", "CSS", "SASS", "JavaScript", ".NET Core","C#"],
    role:
      "Built and integrated front-end templates, pages, and reusable components within a Sitefinity and .NET Core implementation.",
    outcome:
      "Delivered a responsive Sitefinity website with dynamic navigation supporting both LCS Living and Group Purchasing as distinct site experiences.",
    liveUrl: "https://www.lcsliving.com/",
    image: "/images/lcs-Home.png",
  },
  {
    slug: "store-space",
    title: "Store Space",
    platform: "Sitefinity",
    category: "Marketing Website",
    summary:
      "Delivered front-end templates and content components for a responsive marketing-focused Sitefinity experience built for scalability and usability.",
    detailSummary: [
  "Store Space was a complete redesign and Sitefinity replatform that functioned as both a marketing website and a rental application experience connected to their storage facility rental API.",

  "The project required extensive form development to support the rental process, including user input, facility selection, availability details, and the steps needed to move visitors from interest to reservation.",

  "Because the rental flow was a core business function, clear interactions, responsive behavior, validation, and error handling were especially important throughout the front-end experience.",

  "I helped translate the new design direction into a modern Sitefinity .NET Core implementation that guided users from information gathering to storage rental in a clean, streamlined interface.",
],
tech: ["HTML", "CSS", "SASS", "JavaScript", "Google Maps API", "Razor","C#"],
    role:
      "Built and integrated front-end templates, pages, and content components for a marketing-focused Sitefinity site.",
    outcome:
      "Delivered a scalable responsive website experience designed to support content flexibility and a strong marketing presentation.",
    liveUrl: "https://www.storespace.com/",
    image: "/images/Store-Space-Home.png",
     featureVideo: "/videos/storespace-feature.mp4",
    featureVideoLabel: "Location Search and Rental Flow",
  },
  {
  slug: "st-pete-pint-guide",
  title: "St. Pete Pint Guide",
  platform: "Vue",
  category: "Directory App",
  summary:
    "Built a modern directory-style web app for exploring St. Petersburg breweries, featuring structured data, reusable components, responsive layouts, and a clean user-focused interface.",
  detailSummary: [
    "St. Pete Pint Guide was built in 2020 as a personal Vue project focused on helping users explore breweries, taprooms, and beer options in the St. Pete / Tampa area.",

    "I built the entire project myself, including the Vue application structure, Firebase database, Google Maps functionality, brewery detail pages, Untappd API integration, GitHub workflow, and Netlify deployment.",

    "The site uses a Firebase database to manage brewery and location data, with the codebase maintained in GitHub and deployed through Netlify for a lightweight, modern front-end hosting workflow.",

    "One of the key features of the project is its integration with the Untappd API, which pulls in beer information so users can browse beers that are actually on tap at participating locations and then and filter beers by type to narrow down what is currently available.",

    "I also created the visual identity for the project, including designing and drawing the logo myself in Adobe Illustrator, and I took the photography used throughout the website.",

    "This project took a significant amount of planning, problem-solving, and hands-on development. It remains a personal project I’m proud of because it combines Vue, Firebase, API integration, custom branding, photography, responsive design, and interactive directory-style functionality.",
  ],
  tech: ["Vue", "JavaScript", "Firebase", "Untappd API", "Google Maps API", "Netlify", "GitHub", "Photoshop", "Illustrator",
],
  role:
  "Built the entire project as a personal Vue application, including the Firebase database, brewery directory, Google Maps integration, brewery detail pages, Untappd API powered beer listings, beer type filtering, responsive layouts, photography, logo design, GitHub workflow, and Netlify deployment.",

outcome:
  "Created a personal project I’m proud of that required a lot of hands-on problem-solving to combine Vue, Firebase, Google Maps, and the Untappd API into a useful brewery guide for exploring St. Petersburg locations and beers currently on tap.",
  liveUrl: "https://www.stpetepintguide.org/",
  githubUrl: "https://github.com/jeffreyharris/vue-sppg-project",
  image: "/images/st-pete-pint-guide.png",
},
  {
    slug: "walker-consultants",
    title: "Walker Consultants",
    platform: "WordPress",
    category: "Marketing Website",
    summary:
      "Rebuilt this WordPress marketing site in Salient theme while keeping many custom content modules and templates intact, improving the user experience, design and performance.",
    detailSummary: [
  "Walker Consultants was running on an outdated WordPress theme that was no longer well supported, making the site harder to maintain, update, and evolve over time.",

  "The project required moving the website to a more modern WordPress setup while preserving the custom functionality and content patterns their team still relied on.",

  "One of the main challenges was recreating the proprietary widgets from the old site so they could continue supporting the same business and content needs in the new build.",

  "I migrated the site to the Salient theme and rebuilt the custom widget functionality within the new WordPress environment, helping deliver a more modern, responsive, and manageable website experience.",
],
tech: ["WordPress", "WPBakery", "HTML", "MEC", "CSS", "JavaScript","PHP"],
    role:
      "Implemented new Salient theme and ported over all custom widgets and functionality from the original build.",
    outcome:
      "Launched the redesigned marketing site with improved user experience, design, and performance while maintaining existing content modules and templates.",
          liveUrl: "https://www.walkerconsultants.com/",
    image: "/images/Walker-Consultants.png",
    featureVideo: "/videos/walker-feature.mp4",
    featureVideoLabel: "Modern Theme and Custom Widgets",
  },
  {
    slug: "world-pork-expo",
    title: "World Pork Expo",
    platform: "WordPress",
    category: "Event + Registration Website",
    summary:
      "Built a responsive WordPress marketing site supporting paid tradeshow registration for attendees and exhibitors via Modern Events Calendar.",
    detailSummary: [
  "The World Pork Expo is an annual trade show in Iowa that brings together attendees, exhibitors, and members of the press from across the pork industry.",

  "The project required a refreshed WordPress website with a more colorful visual direction and a registration experience that supported multiple attendee types, exhibitor options, press registration, payments, and discount codes.",

  "I used Modern Events Calendar and WPBakery to build a flexible registration flow with conditional form sections, optional fields, and payment gateway integration.",

  "Because different users needed different registration paths, the front-end experience had to stay clear and easy to follow while still supporting complex form logic behind the scenes.",

  "My work on the World Pork Expo site helped support smooth online registration for thousands of expo attendees across five consecutive years.",
],
tech: ["WordPress", "WPBakery", "HTML", "MEC", "CSS", "JavaScript","PHP"],
    role:
      "Worked as the front-end developer on a WordPress implementation, building page layouts and supporting registration-related site functionality.",
    outcome:
      "Launched a responsive redesign, managed registration forms, and tested payment gateway functionality to help ensure a reliable registration experience.",
          liveUrl: "https://www.worldpork.org/",
    image: "/images/world-pork-expo.png",
  },
  {
    slug: "world-wildlife-fund",
    title: "World Wildlife Fund",
    platform: "Custom CMS",
    category: "Site Relaunch & Custom Campaigns",
    summary:
      "Assisted in the relaunch of the WWF website and built custom campaign pages to support fundraising efforts, utilizing a custom CMS and responsive development techniques. I also diagnosed and fixed front end issues and implemented Google Analytics tracking to monitor campaign performance.",
    detailSummary: [
  "World Wildlife Fund needed ongoing front-end support during the relaunch of their website, along with custom campaign pages that supported fundraising, awareness, and donor engagement efforts.",

  "I worked within a custom CMS environment to build responsive campaign pages and interactive website experiences that helped bring key initiatives to life for visitors across devices.",

  "My work included translating design direction into front-end code, building custom page layouts, coding interactive elements, and ensuring the experience remained polished, accessible, and easy to navigate.",

  "I also diagnosed and resolved front-end issues across the site, helping improve visual consistency, usability, and performance during and after the relaunch process.",

  "To support campaign measurement, I implemented Google Analytics tracking so the team could monitor user behavior, evaluate campaign performance, and better understand how visitors engaged with fundraising content.",
],
tech: ["HTML", "CSS", "JavaScript","Google Analytics API"],
    role:
      "As a web producer and front-end developer, I contributed to the relaunch of the WWF website and built custom campaign pages to support fundraising efforts. During my time there I also led the implementation of a responsive layout for the ecommerce gift center.",
    outcome:
      "Coordinated with an external agency to launch the redesigned WWF website and created custom campaign pages like the 'Solar Quiz' that effectively supported fundraising efforts, while also implementing Google Analytics tracking to monitor campaign performance.",
          liveUrl: "https://www.worldwildlife.org/pages/take-the-solar-quiz",
    image: "/images/world-wildlife-fund.png",
    featureVideo: "/videos/wwf-feature.mp4",
    featureVideoLabel: "JavaScript Quiz Interactions",
  },
];