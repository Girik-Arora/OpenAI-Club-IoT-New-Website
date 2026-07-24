export interface EventItem {
  id: string;
  year: '2025' | '2026';
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  longDescription: string;
  highlights: string[];
  speaker: string;
  venue: string;
  attendees: string;
  reportUrl?: string;
}

export const eventsData: EventItem[] = [
  // 2026 Events
  {
    id: 'e2026-1',
    year: '2026',
    title: 'Orientation to IEI TCET & OpenAI Club IoT',
    category: 'Orientation & Induction',
    date: 'JUL 08, 2026',
    image: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-24_at_2.51.33_PM_khhaef',
    description: 'Official orientation session welcoming 2nd year B.Tech CSE (IoT) students to IEI TCET and OpenAI Club IoT, introducing club goals and initiatives.',
    longDescription: 'The Department of CSE (IoT) organized the IEI TCET Orientation Session for Academic Year 2026-2027. The session introduced first-year and second-year students to the Institution of Engineers (India) Student Chapter and OpenAI Club IoT, highlighting technical events, leadership opportunities, hands-on hardware sprints, and upcoming hackathons.',
    highlights: [
      'Overview of professional technical bodies & holistic career growth',
      'Introduction to faculty mentors, executive committee, and department leads',
      'Showcase of upcoming 2026-2027 flagship events including IoT Hackathons and Zephyr RTOS Workshops',
      'Interactive student Q&A on research paper presentation and project funding'
    ],
    speaker: 'Core Executive Committee & Faculty Mentors',
    venue: 'Online (Microsoft Teams)',
    attendees: '40+ Participants',
    reportUrl: '/reports/iei-tcet-orientation-2026.pdf',
  },
  {
    id: 'e2026-2',
    year: '2026',
    title: 'Automating Workflows through LLMs',
    category: 'Technical Seminar',
    date: 'JUL 10, 2026',
    image: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/DSC07870_nlv3rx',
    description: 'Technical seminar detailing modern autonomous workflow automation, AI agents, and Large Language Model integrations for smart IoT applications.',
    longDescription: 'Organized jointly by IEI TCET and OpenAI Club IoT, this workshop focused on automation pipelines powered by Large Language Models. Featuring a live working demo of local LLM deployment and automated resume screening tools, students learned how to integrate generative AI directly with software workflows.',
    highlights: [
      'Deep dive into Large Language Model (LLM) fundamentals and prompt engineering',
      'Step-by-step installation walkthrough for running local AI models on desktop workstations',
      'Live working demonstration of an AI automated resume screener and evaluator',
      'Bridging classroom theory with industry-standard workflow automation'
    ],
    speaker: 'Dr. Loukik Salvi (Assistant Professor, Computer Engineering)',
    venue: 'Seminar Hall - III, TCET',
    attendees: '75 Participants',
    reportUrl: '/reports/llm-workflow-automation-2026.pdf',
  },

  // 2025 Events
  {
    id: 'e2025-1',
    year: '2025',
    title: 'Mission Agent Space',
    category: 'Technical Workshop',
    date: 'AUG 21, 2025',
    image: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/agentspace_kgojds',
    description: 'Hands-on technical workshop focused on Google Cloud and cloud-based labs, exploring Agentic AI themes and building autonomous AI bots.',
    longDescription: 'Mission AgentSpace: Decoding Google Next Big Move delivered specialized training on cloud AI ecosystems and Agentic AI framework design. Delivered in collaboration with industry alumni, students participated in hands-on cloud labs creating autonomous AI agents.',
    highlights: [
      'Insights into Google Cloud AI infrastructure and Generative AI services',
      'Prompt Engineering techniques for structured cloud agent interactions',
      'Live hands-on lab building autonomous AI Agents in Google Cloud',
      'Industry career guidance and cloud certification pathways'
    ],
    speaker: 'Ms. Shachi Singh (Alumni & Assistant Manager - Deloitte)',
    venue: 'Seminar Hall III, TCET',
    attendees: '40 Participants',
    reportUrl: '/reports/mission-agentspace-2025.pdf',
  },
  {
    id: 'e2025-2',
    year: '2025',
    title: 'AIoT Workshop (Zephyr Event)',
    category: 'Hands-on & Ideathon',
    date: 'OCT 06, 2025',
    image: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/aiot_t3vow3',
    description: 'Explored AI & IoT integration using ThingSpeak cloud and hardware like ESP8266 and Raspberry Pi, concluding with an interactive student ideathon.',
    attendees: '25+ Participants',
    longDescription: 'Part of Technical Fest ZEPHYR 2025, this intensive workshop introduced embedded artificial intelligence and IoT cloud telemetry. Students constructed hardware circuits using ESP8266 microcontrollers and Raspberry Pi single-board computers, pushing sensor data to ThingSpeak cloud brokers.',
    highlights: [
      'Hardware setup and pinout wiring for ESP8266 & Raspberry Pi units',
      'Real-time cloud telemetry integration using ThingSpeak MQTT brokers',
      'Hands-on sensor calibration for environmental and motion data capture',
      'Interactive student ideathon pitching connected smart product concepts'
    ],
    speaker: 'Dr. Sujata Alegavi & Faculty Mentors',
    venue: 'IoT Specialization Laboratory, TCET',
    reportUrl: '/reports/aiot-workshop-zephyr-2025.pdf',
  },
  {
    id: 'e2025-3',
    year: '2025',
    title: 'Seminar on AI & Emotional Tone',
    category: 'Tech / AI Guest Seminar',
    date: 'APR 10, 2026',
    image: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/WhatsApp_Image_2026-07-24_at_3.00.01_PM_iffokg',
    description: 'Guest lecture delivered by Prof. Ronaldo Menezes (University of Exeter) examining how LLMs shape sentiment and emotional tone in written communication.',
    longDescription: 'Distinguished international guest lecture hosted by IEI TCET and OpenAI Club IoT. Professor Ronaldo Menezes from the University of Exeter delivered an insightful session analyzing how advanced language models interpret, mirror, and manipulate emotional tone in natural text.',
    highlights: [
      'Analysis of sentiment analysis algorithms and emotional embeddings in LLMs',
      'Exeter University research insights into human-AI communication dynamics',
      'Ethical considerations and psychological impact of AI-generated content',
      'Cross-departmental student participation with international faculty exchange'
    ],
    speaker: 'Prof. Ronaldo Menezes (University of Exeter, UK)',
    venue: 'Main Auditorium, TCET',
    attendees: '167 Participants',
    reportUrl: '/reports/ai-emotional-tone-2026.pdf',
  },
];
