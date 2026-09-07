// content/site.ts: the whole CMS. Sam edits this in GitHub's web editor; every save deploys.
// [SQUARE BRACKETS] mark data still to come from Sam. Do not invent values.

export type Status = "accepting" | "waitlist" | "paused";

export const site = {
  /** The pause switch. accepting = normal. waitlist = form live, copy changes. paused = form hidden. */
  status: "accepting" as Status,

  business: {
    name: "Growing Minds Tutoring",
    tagline: "KS1 specialist tutoring in Portsmouth and online",
    phone: "07921 080947",
    phoneHref: "tel:+447921080947",
    phoneNote: "Tap to call, weekdays after 4pm",
    email: "hello@growingmindstutoring.co.uk",
    facebookUrl: "[FACEBOOK PAGE URL]",
    facebookPageName: "Growing Minds Tutoring",
    domain: "growingmindstutoring.co.uk",
    url: "https://growingmindstutoring.co.uk",
    travelRadiusMiles: "[X]",
    travelFee: "[TRAVEL FEE]",
    areasCovered: [
      "Portsmouth",
      "Southsea",
      "Cosham",
      "Drayton",
      "Farlington",
      "Havant",
      "Waterlooville",
      "Gosport",
      "Fareham",
      "Portchester",
    ],
  },

  tutor: {
    name: "Sam",
    fullName: "[FULL NAME]",
    role: "Qualified Primary School Teacher",
    yearsExperience: 15,
    dbs: { enhanced: true, updateService: true },
    qualifications: [
      "Qualified Teacher Status (QTS)",
      "Over 15 years teaching in Key Stage 1",
      "Enhanced DBS certificate, registered on the DBS Update Service",
      "Annual safeguarding and child protection training",
      "Trained in [PHONICS SCHEME] systematic synthetic phonics",
    ],
    bio: [
      "I have spent my career in Key Stage 1 classrooms, which means I know exactly where children tend to wobble in Reception, Year 1 and Year 2, and how quickly that wobble can turn into confidence with a bit of one to one attention.",
      "Sessions are calm, practical and personalised. We use the same phonics scheme and methods your child's school uses, so nothing I do contradicts their teacher. I keep parents in the loop after every session with a short note on what we covered and what to practise.",
    ],
    safeguarding: [
      "I hold an Enhanced DBS certificate and keep it on the DBS Update Service, so you can check it is current yourself. I complete annual safeguarding training as part of my teaching practice.",
      "For sessions at your home, a parent or carer stays in the property throughout. I never transport children. Online sessions happen in a shared space you can see and hear at any time, and nothing is recorded without your written consent.",
    ],
    // Replace with Sam's own wording before launch.
    whyITutor:
      "[WHY I TUTOR] One paragraph in Sam's own words. The honest version works best here: what she loves about the moment a child stops guessing and starts knowing.",
  },

  hero: {
    script: "Helping Children",
    display: ["Learn, Grow,", "Succeed"],
    subline: "KS1 specialist tutoring in Portsmouth and online",
    body: "Personalised tutoring designed to build confidence, strengthen skills and unlock every child's potential. I am a qualified primary school teacher with over 15 years in Key Stage 1, and I tutor online, at my home in Portsmouth, or at yours.",
    primaryCta: "Get in touch",
    secondaryCta: "Book a free 15 minute chat",
    image: "/brand/sam-tutoring-table.webp",
    imageAlt: "Photo of Sam at the tutoring table (landscape, warm grade)",
  },

  trust: [
    {
      icon: "graduation-cap",
      title: "Qualified primary school teacher",
      body: "Over 15 years of teaching experience in KS1.",
    },
    {
      icon: "shield-check",
      title: "Enhanced DBS checked",
      body: "Your child's safety and wellbeing is my priority.",
    },
    {
      icon: "monitor",
      title: "Online and home tutoring",
      body: "Flexible sessions online or face to face.",
    },
  ],

  subjects: [
    {
      slug: "maths",
      title: "Maths",
      icon: "plus",
      blurb: "Number, place value and the methods their school uses.",
      long: "Most KS1 maths worries come down to shaky number sense. We slow down, use cubes and number lines, and rebuild it properly before moving on to written methods.",
      outcomes: [
        "Counting, place value and number bonds to 10 and 20",
        "Addition and subtraction, including the missing number puzzles that catch children out",
        "Times tables groundwork: counting in 2s, 5s and 10s",
        "Shape, measure and telling the time",
        "Word problems, and how to work out what is actually being asked",
      ],
      session:
        "A quick warm up game, ten minutes on the tricky thing, a practical activity with cubes or coins, then something they can already do well so they finish feeling capable.",
    },
    {
      slug: "early-reading",
      title: "Early Reading",
      icon: "book-open",
      blurb: "Decoding, fluency and actually enjoying a book.",
      long: "Reading in KS1 is two jobs at once: working out the words, and understanding them. We build both, with books pitched so your child succeeds around nine times in ten.",
      outcomes: [
        "Blending and decoding unfamiliar words",
        "Common exception words on sight",
        "Reading with expression rather than word by word",
        "Retelling and answering questions about what they read",
        "Building the habit of choosing to read",
      ],
      session:
        "We read together, I note the words that trip them up, we practise those, then reread the same page so they hear their own improvement.",
    },
    {
      slug: "phonics",
      title: "Phonics",
      icon: "type",
      blurb: "Systematic phonics, matched to your school's scheme.",
      long: "I teach phonics the way schools do, in phases, so nothing I say contradicts their teacher. I will ask which scheme the school uses before the first session.",
      outcomes: [
        "Phases 2 to 5 sounds, in order, with gaps filled",
        "Digraphs, trigraphs and alternative spellings",
        "Segmenting for spelling as well as blending for reading",
        "Preparation for the Year 1 phonics screening check",
        "Nonsense word practice, because the check uses them",
      ],
      session:
        "Sound review with flashcards, a new sound taught, reading and writing words with it, then a short game to make it stick.",
    },
    {
      slug: "handwriting",
      title: "Handwriting",
      icon: "pencil",
      blurb: "Letter formation, posture and comfortable stamina.",
      long: "Untidy writing is usually a grip and formation problem, not carelessness. Fixing it early saves years of frustration and makes every other subject easier.",
      outcomes: [
        "Correct letter formation and starting points",
        "Pencil grip, paper position and posture",
        "Consistent size and sitting letters on the line",
        "Joining letters when they are ready",
        "Writing for longer without aching hands",
      ],
      session:
        "A short physical warm up for the hands, focused practice on one letter family, then applying it to real writing so it transfers.",
    },
    {
      slug: "literacy",
      title: "Literacy",
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
      session:
        "Talk the idea through first, plan it in pictures or boxes, write a little, then read it back aloud together and improve one thing.",
    },
  ],

  modes: [
    {
      id: "online",
      icon: "monitor",
      title: "Online",
      short: "A shared whiteboard, a tablet or laptop, and 30 to 45 focused minutes.",
      intro:
        "Online works better for KS1 than most parents expect. We use a shared whiteboard we can both draw on, so it feels like sitting side by side rather than watching a video call.",
      points: [
        "All you need is a tablet or laptop, a quiet spot and headphones if the house is busy",
        "A tablet with a stylus is ideal, but a finger and a trackpad work fine",
        "You are welcome to sit in, and you can hear everything from the next room",
        "Sessions can be recorded as short whiteboard clips for revision, only with your written consent, and never video of your child",
        "No travel, so this is usually the easiest slot to find at short notice",
      ],
      image: "/brand/whiteboard-task.webp",
      imageAlt: "A completed maths task on the shared whiteboard",
      showAreas: false,
    },
    {
      id: "at-mine",
      icon: "house",
      title: "At my home in Portsmouth",
      short: "A proper little learning space, with parking and somewhere to wait.",
      intro:
        "I have a dedicated tutoring space at home in Portsmouth, set up like a small classroom corner with the resources I used in school.",
      points: [
        "A table at child height, phonics cards, number lines, cubes and a book corner",
        "Parents are welcome to stay. There is a seat in the same room or just outside it",
        "Free parking on the street directly outside",
        "Full address shared once we have spoken. It is not published online",
        "Enhanced DBS certificate available to see at the first session",
      ],
      image: "/brand/tutoring-space.webp",
      imageAlt:
        "The tutoring space: table, phonics cards, number line and book corner",
      showAreas: false,
    },
    {
      id: "at-yours",
      icon: "car",
      title: "At your home",
      short: "I bring everything needed, across Portsmouth and nearby towns.",
      intro:
        "Sometimes the kitchen table is where a child is most relaxed, and that is worth a lot at this age. I bring all the resources with me.",
      showAreas: true,
      points: [
        "A parent or carer stays in the property throughout the session",
        "I bring cubes, cards, books and worksheets, so you need nothing but a table",
        "Travel is included within [X] miles of Portsmouth, then [TRAVEL FEE] per session",
        "A quiet room away from screens and siblings makes a real difference",
        "I never transport children",
      ],
      image: "/brand/home-session.webp",
      imageAlt: "Counting cubes and a phonics flashcard on a kitchen table",
    },
  ],

  gettingStarted: [
    {
      n: "01",
      title: "Get in touch",
      body: "Fill in the form, call, or message the Facebook page. Whatever is easiest.",
    },
    {
      n: "02",
      title: "A free 15 minute chat",
      body: "We talk about how your child is getting on and what would help most.",
    },
    {
      n: "03",
      title: "First session",
      body: "Gentle, game based, and you get a note afterwards on what I noticed.",
    },
    {
      n: "04",
      title: "A regular slot",
      body: "Weekly usually works best. We review after six sessions.",
    },
  ],

  pricing: [
    {
      label: "Single session",
      price: "[PRICE]",
      duration: "[45] minutes, online or face to face",
      note: "Pay after each session by bank transfer. No commitment to book again.",
    },
    {
      label: "Block of six",
      price: "[BLOCK]",
      duration: "Six [45] minute sessions",
      note: "Works out at [PER SESSION] a session and holds your weekly slot. Valid for [X] weeks.",
    },
    {
      label: "Free intro chat",
      price: "Free",
      duration: "15 minutes, by phone or video",
      note: "A proper conversation about your child before you decide anything. No sales pitch.",
    },
  ],

  // Short, punchy card on the home page. Full pricing lives on /pricing.
  pricingSummary: {
    headlinePrice: "[PRICE]",
    per: "per [45] minute session",
    note: "Blocks of six sessions at [BLOCK PRICE]. No joining fee, no minimum commitment, and the first 15 minute chat is free.",
  },

  policies: [
    {
      title: "Travel",
      body: "Included within [X] miles of Portsmouth. Beyond that there is a [TRAVEL FEE] contribution per session. Online sessions have no travel charge at all.",
    },
    {
      title: "Cancellations",
      body: "24 hours notice and there is nothing to pay. Inside 24 hours the session is charged, because the slot cannot be filled. If your child is unwell, just tell me and we will rearrange.",
    },
    {
      title: "How to pay",
      body: "Bank transfer, after each session or in advance for a block. I send a simple invoice. No card fees, no subscriptions, no automatic renewals.",
    },
  ],

  // Nothing here ships until Sam has written permission for each quote.
  testimonials: [
    {
      quote:
        "[QUOTE] A parent quote about confidence, ideally naming the change they saw at home rather than a test score.",
      parentName: "[PARENT NAME]",
      childYear: "Year 1",
    },
    {
      quote:
        "[QUOTE] A quote about the phonics screening check or reading at bedtime works well here.",
      parentName: "[PARENT NAME]",
      childYear: "Reception",
    },
    {
      quote:
        "[QUOTE] One about online sessions, to reassure parents who doubt a six year old will engage on screen.",
      parentName: "[PARENT NAME]",
      childYear: "Year 2",
    },
  ],

  faqTeaser: [
    {
      q: "What ages do you tutor?",
      a: "Reception, Year 1 and Year 2, roughly ages 4 to 7.",
    },
    {
      q: "Do you record sessions?",
      a: "Only with your written consent, and by default it is the whiteboard rather than your child.",
    },
    {
      q: "Do you set homework?",
      a: "Five or ten minutes a few times a week. Little and often, never an argument.",
    },
  ],

  faqs: [
    {
      group: "Getting started",
      items: [
        {
          q: "What ages do you tutor?",
          a: "Key Stage 1, which means Reception, Year 1 and Year 2, roughly ages 4 to 7. That is where my classroom experience is, and it is where one to one help makes the biggest difference. I am happy to recommend someone else if your child is older.",
        },
        {
          q: "How many sessions will my child need?",
          a: "Most families start weekly and review after six sessions. Some children need a short burst of six to eight weeks before the phonics check, others stay for a school year. I will tell you honestly when I think we are done.",
        },
        {
          q: "What happens in the first session?",
          a: "We keep it light. I get to know your child, play a few games that quietly tell me what they can do, and start on something they will succeed at. You get a short note afterwards with what I noticed and what I plan next.",
        },
      ],
    },
    {
      group: "Online sessions",
      items: [
        {
          q: "What do we need for an online session?",
          a: "A tablet or laptop, a stable internet connection and a quiet spot. Headphones help in a busy house. A stylus is a bonus, not a requirement.",
        },
        {
          q: "Do you record sessions?",
          a: "Only with your written consent, and by default I record the whiteboard and my voice rather than video of your child. A four minute clip of how we tackled column addition is far more useful for revision. Clips are shared only with your family, through a link I can revoke, and deleted after 12 months or when tutoring ends.",
        },
        {
          q: "Will a five year old really concentrate on a screen?",
          a: "With the right pacing, yes. Sessions are 30 to 45 minutes, activities change every few minutes, and the shared whiteboard keeps their hands busy. If it genuinely is not working for your child, I will say so and we will switch to face to face.",
        },
      ],
    },
    {
      group: "Face to face sessions",
      items: [
        {
          q: "Which areas do you travel to?",
          a: "Portsmouth, Southsea, Cosham, Drayton, Farlington, Havant, Waterlooville, Gosport, Fareham and Portchester. Travel is included within [X] miles, with a small charge beyond that. Anywhere further, online is the sensible option.",
        },
        {
          q: "Can I stay during the session?",
          a: "Yes, always, whether we are at my home or yours. For home visits a parent or carer needs to be in the property throughout.",
        },
      ],
    },
    {
      group: "Progress and reports",
      items: [
        {
          q: "Do you set homework?",
          a: "Something small, usually five or ten minutes a few times a week. Little and often beats a long session at the weekend, and I will never send home something that causes an argument.",
        },
        {
          q: "How will I know if it is working?",
          a: "You get a short note after every session on what we covered and what to practise. Every half term I write a slightly longer summary of progress against the objectives we are working on.",
        },
        {
          q: "Do you work with children with additional needs?",
          a: "Often, yes. I have taught children with dyslexia, speech and language needs, ADHD and autism in mainstream KS1 classrooms. Tell me what helps your child at school and we will build on that. If your child needs specialist provision I will say so rather than take your money.",
        },
      ],
    },
    {
      group: "Safeguarding and data",
      items: [
        {
          q: "Can I see your DBS certificate?",
          a: "Yes. I hold an Enhanced DBS and keep it on the Update Service, so you can check it is current yourself. I will bring the certificate to the first session.",
        },
        {
          q: "What information do you keep about my child?",
          a: "As little as possible: your name, email and phone, your child's first name and year group, and my session notes. Nothing else, no date of birth, no address beyond what I need to visit. It is deleted 12 months after tutoring ends.",
        },
      ],
    },
  ],

  /** /pupil-area. Signposting only in v1: no auth on this site, Google Classroom is the login. */
  pupilArea: {
    enabled: true,
    // When appEnabled is true, sign in affordances point at the pupil app (appUrl).
    // When false, they point at Google Classroom directly (links[0].href).
    appEnabled: false,
    appUrl: "https://pupils.growingmindstutoring.co.uk",
    signIn: {
      cta: "Pupil area",
      lead: "For current families. Sign in with the Google account you use for Classroom.",
    },
    intro:
      "Everything for your child's sessions lives in one place: your own Google Classroom. There is no separate password for this website, and nothing for your child to remember.",
    note: "You sign in with the Google account you gave me when we started. Your classroom is private to your family, and only you and I can see it.",
    links: [
      {
        icon: "graduation-cap",
        title: "Google Classroom",
        body: "Homework, marked work, my comments and the class stream. One classroom per child, private to your family.",
        cta: "Sign in with Google",
        href: "[GOOGLE CLASSROOM URL]",
      },
      {
        icon: "pen-line",
        title: "Session whiteboard",
        body: "The shared board we draw on together. Every page from every session is saved here for revision.",
        cta: "Open your board",
        href: "[BITPAPER URL]",
      },
      {
        icon: "monitor",
        title: "Join your session",
        body: "The video link for your slot. It is the same link every week, and it is also pinned in your Classroom.",
        cta: "Join the call",
        href: "[GOOGLE MEET URL]",
      },
    ],
    records: [
      "Homework, marked work and my comments stay in your Google Classroom, which doubles as your child's record of achievement. Whiteboard pages from each session are saved so we can pick up where we left off.",
      "Recordings, if you have consented to them, are short whiteboard clips in a Google Drive folder shared only with your family. You can ask me to delete anything at any time.",
    ],
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
    consent:
      "I am happy for Sam to use these details to reply to my enquiry, as described in the privacy notice.",
    childDataHint:
      "Please do not include your child's name or anything sensitive. Year group is all I need to begin.",
  },

  banners: {
    waitlist:
      "I am currently full. Join the waitlist and I will be in touch as soon as a slot opens up.",
    paused:
      "Tutoring is paused for now. Follow the Facebook page for news of new slots.",
  },

  booking: {
    enabled: true,
    title: "Book a free 15 minute chat",
    body: "Pick a time that suits you. We will talk about how your child is getting on and what would help most. No commitment either way.",
    calUrl: "[CAL.COM URL]",
  },

  legal: {
    privacy: {
      title: "Privacy notice",
      updated: "[DATE]",
      sections: [
        {
          h: "Who I am",
          p: "Growing Minds Tutoring is run by [FULL NAME], a self employed qualified teacher based in Portsmouth. I am the data controller for the information described here. You can reach me at hello@growingmindstutoring.co.uk or on 07921 080947.",
        },
        {
          h: "What I collect",
          p: "From the enquiry form: your name, email address, optional phone number, your child's year group, the subjects and session type you are interested in, and your message. Once tutoring starts: your child's first name and my session notes. Please do not send me anything more than that. I do not collect dates of birth, medical records or school reports unless you choose to share something relevant, in which case I keep only what I need.",
        },
        {
          h: "Why I collect it, and my lawful basis",
          p: "To reply to your enquiry and to deliver tutoring. My lawful basis is legitimate interests for responding to an enquiry, and contract for delivering sessions you have booked. Recordings rely on your consent, which is separate and optional.",
        },
        {
          h: "Children's data",
          p: "My pupils are under 13, so the ICO Children's Code applies and I keep collection to the minimum described above. There is no profiling, no advertising and no sharing with third parties for their own purposes.",
        },
        {
          h: "Recordings",
          p: "Sessions are only recorded with your written consent. By default I record the whiteboard and my voice, not video of your child. Recordings are stored in the UK or EU, shared only with your family through a link that can be revoked, and deleted after 12 months or when tutoring ends.",
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
          p: "Nothing is recorded without your written consent, which you can withdraw at any time without affecting the tutoring. Recordings are whiteboard and audio by default, shared only with your family through a link I can revoke, and deleted after 12 months or at the end of tutoring, whichever comes first.",
        },
        {
          h: "7. Progress",
          p: "I will be honest about progress, including when I think tutoring is no longer needed or when your child would be better served by a specialist. I cannot guarantee a particular outcome, level or test result.",
        },
      ],
    },
  },

  footerNote: "Every child can achieve. With the right support, they will thrive.",
  legalNote: "Enhanced DBS checked, registered on the DBS Update Service.",
} as const;

export type Site = typeof site;
