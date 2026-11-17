# Content to replace

NOVARY® is a demo brand. Everything below is placeholder content: names, copy, contact details, clients, reviews, projects, figures and logos. Work through this checklist to turn the site into a real business site.

**How to use it**

- Almost all text lives in `content/` (`site.ts`, `services.ts`, `projects.ts`). Change it there and it updates everywhere; no layout code needs touching.
- Items marked **(code)** live in a component file instead; the path is given.
- Headlines are arrays: each entry is one line of the heading, so you control the line breaks.
- Tick items off as you go (`[ ]` → `[x]`).
- After editing, run `npm run check`, then push.

**Priority order:** 1. Brand and contact details → 2. Reviews (never publish invented testimonials as real) → 3. Projects → 4. Everything else.

---

## 1. Brand, contact and global settings

File: `content/site.ts` → `site`

- [ ] Brand name: “NOVARY” with mark “®” (`site.name`, `site.mark`)
- [ ] Production domain: “https://novary.demo” (`site.url`) and the `NEXT_PUBLIC_SITE_URL` environment variable
- [ ] Tagline: “Software, AI, automation, web and mobile” (`site.tagline`)
- [ ] Browser/SEO title: “NOVARY® | Digital solutions that move businesses forward” (`site.title`)
- [ ] SEO description: “NOVARY® builds custom software, AI agents, business automation, websites and mobile apps that turn complex ideas into meaningful digital experiences.” (`site.description`)
- [ ] Locale: “en_PK” (`site.locale`)
- [ ] Header call to action: “Let's Talk” → `/contact` (`site.cta`)
- [ ] Email address: “hello@novary.demo” (`site.contact.email`). Also used as the reply address in emails
- [ ] Location: “Karachi, Pakistan” (`site.contact.location`)
- [ ] Response time promise: “We reply within one business day.” (`site.contact.responseTime`)
- [ ] Social link: Instagram → `https://www.instagram.com/` (placeholder: points to the platform's home page) (`site.socials`)
- [ ] Social link: LinkedIn → `https://www.linkedin.com/` (placeholder: points to the platform's home page) (`site.socials`)
- [ ] Social link: Facebook → `https://www.facebook.com/` (placeholder: points to the platform's home page) (`site.socials`)
- [ ] Email sending: set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in Vercel (see `.env.example`)

## 2. Home: Hero

File: `content/site.ts` → `home.hero`

- [ ] Eyebrow: “Your ideas. Our expertise.”
- [ ] Headline (3 lines): “We Build Digital” / “Solutions That Move” / “Businesses Forward.”
- [ ] Highlighted word: “Move” (must appear in one headline line)
- [ ] Description: “From intelligent automation to powerful software, websites and applications — we turn complex ideas into meaningful digital experiences.”
- [ ] Primary button: “Start a Project” → `/contact`
- [ ] Secondary button: “Explore Our Services” → `#services`
- [ ] Supporting line: “One partner. Every digital possibility.”
- [ ] Illustration description for screen readers: “Building blocks of a digital product: software, AI, automation, web and mobile.”
- [ ] **(code)** Isometric illustration: `components/sections/home/IsoBlocks.tsx` (abstract; keep or replace)

## 3. Home: Our Expertise (services overview)

File: `content/site.ts` → `home.services` (the eight services themselves are in section 13)

- [ ] Eyebrow: “Our expertise”
- [ ] Title: “Everything Digital.” / “All Under One Roof.”
- [ ] Description: “We don't believe in one-size-fits-all solutions. Every business has different needs, and we build around them.”
- [ ] Button: “Explore All Services”; small labels “See how we deliver”, “Includes”

## 4. Home: How We Work (process)

File: `content/site.ts` → `home.process` (also shown on the Services page)

- [ ] Eyebrow: “How we work”
- [ ] Title: “From First Conversation” / “to Final Launch.”
- [ ] Step 01, “Discover”: “We listen, understand your business and identify what needs to be solved.”
- [ ] Step 02, “Plan”: “We define the right approach, features, technology and project roadmap.”
- [ ] Step 03, “Design”: “We shape the experience, structure and interface around your users.”
- [ ] Step 04, “Build”: “Our team develops, integrates and brings the solution to life.”
- [ ] Step 05, “Launch”: “We test, refine and deploy your solution.”
- [ ] Step 06, “Support & Grow”: “We remain available for improvements, maintenance and future development.”

## 5. Home: Selected Work (featured projects)

Section copy: `content/site.ts` → `home.projects`. Projects: `content/projects.ts`. Each project also has its own page at `/projects/[slug]` (currently `noindex` because they are demo concepts).

- [ ] Eyebrow: “Selected work”
- [ ] Title: “Ideas We've Turned Into” / “Digital Experiences.”
- [ ] Description: “A glimpse into the kind of solutions we create.”

All six projects are **invented demo concepts**. Replace each with a real case study (or remove it), then set real copy for every field:

### Project 01: WhatsApp Business Automation

- [ ] Title: “WhatsApp Business Automation” · slug `whatsapp-business-automation` (URL `/projects/whatsapp-business-automation`)
- [ ] Category: “Automation / Business Communication”
- [ ] Summary: “A smart messaging platform designed to organize conversations, automate replies and simplify customer communication.”
- [ ] Overview: “A shared WhatsApp inbox for a growing retail team. Every conversation is labelled, routed and answered quickly, with order updates and common questions handled automatically.”
- [ ] Challenge: “Hundreds of daily messages arrived on one phone. Questions about prices, delivery and order status went unanswered for hours, and nobody knew who had replied to whom.”
- [ ] What we built: “We built a team inbox on the WhatsApp Business API with automatic replies, quick-reply templates, smart labels and order lookups connected to the store's system.”
- [ ] Key features: “Shared team inbox with assignments”, “Automated replies and quick templates”, “Order status lookups from the store”, “Labels, broadcasts and reply-time analytics”
- [ ] Technology: WhatsApp API, Node.js, React, PostgreSQL, Redis
- [ ] Visual: coded `whatsapp` mockup (see section 12); demo data inside it

### Project 02: AI Voice Calling Agent

- [ ] Title: “AI Voice Calling Agent” · slug `ai-voice-calling-agent` (URL `/projects/ai-voice-calling-agent`)
- [ ] Category: “Artificial Intelligence / Voice Automation”
- [ ] Summary: “An intelligent voice-based system built to handle incoming calls, answer questions and support customer interactions.”
- [ ] Overview: “A voice agent that answers calls in natural language, understands what the caller needs, answers common questions, books appointments and passes complex calls to a person.”
- [ ] Challenge: “A busy clinic missed calls at peak times and after hours, and front-desk staff spent most of the day answering the same questions.”
- [ ] What we built: “We designed a voice agent with speech recognition, a knowledge base built from the clinic's information, calendar booking and a smooth handover to staff, with every call summarised.”
- [ ] Key features: “Natural voice conversations, around the clock”, “Appointment booking into the calendar”, “Live transcript and call summary”, “Smart handover to a human agent”
- [ ] Technology: OpenAI, Python, LangChain, Twilio, PostgreSQL
- [ ] Visual: coded `voice` mockup (see section 12); demo data inside it

### Project 03: Business Management Dashboard

- [ ] Title: “Business Management Dashboard” · slug `business-management-dashboard` (URL `/projects/business-management-dashboard`)
- [ ] Category: “Custom Software / SaaS”
- [ ] Summary: “A centralized software platform for managing operations, tracking activities and accessing business insights.”
- [ ] Overview: “One platform for sales, inventory, teams and finances, with live dashboards that show managers what is happening across every branch at a glance.”
- [ ] Challenge: “Data lived in spreadsheets, accounting software and chat groups. Monthly reports took days to put together and were out of date when they arrived.”
- [ ] What we built: “We built a central platform with role-based access, live KPIs, branch-level reports and automated daily summaries, connected to the tools the team already used.”
- [ ] Key features: “Live KPIs and revenue tracking”, “Branch, team and product reports”, “Role-based access for every department”, “Automated daily summaries by email”
- [ ] Technology: Next.js, TypeScript, Node.js, PostgreSQL, AWS
- [ ] Visual: coded `dashboard` mockup (see section 12); demo data inside it

### Project 04: E-commerce Experience

- [ ] Title: “E-commerce Experience” · slug `ecommerce-experience` (URL `/projects/ecommerce-experience`)
- [ ] Category: “Web Development / E-commerce”
- [ ] Summary: “A modern online shopping platform with streamlined product discovery and a smooth checkout experience.”
- [ ] Overview: “A mobile-first store for a lifestyle brand with fast search, clear product pages, saved carts and a checkout that takes under a minute.”
- [ ] Challenge: “The brand sold mostly through social media. Orders were taken by hand, stock was tracked on paper and customers dropped off before paying.”
- [ ] What we built: “We designed and built a store with curated collections, instant search, local payment options and cash on delivery, connected to inventory and couriers.”
- [ ] Key features: “Instant search and smart filters”, “One-page checkout with local payments”, “Inventory and courier integration”, “Abandoned-cart reminders”
- [ ] Technology: Next.js, Shopify, Tailwind CSS, Stripe, Vercel
- [ ] Visual: coded `ecommerce` mockup (see section 12); demo data inside it

### Project 05: Mobile Business Application

- [ ] Title: “Mobile Business Application” · slug `mobile-business-application` (URL `/projects/mobile-business-application`)
- [ ] Category: “Mobile App Development”
- [ ] Summary: “A mobile-first application designed to make essential business features accessible on the go.”
- [ ] Overview: “An Android and iOS app that puts sales, tasks, approvals and team updates in the pocket of every manager and field employee.”
- [ ] Challenge: “Field staff had to call the office for stock levels, approvals and customer details, slowing down every visit.”
- [ ] What we built: “We built a cross-platform app with offline support, instant approvals, live sales figures and push notifications, connected to the company's existing system.”
- [ ] Key features: “Live sales and targets on the go”, “One-tap approvals and tasks”, “Works offline, syncs when back online”, “Push notifications for what matters”
- [ ] Technology: Flutter, Firebase, Node.js, PostgreSQL
- [ ] Visual: coded `mobile` mockup (see section 12); demo data inside it

### Project 06: Intelligent Workflow Automation

- [ ] Title: “Intelligent Workflow Automation” · slug `intelligent-workflow-automation` (URL `/projects/intelligent-workflow-automation`)
- [ ] Category: “AI / Workflow Automation”
- [ ] Summary: “A connected workflow system that automates repetitive processes and keeps business tools in sync.”
- [ ] Overview: “A set of connected workflows that capture leads, classify them with AI, update the CRM, notify the team and send follow-ups, without anyone copying data by hand.”
- [ ] Challenge: “Leads came from forms, WhatsApp and email. Each one was copied into the CRM by hand, and follow-ups depended on someone remembering.”
- [ ] What we built: “We mapped the process and automated it end to end with n8n and AI classification, with alerts for exceptions and a simple run log for the team.”
- [ ] Key features: “Leads captured from every channel”, “AI classification and routing”, “CRM, sheets and chat kept in sync”, “Alerts and a clear run history”
- [ ] Technology: n8n, OpenAI, Webhooks, REST APIs, Google Cloud
- [ ] Visual: coded `workflow` mockup (see section 12); demo data inside it

- [ ] Project page labels (`projectPage`): “Selected work”, “This is a demo concept that shows the kind of solution we build.”, “Overview”, “The challenge”, “What we built”, “Key features”, “Technology”, “Category”, “Next project”, “Build something similar”
- [ ] When a project is real: remove the `noindex` in `app/projects/[slug]/page.tsx` and add it to `app/sitemap.ts`, and remove the demo note (`projectPage.demoNote`)

## 6. Home: Powered by the Right Tools (technology ecosystem)

File: `content/site.ts` → `home.tech`. Logos: `lib/tech-icons.tsx`.

- [ ] Eyebrow: “Powered by the right tools”
- [ ] Title: “The Technology Behind” / “Better Solutions.”
- [ ] Description: “We bring together modern technologies and powerful platforms to build reliable digital products.”
- [ ] AI & Machine Learning: OpenAI, Python, TensorFlow, LangChain. Confirm these are tools you actually use
- [ ] Mobile: Flutter, React Native, Kotlin, Swift. Confirm these are tools you actually use
- [ ] Backend: Node.js, Python, PHP, Laravel, Express.js. Confirm these are tools you actually use
- [ ] Automation & Integration: n8n, Make, Zapier, REST APIs, Webhooks. Confirm these are tools you actually use
- [ ] Design & Prototyping: Figma, Adobe Creative Cloud. Confirm these are tools you actually use
- [ ] Frontend: React, Next.js, Vue.js, TypeScript, HTML, CSS, Tailwind CSS. Confirm these are tools you actually use
- [ ] Databases & Infrastructure: PostgreSQL, MySQL, MongoDB, Redis, Firebase. Confirm these are tools you actually use
- [ ] Cloud & Deployment: AWS, Google Cloud, Azure, Docker, Vercel. Confirm these are tools you actually use
- [ ] **(code)** Orbit centre label: "36+ Technology ecosystem" is calculated from the list above

## 7. Home: A Little About Us

File: `content/site.ts` → `home.about`

- [ ] Eyebrow: “A little about us”
- [ ] Title: “Not Just Another” / “Tech Agency.”
- [ ] Description: “We bring technology, creativity and problem-solving together to build solutions that actually make a difference. Whether it's a custom software platform, an intelligent AI agent, a business automation system or a complete digital product, we're here to make it happen.”
- [ ] Supporting lines: “Different challenges.” / “One dedicated team.” / “Endless possibilities.”
- [ ] Link: “Get to Know Us” → `/contact`

## 8. Home: Why Choose Us

File: `content/site.ts` → `home.why`

- [ ] Eyebrow: “The difference”
- [ ] Title: “Good Ideas Deserve” / “Better Execution.”
- [ ] Description: “We focus on what matters: understanding your needs, building the right solution and making technology work for your business.”
- [ ] “Built Around You”: “Every solution starts with your requirements, not a predefined template.”
- [ ] “One Team, Multiple Capabilities”: “Software, AI, automation, web and mobile — different expertise working together.”
- [ ] “Quality Over Shortcuts”: “We care about clean execution, reliable functionality and thoughtful details.”
- [ ] “Clear Communication”: “You stay informed, involved and confident throughout the process.”
- [ ] “Designed to Grow”: “We build with flexibility and your future business needs in mind.”

## 9. Home: Client Reviews

File: `content/site.ts` → `home.reviews`

⚠️ **All six reviews, names and the 5.0 rating are fictional.** Publishing invented testimonials as real is misleading (and in many places unlawful). Replace them with genuine reviews you have permission to use, or remove the section until you have them.

- [ ] Eyebrow: “Words that matter”
- [ ] Title: “Don't Just Take” / “Our Word For It.”
- [ ] Description: “A few words about the experience of working with us.”
- [ ] Rating label: “Client rating”; "5.0" score and full rating bars **(code)** in `components/sections/home/Reviews.tsx`; "Based on N client reviews" counts the list automatically
- [ ] Disclaimer: “Demo reviews for illustration. Not verified reviews from any platform.”. Remove only once reviews are real (and say where they come from)
- [ ] **Ahmed Raza**, Lahore, Pakistan · Software Development: “Team ne hamari requirements bohat achi tarah samjhin. Final software exactly us workflow ke according bana jo humein chahiye tha.”
- [ ] **Sarah Malik**, Karachi, Pakistan · Website Development: “Communication bohat smooth thi. Website ka design aur overall experience expectations se bhi better nikla.”
- [ ] **Usman Tariq**, Islamabad, Pakistan · Business Automation: “Automation solution ne hamara kaafi manual work simplify kar diya. Overall experience was great.”
- [ ] **Hamza Sheikh**, Lahore, Pakistan · Mobile App Development: “Professional team, clean execution aur timely updates. Definitely a good experience working with them.”
- [ ] **Ayesha Khan**, Karachi, Pakistan · UI/UX & Product Design: “Honestly, mujhe process kaafi easy laga. Team ne har stage par guide kiya aur result bohat acha tha.”
- [ ] **Bilal Ahmed**, Faisalabad, Pakistan · AI Voice Agent: “AI calling solution ka concept samajhne se lekar implementation tak team ne achi support provide ki.”

## 10. Home: Final Call to Action

File: `content/site.ts` → `home.finalCta`

- [ ] Eyebrow: “Your next big idea starts here”
- [ ] Title: “Have Something in Mind?” / “Let's Build It.”
- [ ] Description: “Whether you need a simple website, a powerful software platform or an intelligent automation system, we're ready to hear about it.”
- [ ] Buttons: “Let's Discuss Your Project”, “Explore Our Services”
- [ ] Supporting line: “Tell us what you're planning. We'll help you figure out the right way forward.”
- [ ] **(code)** Scrolling service names under the call to action come from `services[].shortTitle`

## 11. Product mockups (demo data inside the visuals)

Files: `components/mockups/`. These are coded illustrations, not screenshots. Every name, number and order inside them is invented. Replace with your real product screenshots or adjust the data to match a real project.

### WhatsApp Business Automation (`WhatsAppMockup.tsx`)

- [ ] Window title “Team Inbox · WhatsApp Business”
- [ ] Contacts: Fatima Noor, Ali Hassan, Zainab Qureshi, Omar Siddiqui, Mehwish Ali; agent “Sana”
- [ ] Messages, order #4821, courier tracking “LHR-90213”, labels (Orders, Sales, Support), times
- [ ] Quick replies “Track order”, “Return policy”, “Talk to an agent”
- [ ] Figures: “Avg. first reply 12 sec”, “Resolved automatically 68%”

### AI Voice Calling Agent (`VoiceAgentMockup.tsx`)

- [ ] Window title “Voice Agent Console · Live”, timer 02:14
- [ ] Caller “City Care Clinic”, masked number “+92 3•• ••• 4218”, doctor “Dr. Sana”
- [ ] Full transcript (4 lines), intent and sentiment chips, “English / Urdu”
- [ ] “Appointment booked · Fri · 4:00 PM”

### Business Management Dashboard (`DashboardMockup.tsx`)

- [ ] Window title “Operations Hub · Dashboard”, greeting “Good morning, Ahmed” (initials AR)
- [ ] KPIs: Revenue PKR 4.82M (+12.4%), Orders 1,284 (+8.1%), Customers 836 (+5.6%)
- [ ] Revenue chart (12 monthly values, 2026), branch split Karachi 42% / Lahore 33% / Islamabad 25%
- [ ] Orders #ORD-2289 to #ORD-2291 for Nexora Retail, Vertex Labs, Cloudnest with amounts and statuses

### E-commerce Experience (`EcommerceMockup.tsx`)

- [ ] Store “alma.” / “alma-living.store”, menu Living, Lighting, Decor
- [ ] Banner “Winter edit · Warm up every room.”, filters
- [ ] Products: Mehr Ceramic Vase PKR 4,800, Noor Table Lamp PKR 9,200, Saba Lounge Chair PKR 38,500 (drawn illustrations)
- [ ] Cart total PKR 14,000, payment options Card / Wallet / COD, chip “Checkout in under a minute”

### Mobile Business Application (`MobileAppMockup.tsx`)

- [ ] User “Hamza Sheikh”, today's sales PKR 186,400, 72% of target, +18%
- [ ] Visits: Nexora Retail (Clifton), Orbit Mart (Gulshan), Beyond Stores (DHA)
- [ ] Approvals: discount for Vertex Labs 8%, stock transfer Lahore → Karachi 40 units, expense PKR 6,500; toast “Order #2291 approved”

### Intelligent Workflow Automation (`WorkflowMockup.tsx`)

- [ ] Flow “Lead capture to CRM”, nodes New lead → AI classify → If hot lead → Update CRM / Notify sales / Nurture
- [ ] Run log #1040 to #1042 with timings, “Last run 2 min ago”
- [ ] Figure: “Hours saved this week 31 h”

## 12. Services page and the eight service detail pages

Index copy: `content/site.ts` → `servicesPage`. Detail-page labels: `serviceDetail`. Services: `content/services.ts`.

The one-line summaries came from the brand brief; **all detail-page copy (intro, offerings, delivery steps, technologies, deliverables, “good fit if”, timelines) is demo copy** written to illustrate the format. Rewrite it to describe exactly what you deliver, and check every timeline.

- [ ] Services page title: “Everything Digital.” / “All Under One Roof.”
- [ ] Services page intro: “We don't believe in one-size-fits-all solutions. Every business has different needs, and we build around them. Choose a service to see exactly what we provide and how we deliver it.”
- [ ] Count label: “8 services, one team”; process heading: “Every engagement follows the same clear path.”
- [ ] Page SEO description: “Software development, AI agents, business automation, websites, mobile apps, e-commerce, UI/UX design and API integrations from NOVARY®.”

### 01. Software Development

- [ ] Title “Software Development” / short name “Software Development” · URL `/services/software-development`
- [ ] Summary: “Custom software designed around your business operations, workflows and long-term goals.”
- [ ] Intro: “Off-the-shelf tools make you work their way. We build software that works your way: platforms, portals and internal systems shaped around how your business actually runs today, and where it is heading next.”
- [ ] What we provide (6): Custom business platforms; SaaS products; Internal tools and dashboards; Client and partner portals; Legacy modernisation; Cloud architecture (plus a sentence each)
- [ ] How we deliver (4): Map the workflow; Define the first release; Build in short cycles; Launch and hand over (plus a sentence each)
- [ ] Technologies: Next.js, React, TypeScript, Node.js, Laravel, Python, PostgreSQL, AWS
- [ ] What you get: Production-ready web application; Role-based access and admin panel; Technical documentation and source code; Deployment pipeline and hosting setup; Post-launch support window
- [ ] A good fit if: Your team runs the business on spreadsheets and chat threads; Off-the-shelf software no longer fits how you work; You are launching a new digital product or SaaS; An existing system is slow, fragile or hard to change
- [ ] Typical timeline: “8 to 16 weeks for a first release”

### 02. AI Solutions & Intelligent Agents

- [ ] Title “AI Solutions & Intelligent Agents” / short name “AI Solutions” · URL `/services/ai-solutions`
- [ ] Summary: “AI-powered assistants, voice agents, chatbots and intelligent systems that make everyday operations smarter.”
- [ ] Intro: “AI is only useful when it does real work. We design assistants and agents that answer customers, qualify leads, take calls and support your team, connected to your own data and tools, with people in control.”
- [ ] What we provide (6): AI voice calling agents; Chatbots and assistants; Knowledge assistants; Lead qualification agents; Document and data processing; Custom AI features (plus a sentence each)
- [ ] How we deliver (4): Find the right use case; Prototype with your data; Integrate and guard; Measure and improve (plus a sentence each)
- [ ] Technologies: OpenAI, LangChain, Python, TensorFlow, Node.js, Twilio, PostgreSQL, Redis
- [ ] What you get: Deployed AI agent or assistant; Knowledge base connected to your data; Conversation logs and analytics dashboard; Human handover and safety rules; Ongoing tuning plan
- [ ] A good fit if: Your team answers the same questions every day; Calls or messages go unanswered after hours; Leads wait too long for a first reply; Staff spend hours reading and sorting documents
- [ ] Typical timeline: “4 to 10 weeks from prototype to launch”

### 03. Business Automation

- [ ] Title “Business Automation” / short name “Automation” · URL `/services/business-automation`
- [ ] Summary: “Connect your tools, eliminate repetitive tasks and create seamless automated workflows.”
- [ ] Intro: “Copying data between apps, chasing approvals and sending the same updates by hand quietly costs hours every week. We map those tasks and automate them, so your tools talk to each other and your team focuses on real work.”
- [ ] What we provide (6): Workflow automation; WhatsApp and messaging automation; CRM and sales automation; Reporting automation; Approval and HR flows; AI-assisted automation (plus a sentence each)
- [ ] How we deliver (4): Audit the manual work; Design the flows; Build and test; Monitor and hand over (plus a sentence each)
- [ ] Technologies: n8n, Make, Zapier, REST APIs, Webhooks, Node.js, Google Workspace, WhatsApp API
- [ ] What you get: Documented automation map; Live, tested workflows; Error alerts and run history; Time-saved estimate per workflow; Team walkthrough and handover
- [ ] A good fit if: People copy and paste between the same apps every day; Follow-ups and updates depend on someone remembering; Reports take hours to put together; Your tools do not share data with each other
- [ ] Typical timeline: “2 to 6 weeks, depending on the number of flows”

### 04. Website Development

- [ ] Title “Website Development” / short name “Web Development” · URL `/services/website-development`
- [ ] Summary: “Modern, responsive and high-performance websites that turn visitors into customers.”
- [ ] Intro: “Your website is often the first conversation with a customer. We design and build fast, clear and search-ready websites that explain what you do in seconds and make it easy to take the next step.”
- [ ] What we provide (6): Company and brand websites; Landing pages; Content-managed sites; Web applications; Performance and SEO; Redesigns and migrations (plus a sentence each)
- [ ] How we deliver (4): Clarify the message; Design the experience; Develop and optimise; Launch and measure (plus a sentence each)
- [ ] Technologies: Next.js, React, Vue.js, Tailwind CSS, TypeScript, WordPress, Vercel, Figma
- [ ] What you get: Responsive, accessible website; CMS for editing content; Technical SEO and analytics setup; Performance-optimised hosting; Training session for your team
- [ ] A good fit if: Your current site looks outdated or loads slowly; Visitors arrive but do not get in touch; You are launching a new brand, product or campaign; You cannot update your own website easily
- [ ] Typical timeline: “3 to 8 weeks”

### 05. Mobile App Development

- [ ] Title “Mobile App Development” / short name “Mobile Applications” · URL `/services/mobile-app-development`
- [ ] Summary: “Intuitive Android and iOS applications designed to deliver meaningful user experiences.”
- [ ] Intro: “A good app earns a place on someone's home screen. We build Android and iOS apps that are simple to use, reliable on real networks and connected to the systems behind your business.”
- [ ] What we provide (6): Cross-platform apps; Native apps; Business and field apps; Customer apps; App backends and APIs; Store launch and updates (plus a sentence each)
- [ ] How we deliver (4): Define the core journeys; Prototype and test; Build and integrate; Publish and grow (plus a sentence each)
- [ ] Technologies: Flutter, React Native, Kotlin, Swift, Firebase, Node.js, PostgreSQL
- [ ] What you get: Android and iOS apps; Admin panel and API; Push notifications and analytics; Store listings and submission; Release and maintenance plan
- [ ] A good fit if: Customers keep asking for an app; Your team needs tools that work in the field; You want to turn a process into a product; Your current app has poor reviews or crashes
- [ ] Typical timeline: “10 to 18 weeks for a first release”

### 06. E-commerce Solutions

- [ ] Title “E-commerce Solutions” / short name “E-commerce” · URL `/services/ecommerce-solutions`
- [ ] Summary: “Scalable online stores and custom shopping experiences built to support growing businesses.”
- [ ] Intro: “Selling online is more than a product page. We build stores with smooth discovery, quick checkout, local payment options and the back-office tools to manage orders, stock and delivery without the chaos.”
- [ ] What we provide (6): Online stores; Custom shopping experiences; Payments and delivery; Order and inventory management; Marketplace platforms; Conversion optimisation (plus a sentence each)
- [ ] How we deliver (4): Plan the catalogue; Design the store; Build and integrate; Launch and optimise (plus a sentence each)
- [ ] Technologies: Shopify, Next.js, WooCommerce, Laravel, Stripe, MySQL, Redis
- [ ] What you get: Live online store; Payment and courier integrations; Order and inventory dashboard; Analytics and conversion tracking; Store management training
- [ ] A good fit if: You sell through social media and want a real store; Your current store is slow or hard to manage; Orders, stock and delivery live in different places; You need features your platform cannot provide
- [ ] Typical timeline: “4 to 12 weeks”

### 07. UI/UX & Product Design

- [ ] Title “UI/UX & Product Design” / short name “UI/UX Design” · URL `/services/ui-ux-design`
- [ ] Summary: “Thoughtful interfaces, interactive prototypes and user-focused digital experiences.”
- [ ] Intro: “Good design is how a product feels to use. We research, structure and design interfaces that are clear on the first visit and pleasant on the hundredth, then hand developers everything they need to build them precisely.”
- [ ] What we provide (6): UX research; Information architecture; UI design; Interactive prototypes; Design systems; UX audits (plus a sentence each)
- [ ] How we deliver (4): Understand users; Structure and wireframe; Design and prototype; Hand off and support (plus a sentence each)
- [ ] Technologies: Figma, Adobe Creative Cloud, FigJam, Maze, Storybook
- [ ] What you get: User flows and wireframes; High-fidelity UI designs; Interactive prototype; Design system and components; Developer handoff files
- [ ] A good fit if: You are planning a new product and want to get it right; Users find your current product confusing; Your product looks inconsistent across screens; You need a prototype to pitch or test an idea
- [ ] Typical timeline: “3 to 8 weeks”

### 08. API & System Integrations

- [ ] Title “API & System Integrations” / short name “API Integrations” · URL `/services/api-integrations`
- [ ] Summary: “Connect platforms, services and business tools into one seamless ecosystem.”
- [ ] Intro: “Most businesses run on a dozen tools that do not talk to each other. We connect them through clean, secure integrations, so data flows once, stays accurate and is available wherever your team needs it.”
- [ ] What we provide (6): Third-party integrations; Custom API development; Payment gateway integration; Data synchronisation; Webhooks and event systems; Integration maintenance (plus a sentence each)
- [ ] How we deliver (4): Map the systems; Design the contracts; Build and test; Monitor and maintain (plus a sentence each)
- [ ] Technologies: REST APIs, Webhooks, Node.js, Express.js, Python, Docker, Redis, Google Cloud
- [ ] What you get: Live, monitored integrations; API documentation; Error handling and retry logic; Integration health dashboard; Maintenance and support plan
- [ ] A good fit if: Staff enter the same data in more than one system; Your tools show different numbers for the same thing; Partners need secure access to your data; You are adding a payment, courier or messaging provider
- [ ] Typical timeline: “2 to 8 weeks”

## 13. Contact page

File: `content/site.ts` → `contactPage`

- [ ] Title: “Tell Us What” / “You're Planning.”; intro: “Share a few details about your idea. We'll help you figure out the right way forward.”
- [ ] SEO description: “Tell NOVARY® about your project. We reply within one business day.”
- [ ] Details card labels: “Get in touch”, “Email”, “Studio”, “Response time”, “Follow us”
- [ ] “What happens next” steps: “We read your message and reply within one business day.” / “A short call to understand your goals and requirements.” / “A clear proposal with approach, timeline and cost.”
- [ ] Form labels, success and error messages: `contactPage.form` (review wording)
- [ ] **(code)** Email templates: `lib/email.ts` (subject lines, “We'll reply within one business day” confirmation)

## 14. Footer

File: `content/site.ts` → `footer` (email, location and socials come from `site`, section 1)

- [ ] Statement: “Technology should make things simpler. We build solutions that make it happen.”
- [ ] Column titles: “Explore”, “What We Do”, “Get In Touch”, “Follow Us”
- [ ] Services listed: software-development, ai-solutions, business-automation, website-development, mobile-app-development (slugs from `content/services.ts`)
- [ ] Rights line: “© {year} NOVARY. All rights reserved.” (year updates automatically)
- [ ] Sign-off: “Built with purpose. Designed for what's next.”
- [ ] **(code)** Large wordmark at the bottom shows `site.name` + `site.mark`

## 15. Other pages and messages

- [ ] 404 page: “This page took a different path.”, “The page you're looking for doesn't exist or has moved.”
- [ ] Service detail call to action: “Tell us what you're planning. We'll help you figure out the right way forward.” / button “Discuss Your Project”

## 16. Logo, icons and social images

The NOVARY® mark (an N on an ink square) is a demo logo drawn in code.

- [ ] **(code)** Logo in header, footer and menu: `components/ui/Logo.tsx` (`NMark`, `Logo`)
- [ ] Favicon: `app/icon.svg` and `app/favicon.ico`
- [ ] Apple touch icon: `app/apple-icon.tsx`
- [ ] Logo used by search engines (JSON-LD): `public/logo.png` (512 × 512)
- [ ] Social share image (Open Graph / Twitter): `lib/og.tsx` (uses the hero headline and the isometric blocks)
- [ ] Organisation data for search engines: `lib/seo.ts` (`organizationJsonLd`: address Karachi, PK; languages English, Urdu)

## 17. Before launch: legal and accuracy

- [ ] Confirm you have rights to the brand name and logo you use
- [ ] Only show real reviews (and any client names inside mockups) with permission
- [ ] Add a privacy policy (the contact form collects names, emails and phone numbers) and link it from the footer and the form
- [ ] Check every figure on the site (mockup numbers, timelines, response times) is either clearly illustrative or true
- [ ] Verify your sending domain in Resend so the contact form emails arrive

---

_Generated from the content files. If you add or change content, the structure above still tells you where each piece lives._
