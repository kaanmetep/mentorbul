import React from "react";
import { StarIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toSlug } from "@/lib/utils";
type Mentor = {
  id: number;
  name: string;
  title: string;
  company: string;
  description: string;
  image: string;
  skills: string[];
  price: number;
  rating: number;
  reviews: number;
};

const mentors = [
  {
    id: 14421,
    name: "John Doe",
    title: "Yazılım Mühendisi",
    company: "Google",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit... Emily is passionate about UI/UX and has 7+ years of experience building accessible web interfaces.",
    image: "https://thispersondoesnotexist.com",
    skills: ["Yazılım Geliştirme", "React", "Node.js", "MongoDB", "CTO"],
    price: 100,
    rating: 4.5,
    reviews: 10,
  },
  {
    id: 22213,
    name: "Emily Carter",
    title: "UX Designer",
    company: "Apple",
    description:
      "Emily is passionate about UI/UX and has 7+ years of experience building accessible web interfaces.",
    image: "https://thispersondoesnotexist.com",
    skills: [
      "UX Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Vue.js",
      "Accessibility",
    ],
    price: 80,
    rating: 4.8,
    reviews: 23,
  },
  {
    id: 35543,
    name: "Michael Zhang",
    title: "Yazılım Mühendisi",
    company: "Microsoft",
    description:
      "Michael specializes in scalable full-stack solutions and mentoring junior developers.",
    image: "https://thispersondoesnotexist.com",
    skills: [
      "Yazılım Geliştirme",
      "React",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    price: 120,
    rating: 4.7,
    reviews: 15,
  },
  {
    id: 4234,
    name: "Sara Ahmed",
    title: "Yapay Zeka Mühendisi",
    company: "Microsoft",
    description:
      "Sara works on cutting-edge ML models and loves sharing her insights on data analysis and model evaluation.",
    image: "https://thispersondoesnotexist.com",
    skills: ["Python", "TensorFlow", "Pandas", "NLP", "Data Visualization"],
    price: 110,
    rating: 4.6,
    reviews: 19,
  },
  {
    id: 55555,
    name: "James O'Neill",
    title: "Mühendis",
    company: "Amazon",
    description:
      "James ensures smooth deployment pipelines and infrastructure automation using the latest tools.",
    image: "https://thispersondoesnotexist.com",
    skills: ["AWS", "Terraform", "CI/CD", "Docker", "Linux"],
    price: 95,
    rating: 4.4,
    reviews: 12,
  },
  {
    id: 65555,
    name: "Chloe Tan",
    title: "UX Designer",
    company: "Trendyol",
    description:
      "Chloe crafts beautiful and high-performance mobile apps using React Native and Flutter.",
    image: "https://thispersondoesnotexist.com",
    skills: ["React Native", "Flutter", "Firebase", "UX", "Swift"],
    price: 85,
    rating: 4.9,
    reviews: 27,
  },
  {
    name: "David Kim",
    title: "Yazılım Mühendisi",
    company: "Google",
    description:
      "David builds secure and efficient backend systems with a focus on payment integrations and scalability.",
    image: "https://thispersondoesnotexist.com",
    skills: ["Go", "Node.js", "SQL", "Microservices", "Payments"],
    price: 130,
    rating: 4.5,
    reviews: 18,
  },
  {
    id: 71234,
    name: "Lina Müller",
    title: "Yapay Zeka Mühendisi",
    company: "Microsoft",
    description:
      "Lina is an AI enthusiast exploring deep learning, transformers, and ethical AI systems.",
    image: "https://thispersondoesnotexist.com",
    skills: ["Deep Learning", "PyTorch", "Transformers", "Ethics", "NLP"],
    price: 150,
    rating: 4.8,
    reviews: 21,
  },
  {
    id: 82234,
    name: "Carlos Rivera",
    title: "Kariyer Mentor",
    company: "Sahibinden",
    description:
      "Carlos teaches developers how to build secure applications and perform ethical hacking practices.",
    image: "https://thispersondoesnotexist.com",
    skills: [
      "Penetration Testing",
      "Network Security",
      "OWASP",
      "Python",
      "Firewalls",
    ],
    price: 105,
    rating: 4.6,
    reviews: 14,
  },
  {
    id: 9125,
    name: "Aisha Bello",
    title: "Girişimci",
    company: "Amazon",
    description:
      "Aisha helps teams migrate to cloud-native architectures and optimize for performance and cost.",
    image: "https://thispersondoesnotexist.com",
    skills: [
      "Azure",
      "Cloud Architecture",
      "Kubernetes",
      "DevOps",
      "Monitoring",
    ],
    price: 125,
    rating: 4.7,
    reviews: 17,
  },
  {
    id: 10234,
    name: "Tomáš Novák",
    title: "Öğretmen",
    company: "Epic Games",
    description:
      "Tomáš loves mentoring on game design, Unity/Unreal engine development, and performance optimization.",
    image: "https://thispersondoesnotexist.com",
    skills: ["Unity", "C#", "Unreal Engine", "Game Design", "3D Modeling"],
    price: 90,
    rating: 4.3,
    reviews: 9,
  },
];

const BrowseMentorsSection = () => {
  const searchParams = useSearchParams();
  const yetenek = searchParams?.get("yetenek");
  const unvan = searchParams?.get("unvan");
  const sirket = searchParams?.get("sirket");
  const search = searchParams?.get("search");
  const filteredMentors = mentors.filter((mentor) => {
    const matchesYetenek =
      !yetenek ||
      mentor.skills.some((skill) =>
        skill.toLowerCase().includes(yetenek.toLowerCase())
      );
    const matchesUnvan =
      !unvan || mentor.title.toLowerCase().includes(unvan.toLowerCase());
    const matchesSirket =
      !sirket || mentor.company.toLowerCase().includes(sirket.toLowerCase());
    const matchesSearch =
      !search ||
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.title.toLowerCase().includes(search.toLowerCase()) ||
      mentor.company.toLowerCase().includes(search.toLowerCase());

    return matchesYetenek && matchesUnvan && matchesSirket && matchesSearch;
  });
  return (
    <div className="flex flex-col items-center gap-12 w-full flex-[2.8]">
      <ul className="flex flex-col gap-12">
        {filteredMentors.map((mentor) => (
          <li key={mentor.name}>
            <MentorCard mentor={mentor} />
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
            1
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer ">
            2
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors cursor-pointer">
            3
          </button>
        </div>
      </div>
    </div>
  );
};

const MentorCard = ({ mentor }: { mentor: Mentor }) => {
  const router = useRouter();
  return (
    <div className="w-full flex-[2.8] border border-gray-200 rounded-lg p-8">
      <div className="flex flex-col sm:flex-row gap-8 overflow-hidden">
        <img
          src={mentor.image}
          alt={mentor.name}
          width={200}
          height={200}
          className="rounded-lg object-cover aspect-square hover:scale-105 transition-all duration-300 cursor-pointer hover:opacity-90"
          onClick={() =>
            router.push(`/mentor/${toSlug(mentor.name)}-${mentor.id}`)
          }
        />
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-xl font-bold">{mentor.name}</h3>
            <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              <StarIcon className="w-4 h-4 text-blue-500 fill-blue-500" />
              <span className="text-gray-900 font-semibold">
                {mentor.rating} ({mentor.reviews} reviews)
              </span>
            </p>
          </div>
          <p className="text-sm text-gray-700 my-3">
            {mentor.title} at{" "}
            <span className="font-bold text-gray-900">{mentor.company}</span>
          </p>
          <p className="text-sm text-gray-500">{mentor.description}</p>
          <ul className="flex gap-2 flex-wrap mt-4">
            {mentor.skills.map((skill) => (
              <li
                key={skill}
                className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md"
              >
                {skill}
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-8">
            <p>
              <span className="text-3xl font-bold text-black mr-1">
                ₺{mentor.price}
              </span>
              / saat
            </p>
            <button
              className="btn-main-sm lg:!px-12 !px-6"
              onClick={() =>
                router.push(`/mentor/${toSlug(mentor.name)}-${mentor.id}`)
              }
            >
              Profili Gör
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseMentorsSection;
