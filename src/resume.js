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
  education: {
    heading: "Chandigarh Engineering College, Landran",
    course: "Bachelor of Technology in Computer Science & Engineering",
    duration: "2018 - Present",
  },
  work: {
    heading: "Knowtech PVT LTD",
    position: "Android Developer Intern",
    duration: "Sept 2020 - Nov 2020",
  },
  skills: {
    react: {
      name: "ReactJS",
      percentage: "90",
    },
    nodejs: {
      name: "NodeJS",
      percentage: "90",
    },
    css: {
      name: "CSS",
      percentage: "80",
    },
    javascript: {
      name: "Javascript",
      percentage: "80",
    },
    mongoDB: {
      name: "MongoDB",
      percentage: "85",
    },
    express: {
      name: "EXPRESS",
      percentage: "80",
    },
    kotlin: {
      name: "KOTLIN",
      percentage: "76",
    },
    java: {
      name: "JAVA",
      percentage: "78",
    },
    git: {
      name: "Git",
      percentage: "70",
    },
  },

  projects: {
    amazonClone: {
      name: "Amazon-Clone",
      description:
        "This is a clone Web-App of amazon developed in ReactJS. Firebase Authentication is used for the authentication of Users and Firestore is used to store userData. Heroku deployment is used for deplyoment",
      link: "https://obscure-mesa-74789.herokuapp.com/",
    },
    covid19tracker: {
      name: "Covid-19 Tracker",
      description:
        "This Web-App informs about Active, Recovered, Death Count Globally or Countrywise. Data is Fetched from API. Heroku deployment is used for deplyoment",
      link: "https://frozen-ridge-31250.herokuapp.com/",
    },
    soniMeals: {
      name: "Soni Meals",
      description:
        "An Android App that enables one to authenticate and choose from a list of restaurants and easily order food from their visual menus to be delivered at their doorstep.",
      link:
        "https://drive.google.com/drive/folders/1Zkv7-b-U9FBq8Lcn0sEIKEUi1T_T9XmU?usp=sharing",
    },
  },
};

export default resume;
