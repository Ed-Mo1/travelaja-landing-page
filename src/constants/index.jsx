import us from "../assets/images/united-states-of-america-svgrepo-com.svg";
import eg from "../assets/images/egypt-svgrepo-com.svg";

import dest1 from "../assets/images/Rectangle 5.png";
import dest2 from "../assets/images/Rectangle 4.png";
import dest3 from "../assets/images/Rectangle 3.png";
import dest4 from "../assets/images/Rectangle 6.png";
import dest5 from "../assets/images/Rectangle 7.png";
import dest6 from "../assets/images/Rectangle 9.png";

import ellis1 from "../assets/images/Ellipse1.svg";
import ellis2 from "../assets/images/Ellipse2.svg";
import ellis3 from "../assets/images/Ellipse3.svg";
import ellis4 from "../assets/images/Ellipse4.svg";
import ellis5 from "../assets/images/Ellipse5.svg";
import ellis6 from "../assets/images/Ellipse6.svg";

export const pages = [
  {
    id: 1,
    name: "Home",
    path: "/travelaja-landing-page/",
  },
  {
    id: 2,
    name: "About",
    path: "/travelaja-landing-page/",
  },
  {
    id: 3,
    name: "Discover",
    path: "/travelaja-landing-page/",
  },
  {
    id: 4,
    name: "Service",
    path: "/travelaja-landing-page/",
  },
  {
    id: 5,
    name: "News",
    path: "/travelaja-landing-page/",
  },
  {
    id: 6,
    name: "Contact",
    path: "/travelaja-landing-page/",
  },
];

export const languages = [
  {
    id: 1,
    icon: us,
    name: "English",
    code: "en",
  },
  {
    id: 2,
    icon: eg,
    name: "Arabic",
    code: "ar",
  },
];

export const destination = [
  {
    id: 1,
    title: "Taman Nasional Komodo",
    rp: "7,5jt",
    img: dest1,
    time: "7 days",
  },
  {
    id: 2,
    title: "Taman Nasional Bunaken",
    rp: "10,5jt",
    img: dest2,
    time: "9 days",
  },
  {
    id: 3,
    title: "Raja Ampat, Papua Barat",
    rp: "20,5jt",
    img: dest3,
    time: "14 days",
  },
  {
    id: 4,
    title: "Kepulauan Wakatobi",
    rp: "9,5jt",
    img: dest4,
    time: "12 days",
  },
  {
    id: 5,
    title: "Gili Trawangan, Lombok",
    rp: "6,5jt",
    img: dest5,
    time: "7 days",
  },
  {
    id: 6,
    title: "Taman Nasional Bromo",
    rp: "9,5jt",
    img: dest6,
    time: "7 days",
  },
];

export const testimonial = [
  {
    id: 1,
    name: "Angelina Simple",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: ellis1,
  },
  {
    id: 2,
    name: "Viola Natalie",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: ellis2,
  },
  {
    id: 3,
    name: "Robert John K.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: ellis3,
  },
  {
    id: 4,
    name: "Anggi Nani",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: ellis4,
  },
  {
    id: 5,
    name: "Graham Suryo J",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: ellis5,
  },
  {
    id: 6,
    name: "Bagas G Natfi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    img: ellis6,
  },
];

export const footerLinks = [
  {
    title: "links",
    links: ["Discover", "Special Deals", "Services", "Community", "About Us"],
  },
  {
    title: "Services",
    links: [
      "About Us",
      "Blog & Articles",
      "Term and Condition",
      "Privacy Policy",
      "Contact Us",
    ],
  },
];

export const contact = {
  title: "Contact",
  info: {
    address: "Jl.Codelaras No.205A",
    phone: "123 456 7890",
    email: "myagungperdana@gmail.com",
    maps: "Kediri, East java",
  },
};

export const headingAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const headingText = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};
