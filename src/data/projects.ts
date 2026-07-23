export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'p1',
    number: '#01',
    title: 'Edge AI Vision Node',
    category: 'Computer Vision & Hardware',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    description: 'Autonomous micro-camera unit with onboard neural acceleration for real-time safety compliance and anomaly detection.',
    tags: ['ESP32-S3', 'TensorFlow Lite', 'MQTT'],
  },
  {
    id: 'p2',
    number: '#02',
    title: 'Smart Mesh Grid',
    category: 'Wireless Sensor Networks',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80',
    description: 'Decentralized LoRaWAN mesh node array monitoring urban microclimates, air quality, and power grid consumption.',
    tags: ['LoRaWAN', 'STM32', 'InfluxDB'],
  },
  {
    id: 'p3',
    number: '#03',
    title: 'Autonomous Rover Bot',
    category: 'Robotics & Control',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    description: 'LiDAR-equipped 4WD rover with ROS2 path planning and obstacle avoidance algorithms for terrain mapping.',
    tags: ['ROS2', 'LiDAR', 'Jetson Nano'],
  },
  {
    id: 'p4',
    number: '#04',
    title: 'Drone Telemetry Mesh',
    category: 'Aerospace & Embedded',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
    description: 'Custom flight controller integration streaming high-rate GPS, telemetry, and live camera feeds over 5G/LTE bonds.',
    tags: ['Pixhawk', 'PX4', 'WebRTC'],
  },
  {
    id: 'p5',
    number: '#05',
    title: 'Solar Power Tracker',
    category: 'CleanTech & Energy',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    description: 'Dual-axis MPPT solar energy harvesting system with cloud diagnostics and predictive battery maintenance.',
    tags: ['Arduino', 'Cloud IoT', 'MPPT'],
  },
  {
    id: 'p6',
    number: '#06',
    title: 'Voice AI Copilot',
    category: 'Generative AI & Audio',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80',
    description: 'Local offline voice assistant executing natural language commands for lab equipment and circuit bench control.',
    tags: ['LLM', 'Whisper', 'Raspberry Pi 5'],
  },
];
