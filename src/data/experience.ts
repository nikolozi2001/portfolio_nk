import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Lead Software Specialist (Programming)",
    company: "National Statistics Office of Georgia (GeoStat)",
    companyUrl: "https://www.geostat.ge",
    location: "Tbilisi, Georgia",
    startDate: "2022-08",
    endDate: "Present",
    description:
      "IT Department — Software Development & GIS Systems Division. Building and maintaining web-based management systems, databases, GIS platforms, and statistical data portals for the national statistics office.",
    highlights: [
      "Creating and maintaining database procedures, reports, and views in MS SQL Server",
      "Designing and updating GeoStat's internal database structure",
      "Building web-based electronic management systems and statistical portals",
      "Maintaining and developing GeoServer-based GIS mapping platforms",
      "Developing data visualization tools including regional statistics and inflation calculators",
      "Supporting the department's software development and infrastructure tasks",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "MS SQL",
      "GeoServer",
      "PHP",
      "Python",
    ],
  },
  {
    id: "2",
    role: "Sales Manager / Broker",
    company: "Invest in Georgia",
    location: "Tbilisi, Georgia",
    startDate: "2022-06",
    endDate: "2022-08",
    description:
      "Communicated with potential clients and provided relevant information about real estate properties.",
    highlights: [
      "Client communication and relationship management",
      "Providing property information and consultation",
    ],
    technologies: [],
  },
  {
    id: "3",
    role: "Technical Support Specialist",
    company: "Nikora",
    location: "Tbilisi, Georgia",
    startDate: "2022-02",
    endDate: "2022-03",
    description:
      "Provided technical equipment support and maintenance for Nikora retail stores.",
    highlights: [
      "Hardware and software troubleshooting for retail equipment",
      "Ensuring smooth technical operations across stores",
    ],
    technologies: ["Windows", "Networking", "Hardware"],
  },
  {
    id: "4",
    role: "Operator / IT Support",
    company: "Internet Cafe",
    location: "Tbilisi, Georgia",
    startDate: "2018-10",
    endDate: "2021-12",
    description:
      "Managed technical infrastructure and provided customer service in an internet cafe setting for over 3 years.",
    highlights: [
      "Maintained all computing equipment and network infrastructure",
      "Customer service and technical troubleshooting",
      "Developed early interest in web development and programming",
    ],
    technologies: ["Windows", "Networking", "Hardware"],
  },
];
