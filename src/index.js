import joke from "./generateJoke";
import "./styles/main.css";
import "./styles/main.scss";
import laughing from "./assets/Laughing-Emoji.png";

console.log(joke);

const laughingImg = document.getElementById("laughingImg");

laughingImg.src = laughing;
