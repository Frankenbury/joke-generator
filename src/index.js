import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.svg';

// Add the image into the doc
const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

// functional button
const jokeBtn = document.querySelector('#jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();
