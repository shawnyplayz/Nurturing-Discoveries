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
  { href: "/contactus", label: "Contact Us" },
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

export const contactUsPage = {
  title: "Ready To Get Started?",
  description:
    "Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis. Quisque rhoncus, eros in auctor ultrices",
};
