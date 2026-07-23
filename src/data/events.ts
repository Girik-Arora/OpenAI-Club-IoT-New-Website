export interface EventItem {
  id: string;
  year: '2025' | '2026';
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  attendees: string;
}

export const eventsData: EventItem[] = [
  // 2026 Events
  {
    id: 'e2026-1',
    year: '2026',
    title: 'AI-IoT Hackathon 2026',
    category: 'Hackathon & Expo',
    date: 'FEB 14 - 16, 2026',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80',
    description: 'A 36-hour flagship hackathon bringing together over 300 students to build autonomous hardware prototypes powered by edge neural models.',
    attendees: '300+ Participants',
  },
  {
    id: 'e2026-2',
    year: '2026',
    title: 'Edge Intelligence Workshop',
    category: 'Technical Hands-on',
    date: 'MAR 22, 2026',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    description: 'Deep dive into deploying lightweight LLMs and computer vision pipelines directly on ESP32-S3 and ARM Cortex microcontrollers.',
    attendees: '120 Attendee Capacity',
  },
  {
    id: 'e2026-3',
    year: '2026',
    title: 'Robotics & Sensor Fusion Summit',
    category: 'Research Conference',
    date: 'APR 18, 2026',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    description: 'Keynotes and live demonstrations showcasing multi-modal sensor fusion, LiDAR integration, and real-time telemetry streaming.',
    attendees: '200+ Engineers & Guests',
  },
  {
    id: 'e2026-4',
    year: '2026',
    title: 'Smart City IoT Expo',
    category: 'Project Showcase',
    date: 'MAY 10, 2026',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    description: 'Exhibition of 25+ student-developed smart grid, automated transit, and environmental sensing node prototypes evaluated by industry leaders.',
    attendees: '25 Project Teams',
  },

  // 2025 Events
  {
    id: 'e2025-1',
    year: '2025',
    title: 'Generative AI in Hardware',
    category: 'Technical Masterclass',
    date: 'NOV 08, 2025',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: 'Explored prompt-driven firmware generation, automated PCB layout optimization, and AI copilots for embedded C++ development.',
    attendees: '180 Attendees',
  },
  {
    id: 'e2025-2',
    year: '2025',
    title: 'IoT Starter Bootcamp 1.0',
    category: 'Beginner Workshop',
    date: 'SEP 15, 2025',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
    description: 'Introduced freshman engineering students to Arduino, Raspberry Pi programming, cloud MQTT brokers, and circuit safety basics.',
    attendees: '150 Freshmen Engineers',
  },
  {
    id: 'e2025-3',
    year: '2025',
    title: 'IEI Tech Symposium 2025',
    category: 'Paper Presentation',
    date: 'JUL 20, 2025',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    description: 'Student researchers presented peer-reviewed papers on wireless mesh networks, low-latency telemetry, and AI power management.',
    attendees: '40 Research Papers',
  },
  {
    id: 'e2025-4',
    year: '2025',
    title: 'Connected Drone Firmware Sprint',
    category: 'Hardware Sprint',
    date: 'APR 05, 2025',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
    description: 'Hands-on flight controller programming, GPS telemetry streaming, and obstacle avoidance using ultrasonic array arrays.',
    attendees: '12 Hardware Teams',
  },
];
