import { MdLocationOn, MdOutlineMail } from "react-icons/md";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";

export const HEADER_DATA = {
  locations: [
    { icon: MdLocationOn, text: "I.C. Colony, Borivali west, Mumbai 400103" },
    { icon: MdOutlineMail, text: "nurturingdiscoveries@gmail.com" },
  ],
  socialMedia: {
    title: "Follow Us On:",
    icons: [
      {
        icon: FaInstagram,
        link: "https://www.instagram.com/nurturing_discoveries/",
      },
      { icon: FaYoutube, link: "https://youtube.com" },
      {
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/dhruti-joshi-313b8826b/",
      },
      {
        icon: FaFacebook,
        link: "https://www.facebook.com/nurturingdiscoveries",
      },
    ],
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/programsandevents", label: "Programs & Events" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export const HomeSection = {
  HomeCarousel: {
    title: "Preschool & Day Care",
    heading: "Inspiring Young Minds Kids",
    subtitle: "Discover and Nurture the ability",
  },
};

export const LandingAboutUs = {
  AboutUsSection: {
    title: "About Us",
    heading: "Top Choice For Children",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi in tincidunt.",
    contactInfo: "Call Us Now",
    contactNumber: "918369596061",
  },
};

export const programSectionCardData = [
  {
    title: "Infant Program (0-1 year)",
    description:
      "Infants: Programs for infants focus on providing a safe and nurturing environment where babies can explore and grow. Activities include sensory play, tummy time, and basic motor skill development.",
    backgroundColor: "#70A6B1",
    src: "/program-images/image1.svg",
  },
  {
    title: "Toddler Program (1-3 years)",
    description:
      "Toddlers: This program is designed for young children who are beginning to walk and talk. It focuses on language development, basic social skills, and motor skills through play and structured activities.",
    backgroundColor: "#F39F5F",
    src: "/program-images/image2.svg",
  },
  {
    title: "Preschool Program (3-4 years)",
    description:
      "Preschoolers: Programs for 3-year-olds typically include more structured activities to prepare children for kindergarten. These might include early literacy, basic math concepts, and cooperative play.",
    backgroundColor: "#5866EB",
    src: "/program-images/image3.svg",
  },
];

export const programSectionData = {
  title: "Our Programs",
  subHeading: "We Meet Kids At Their Level Regardless Of Their Age",
};

export const ActivitiesSectionData = {
  title: "Our Best Activities",
  subHeading: "Let Us Know About Our Reading And Cultural",
  description:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi in tincidunt.",
  activities: [
    {
      id: 1,
      title: "Early Learning",
      description: "Elit Aenean scelerisque vitae consequat.",
      backgroundColor: "#FEF5DE",
      src: "EarlyLearning.svg",
    },
    {
      id: 2,
      title: "Art and Craft",
      description: "Elit Aenean scelerisque vitae consequat.",
      backgroundColor: "#E2F6FE",
      src: "ArtAndCraft.svg",
    },
    {
      id: 3,
      title: "Brain Train",
      description: "Elit Aenean scelerisque vitae consequat.",
      backgroundColor: "#E6E8FC",
      src: "BrainAndTrain.svg",
    },
    {
      id: 4,
      title: "Music Area",
      description: "Elit Aenean scelerisque vitae consequat.",
      backgroundColor: "#FEDFEF",
      src: "MusicArea.svg",
    },
  ],
};

export const InstructionsSectionData = {
  title: "Our Experts",
  subHeading: " Our Expert Instructors",
  teamMembers: [
    {
      id: 1,
      name: "Natalie Paisley",
      position: "CEO",
      imageUrl: "/team/dhriti.svg",
    },
    {
      id: 2,
      name: "Daisy",
      position: "CSRO",
      imageUrl: "/team/daisy.svg",
    },
  ],
};

export const ChildrenGalleryData = {
  title: "Children's Gallery",
  gallery: [
    {
      id: 1,
      imageUrl: "/gallery/child1.svg",
    },
    {
      id: 2,
      imageUrl: "/gallery/child2.svg",
    },
    {
      id: 3,
      imageUrl: "/gallery/child3.svg",
    },
    {
      id: 4,
      imageUrl: "/gallery/child4.svg",
    },
    {
      id: 5,
      imageUrl: "/gallery/child5.svg",
    },
    {
      id: 6,
      imageUrl: "/gallery/child6.svg",
    },
  ],
};

export const footerData = {
  ContactInfoData: [
    {
      iconSrc: "footerAssets/phoneIcon.svg",
      text: "+91 83695 96061",
      subtext: "Call us 24/7",
    },
    {
      iconSrc: "footerAssets/emailIcon.svg",
      text: "support@example.com",
      subtext: "Email us",
    },
    {
      iconSrc: "footerAssets/phoneIcon.svg",
      text: "1234 Street Name, City, Country",
      subtext: "Visit us",
    },
  ],
};

export const testimonialsData = [
  {
    id: 1,
    text: "Corquent per conubia nostra, per inceptos himenaeos. Suspendisse gravida vitae nisi Class aptent taciti sociosqu ad litora.",
    author: "Jenny Wilson",
    imageSrc: "/testimonialsImage.svg",
    backgroundColor: "#385469",
    borderTopColor: "#385469",
  },
  {
    id: 2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "John Doe",
    imageSrc: "/testimonialsImage.svg",
    backgroundColor: "#70A6B1",
    borderTopColor: "#70A6B1",
  },
  {
    id: 3,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    author: "Alice Johnson",
    imageSrc: "/testimonialsImage.svg",
    backgroundColor: "#F39F5F",
    borderTopColor: "#F39F5F",
  },
];

export const BlogData = {
  blog_id: "71820e64-e638-49ca-a2ad-db72e8ad7ab6",
  blog_title: "Montessori Education?",
  blog_content:
    "<p>The Montessori Method is an educational approach that focuses on child-led learning. Unlike traditional educational systems, where the teacher directs the learning process, Montessori education allows children to take control of their own learning. Classrooms are designed to foster independence and natural curiosity, equipped with specially designed materials that encourage exploration and discovery.</p><p><br></p><p>Key Principles of Montessori Education</p><p><br></p><ul><li>Child-Centered Learning: In Montessori classrooms, children choose activities based on their interests and developmental stage. This encourages engagement and enthusiasm for learning.</li><li>Prepared Environment: The classroom is carefully arranged to offer a variety of activities that cater to different learning styles. The environment is orderly, beautiful, and accessible, promoting independence and concentration.</li><li>Mixed Age Groups: Montessori classrooms typically consist of mixed-age groups, usually spanning three years. This setup allows younger children to learn from older peers, while older children reinforce their knowledge by teaching concepts they’ve mastered.</li><li>Hands-On Learning: Montessori materials are designed to be tactile and self-correcting, enabling children to learn through their senses. This hands-on approach helps solidify abstract concepts and promotes deep understanding.</li><li>Teacher as Guide: Montessori teachers, often referred to as guides, observe and support children’s learning rather than direct it. They intervene only when necessary, allowing children to learn through their own experiences and mistakes.</li></ul>",
  date: "2024-08-20",
  pictures: [
    {
      url: "http://res.cloudinary.com/dpauqvsd6/image/upload/v1724159435/nurturing/blog_71820e64-e638-49ca-a2ad-db72e8ad7ab6/g7ejut98kxayey23sivt.png",
      secure_url:
        "https://res.cloudinary.com/dpauqvsd6/image/upload/v1724159435/nurturing/blog_71820e64-e638-49ca-a2ad-db72e8ad7ab6/g7ejut98kxayey23sivt.png",
      public_id:
        "nurturing/blog_71820e64-e638-49ca-a2ad-db72e8ad7ab6/g7ejut98kxayey23sivt",
      folder: "nurturing/blog_71820e64-e638-49ca-a2ad-db72e8ad7ab6",
    },
    {
      url: "http://res.cloudinary.com/dpauqvsd6/image/upload/v1724170527/nurturing/blog_71820e64-e638-49ca-a2ad-db72e8ad7ab6/niz4vikkgkimsnhy4uoo.jpg",
      secure_url:
        "https://res.cloudinary.com/dpauqvsd6/image/upload/v1724170527/nurturing/blog_71820e64-e638-49ca-a2ad-db72e8ad7ab6/niz4vikkgkimsnhy4uoo.jpg",
      public_id:
        "nurturing/blog_71820e64-e638-49ca-a2ad-db72e8ad7ab6/niz4vikkgkimsnhy4uoo",
      folder: "nurturing/blog_71820e64-e638-49ca-a2ad-db72e8ad7ab6",
    },
  ],
  createdAt: "2024-08-20T10:49:54.000Z",
  updatedAt: "2024-08-20T17:14:21.000Z",
};

export const aboutUsPage = {
  title: "Who we are ?",
  subHeading: "Myself",
  description:
    "Hello! I'm Juber Abbas, and I'm passionate about Montessori education. With extensive training and years of experience, I've seen how this method transforms young minds. My goal is to create a nurturing, hands-on learning environment where children thrive. I continuously strive to stay updated with the latest in Montessori education to provide the best for my students. Outside the classroom, I enjoy spending time with my family and exploring nature. I look forward to sharing the Montessori journey with you and your child!",
};

export const OurValueCardData = [
  {
    backgroundColor: "#F8B81F",
    cardNumber: 1,
    title: "Child-Centered Learning",
    description:
      "Our classrooms are designed to cater to the individual interests and developmental stages of each child. Students are encouraged to choose their activities, fostering a sense of ownership and enthusiasm for their learning journey.",
  },
  {
    backgroundColor: "#39C0FA",
    cardNumber: 2,
    title: "Prepared Environment",
    description:
      "We create a carefully arranged, aesthetically pleasing environment filled with hands-on materials that invite exploration and discovery. This setup promotes independence, concentration, and a deep engagement with learning.",
  },
  {
    backgroundColor: "#5866EB",
    cardNumber: 3,
    title: "Mixed Age Groups",
    description:
      "Our mixed-age classrooms, typically spanning three years, allow younger children to learn from older peers, while older children reinforce their knowledge by guiding the younger ones. This dynamic builds a strong community and enhances social skills.",
  },
  {
    backgroundColor: "#F92596",
    cardNumber: 4,
    title: "Hands-On Learning",
    description:
      "We utilize specially designed Montessori materials that are tactile and self-correcting. These tools help children understand complex concepts through direct experience and sensory engagement, leading to a deeper comprehension.",
  },
];

export const AboutUsStaffData = [
  {
    name: "Dhruti Josh",
    position: "Founder and Director",
    imageUrl: "/about/staff1.svg",
  },
  {
    name: "Daisy",
    position: "CSRO",
    imageUrl: "/about/staff1.svg",
  },
];
