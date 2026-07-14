// Leadership and achievements data

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
  
}

export const achievementsData: Achievement[] = [
  {
    id: "coders-circle",
    title: "Co-Founder",
    organization: "Coders Circle",
    description: "Built and scaled a growing tech community focused on coding culture, collaboration, and peer learning.",
    impact: [
      "Created a tech community of 1500+ students and developers",
      "Organized tech sessions, networking events, and collaborative coding spaces",
      "Encouraged open-source contributions and project-based learning",
      "Built leadership and community engagement initiatives"
    ],
    
  }
];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  
}

export const educationData: Education[] = [
  {
    id: "ct-university",
    institution: "CT University",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "Aug 2020 - Jun 2024",
    location: "Ludhiana, Punjab, India",
   
  }
];
