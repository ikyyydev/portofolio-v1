import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const sosmed = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ikyyydev",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/rifki-jaya-afandi-78a534277/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/ikyyyyy_af/",
  },
];
const SocialMedia = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {sosmed.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
