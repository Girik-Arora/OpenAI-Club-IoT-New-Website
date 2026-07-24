export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  architecture: string;
  tags: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'p1',
    number: '#01',
    title: 'Vibration Analysis AI Prediction Model',
    category: 'Industrial Edge AI',
    image: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/image_2026-07-24_161759581_mkxr9l',
    description: 'Vibration analysis and predictive anomaly detection system powered by STM32 microcontrollers and NanoEdge AI Studio models.',
    longDescription: 'This project implements an industrial-grade edge predictive maintenance system designed to detect equipment failure before critical breakdowns occur. By mounting high-precision accelerometer sensors directly on rotating machinery, raw vibration signals are captured and processed directly on STM32 microcontrollers using lightweight NanoEdge AI Studio ML models.',
    features: [
      'Real-time tri-axial vibration signal sampling & Fast Fourier Transform (FFT) extraction',
      'On-device anomaly classification without cloud latency',
      'NanoEdge AI model trained directly for motor imbalance, bearing wear, and misalignment',
      'Instant warning telemetry alerts sent over local wireless industrial protocols'
    ],
    architecture: 'STM32 Microcontroller + NanoEdge AI Studio + Tri-Axial Accelerometer + Edge Telemetry',
    tags: ['STM32', 'NanoEdge AI', 'Predictive Maintenance', 'Edge ML'],
  },
  {
    id: 'p2',
    number: '#02',
    title: 'Worker Safety Danger Zone Predictor',
    category: 'Hardware & Machine Learning',
    image: 'https://res.cloudinary.com/ilmaxkyq/image/upload/f_auto,q_auto/image_2026-07-24_162127863_tbvzwa',
    description: 'Worker safety hardware module with real-time danger zone prediction using ESP32 edge telemetry, Python Machine Learning, and Deep Learning models.',
    longDescription: 'Engineered for hazardous industrial environments, construction sites, and heavy manufacturing floors, this wearable safety system combines an ESP32 hardware module with Python Machine Learning and Deep Learning (DLL) trajectory prediction models to prevent workplace accidents.',
    features: [
      'ESP32 wearable hardware module with real-time positioning and motion sensing',
      'Python Deep Learning (DLL) predictive model analyzing worker trajectories towards danger zones',
      'Sub-second emergency audio-visual alerts and automatic machinery cutoff signals',
      'Centralized web dashboard tracking real-time site safety metrics and heatmaps'
    ],
    architecture: 'ESP32 Wearable Module + Sensor Array + Python ML/DLL Server + Real-time Web Dashboard',
    tags: ['ESP32', 'Python ML', 'Deep Learning', 'Safety System'],
  },
  {
    id: 'p3',
    number: '#03',
    title: 'Resume Screening LLM & Custom GUI',
    category: 'Generative AI & Software',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80',
    description: 'Bulk resume parsing and candidate evaluation engine powered by LLMs. Features a custom interactive GUI allowing prompt-based filtering and instant candidate summary reports.',
    longDescription: 'Designed to streamline talent acquisition and recruitment workflows, this AI system ingests bulk resume files (PDF, DOCX) and leverages Large Language Models (LLMs) to perform automated candidate skill extraction, experience alignment, and structured scoring against custom prompt requirements.',
    features: [
      'Bulk parsing of multi-page PDF & DOCX candidate resumes',
      'Custom-built interactive GUI with dynamic prompt inputs for specific job role criteria',
      'Automated candidate rating, executive summary generation, and skill matrix extraction',
      'Exportable CSV and PDF summary reports for quick HR decision-making'
    ],
    architecture: 'Local/API LLM Engine + Custom Python/React GUI + PDF Parser + Structured Evaluation Pipeline',
    tags: ['LLM Workflow', 'Custom GUI', 'Resume Screener', 'Prompt Engineering'],
  },
];
