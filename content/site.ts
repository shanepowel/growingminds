// content/site.ts: the whole CMS. Sam edits this in GitHub's web editor; every save deploys.
// [SQUARE BRACKETS] mark data still to come from Sam. Do not invent values.

export type Status = "accepting" | "waitlist" | "paused";

export const site = {
  /** The pause switch. accepting = normal. waitlist = form live, copy changes. paused = form hidden. */
  status: "accepting" as Status,

  business: {
    name: "Growing Minds Tutoring",
    tagline: "KS1 specialist tutoring in Waterlooville and online",
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
    // The live host. Used for canonical URLs, the sitemap, OG and structured data.
    domain: "www.growingmindstutoring.co",
    // Sam is based in Waterlooville. Still to confirm with her which of these she travels to.
    areasCovered: [
      "Waterlooville", "Portsmouth", "Southsea", "Cosham", "Drayton",
      "Farlington", "Havant", "Gosport", "Fareham", "Portchester",
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
    whyITutor: "[WHY I TUTOR]",
  },

  brand: {
    tagline: "Little steps. Growing confidence. Growing minds.",
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
      { href: "/tutoring-waterlooville", label: "Tutoring in Waterlooville" },
      { href: "/pupil-area", label: "Pupil area" },
    ],
    legal: [
      { href: "/policies", label: "Privacy notice" },
      { href: "/policies?tab=terms", label: "Tutoring terms" },
    ],
    credentials: ["KS1 Specialist Tutoring", "Qualified Primary Teacher", "15+ Years' Experience", "Enhanced DBS"],
    areaLine: ["Waterlooville and surrounding areas", "Face-to-face and online sessions"],
    areasHeading: "Tutoring across Waterlooville and surrounding areas",
    copyright: "Growing Minds Tutoring. Sole trader, Waterlooville.",
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
    lead: "Kind, individual support in maths, reading, phonics and early writing for KS1 children in Waterlooville, the surrounding areas and online.",
    primaryCta: "Book a free discovery call",
    secondaryCta: "Get in touch",
    scriptNote: "Little steps. Growing confidence. Growing minds.",
    imageAlt: "Sam smiling at her tutoring desk with a tablet, phonics and maths books, and counting cubes",
  },

  trust: [
    { icon: "graduation-cap", title: "Qualified primary school teacher", body: "Over 15 years of teaching experience in KS1, including KS1 leadership and leading maths in a primary school." },
    { icon: "shield-check", title: "Enhanced DBS checked", body: "Your child's safety and wellbeing is my priority." },
    { icon: "monitor", title: "Online and home tutoring", body: "Flexible sessions online or face to face." },
  ],

  // `session` is one or more paragraphs.
  subjects: [
    {
      slug: "maths",
      title: "Maths",
      icon: "plus",
      blurb: "Number, place value and the methods their school uses.",
      long: "Most KS1 maths worries stem from shaky number sense. We break down key concepts and use practical resources to ensure your child understands and embeds these concepts before moving on to written methods.",
      outcomes: [
        "Counting, place value and number bonds to 10 and 20",
        "Addition and subtraction, including the missing number puzzles that catch children out",
        "Times tables groundwork: counting in 2s, 5s and 10s",
        "Shape, measure and telling the time",
        "Word problems, and how to work out what is actually being asked",
      ],
      session: [
        "We will start with a ten minute warm-up game focusing on previous learning, then move on to a practical activity using a range of resources to support your child's understanding. Finally, we will apply any new learning from the session to a slightly more independent task, with one-to-one support, so your child feels a sense of success and achievement.",
      ],
    },
    {
      slug: "early-reading",
      title: "Early Reading",
      icon: "book-open",
      blurb: "Decoding, fluency and actually enjoying a book.",
      long: "Reading in KS1 is two jobs at once: decoding the words, and understanding them. We build both, with books that are pitched to the phonics phase your child is currently working on.",
      outcomes: [
        "Blending and decoding unfamiliar words",
        "Common exception words on sight",
        "Reading with expression rather than word by word",
        "Retelling and answering questions about what they read",
        "Building the habit of choosing to read",
      ],
      session: [
        "We will discuss key features of the book, such as the title and pictures, which will support your child's understanding. We will then review any recurring sounds they are likely to see in the text, to support independent decoding. I will support your child with decoding any tricky words and help them break words down into manageable segments. Throughout the reading session, we will chat about the book so I can assess their understanding of the text in a fun and informal way.",
      ],
    },
    {
      slug: "phonics",
      title: "Phonics",
      icon: "type",
      blurb: "Systematic phonics, matched to your school's scheme.",
      long: "I have an extensive understanding of a range of phonics programmes, including Little Wandle and Letters and Sounds, so I can work alongside whatever programme your child is currently using at school. I will ask which scheme the school uses before the first session.",
      outcomes: [
        "Phases 2 to 5 sounds, in order, with gaps filled",
        "Digraphs, trigraphs and alternative spellings",
        "Segmenting for spelling as well as blending for reading",
        "Preparation for the Year 1 phonics screening check",
        "Nonsense word practice, because the check uses them",
      ],
      session: [
        "Sound review with flashcards, a new sound taught, reading and writing words with it, then a short game to make it stick.",
      ],
    },
    {
      slug: "handwriting",
      title: "Handwriting",
      icon: "pencil",
      blurb: "Letter formation, posture and comfortable stamina.",
      long: "Inconsistent writing is usually a grip and formation problem, not carelessness. Fixing it early saves years of frustration and makes every other subject easier. I am trained in a range of handwriting schemes, including Kinetic Letters, which many schools are now using.",
      outcomes: [
        "Correct letter formation and starting points",
        "Pencil grip, paper position and posture",
        "Consistent size and sitting letters on the line",
        "Joining letters when they are ready",
        "Writing for longer without aching hands",
      ],
      session: [
        "A short physical warm up for the hands, focused practice on one letter family, then applying it to real writing so it transfers.",
      ],
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
      session: [
        "Each session will be tailored to your child's needs, interests and learning goals. We will usually begin with a short warm-up activity to build confidence and revisit previous learning.",
        "We will then focus on a specific writing skill, such as developing ideas, organising writing, choosing effective vocabulary, improving sentence structure, using punctuation or checking work. I will model the skill clearly before guiding your child through practical activities and writing tasks.",
        "There will be plenty of opportunities for your child to share ideas, ask questions and practise independently, with support and encouragement throughout. We may use games, discussion, pictures, planning activities and creative prompts to keep sessions engaging.",
      ],
    },
  ],

  // `title` is the short label (home cards, tabs); `heading` and `body` fill the
  // "How a session works" tab on /curriculum.
  modes: [
    {
      id: "online",
      icon: "monitor",
      title: "Online",
      short: "A shared whiteboard, a tablet or laptop, and 45 focused minutes.",
      heading: "How does an online session work?",
      body: [
        "Online sessions take place using a secure video call, allowing your child to learn from home in a comfortable and familiar environment.",
        "Before the session, I will send you the joining details and any resources your child may need. Your child will need a suitable device, a reliable internet connection, and a quiet space where they can work without distractions.",
        "During the session, we may use screen sharing, interactive activities, digital whiteboards and online resources to make learning engaging and effective. Sessions are tailored to your child's needs, interests and learning goals, with regular opportunities for discussion, questions and feedback.",
        "At the end of each session, I will briefly review what we have covered and explain any suggested activities or next steps.",
      ],
      image: "/brand/whiteboard-task.webp",
      imageAlt: "Illustration of a completed maths task, 7 + 3 = 10, on the shared whiteboard",
    },
    {
      id: "at-mine",
      icon: "house",
      title: "At my home in Waterlooville",
      short: "A calm, quiet and safe learning environment for your child to learn in. Off street parking is available.",
      heading: "At my home in Waterlooville",
      body: [
        "Sessions take place in a comfortable, quiet and welcoming space at my home, providing your child with a focused environment for learning.",
        "Before the first session, I will discuss your child's needs, learning goals and any relevant information that may help me plan effectively. I will provide the necessary resources and equipment, although your child may wish to bring any schoolwork, books or stationery that would be useful.",
        "During each session, we may use a range of activities, resources and practical approaches to make learning engaging and effective. Sessions are tailored to your child's individual needs, interests and learning goals, with regular opportunities for discussion, questions and feedback.",
        "At the end of each session, I will briefly review what we have covered and explain any suggested activities or next steps.",
      ],
      image: "/brand/tutoring-space.webp",
      imageAlt: "Phonics, Early Reading, Maths and Handwriting books, a tablet and an Aa Bb notebook on Sam's desk",
    },
    {
      id: "at-yours",
      icon: "car",
      title: "At your home",
      short: "I will bring all the learning resources needed for a fun and engaging tutoring session in the comfort of your own home.",
      heading: "At your home",
      body: [
        "Sessions will take place in a comfortable, quiet and welcoming space in your home, providing your child with a focused environment for learning.",
        "Before the first session, I will discuss your child's needs, learning goals and any relevant information that may help me plan effectively. I will bring the necessary resources and equipment, although it may be helpful for your child to have any relevant schoolwork, books or stationery nearby.",
        "During each session, I will use a range of activities, resources and practical approaches to make learning engaging and effective. Sessions will be tailored to your child's individual needs, interests and learning goals, with regular opportunities for discussion, questions and feedback.",
        "At the end of each session, I will briefly review what we have covered and explain any suggested activities or next steps.",
      ],
      showAreas: true,
      image: "/brand/home-session.webp",
      imageAlt: "Illustration of counting cubes and a phonics flashcard on a kitchen table",
    },
  ],

  gettingStarted: [
    { n: "01", title: "Get in touch", body: "Please fill out the online enquiry form or message me via social media." },
    { n: "02", title: "A free 15 minute chat", body: "We will begin with a free 15 minute chat to discuss your child's needs, interests and learning goals. This is an opportunity for you to ask any questions and for us to decide whether my tutoring support would be a good fit for your child." },
    { n: "03", title: "First session", body: "The first session will focus on getting to know your child. Through short activities and games, I will identify the areas we will work on and begin to understand how your child learns best. I will then use this information to plan engaging, personalised sessions." },
    { n: "04", title: "A regular slot", body: "We will agree on a regular weekly slot that works best for you and your child. This arrangement will be reviewed after roughly six weeks, when I will provide detailed feedback on your child's progress and discuss any recommended next steps." },
  ],

  /** Where every "ask for a quote" button points. The contact form pre-fills its
   *  message from `form.prefill` using the `enquiry` query parameter. */
  blockQuoteHref: "/contact?enquiry=block-quote",

  // All prices are for a 45 minute session.
  pricing: [
    { label: "Online", price: "£27", note: "Secure video call, from home." },
    { label: "At my home (face to face)", price: "£35", note: "In Waterlooville, off street parking available." },
    { label: "At your home (face to face)", price: "£40", note: "For longer distances, an additional travel fee of £5 may apply." },
    { label: "Block of six", price: "Price on application", note: "Six 45 minute sessions that hold your regular weekly slot.", cta: "Ask for a quote" },
    { label: "Introductory chat", price: "Free", note: "15 minutes to talk about your child's needs, interests and learning goals." },
  ],

  // Short pricing card on the home page. Full pricing lives on /costs.
  pricingSummary: {
    heading: "Tutoring prices, based on 45 minute sessions",
    prices: [
      { price: "£27", label: "Online" },
      { price: "£35", label: "At my home (face to face)" },
      { price: "£40", label: "At your home (face to face)", note: "For longer distances, an additional travel fee of £5 may apply." },
    ],
    note: "Blocks of six sessions are also available, price on application. No joining fee, no minimum commitment, and the first 15 minute chat is free.",
    fullCta: "See full pricing",
    quoteCta: "Ask for a block quote",
  },

  costs: {
    lead: "No joining fee and no contract. Pay for the sessions you have. All prices are for a 45 minute session.",
  },

  policies: [
    { title: "Travel", body: "For longer distances, an additional travel fee of £5 per session may apply. Online sessions have no travel charge." },
    { title: "Cancellations", body: "24 hours notice and there is nothing to pay. Inside 24 hours the session is charged, because the slot cannot be filled. If your child is unwell, just tell me and we will rearrange." },
    { title: "How to pay", body: "Bank transfer, after each session or in advance for a block. I send a simple invoice. No card fees, no subscriptions, no automatic renewals." },
  ],

  // Nothing here ships until Sam has written permission for each quote.
  // Entries still holding a [QUOTE] placeholder are hidden, not shown as gaps.
  testimonials: [
    {
      quote: "Sam has been fantastic at supporting our child with phonics and helping to develop his reading skills. She makes learning fun, builds confidence and explains things in a way that really clicks. We have already seen such a difference. Thank you!",
      byline: "Shane Powell, parent",
    },
  ],

  /** /tutoring-waterlooville, the local landing page. */
  localPage: {
    metaTitle: "KS1 tutoring in Waterlooville",
    metaDescription: "A Waterlooville based qualified primary school teacher offering KS1 tutoring, online or face to face across Waterlooville and surrounding areas.",
    eyebrow: "Waterlooville and surrounding areas",
    heading: "KS1 tutoring in Waterlooville",
    intro: "I am a qualified primary school teacher with over 15 years' experience in Key Stage 1, offering one-to-one tutoring for children aged 5 to 7. Sessions take place at my home in Waterlooville, at your home within Waterlooville and surrounding areas, or online.",
    cta: "Enquire about a Waterlooville slot",
    imageAlt: "Sam, a qualified primary school teacher based in Waterlooville, at her desk",
    areasHeading: "Areas I cover around Waterlooville",
    areasLead: "Face to face sessions at your home in any of these areas. Anywhere further afield, online works just as well and there is no travel to pay for.",
    optionsHeading: "Options and prices",
    options: [
      { icon: "monitor", title: "Online", price: "£27", note: "Secure video call, from home." },
      { icon: "house", title: "At my home in Waterlooville", price: "£35", note: "Off street parking available." },
      { icon: "car", title: "At your home", price: "£40", note: "For longer distances, an additional travel fee of £5 may apply." },
    ],
    optionsNote: "All sessions are 45 minutes.",
    safeguardingHeading: "Safeguarding",
    safeguarding: "Enhanced DBS certificate, registered on the DBS Update Service, with annual safeguarding training.",
    contactHeading: "Get in touch",
    contactLead: "Email me, or send an enquiry through the contact form. I reply within one working day.",
  },

  // FAQ answers are a list of blocks: a string is a paragraph, an array is a bulleted list.
  faqs: [
    {
      group: "Getting started",
      items: [
        { q: "What ages do you tutor?", a: ["Growing Minds Tutoring specialises in Key Stage 1, primarily supporting children aged 5 to 7. Sessions are tailored to your child's individual starting point rather than simply their age."] },
        { q: "What subjects do you cover?", a: [["Phonics and early reading", "English and writing", "Maths", "Handwriting", "Spelling", "Building confidence and independence"]] },
        { q: "Who will be tutoring my child?", a: ["All sessions are delivered by a qualified primary school teacher with over 15 years' teaching experience, specialising in KS1, with extensive experience in KS1 leadership and leading mathematics within a primary school."] },
        { q: "How do I get started?", a: ["Simply get in touch for an informal chat about your child, the support you are looking for, availability and the most suitable tutoring option."] },
        {
          q: "What happens in the first session?",
          a: [
            "The first session will be a relaxed opportunity for your child to get to know me and become familiar with how tutoring works. We will talk about their interests, strengths and any areas they find challenging, helping me to understand how best to support them.",
            "I may use a range of activities to get a clearer picture of your child's current skills and learning needs. This will not feel like a formal test, and your child will be encouraged throughout.",
            "By the end of the session, I will have a better understanding of how to tailor future sessions so that they are engaging, supportive and focused on helping your child make progress.",
          ],
        },
        {
          q: "How many sessions will my child need?",
          a: [
            "Every child is different, so there is no set number of sessions. Some children may benefit from a short block of targeted support, while others may benefit from regular, ongoing sessions to build confidence and secure their learning.",
            "Your child's progress will be continually reviewed, and I will always be open and honest about whether I feel continued tutoring would be beneficial. There is no expectation to commit to tutoring for a set length of time.",
          ],
        },
        { q: "How often should my child have tutoring?", a: ["For most KS1 children, one regular session per week is a good starting point. Consistency tends to be more beneficial than occasional intensive sessions."] },
        { q: "How long is each session?", a: ["Standard tutoring sessions are 45 minutes, providing focused learning time while remaining manageable and engaging for younger children."] },
      ],
    },
    {
      group: "Sessions",
      items: [
        { q: "Where do tutoring sessions take place?", a: ["Flexible options are available: at my home in Waterlooville, at your home within Waterlooville and surrounding areas, or online."] },
        { q: "Are sessions tailored to my child?", a: ["Absolutely. There is no one-size-fits-all programme. Sessions are planned around your child's individual needs, confidence and learning style, using appropriate resources and activities."] },
        { q: "Do you follow what my child is learning at school?", a: ["Sessions are informed by the National Curriculum and KS1 expectations, but adapted to your child's individual needs. Areas identified by your child's teacher can also be incorporated."] },
        {
          q: "Can I stay during the sessions?",
          a: [
            "Yes, you are welcome to stay during your child's sessions, particularly if this helps them feel comfortable and settled.",
            "I will create a calm, supportive learning environment and guide your child through the activities. Some children engage best when a parent or carer is nearby, while others become more independent when given space. We can discuss what is likely to work best for your child and adjust this over time.",
            "You are also welcome to check in with me before or after sessions so we can share feedback and discuss your child's progress.",
          ],
        },
      ],
    },
    {
      group: "Online sessions",
      items: [
        {
          q: "What do we need for an online session?",
          a: [
            "Your child will need a suitable device, such as a laptop, desktop computer or tablet, with a reliable internet connection. A quiet, comfortable space where they can work without too many distractions is also helpful.",
            "Please make sure the device has a working camera and microphone. I will provide details of the online platform and any joining instructions before the session.",
            "Any resources or materials needed for the session will be discussed in advance.",
          ],
        },
        {
          q: "Do you record sessions?",
          a: [
            "No, sessions are not routinely recorded. This helps create a comfortable, private learning environment for your child.",
            "If there is ever a specific reason to record a session, this would be discussed with you in advance, and recording would only take place with your consent. Any recording would be handled securely and deleted when it is no longer needed.",
          ],
        },
        {
          q: "Will a five-year-old really concentrate on a screen?",
          a: [
            "Yes, many five-year-olds can engage well with online learning when sessions are carefully planned around their age, interests and attention span.",
            "Sessions are kept interactive and varied, using conversation, games, visual resources and practical activities rather than expecting your child to sit passively and watch a screen. Short activities and regular changes of pace help maintain focus, and sessions can be adapted if your child needs a movement break or a different approach.",
            "Every child is different, so I will get to know your child and adjust the sessions to help them feel comfortable, engaged and ready to learn.",
          ],
        },
      ],
    },
    {
      group: "Supporting your child",
      items: [
        { q: "Can you help if my child has fallen behind at school?", a: ["Yes. Tutoring can identify and address gaps through targeted, manageable steps, helping children develop secure foundations and the confidence to use their learning independently."] },
        { q: "Can you support a child who lacks confidence?", a: ["Yes. Growing Minds provides a calm, encouraging and supportive environment where children can make mistakes, ask questions and experience success without the pressures of a busy classroom."] },
        { q: "My child is shy or reluctant to work. Is that a problem?", a: ["Not at all. Building a positive relationship comes first. Sessions are designed to be warm, positive and age-appropriate rather than feeling like extra school."] },
        {
          q: "Do you work with children with additional needs?",
          a: [
            "I work with children with a range of additional needs and will take the time to understand your child's individual strengths, needs and learning preferences.",
            "Sessions are tailored to help your child feel comfortable, supported and able to make progress. I will work closely with you to identify suitable approaches and adapt activities where needed.",
            "If your child has specific needs or receives support from other professionals, I am happy to discuss how tutoring might complement their existing provision.",
          ],
        },
        { q: "Can you help prepare my child for the Year 1 Phonics Screening Check?", a: ["Yes. Targeted phonics support can include recognising graphemes, blending, reading real and pseudo (\"alien\") words, and developing confidence with the skills assessed in the check."] },
      ],
    },
    {
      group: "Progress and homework",
      items: [
        { q: "Will I know how my child is progressing?", a: ["Yes. I will keep you updated on what we are working on, celebrate progress and let you know about areas we are continuing to develop."] },
        {
          q: "Do you set homework?",
          a: [
            "Homework is not usually set as a requirement, but I may occasionally suggest a short, manageable activity to practise a skill between sessions. Any activities will be tailored to your child's needs and designed to feel achievable rather than overwhelming. A few minutes of purposeful practice can be more valuable than large amounts of additional work.",
            "I will discuss any suggested practice with you and make sure it fits comfortably alongside your child's other commitments.",
          ],
        },
      ],
    },
    {
      group: "Safeguarding and data",
      items: [
        { q: "Can I see your DBS certificate?", a: ["Yes. I hold an Enhanced DBS certificate and am happy to provide details on request. This gives families peace of mind that appropriate safeguarding checks have been completed before tutoring begins, including for face-to-face sessions."] },
        {
          q: "What information do you need about my child?",
          a: [
            "Before tutoring begins, I would like to understand a little about your child's needs, strengths and interests. Helpful information may include:",
            [
              "Their age and school year",
              "The subjects or areas they would like support with",
              "Any specific difficulties, concerns or goals",
              "What they enjoy and what motivates them",
              "Any relevant information from school, such as recent assessments or teacher feedback",
              "Any additional needs, learning differences or support strategies that may help",
              "Their preferred learning style, if known",
              "Any important medical, communication or safeguarding information",
            ],
            "You only need to share information that is relevant to your child's tutoring. All information will be treated sensitively and used to help plan appropriate, personalised sessions.",
          ],
        },
      ],
    },
  ],

  // Short questions teased on the home page; full set in `faqs`.
  faqTeaser: [
    { q: "What ages do you tutor?", a: "I specialise in Key Stage 1, mainly supporting children aged 5 to 7." },
    { q: "Do you set homework?", a: "Follow up activities can be set, but this is kept to a minimum. Getting the most out of each session is the main focus." },
  ],

  /** /pupil-area. Signposting only in v1: no auth on this site, Google Classroom is the login. */
  pupilArea: {
    enabled: true,
    // When appEnabled is true, sign in affordances point at the pupil app (appUrl).
    // When false, they point at Google Classroom directly (links[0].href or its fallback).
    appEnabled: false,
    appUrl: "https://pupils.growingmindstutoring.co",
    intro: "Everything for your child's sessions lives in one place: your own Google Classroom. There is no separate password for this website, and nothing for your child to remember.",
    note: "You sign in with the Google account you gave me when we started. Your classroom is private to your family, and only you and I can see it.",
    links: [
      { icon: "graduation-cap", title: "Google Classroom", body: "Homework, marked work, my comments and the class stream. One classroom per child, private to your family.", cta: "Sign in with Google", href: "[GOOGLE CLASSROOM URL]", fallback: "https://classroom.google.com" },
      { icon: "pen-line", title: "Session whiteboard", body: "The shared board we draw on together. Every page from every session is saved here for revision.", cta: "Open your board", href: "[BITPAPER URL]", fallback: "https://bitpaper.io" },
      { icon: "monitor", title: "Join your session", body: "The video link for your slot. It is the same link every week, and it is also pinned in your Classroom.", cta: "Join the call", href: "[GOOGLE MEET URL]", fallback: "https://meet.google.com" },
    ],
    records: [
      "Homework, marked work and my comments stay in your Google Classroom, which doubles as your child's record of achievement. Whiteboard pages from each session are saved so we can pick up where we left off.",
      "Recordings, if you have consented to them, are short whiteboard clips in a Google Drive folder shared only with your family. You can ask me to delete anything at any time.",
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
        { h: "No child faces, no video", p: "By default I record the whiteboard and my voice only, and only if you have said yes in writing. Consent can be withdrawn at any time." },
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
      { id: "at-mine", label: "At Sam's home in Waterlooville" },
      { id: "at-yours", label: "At our home" },
    ],
    consent: "I am happy for Sam to use these details to reply to my enquiry, as described in the privacy notice.",
    /** Pre-filled "How can I help?" text, keyed by the `enquiry` query parameter. */
    prefill: {
      "block-quote": "I'd like a quote for a block of six sessions.",
    } as Record<string, string>,
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
          p: "Growing Minds Tutoring is run by [FULL NAME], a self employed qualified teacher based in Waterlooville. I am the data controller for the information described here. You can reach me at hello@growingmindstutoring.co.",
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
          p: "Payment is by bank transfer, either after each session or in advance for a block of six. Details are on the invoice I send. Block prices are available on request, and I will confirm how long a block is valid for when I send your quote.",
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
} as const;

export type Site = typeof site;
