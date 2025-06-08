export type Review = {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
};

export type Mentor = {
  // bu alan sonradan page.tsx'teki MentorFormData ile degistirilecek.
  id: number;
  name: string;
  title: string;
  company: string;
  description: string;
  image: string;
  skills: string[];
  price: number;
  rating: number;
  reviews: Review[];
};

export type EducationInfo = {
  schoolName: string;
  startDate: string;
  endDate: string;
  degreeType: string;
  major: string;
};

export const faqData = [
  {
    id: 1,
    question: "MentorBul nedir?",
    answer:
      "MentorBul, mentor ve mentee’leri bir araya getiren ücretsiz bir eşleşme platformudur. Lorem ipsum dolor sit   ",
  },
  {
    id: 2,
    question: "Mentor olmak için ne yapmalıyım?",
    answer:
      "Mentor olmak için kayıt formunu doldurup uzmanlık alanlarınızı belirtmeniz yeterlidir.",
  },
  {
    id: 3,
    question: "Mentee olarak nasıl destek alabilirim?",
    answer:
      "Profil oluşturduktan sonra ilgilendiğiniz alandaki mentorlarla eşleşebilir ve destek talebinde bulunabilirsiniz.",
  },
  {
    id: 4,
    question: "Mentorluk görüşmeleri nerede gerçekleşiyor?",
    answer:
      "Görüşmeler genellikle Zoom, Google Meet veya platform üzerinden planlanan diğer iletişim araçlarıyla gerçekleştirilir.",
  },
  {
    id: 5,
    question: "MentorBul tamamen ücretsiz mi?",
    answer:
      "Evet, MentorBul hem mentorlar hem de menteeler için tamamen ücretsizdir.",
  },
  {
    id: 6,
    question: "Gönüllü mentorlar kimlerden oluşuyor?",
    answer:
      "Mentorlarımız, farklı sektörlerden deneyimli profesyoneller, akademisyenler ve alanında uzman bireylerden oluşur.",
  },
  {
    id: 7,
    question: "Birden fazla mentorla görüşebilir miyim?",
    answer:
      "Evet, farklı alanlarda destek almak üzere birden fazla mentorla eşleşebilirsiniz.",
  },
  {
    id: 8,
    question: "Mentorlar menteelere nasıl yardımcı olur?",
    answer:
      "Mentorlar, kariyer planlama, teknik bilgi paylaşımı, kişisel gelişim gibi konularda menteelere rehberlik eder.",
  },
  {
    id: 9,
    question: "Platformda ne kadar sürede eşleşme gerçekleşir?",
    answer:
      "Eşleşme süresi, tercih ettiğiniz alan ve mentor yoğunluğuna bağlı olarak birkaç gün sürebilir.",
  },
  {
    id: 10,
    question: "Görüşmeler gizli midir?",
    answer:
      "Evet, tüm görüşmeler gizlilik esasına göre gerçekleşir ve kişisel bilgiler korunur.",
  },
];

