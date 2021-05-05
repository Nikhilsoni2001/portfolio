import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const resume = {
  name: "Nikhil Soni",
  description:
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Kotlin and some other cool libraries and frameworks.",
  socials: [
    {
      href: "https://www.linkedin.com/in/the-nikhil-soni",
      icon: <LinkedInIcon className="largeIcons" />,
    },
    {
      href: "https://www.instagram.com/____nikhil_._/",
      icon: <InstagramIcon className="largeIcons" />,
    },
    {
      href: "https://twitter.com/SoniNikhil19",
      icon: <TwitterIcon className="largeIcons" />,
    },
    {
      href: "https://github.com/Nikhilsoni2001",
      icon: <GitHubIcon className="largeIcons" />,
    },
  ],
  aboutMe:
    "I'm 20 year old Computer Science Engineering student living in Punjab. I am self taught developer and make apps, WebApps. Other than this, I love Music 🎵. I mainly work with React.js, JavaScript, CSS, HTML, Kotlin. I also work with  Axios, Git, Bootstrap and similar.",
  resumeLink:
    "https://docs.google.com/document/d/1ruvDGxs7XRmUgqFYlO82ZMYy7ZDyEKZpJGRbsmGAMXg/edit?usp=sharing",
  resume: [
    {
      name: "Education",
      heading: "Chandigarh Engineering College, Landran",
      course: "Bachelor of Technology in Computer Science & Engineering",
      duration: "2018 - Present",
    },
    {
      name: "Work",
      heading: "Knowtech",
      course: "Android Developer Intern",
      duration: "Sept 2020 - Nov 2020",
      link:
        "https://drive.google.com/file/d/1Dv8faYzYBvWm6BUfUNg6VoRCcTdSgrPE/view?usp=sharing",
    },
  ],
  skills: [
    {
      name: "ReactJS",
      percentage: "90",
    },
    {
      name: "NodeJS",
      percentage: "90",
    },
    {
      name: "CSS",
      percentage: "80",
    },
    {
      name: "Javascript",
      percentage: "80",
    },
    {
      name: "MongoDB",
      percentage: "85",
    },
    {
      name: "EXPRESS",
      percentage: "80",
    },
    {
      name: "KOTLIN",
      percentage: "76",
    },
    {
      name: "JAVA",
      percentage: "78",
    },
    {
      name: "Git",
      percentage: "70",
    },
    {
      name: "HTML",
      percentage: "90",
    },
  ],

  projects: [
    {
      name: "Soni Meals",
      description:
        "An Android App that enables one to authenticate and choose from a list of restaurants and easily order food from their visual menus to be delivered at their doorstep.",
      link:
        "https://drive.google.com/drive/folders/1Zkv7-b-U9FBq8Lcn0sEIKEUi1T_T9XmU?usp=sharing",
    },
    {
      name: "Covid-19 Tracker",
      description:
        "This Web-App informs about Active, Recovered, Death Count Globally or Countrywise. Data is Fetched from API. Heroku deployment is used for deplyoment",
      link: "https://frozen-ridge-31250.herokuapp.com/",
    },
    {
      name: "Expense Manager",
      description:
        "Used to handle expenses. One can add the amount and its source and their net profit/loss will be displayed. This app is made with Room Database, Coroutines, viewModel, Material Design, Chart Library, Navigation Components.",
      link: "https://github.com/Nikhilsoni2001/ExpenseManager",
    },
    {
      name: "KT-Notes",
      description:
        "A secure Notes taking app that lets one authenticate and save their notes. They have the option to switch to Dark Mode. The data is locally saved in Room and automatically syncs when the internet is available.",
      link: "https://github.com/Nikhilsoni2001/KT-Notes",
    },
    {
      name: "Amazon-Clone",
      description:
        "This is a clone Web-App of amazon developed in ReactJS. Firebase Authentication is used for the authentication of Users and Firestore is used to store userData. Heroku deployment is used for deplyoment",
      link: "https://obscure-mesa-74789.herokuapp.com/",
    },
  ],
};

export default resume;
