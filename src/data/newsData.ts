export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: "Registration" | "Global Finals" | "Mentorship" | "Announcements" | "Projects";
  imageUrl: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  readTime: string;
  featured?: boolean;
  keyTakeaways?: string[];
  content: {
    intro: string;
    sections: {
      heading?: string;
      body: string;
      quote?: string;
    }[];
    conclusion?: string;
  };
}

export const newsArticles: NewsItem[] = [
  {
    id: "nigeria-shines-2026-london-finals",
    slug: "nigeria-shines-2026-london-finals",
    title: "Nigeria Shines at the 2026 London Finals with Overall Category Win & Teams Victory",
    excerpt: "Chad Molokwu of The Regent Secondary School emerges as Overall Category Winner, while Nigeria's joint team captures the prestigious Teams Challenge trophy in London.",
    date: "July 20, 2026",
    tag: "Global Finals",
    imageUrl: "/images/IMG_20260720_114502_765.jpg.jpeg",
    author: {
      name: "Zack Elias",
      role: "The regional communications team",
    },
    readTime: "5 min read",
    featured: true,
    keyTakeaways: [
      "Chad Molokwu (The Regent Secondary School, Abuja) crowned Overall Winner in his age category at the London Finals.",
      "Nathan Udoesu, Oladayo Adeyemo (Standard Bearers School), and Nathan Sotunde (Great Bloomers School) won the prestigious Global Teams Challenge.",
      "Six outstanding Nigerian students placed among the Top 30 globally across their respective age categories.",
    ],
    content: {
      intro: "Leading the nation's success was Chad Molokwu of The Regent Secondary School, Abuja, who emerged as the Overall Winner in his age category, earning international recognition for his exceptional performance against some of the brightest students from around the world. His achievement marks a significant moment for Nigerian education, demonstrating the country's growing excellence in global academic competitions.",
      sections: [
        {
          heading: "Triumphant Victory in the Teams Challenge",
          body: "Nigeria also celebrated a remarkable victory in the prestigious Teams Challenge, where Nathan Udoesu, Oladayo Adeyemo of Standard Bearers School, and Nathan Sotunde of Great Bloomers School combined their talents to secure a global win. Their success showcased outstanding teamwork, problem-solving ability, and academic excellence on the international stage.",
        },
        {
          heading: "Global Top 30 Standouts",
          body: "The country's impressive showing extended beyond its champions, with several Nigerian students finishing among the Top 30 globally in their respective categories:\n\n• Oladele Hans Oladutire – Bloombreed Schools\n• Ugochukwu Chisom – Greensprings School, Anthony Campus\n• Tirenoluwa Akeredolu – Greensprings School, Anthony Campus\n• Oluwatobiloba Tayo-Adewale – Corona Day Secondary School, Lekki\n• Naomi Balogun – Greensprings School, Ikoyi Campus\n• Nsikamabasi Edem – Corona Secondary School, Agbara",
          quote: "The exceptional performance of our students reflects the immense potential that exists within Nigeria. Chad Molokwu's emergence as the Overall Winner in his category, our Teams Challenge victory, and the outstanding performances of students who ranked among the Top 30 globally are a testament to the dedication of the students, the commitment of their schools, and the unwavering support of parents and teachers.",
        },
      ],
      conclusion: "These accomplishments reinforce our mission of providing Nigerian students with world-class opportunities to compete, learn, and excel on the global stage.",
    },
  },
  {
    id: "awards-presentation-visits-to-schools",
    slug: "awards-presentation-visits-to-schools",
    title: "Celebrating Excellence: Awards Presentation Visits to Schools",
    excerpt: "Following the successful conclusion of the 2026 EMC National Rounds and London Global Finals, the EMC Nigeria delegation embarked on an awards tour honoring students, teachers, and school leaders.",
    date: "July 18, 2026",
    tag: "Announcements",
    imageUrl: "/images/IMG_20260720_114508_069.jpg.jpeg",
    author: {
      name: "Zack Elias",
      role: "International management of EMC",
    },
    readTime: "4 min read",
    featured: false,
    keyTakeaways: [
      "Medals, certificates, trophies, and special awards presented to top students from National Rounds and London Global Finals.",
      "Recognized invaluable contributions of school administrators, teachers, and parents in nurturing mathematical excellence.",
      "Reaffirms EMC Nigeria's commitment to cultivating global mathematical talent across partner schools.",
    ],
    content: {
      intro: "Following the successful conclusion of the 2026 EMC National Rounds and the London Global Finals, the Elizalde Mathematics Competition (EMC) Nigeria delegation led by the Regional Director, Zack Elias, embarked on an awards presentation tour to recognize and celebrate the outstanding achievements of participating students and schools.",
      sections: [
        {
          heading: "Honoring National & International Champions",
          body: "The visits were organized to present medals, certificates, trophies, and special awards to students who distinguished themselves in the EMC National Rounds and those who proudly represented Nigeria at the 2026 London Global Final both through the Virtual Finals and the Physical Finals in London.",
        },
        {
          heading: "Celebrating Educators & School Leaders",
          body: "Beyond honouring student achievements, the awards presentations also celebrated the invaluable contributions of school administrators, teachers, and parents whose dedication and support continue to inspire academic excellence. These school visits reaffirm EMC Nigeria's commitment to nurturing mathematical talent, recognizing excellence, and encouraging more students to participate in future editions of the competition.",
          quote: "Each visit served as a celebration of hard work, perseverance, and international achievement, inspiring the next generation of young mathematicians to pursue excellence on both national and global stages.",
        },
      ],
      conclusion: "EMC Nigeria looks forward to expanding participation for the upcoming 2026–2027 season with even greater opportunities for student delegates.",
    },
  },
  {
    id: "emc-2026-national-rounds-successfully-held",
    slug: "emc-2026-national-rounds-successfully-held",
    title: "EMC 2026 National Rounds Successfully Held Across All Participating Countries",
    excerpt: "Talented young mathematicians competed across national qualifying centers, demonstrating critical thinking and logical reasoning to earn spots at the London Global Finals.",
    date: "June 15, 2026",
    tag: "Registration",
    imageUrl: "/images/IMG_20260720_114514_419.jpg.jpeg",
    author: {
      name: "EMC Academic Steering Committee",
      role: "Global Operations",
    },
    readTime: "3 min read",
    featured: false,
    keyTakeaways: [
      "Successfully brought together top mathematical minds from participating schools across participating nations.",
      "Examined critical thinking, logical reasoning, and complex problem-solving abilities.",
      "Outstanding performers qualified to represent their countries on the international stage at the YMC London Global Finals.",
    ],
    content: {
      intro: "The Elizalde Mathematics Competition (EMC) successfully concluded the 2026 National Rounds, bringing together talented young mathematicians from leading schools across the country. Students demonstrated exceptional problem-solving abilities, logical reasoning, and mathematical excellence as they competed for a place at the prestigious Global Finals.",
      sections: [
        {
          heading: "Identifying the World's Brightest Minds",
          body: "The National Rounds served as a platform to identify the brightest mathematical minds while encouraging critical thinking, innovation, and academic excellence. Outstanding performers qualified to represent their countries on the international stage at the YMC London Global Finals.",
          quote: "Mathematics is a global language of innovation. Watching young thinkers tackle complex real-world problems with enthusiasm is what EMC is all about.",
        },
      ],
      conclusion: "Congratulations to all qualifying schools and students advancing to the London Global Finals!",
    },
  },
];
