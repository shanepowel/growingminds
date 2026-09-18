// content/site.ts: the whole CMS. Sam edits this in GitHub's web editor; every save deploys.
// [SQUARE BRACKETS] mark data still to come from Sam. Do not invent values.

export type Status = "accepting" | "waitlist" | "paused";

export const site = {
  /** The pause switch. accepting = normal. waitlist = form live, copy changes. paused = form hidden. */
  status: "accepting" as Status,

  business: {
    name: "Growing Minds Tutoring",
    tagline: "KS1 specialist tutoring in Portsmouth and online",
    // No phone number in v1: email is the only direct channel. Do not reintroduce one.
    credentialLine: "Qualified teacher, Enhanced DBS",
    deliveryLine: "Online and face to face",
    safeguardingLine:
      "Enhanced DBS certificate, registered on the DBS Update Service. Annual safeguarding training. Happy to show both at our first session.",
    dbsLine: "Enhanced DBS checked, registered on the DBS Update Service.",
    emailNote: "I reply within one working day",
    email: "hello@growingmindstutoring.co",
    facebookUrl: "[FACEBOOK PAGE URL]",
    facebookPageName: "Growing Minds Tutoring",
    domain: "growingmindstutoring.co.uk",
    travelRadiusMiles: "[X]",
    travelFee: "£5",
    areasCovered: [
      "Portsmouth", "Southsea", "Cosham", "Drayton", "Farlington",
      "Havant", "Waterlooville", "Gosport", "Fareham", "Portchester",
    ],
  },

  tutor: {
    name: "Sam",
    fullName: "[FULL NAME]",
    heading: "Hello, I'm Sam",
    role: "Qualified Primary School Teacher",
    yearsExperience: 15,
    dbs: { enhanced: true, updateService: true },
    qualifications: [
      "Qualified Teacher Status (QTS)",
      "Over 15 years teaching in Key Stage 1, including KS1 leadership and leading mathematics across a primary school",
      "Enhanced DBS certificate, registered on the DBS Update Service",
      "Annual safeguarding and child protection training",
      "Extensive understanding of the main phonics programmes, including Little Wandle and Letters and Sounds",
      "Trained in a range of handwriting schemes, including Kinetic Letters",
    ],
    bio: [
      "I am a qualified primary school teacher with over 15 years of experience in Key Stage 1, including KS1 leadership and leading mathematics across a primary school. After many years in the classroom I now offer one to one tutoring, which is where I have always seen children make the fastest progress: with someone who has the time to notice exactly what they need and the patience to build their confidence back up.",
    ],
    safeguarding: [
      "I hold an Enhanced DBS certificate, registered on the DBS Update Service, and undertake annual safeguarding training. I am happy to show both at our first session.",
      "For sessions at your home, a parent or carer stays in the property throughout. I never transport children. Online sessions happen in a shared space you can see and hear at any time. Sessions are not routinely recorded, and only ever with prior written consent for a specific reason.",
    ],
    whyITutor:
      "I specialise in the early years of school because that is where secure foundations matter most. When number sense, phonics and early writing are solid, everything that comes after is easier. When there is a gap, it tends to widen. Tutoring is the chance to close it gently, before it becomes something a child believes about themselves.",
  },

  brand: {
    tagline: "Small steps, brighter days",
  },

  /** Nav is five links plus the Contact button and the Pupil Area sign in. */
  nav: [
    { href: "/", label: "Home" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/costs", label: "Costs" },
    { href: "/insights", label: "Insights" },
    { href: "/about", label: "About" },
  ],
  navCta: { href: "/contact", label: "Get in touch" },

  footer: {
    explore: [
      { href: "/", label: "Home" },
      { href: "/curriculum", label: "Curriculum" },
      { href: "/costs", label: "Costs" },
      { href: "/insights", label: "Insights" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/faqs", label: "FAQs" },
      { href: "/tutoring-portsmouth", label: "Tutoring in Portsmouth" },
      { href: "/pupil-area", label: "Pupil area" },
    ],
    legal: [
      { href: "/policies", label: "Privacy notice" },
      { href: "/policies?tab=terms", label: "Tutoring terms" },
    ],
  },

  /** Short practical notes for parents. Sanity is the eventual CMS for the note
   *  bodies; this array is the shape to model there, and the fallback until it
   *  is wired. */
  insights: [
    { slug: "phonics-screening-check", tag: "Phonics", read: "4 minute read",
      title: "What the Year 1 phonics screening check actually asks",
      blurb: "What the check is, why it uses nonsense words, and the three things worth practising at home in the term before it." },
    { slug: "number-bonds", tag: "Maths", read: "3 minute read",
      title: "Number bonds: the ten minutes a week that changes Year 2",
      blurb: "Why bonds to 10 and 20 sit underneath almost every KS1 maths worry, and how to practise them without it feeling like homework." },
    { slug: "choosing-books", tag: "Reading", read: "5 minute read",
      title: "Choosing books your child can nearly read",
      blurb: "The nine in ten rule, what to do with the tenth word, and why rereading the same page is not a waste of time." },
    { slug: "handwriting-grip", tag: "Handwriting", read: "4 minute read",
      title: "Grip, posture and why neat writing is not about trying harder",
      blurb: "Untidy writing is usually mechanical. Here is what to look at before you ask a six year old to slow down again." },
  ],

  hero: {
    heading: "A calm place for young minds to grow.",
    lead: "Kind, individual support in maths, reading, phonics and early writing for KS1 children in Portsmouth and online.",
    primaryCta: "Book a free discovery call",
    secondaryCta: "Get in touch",
    scriptNote: "Small steps, brighter days",
    imageAlt: "Sam reading a picture book with a Key Stage 1 pupil at a sunlit table",
  },

  trust: [
    { icon: "graduation-cap", title: "Qualified primary school teacher", body: "Over 15 years of teaching experience in KS1." },
    { icon: "shield-check", title: "Enhanced DBS checked", body: "Your child's safety and wellbeing is my priority." },
    { icon: "monitor", title: "Online and home tutoring", body: "Flexible sessions online or face to face." },
  ],

  subjects: [
    {
      slug: "maths",
      title: "Maths",
      icon: "plus",
      blurb: "Number, place value and the methods their school uses.",
      long: "Most KS1 maths worries come down to shaky number sense. We slow down, use practical resources like cubes and number lines, and make sure your child understands and embeds each concept before moving on to written methods.",
      outcomes: [
        "Counting, place value and number bonds to 10 and 20",
        "Addition and subtraction, including the missing number puzzles that catch children out",
        "Times tables groundwork: counting in 2s, 5s and 10s",
        "Shape, measure and telling the time",
        "Word problems, and how to work out what is actually being asked",
      ],
      session: "A quick warm up game revisiting previous learning for ten minutes, then a practical activity using a range of resources, then applying the new learning to a slightly more independent task with one to one support, so your child finishes with a real sense of success.",
    },
    {
      slug: "early-reading",
      title: "Early Reading",
      icon: "book-open",
      blurb: "Decoding, fluency and actually enjoying a book.",
      long: "Reading in KS1 is two jobs at once: decoding the words, and understanding them. We build both, with books pitched to the phonics phase your child is currently working on so they succeed around nine times in ten.",
      outcomes: [
        "Blending and decoding unfamiliar words",
        "Common exception words on sight",
        "Reading with expression rather than word by word",
        "Retelling and answering questions about what they read",
        "Building the habit of choosing to read",
      ],
      session: "We look at the key features of the book, such as the title and pictures, to support understanding. We review any recurring sounds likely to appear in the text, then read together. I help your child break tricky words into manageable segments, and we chat about the book throughout so I can check understanding in a fun, informal way.",
    },
    {
      slug: "phonics",
      title: "Phonics",
      icon: "type",
      blurb: "Systematic phonics, matched to your school's scheme.",
      long: "I have an extensive understanding of the main phonics programmes, including Little Wandle and Letters and Sounds, so I can work alongside whatever scheme your child uses at school. I teach phonics in phases, the way schools do, so nothing I say contradicts their teacher. I will ask which scheme the school uses before the first session.",
      outcomes: [
        "Phases 2 to 5 sounds, in order, with gaps filled",
        "Digraphs, trigraphs and alternative spellings",
        "Segmenting for spelling as well as blending for reading",
        "Preparation for the Year 1 phonics screening check",
        "Real and pseudo (\"alien\") word practice, because the check uses them",
      ],
      session: "A sound review with flashcards, a new sound taught, reading and writing words that use it, then a short game to make it stick.",
    },
    {
      slug: "handwriting",
      title: "Handwriting",
      icon: "pencil",
      blurb: "Letter formation, posture and comfortable stamina.",
      long: "Inconsistent writing is usually a grip and formation problem, not carelessness. Fixing it early saves years of frustration and makes every other subject easier. I am trained in a range of handwriting schemes, including Kinetic Letters, which many schools now use.",
      outcomes: [
        "Correct letter formation and starting points",
        "Pencil grip, paper position and posture",
        "Consistent size and sitting letters on the line",
        "Joining letters when they are ready",
        "Writing for longer without aching hands",
      ],
      session: "A short physical warm up for the hands, focused practice on one letter family, then applying it to real writing so it transfers.",
    },
    {
      slug: "writing",
      title: "Writing",
      icon: "pen-line",
      blurb: "Sentences, spelling and getting ideas onto paper.",
      long: "Plenty of KS1 children have brilliant ideas and freeze when asked to write them down. We work on the gap between the two.",
      outcomes: [
        "Full sentences with capital letters and full stops",
        "Spelling patterns and the tricky common words",
        "Adjectives and conjunctions to stretch a sentence",
        "Planning a short story or recount before writing it",
        "Rereading and improving their own work",
      ],
      session: "We usually begin with a short warm up to build confidence and revisit previous learning. Then we focus on one writing skill, such as developing ideas, organising writing, choosing effective vocabulary, sentence structure, punctuation or checking work. I model the skill clearly before guiding your child through practical activities, with plenty of chances to share ideas, ask questions and practise independently. We might use games, discussion, pictures, planning activities and creative prompts to keep it engaging.",
    },
  ],

  modes: [
    {
      id: "online",
      icon: "monitor",
      title: "Online",
      short: "A shared whiteboard, a tablet or laptop, and 45 focused minutes.",
      intro: "Online works better for KS1 than most parents expect. We use a secure video call and a shared whiteboard we can both draw on, so it feels like sitting side by side rather than watching a screen.",
      points: [
        "All you need is a tablet, laptop or desktop with a reliable connection, a quiet spot, and a working camera and microphone",
        "A tablet with a stylus is ideal, but a finger and a trackpad work fine",
        "You are welcome to sit in, and you can hear everything from the next room",
        "I send the joining details and any resources in advance",
        "No travel, so this is usually the easiest slot to find at short notice",
      ],
      image: "/brand/whiteboard-task.webp",
      imageAlt: "A completed maths task on the shared whiteboard",
    },
    {
      id: "at-mine",
      icon: "house",
      title: "At my home in Portsmouth",
      short: "A calm, quiet and safe space to learn, with off street parking and somewhere to wait.",
      intro: "A calm, quiet and welcoming space at my home, with off street parking and somewhere to wait. I provide all the resources and equipment, though your child is welcome to bring any schoolwork, books or stationery that would help. Before the first session we talk through your child's needs and goals so I can plan properly.",
      points: [
        "Off street parking and somewhere to wait",
        "I provide all the resources and equipment",
        "Your child is welcome to bring schoolwork, books or stationery",
        "We talk through needs and goals before the first session so I can plan properly",
      ],
      image: "/brand/tutoring-space.webp",
      imageAlt: "The tutoring space: table, phonics cards, number line and book corner",
    },
    {
      id: "at-yours",
      icon: "car",
      title: "At your home",
      short: "I bring everything needed, across Portsmouth and nearby towns.",
      intro: "A focused session in the comfort of your own home. I bring all the learning resources needed for a fun, engaging session, so there is nothing for you to prepare. It helps to have any relevant schoolwork, books or stationery nearby. Available across Portsmouth and nearby towns.",
      showAreas: true,
      points: [
        "I bring all the learning resources, so there is nothing for you to prepare",
        "It helps to have any relevant schoolwork, books or stationery nearby",
        "Available across Portsmouth and nearby towns",
        "Travel is included within [X] miles of Portsmouth. For longer distances an additional £5 per session may apply",
      ],
      image: "/brand/home-session.webp",
      imageAlt: "Counting cubes and a phonics flashcard on a kitchen table",
    },
  ],

  modesClosing:
    "At the end of every session, whichever way we meet, I briefly review what we have covered and explain any suggested next steps.",

  gettingStarted: [
    { n: "01", title: "Get in touch", body: "Fill in the enquiry form, or message the Facebook page. Whatever is easiest." },
    { n: "02", title: "A free 15 minute chat", body: "We talk about how your child is getting on and what would help most, and decide together whether my support is a good fit." },
    { n: "03", title: "First session", body: "Gentle and game based. I get to know your child, find the areas to work on, and start to see how they learn best. You get a note afterwards on what I noticed." },
    { n: "04", title: "A regular slot", body: "Weekly usually works best. We review after roughly six sessions, when I give you detailed feedback on progress and we discuss next steps." },
  ],

  pricingLead:
    "No joining fee and no contract. Pay for the sessions you have. Prices are per 45 minute session and depend only on where the session takes place.",

  pricing: [
    { label: "Online", price: "£27", duration: "45 minutes", note: "45 minutes on a secure video call and shared whiteboard. Usually the easiest slot to find at short notice." },
    { label: "At my home in Portsmouth", price: "£35", duration: "45 minutes, face to face", note: "With off street parking and somewhere to wait." },
    { label: "At your home", price: "£40", duration: "45 minutes, face to face", note: "Everything brought to you. For longer distances an additional travel fee of £5 may apply." },
    { label: "Free intro chat", price: "Free", duration: "15 minutes, by phone or video", note: "A proper conversation about your child before you decide anything. No sales pitch." },
    // Remove this tile if Sam does not want to offer a block. Price and validity still needed.
    { label: "Block of six", price: "[BLOCK PRICE]", duration: "Six 45 minute sessions, holding your regular weekly slot", note: "Valid for [X] weeks." },
  ],

  // Short pricing card on the home page. Full pricing lives on /costs.
  pricingSummary: {
    headlinePrice: "From £27",
    per: "per 45 minute session",
    note: "Depending on whether sessions are online or face to face. No joining fee, no minimum commitment, and the first 15 minute chat is free.",
  },

  policies: [
    { title: "Travel", body: "Included within [X] miles of Portsmouth. Beyond that, an additional £5 per session may apply for longer distances. Online sessions have no travel charge at all." },
    { title: "Cancellations", body: "24 hours notice and there is nothing to pay. Inside 24 hours the session is charged, because the slot cannot be filled. If your child is unwell, just tell me and we will rearrange." },
    { title: "How to pay", body: "Bank transfer, after each session or in advance for a block. I send a simple invoice. No card fees, no subscriptions, no automatic renewals." },
  ],

  // Fill only with genuine quotes from real parents, with written permission.
  // Attribute simply, for example "Emma" and "Year 1". Hide the home section until then.
  testimonials: [] as readonly {
    quote: string;
    parentName: string;
    childYear: string;
  }[],

  faqs: [
    {
      group: "Getting started",
      items: [
        { q: "What ages do you tutor?", a: "Key Stage 1, which means Reception, Year 1 and Year 2, roughly ages 4 to 7. That is where my classroom experience is, and it is where one to one help makes the biggest difference. I am happy to recommend someone else if your child is older. Sessions are tailored to your child's individual starting point rather than simply their age." },
        { q: "How many sessions will my child need?", a: "Every child is different, so there is no set number. Some benefit from a short block of targeted support, others from regular, ongoing sessions to build confidence and secure their learning. I review your child's progress continually and will always be open and honest about whether continued tutoring would be worthwhile. There is no expectation to commit for a set length of time." },
        { q: "What happens in the first session?", a: "It is relaxed, and a chance for your child to get to know me and get used to how tutoring works. We talk about their interests, strengths and anything they find tricky. I may use a few activities to get a clearer picture of where they are, but it will not feel like a formal test and your child will be encouraged throughout. By the end I will understand how to tailor future sessions so they are engaging, supportive and focused on progress." },
      ],
    },
    {
      group: "Online sessions",
      items: [
        { q: "What do we need for an online session?", a: "A suitable device (laptop, desktop or tablet) with a reliable internet connection, and a quiet, comfortable space to work without too many distractions. Please make sure the device has a working camera and microphone. I provide the platform details and joining instructions before the session, and we agree any resources or materials in advance." },
        { q: "Do you record sessions?", a: "No, sessions are not routinely recorded. This helps create a comfortable, private learning environment for your child. If there is ever a specific reason to record, I would discuss it with you first and only record with your consent. Any recording would be handled securely and deleted when it is no longer needed." },
        { q: "Will a five year old really concentrate on a screen?", a: "Yes, many five year olds engage really well online when sessions are planned around their age, interests and attention span. I keep sessions interactive and varied, using conversation, games, visual resources and practical activities rather than expecting your child to sit and watch. Short activities and regular changes of pace keep focus up, and I can adapt if your child needs a movement break or a different approach. I get to know your child and adjust so they feel comfortable, engaged and ready to learn." },
      ],
    },
    {
      group: "Face to face sessions",
      items: [
        { q: "Which areas do you travel to?", a: "I travel across Portsmouth and nearby towns. There is no travel charge within [X] miles; for longer distances an additional £5 per session may apply. You are also welcome to come to my home in Portsmouth, where there is off street parking." },
        { q: "Can I stay during the session?", a: "Yes, you are welcome to stay, particularly if it helps your child feel settled. Some children engage best with a parent nearby, others become more independent when given a little space, and we can find what works for yours and adjust over time. You are also welcome to check in before or after each session so we can share feedback and talk about progress." },
      ],
    },
    {
      group: "Progress and reports",
      items: [
        { q: "Do you set homework?", a: "Not as a requirement. I may occasionally suggest a short, manageable activity to practise a skill between sessions, always tailored to your child and designed to feel achievable rather than overwhelming. I will talk any suggested practice through with you and make sure it fits comfortably alongside everything else. Getting the most out of each session is the main focus." },
        { q: "How will I know if it is working?", a: "I keep you updated on what we are working on, celebrate progress, and let you know honestly about the areas we are still developing. After roughly six sessions I give you more detailed feedback and we discuss any recommended next steps." },
        { q: "Do you work with children with additional needs?", a: "Yes. I work with children with a range of additional needs and take the time to understand your child's individual strengths, needs and learning preferences. Sessions are tailored so your child feels comfortable, supported and able to make progress, and I work closely with you to find suitable approaches. If your child receives support from other professionals, I am happy to discuss how tutoring might complement it." },
      ],
    },
    {
      group: "Safeguarding and data",
      items: [
        { q: "Can I see your DBS certificate?", a: "Yes. I hold an Enhanced DBS certificate and am happy to provide details on request. It reassures families that appropriate safeguarding checks have been completed before tutoring begins." },
        { q: "What information do you keep about my child?", a: "Before we start, it helps to understand a little about your child. Useful details include their age and school year, the areas they would like support with, any specific difficulties or goals, what they enjoy and what motivates them, any relevant feedback or assessments from school, any additional needs or support strategies, their preferred learning style if known, and any important medical, communication or safeguarding information. You only need to share what is relevant. Everything is treated sensitively and used solely to plan appropriate, personalised sessions." },
      ],
    },
  ],

  // Two short questions teased on the home page; full set in `faqs`.
  faqTeaser: [
    { q: "What ages do you tutor?", a: "Reception, Year 1 and Year 2, roughly ages 4 to 7." },
    { q: "Do you set homework?", a: "Only occasionally, and always short. A few minutes to practise a skill between sessions, never an argument. Getting the most from each session matters more." },
  ],

  contactLead:
    "Tell me a little about your child and what would help most. I reply within one working day, and the first 15 minute chat is always free with no obligation. You can also message the Facebook page if that is easier.",

  /** /pupil-area. Signposting only in v1: no auth on this site, Google Classroom is the login. */
  pupilArea: {
    enabled: true,
    // When appEnabled is true, sign in affordances point at the pupil app (appUrl).
    // When false, they point at Google Classroom directly (links[0].href or its fallback).
    appEnabled: false,
    appUrl: "https://pupils.growingmindstutoring.co.uk",
    intro: "Everything for your child's sessions lives in one place: your own Google Classroom. There is no separate password for this website, and nothing for your child to remember.",
    note: "You sign in with the Google account you gave me when we started. Your classroom is private to your family, and only you and I can see it.",
    links: [
      { icon: "graduation-cap", title: "Google Classroom", body: "Homework, marked work, my comments and the class stream. One classroom per child, private to your family.", cta: "Sign in with Google", href: "[GOOGLE CLASSROOM URL]", fallback: "https://classroom.google.com" },
      { icon: "pen-line", title: "Session whiteboard", body: "The shared board we draw on together. Every page from every session is saved here for revision.", cta: "Open your board", href: "[BITPAPER URL]", fallback: "https://bitpaper.io" },
      { icon: "monitor", title: "Join your session", body: "The video link for your slot. It is the same link every week, and it is also pinned in your Classroom.", cta: "Join the call", href: "[GOOGLE MEET URL]", fallback: "https://meet.google.com" },
    ],
    records: [
      "Homework, marked work and my comments stay in your Google Classroom, which doubles as your child's record of achievement. Whiteboard pages from each session are saved so we can pick up where we left off.",
      "Sessions are not routinely recorded. If there is ever a specific reason to record, I would discuss it with you first and only record with your consent. Any recording would be handled securely, shared only with your family, and deleted when it is no longer needed.",
    ],

    /** The single sign in funnel at the top of /pupil-area. The button needs
     *  Google's official "Sign in with Google" asset before launch; the letter
     *  mark in the design reference is a placeholder only. */
    signIn: {
      eyebrow: "Step one, every week",
      title: "Sign in to your child's classroom",
      body: "One tap with the Google account you already use. Your child's homework, marked work, whiteboard pages and session notes are all waiting inside, along with the video link for your slot.",
      cta: "Sign in with Google",
      reassurance: "Parents sign in, not children. Your child never needs an account.",
      onceInHeading: "Once you are in",
    },

    safety: {
      heading: "Keeping your child's information safe",
      lead: "This is the part I am strictest about. The safest data is the data I never collect, so the list below is deliberately short.",
      cards: [
        { h: "No account for your child", p: "The parent signs in with their own Google account. Children under 13 do not get logins, so there is nothing for a child to lose or share." },
        { h: "What I hold, in full", p: "Your name, email and phone, your child's first name and year group, and my session notes. No surname, no date of birth, no home address on file." },
        { h: "Sessions are not routinely recorded", p: "If there is ever a specific reason to record, I would discuss it with you first and only record with your consent. Consent can be withdrawn at any time." },
        { h: "UK or EU storage, then deleted", p: "Anything saved is stored in the UK or EU, shared by a revocable link with your family alone, and deleted after 12 months or when tutoring ends." },
      ],
      footnote: "Anything here can be deleted on request, and asking will never affect your child's tutoring. The full detail is in the privacy notice.",
    },
  },

  form: {
    accepting: {
      title: "Send me an enquiry",
      lead: "A few details is all I need. I reply within one working day.",
      submit: "Send enquiry",
    },
    waitlist: {
      title: "Join the waitlist",
      lead: "I am full at the moment, but leave your details and you will be first to hear when a slot opens up.",
      submit: "Join the waitlist",
    },
    paused: {
      title: "Enquiries are closed for now",
      lead: "I am not taking on new pupils at the moment. The best thing to do is follow the Facebook page, where I post as soon as slots open up again.",
    },
    success: {
      title: "Thank you, that is with me",
      lead: "I will reply within one working day. If you would rather not wait, or your email has gone astray, both of these reach me quickly.",
    },
    yearGroups: ["Reception", "Year 1", "Year 2", "Other"],
    modeOptions: [
      { id: "online", label: "Online" },
      { id: "at-mine", label: "At Sam's home" },
      { id: "at-yours", label: "At our home" },
    ],
    consent: "I am happy for Sam to use these details to reply to my enquiry, as described in the privacy notice.",
    childDataHint: "Please do not include your child's name or anything sensitive. Year group is all I need to begin.",
  },

  /** Keyed by status so <StatusBanner> can index it directly. */
  statusBanner: {
    accepting: null as string | null,
    waitlist: "I am currently full. Join the waitlist and I will be in touch as soon as a slot opens up.",
    paused: "Tutoring is paused for now. Follow the Facebook page for news of new slots.",
  },

  booking: {
    enabled: true,
    title: "Book a free 15 minute chat",
    body: "Pick a time that suits you. We will talk about how your child is getting on and what would help most. No commitment either way.",
    calUrl: "[CAL.COM URL]",
  },

  /** The one dark band a page is allowed, and the pale band directly above the
   *  footer. Both draw on this single set of fields. */
  footerCta: {
    kicker: "Not sure where to start?",
    body: "Tell me a little about your child and I will come back to you within one working day. The first chat is free and there is no obligation.",
    primary: "Send an enquiry",
  },

  legal: {
    privacy: {
      title: "Privacy notice",
      updated: "[DATE]",
      sections: [
        {
          h: "Who I am",
          p: "Growing Minds Tutoring is run by [FULL NAME], a self employed qualified teacher based in Portsmouth. I am the data controller for the information described here. You can reach me at hello@growingmindstutoring.co.",
        },
        {
          h: "What I collect",
          p: "From the enquiry form: your name, email address, optional phone number, your child's year group, the subjects and session type you are interested in, and your message. Once tutoring starts: your child's first name and my session notes. Please do not send me anything more than that. I do not collect dates of birth, medical records or school reports unless you choose to share something relevant, in which case I keep only what I need.",
        },
        {
          h: "Why I collect it, and my lawful basis",
          p: "To reply to your enquiry and to deliver tutoring. My lawful basis is legitimate interests for responding to an enquiry, and contract for delivering sessions you have booked. Recordings rely on your consent, which is separate and optional, and are not made as a matter of course.",
        },
        {
          h: "Children's data",
          p: "My pupils are under 13, so the ICO Children's Code applies and I keep collection to the minimum described above. There is no profiling, no advertising and no sharing with third parties for their own purposes.",
        },
        {
          h: "Recordings",
          p: "Sessions are not routinely recorded. If there is ever a specific reason to record, I would discuss it with you first and only record with your written consent. Any recording is stored in the UK or EU, shared only with your family through a link that can be revoked, and deleted when it is no longer needed, and in any case after 12 months or when tutoring ends.",
        },
        {
          h: "How long I keep things",
          p: "Enquiries that do not lead to tutoring are deleted within six months. Pupil records and session notes are deleted 12 months after tutoring ends. Invoices are kept for six years because HMRC requires it.",
        },
        {
          h: "Who else sees it",
          p: "Only the services that run the website and my email: the enquiry form provider, my email provider and, if you book a call, the booking tool. Each processes data on my instructions only. No one buys or receives your details for marketing.",
        },
        {
          h: "Your rights",
          p: "You can ask me for a copy of what I hold, ask me to correct or delete it, or withdraw consent for recordings at any time. Email me and I will respond within one month. If you are not happy with how I have handled it you can complain to the Information Commissioner's Office at ico.org.uk.",
        },
      ],
    },
    terms: {
      title: "Tutoring terms",
      updated: "[DATE]",
      sections: [
        {
          h: "1. Booking a session",
          p: "Sessions are agreed directly between us, by message, email or phone. A regular weekly slot is held for your child as long as sessions continue. There is no contract and no minimum commitment.",
        },
        {
          h: "2. Payment",
          p: "Payment is by bank transfer, either after each session or in advance for a block of six. Details are on the invoice I send. Blocks are valid for [X] weeks from the first session.",
        },
        {
          h: "3. Cancellations",
          p: "Please give 24 hours notice where you can and there is nothing to pay. Cancellations inside 24 hours are charged in full, because the slot cannot be filled. If your child is unwell, tell me and we will rearrange, no charge. If I have to cancel, the session is rescheduled or refunded.",
        },
        {
          h: "4. Face to face sessions",
          p: "For sessions at your home, a parent or carer must be in the property throughout. I do not transport children under any circumstances. For sessions at my home, you are welcome to stay and the address is shared once we have spoken.",
        },
        {
          h: "5. Safeguarding",
          p: "I hold an Enhanced DBS certificate on the Update Service and follow the safeguarding practice expected of a qualified teacher. If I ever have a concern about a child's welfare I have a duty to raise it with the appropriate local authority service, and I would normally discuss it with you first.",
        },
        {
          h: "6. Recordings",
          p: "Sessions are not routinely recorded. Nothing is recorded without your written consent, which you can withdraw at any time without affecting the tutoring. Any recording is shared only with your family through a link I can revoke, and deleted when it is no longer needed, and in any case after 12 months or at the end of tutoring, whichever comes first.",
        },
        {
          h: "7. Progress",
          p: "I will be honest about progress, including when I think tutoring is no longer needed or when your child would be better served by a specialist. I cannot guarantee a particular outcome, level or test result.",
        },
      ],
    },
  },
} as const;

export type Site = typeof site;