export const sampleMentors: Mentor[] = [
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
    reviews: [
      {
        id: 1,
        name: "Ahmet Yılmaz",
        comment:
          "Harika bir deneyimdi! John'un tecrübesi ve bilgi birikimi sayesinde kariyerimde yeni bir sayfa açtım. Özellikle sistem tasarımı konusundaki tavsiyeleri çok değerliydi.",
        rating: 5,
        date: "2024-03-15",
      },
      {
        id: 2,
        name: "Merve Demir",
        comment:
          "Teknik bilgisi kadar, iletişimi de çok iyi. Her görüşmeden sonra yeni bir şeyler öğrenmiş olarak ayrıldım.",
        rating: 4,
        date: "2024-02-28",
      },
      {
        id: 3,
        name: "Can Özkan",
        comment:
          "Senior seviye bir yazılımcı olarak bile John'dan öğrenecek çok şey buldum. Özellikle mikroservis mimarisi konusundaki tecrübeleri çok değerli.",
        rating: 5,
        date: "2024-02-10",
      },
      {
        id: 4,
        name: "Zeynep Kaya",
        comment:
          "Kariyer planlamam konusunda çok yardımcı oldu. Kendisi gerçekten alanında uzman.",
        rating: 4,
        date: "2024-01-20",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "Elif Yıldız",
        comment:
          "Emily'nin UX/UI konusundaki bilgisi gerçekten etkileyici. Projelerimde kullanıcı deneyimini nasıl iyileştirebileceğim konusunda çok değerli öneriler aldım.",
        rating: 5,
        date: "2024-03-10",
      },
      {
        id: 2,
        name: "Burak Şahin",
        comment:
          "Accessibility konusundaki uzmanlığı sayesinde projelerimizi daha kapsayıcı hale getirdik. Kendisi çok iyi bir mentor!",
        rating: 5,
        date: "2024-02-25",
      },
      {
        id: 3,
        name: "Deniz Arslan",
        comment:
          "Her detayı düşünmemi sağladı. Kullanıcı deneyimi tasarımına bakış açım tamamen değişti.",
        rating: 4,
        date: "2024-02-05",
      },
      {
        id: 4,
        name: "Ayşe Çelik",
        comment:
          "Görüşmelerimiz çok verimli geçti. Vue.js ile ilgili pratik ipuçları paylaştı.",
        rating: 5,
        date: "2024-01-15",
      },
      {
        id: 5,
        name: "Mert Aydın",
        comment:
          "Harika bir deneyimdi! Emily'nin portföy değerlendirmesi kariyerimde dönüm noktası oldu.",
        rating: 5,
        date: "2024-01-02",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "Ozan Demir",
        comment:
          "Michael'ın sistem tasarımı konusundaki tecrübesi inanılmaz. Mikroservis mimarisine geçiş sürecimizde çok yardımcı oldu.",
        rating: 5,
        date: "2024-03-12",
      },
      {
        id: 2,
        name: "İrem Yılmaz",
        comment:
          "Kubernetes ve Docker konularındaki derin bilgisi sayesinde deployment süreçlerimizi optimize ettik.",
        rating: 5,
        date: "2024-02-28",
      },
      {
        id: 3,
        name: "Kaan Öztürk",
        comment:
          "React ve Node.js konularında çok değerli bilgiler paylaştı. Kendisi alanında gerçek bir uzman.",
        rating: 4,
        date: "2024-02-15",
      },
      {
        id: 4,
        name: "Selin Aksoy",
        comment:
          "Junior developer olarak çok şey öğrendim. Özellikle kod kalitesi konusundaki tavsiyeleri çok değerliydi.",
        rating: 5,
        date: "2024-01-30",
      },
      {
        id: 5,
        name: "Emre Kaya",
        comment:
          "Teknik mülakatlar için verdiği tavsiyeler sayesinde hayalini kurduğum şirkette işe girdim!",
        rating: 5,
        date: "2024-01-10",
      },
      {
        id: 6,
        name: "Aylin Çetin",
        comment:
          "PostgreSQL optimizasyonu konusundaki önerileri performans sorunlarımızı çözmemize yardımcı oldu.",
        rating: 4,
        date: "2024-01-05",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        rating: 5,
        date: "2024-01-01",
      },
      {
        id: 2,
        name: "Mehmet Yıldırım",
        comment:
          "Sara'nın yapay zeka ve makine öğrenmesi konusundaki bilgisi müthiş. NLP projemizde çok yardımcı oldu.",
        rating: 5,
        date: "2024-03-18",
      },
      {
        id: 3,
        name: "Ece Kılıç",
        comment:
          "TensorFlow ve model optimizasyonu konusundaki önerileri projemizin performansını artırdı.",
        rating: 4,
        date: "2024-02-25",
      },
      {
        id: 4,
        name: "Berk Aydın",
        comment:
          "Veri analizi ve görselleştirme konusundaki tecrübesi sayesinde daha etkili sunumlar hazırlayabiliyorum.",
        rating: 5,
        date: "2024-02-10",
      },
      {
        id: 5,
        name: "Ceren Öztürk",
        comment:
          "Yapay zeka etiği konusundaki görüşleri ve önerileri çok değerliydi.",
        rating: 5,
        date: "2024-01-15",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        rating: 5,
        date: "2024-01-01",
      },
      {
        id: 2,
        name: "Alper Yılmaz",
        comment:
          "AWS ve Terraform konusundaki uzmanlığı sayesinde cloud altyapımızı başarıyla modernize ettik.",
        rating: 5,
        date: "2024-03-20",
      },
      {
        id: 3,
        name: "Seda Demir",
        comment:
          "CI/CD pipeline'larımızı optimize etmemize yardımcı oldu. Deployment sürelerimiz yarıya indi.",
        rating: 4,
        date: "2024-02-28",
      },
      {
        id: 4,
        name: "Burak Kaya",
        comment:
          "Linux sistem yönetimi konusundaki derin bilgisi ile birçok performans sorunumuzu çözdük.",
        rating: 5,
        date: "2024-02-15",
      },
      {
        id: 5,
        name: "Zeynep Aydın",
        comment:
          "Docker ve container orchestration konularında çok şey öğrendim.",
        rating: 4,
        date: "2024-01-20",
      },
      {
        id: 6,
        name: "Onur Çelik",
        comment: "DevOps pratiklerimizi geliştirmemizde büyük katkısı oldu.",
        rating: 5,
        date: "2024-01-05",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        rating: 5,
        date: "2024-01-01",
      },
      {
        id: 2,
        name: "İrem Yıldız",
        comment:
          "React Native ile mobil uygulama geliştirme konusunda harika bir mentor. Performans optimizasyonu önerileri çok değerli.",
        rating: 5,
        date: "2024-03-15",
      },
      {
        id: 3,
        name: "Mert Şahin",
        comment:
          "Flutter projesinde karşılaştığımız zorlukları aşmamıza yardımcı oldu. UI/UX önerileri çok faydalıydı.",
        rating: 5,
        date: "2024-02-20",
      },
      {
        id: 4,
        name: "Ayşe Kara",
        comment:
          "Firebase entegrasyonları ve state management konularında çok yardımcı oldu.",
        rating: 4,
        date: "2024-02-01",
      },
      {
        id: 5,
        name: "Can Öztürk",
        comment:
          "Cross-platform geliştirme konusundaki tecrübesi ile projemizi başarıyla tamamladık.",
        rating: 5,
        date: "2024-01-10",
      },
    ],
  },
  {
    id: 71234,
    name: "David Kim",
    title: "Yazılım Mühendisi",
    company: "Google",
    description:
      "David builds secure and efficient backend systems with a focus on payment integrations and scalability.",
    image: "https://thispersondoesnotexist.com",
    skills: ["Go", "Node.js", "SQL", "Microservices", "Payments"],
    price: 130,
    rating: 4.5,
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        rating: 5,
        date: "2024-01-01",
      },
      {
        id: 2,
        name: "Emre Aydın",
        comment:
          "Mikroservis mimarisi ve ödeme sistemleri entegrasyonu konusunda çok yardımcı oldu.",
        rating: 5,
        date: "2024-03-10",
      },
      {
        id: 3,
        name: "Deniz Yılmaz",
        comment:
          "Go ile backend geliştirme konusundaki önerileri çok değerliydi.",
        rating: 4,
        date: "2024-02-15",
      },
      {
        id: 4,
        name: "Selin Kaya",
        comment:
          "SQL optimizasyonu ve veritabanı tasarımı konularında harika öneriler aldım.",
        rating: 5,
        date: "2024-01-25",
      },
      {
        id: 5,
        name: "Tolga Demir",
        comment:
          "Sistem güvenliği ve performans optimizasyonu konularındaki tecrübesi çok değerli.",
        rating: 5,
        date: "2024-01-05",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        rating: 5,
        date: "2024-01-01",
      },
      {
        id: 2,
        name: "Ahmet Kara",
        comment:
          "Deep learning modelleri konusundaki uzmanlığı ile projemizi başarıyla tamamladık.",
        rating: 5,
        date: "2024-03-20",
      },
      {
        id: 3,
        name: "Elif Yıldız",
        comment: "PyTorch ve transformer modelleri konusunda çok şey öğrendim.",
        rating: 5,
        date: "2024-02-28",
      },
      {
        id: 4,
        name: "Murat Öztürk",
        comment: "NLP ve dil modelleri konusundaki bilgisi çok değerli.",
        rating: 4,
        date: "2024-02-10",
      },
      {
        id: 5,
        name: "Ayşe Demir",
        comment:
          "Yapay zeka etiği konusundaki yaklaşımı ve önerileri çok faydalıydı.",
        rating: 5,
        date: "2024-01-15",
      },
      {
        id: 6,
        name: "Can Yılmaz",
        comment:
          "Model optimizasyonu ve deployment konularında harika öneriler aldım.",
        rating: 5,
        date: "2024-01-02",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        rating: 5,
        date: "2024-01-01",
      },
      {
        id: 2,
        name: "Ozan Kaya",
        comment:
          "Siber güvenlik ve penetrasyon testleri konusunda çok değerli bilgiler edindim.",
        rating: 5,
        date: "2024-03-15",
      },
      {
        id: 3,
        name: "İpek Yıldız",
        comment:
          "OWASP güvenlik prensipleri ve uygulama güvenliği konusunda harika bir mentor.",
        rating: 4,
        date: "2024-02-20",
      },
      {
        id: 4,
        name: "Kaan Demir",
        comment:
          "Network güvenliği ve firewall yapılandırması konularında çok yardımcı oldu.",
        rating: 5,
        date: "2024-02-01",
      },
      {
        id: 5,
        name: "Merve Şahin",
        comment:
          "Güvenlik açıklarını tespit ve çözüm konusundaki tecrübesi çok değerli.",
        rating: 5,
        date: "2024-01-10",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        rating: 5,
        date: "2024-01-01",
      },
      {
        id: 2,
        name: "Serkan Yılmaz",
        comment:
          "Cloud mimarisi ve Azure servisleri konusunda çok yardımcı oldu.",
        rating: 5,
        date: "2024-03-18",
      },
      {
        id: 3,
        name: "Aylin Kara",
        comment:
          "Kubernetes cluster yönetimi ve monitoring konularında harika öneriler aldım.",
        rating: 4,
        date: "2024-02-25",
      },
      {
        id: 4,
        name: "Cem Öztürk",
        comment: "DevOps süreçlerimizi iyileştirmemizde büyük katkısı oldu.",
        rating: 5,
        date: "2024-02-05",
      },
      {
        id: 5,
        name: "Pınar Demir",
        comment:
          "Cloud maliyet optimizasyonu konusundaki önerileri çok değerliydi.",
        rating: 5,
        date: "2024-01-15",
      },
      {
        id: 6,
        name: "Berk Aydın",
        comment:
          "Microservice mimarisi ve container orchestration konularında çok şey öğrendim.",
        rating: 4,
        date: "2024-01-02",
      },
    ],
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
    reviews: [
      {
        id: 1,
        name: "John Doe",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        rating: 5,
        date: "2024-01-01",
      },
      {
        id: 2,
        name: "Burak Yıldız",
        comment:
          "Unity ile oyun geliştirme konusunda harika bir mentor. Optimizasyon önerileri çok faydalı oldu.",
        rating: 5,
        date: "2024-03-20",
      },
      {
        id: 3,
        name: "Selin Kara",
        comment:
          "Unreal Engine ve C# programlama konularında çok şey öğrendim.",
        rating: 4,
        date: "2024-02-28",
      },
      {
        id: 4,
        name: "Eren Demir",
        comment:
          "3D modelleme ve oyun tasarımı konusundaki tecrübesi çok değerli.",
        rating: 4,
        date: "2024-02-10",
      },
      {
        id: 5,
        name: "Zeynep Şahin",
        comment:
          "Oyun performansı optimizasyonu konusundaki önerileri projemizi çok ilerletti.",
        rating: 5,
        date: "2024-01-20",
      },
    ],
  },
];
