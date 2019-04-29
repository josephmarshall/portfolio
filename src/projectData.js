import hourglass from "./hourglass_white_inside.png";
import starwars from "./starwars.png";
import crypton from "./crypton.png";
import meinespace from "./meinespace.png";
import utube from "./utube-icon.png"
import trollo from "./trollo-icon.png"
import depStore from "./departmentStoreIcon.png"

export const projectData = [
  {
    name: "CRYPTON",
    description:
      "A cryptocurrency hedge fund specializing in algorithmic trading.  I developed the trading algorithm, the exchange interface, an accounting protocol for high frequency trading, and founded the managing firm. Developed in Ruby and Angular JS.",
    image: crypton,
    link: ""
  },
  {
    name: "Hourglass",
    description:
      "A timesheet and project tracker developed in React JS / Rails. I developed the time tracking pages and contributed heavily to every part of the app.",
    image: hourglass,
    link: "https://dp-hourglass.herokuapp.com"
  },
  {
    name: "Star Wars",
    description:
      "An information page I developed in React JS with Axios to pull data from a third party Star Wars API. Character pictures are pulled in dynamically from internet search results.",
    image: starwars,
    link: "https://starwars-react-2019.herokuapp.com/people"
  },
  {
    name: "Meine Space",
    description:
      "A comical version of the outdated MySpace I developed that showcases React JS on the front end with a rails API backend in a social networking setting.",
    image: meinespace,
    link: "https://meinespace.herokuapp.com/"
  },
  {
    name: "Department Store",
    description: "Example app I developed for a notional ecommerce platform.",
    image: depStore,
    link: "https://department-store.herokuapp.com/"
  },
  {
    name: "U-Tube",
    description:
      "A YouTube knockoff project I contributed heavily to during a hackathon event at devpoint labs.",
    image: utube,
    link: "https://utube-crl.herokuapp.com"
  },
  {
    name: "Trollo",
    description:
      "An example task board type app I developed in Ruby on Rails, based loosly on trello.com",
    image: trollo,
    link: "https://trollo-crl.herokuapp.com/"
  }
];
