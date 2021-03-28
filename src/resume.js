import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const resume = {
  name: "Nikhil Soni",
  description:
    "I am an engineering student currently pursuing a Bachelor of Technology in Computer Science and Engineering from Chandigarh Engineering College, Landran",
  socials: {
    linkedIn: {
      href: "https://www.linkedin.com/in/the-nikhil-soni",
      icon: <LinkedInIcon className="largeIcons" />,
    },
    instagram: {
      href: "https://www.instagram.com/____nikhil_._/",
      icon: <InstagramIcon className="largeIcons" />,
    },
    twitter: {
      href: "https://twitter.com/SoniNikhil19",
      icon: <TwitterIcon className="largeIcons" />,
    },
    github: {
      href: "https://github.com/Nikhilsoni2001",
      icon: <GitHubIcon className="largeIcons" />,
    },
  },
  aboutMe:
    "My name is Nikhil, I'm a Full Stack ReactJS Developer. Currently I'm pursuing a Bachelor of Technology in Computer Science and Engineering from Chandigarh Engineering College, Landran",
};

export default resume;
