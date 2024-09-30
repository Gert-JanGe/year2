import { getJokeByType, getJokeTypes, getRandomJoke } from "./services/jokeService.js";

async function loadJokeTypes() {
    try{
        const jokeTypes = ["general", "dad", "knock-knock", "programming"]
        const btnContainer = document.getElementById('btn-container');

        jokeTypes.forEach(type => {
            const button = document.createElement('button');
            button.textContent = type;
            button.addEventListener('click', () => {
                loadJokeWithTypes(type);
            });

            btnContainer.appendChild(button);
        });

    } catch (error) {
        console.error("No funnies");
    }
    
}

async function loadJokeWithTypes(type) {
    try {
        const joke = await getJokeByType(type);
        console.log(joke);
        displayJoke(joke);
    } catch (error) {
        console.error('Geen type gevonden');
    }
}

function displayJoke(joke){
    const jokeDiv = document.getElementById('mopje');
    jokeDiv.innerText = `${joke.setup} - ${joke.punchline}`;
}

async function loadNewJoke() {
    try{
        const joke = await getRandomJoke();
        displayJoke(joke);
    } catch (error) {
        console.error('No funnies found');
    }
    
}

function eventListener(){
    const button = document.getElementById('btn-id');
    button.addEventListener('click', loadNewJoke);
}

async function getJoke() {
loadNewJoke();
eventListener();
await loadJokeTypes();
}

getJoke();