const BASE_URL = 'https://official-joke-api.appspot.com';

export const getRandomJoke = async () => {
    try {
        const response = await fetch(`${BASE_URL}/jokes/random`)
        if (!response.ok) {
            throw new Error(`Cannot getRandomJoke because of : ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getJokeTypes = async () => {
    try {
        const response = await fetch(`${BASE_URL}/types`)
        if (!response.ok) {
            throw new Error(`Cannot get Joke types because of: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getJokeByType = async (type) => {
    try {
        const response = await fetch(`${BASE_URL}/jokes/${type}/random`);
        if (!response.ok) {
            throw new Error(`Cannot get joke by type because of: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error)
    }
}