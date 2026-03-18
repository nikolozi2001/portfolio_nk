export interface Course {
  name: string;
  nameKa: string;
  score: number;
  credits: number;
  category: "cs" | "math" | "cyber" | "general";
}

export const courses: Course[] = [
  // Computer Science
  {
    name: "Object-Oriented Programming",
    nameKa: "ობიექტზე ორიენტირებული დაპროგრამება",
    score: 100,
    credits: 6,
    category: "cs",
  },
  {
    name: "Introduction to Operating Systems",
    nameKa: "შესავალი ოპერაციულ სისტემებში",
    score: 95,
    credits: 6,
    category: "cs",
  },
  {
    name: "Computer Organization",
    nameKa: "კომპიუტერის ორგანიზაცია",
    score: 60,
    credits: 6,
    category: "cs",
  },
  {
    name: "Drones",
    nameKa: "დრონები",
    score: 63.25,
    credits: 6,
    category: "cs",
  },
  {
    name: "Electronics Fundamentals",
    nameKa: "ელექტრონიკის საფუძვლები",
    score: 75,
    credits: 6,
    category: "cs",
  },
  {
    name: "Practical Math Elements",
    nameKa: "პრაქტიკული მათემატიკის ელემენტები",
    score: 58,
    credits: 6,
    category: "math",
  },

  // Cybersecurity
  {
    name: "Cybersecurity",
    nameKa: "კიბერუსაფრთხოება",
    score: 100,
    credits: 6,
    category: "cyber",
  },
  {
    name: "Cyber Law",
    nameKa: "კიბერსამართალი",
    score: 85,
    credits: 6,
    category: "cyber",
  },

  // Math & Physics
  {
    name: "Calculus I",
    nameKa: "კალკულუსი I",
    score: 63,
    credits: 6,
    category: "math",
  },
  {
    name: "Physics Fundamentals I",
    nameKa: "ფიზიკის საფუძვლები 1",
    score: 68.5,
    credits: 6,
    category: "math",
  },
  {
    name: "Physics Fundamentals II",
    nameKa: "ფიზიკის საფუძვლები 2",
    score: 65.5,
    credits: 6,
    category: "math",
  },

  // General
  {
    name: "Introduction to Programming",
    nameKa: "შესავალი დაპროგრამებაში",
    score: 84,
    credits: 6,
    category: "general",
  },
  {
    name: "English Language (A2-1)",
    nameKa: "ინგლისური ენის კურსი (A2-1)",
    score: 81,
    credits: 6,
    category: "general",
  },
];
