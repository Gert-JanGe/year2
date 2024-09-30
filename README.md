# Joke generator
Simple web app that can show a random joke or a joke based on a category.

## Getting started
### Install all packages
`npm i`

### Serve the app locally
`npm run dev`


## Oefeningen
### Oefening 1
#### Oefening 1a
- Importeer in de `index.js` file de `getRandomJoke` functie die geimplementeerd is in `jokeService.js`. Je kan dit doen door bovenaan `index.js` het volgende toe te voegen:

```js
import { getRandomJoke } from "./services/jokeService.js";
```
- Pas de functie `getJoke` in de `index.js` file aan zodat die `getRandomJoke` gaat aanroepen en de waarde die `getRandomJoke` teruggeeft, opslaat in een variabele. **Pas op! Als je een kijkje neemt in de `jokeService` file dan zal je zien dat `getRandomJoke` een asynchrone functie is.**
- Print vervolgens deze variabele af naar de console. Let goed op het formaat van de response. Wat geeft de API precies terug als je deze functie uitvoert?

#### Oefening 1b
Onze (denkbeeldige) gebruikers gaan natuurlijk niet het mopje in de console willen zoeken.  Ze gaan het in de web pagina zelf willen zien. We werken verder met de functie die je in 1.a geschreven hebt.
- Gebruik je kennis van DOM manipulatie om de `div` met `id` "mopje" te selecteren in je `getJoke` functie.
- Toon vervolgens het mopje als `innerText` van deze `div`.
- **Opgelet! Zoals je hierboven gezien hebt bestaat een mopje uit meerdere delen. We willen graag zowel de setup als de punchline zien in onze div. String concatenation of de backtick notatie komen hier goed van pas**

### Oefening 2
Wanneer we onze pagina refreshen wordt de mop geladen. Dat is al een goed begin! Maar we zouden de gebruiker graag controle willen geven over het ophalen van nieuwe mopjes door op de knop te klikken die je ziet in de web pagina.
- Selecteer in je `getJoke` functie de knop met `id` "btn-id" en voeg er een eventListener aan toe die naar `click` events gaat luisteren. Raadpleeg gerust de documentatie nog even: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
- Wanneer er een `click` event op de knop is, wil je dat er een nieuw mopje geladen wordt. Je kan hier gewoon opnieuw de `getRandomJoke` functie voor gebruiken.

**Dit is misschien een goed moment om te stoppen en te kijken of je eventueel je code wat overzichtelijker kan maken door bepaalde stukken die hergebruikt worden in aparte functies te steken, als je dat nog niet gedaan hebt.**

### Oefening 3
#### Oefening 3a
Er zijn mopjes! En we kunnen de gebruiker met een klik van de knop een nieuw mopje laten ophalen.

Nu willen we ook mopjes van een bepaald type kunnen selecteren. Voor we dit kunnen doen moeten we eerst weten welke types mopjes er zijn. Hiervoor is er een functie beschikbaar in de `jokeService` die `getJokeTypes` noemt.

- Begin met deze functie te importeren vanuit de `jokeService`, in je `index.js`. Je kan dit doen op dezelfde manier als je `getRandomJoke` hebt geimporteerd.
- Schrijf nu een functie bv `loadJokeTypes` die in zijn body `getJokeTypes` gaat uitvoeren en de response van `getJokeTypes` opslaat in een variabele.
- Print deze variabele naar de console. Wat zie je? Wat zit er in de response van de API?

#### Oefening 3b
Je ziet dat de response van `getJokeTypes` een lijst of Array van string is die elk een type voorstellen. Voor elk type mopje willen we nu een knop tonen op onze web pagina met als tekst op de knop het type.

- In de functie die je in 3.a geschreven hebt, heb je een variabele beschikbaar waar de lijst van types inzit.
- De buttons die we gaan toevoegen zullen in de `div` moeten komen met `id` `btn-container`. Selecteer deze `div` en sla de waarde op in een variabele zodat we die in die kunnen gebruiken.
- We hadden reeds een variabele waar een Array van types inzat. Schrijf nu een for loop (of een forEach loop) die over deze Array gaat loopen.
- Voor elk element in de array willen we een knop maken (https://www.w3schools.com/jsreF/met_document_createelement.asp) met als textContent de waarde van dat element in de array.
- Voeg **elke** knop die je maakt toe aan de `btn-container`. https://www.w3schools.com/jsref/met_node_appendchild.asp

### Oefening 4
Tot slot willen we er nu voor zorgen dat wanneer er op een knop geklikt wordt, er een nieuwe mop getoond wordt binnen het gekozen genre. Bv als je op "Programming" klikt, wordt er een mop van het type "Programming" geladen.

#### Oefening 4a
- Importeer vanuit de `jokeService` de functie `getJokeByType`. Kijk ook even goed naar de functie.
- Voeg in `index.js` een functie toe die mopjes van een bepaald type kan laden, bv `loadJokesWithType`. Als je goed gekeken hebt, dan zie je dat de functie `getJokeByType` in de `jokeService` een parameter verwacht. Die gaan we dus mee moeten geven.
- Voeg in je nieuwe functie `loadJokesWithType` de functie `getJokeByType` uit en sla de return op in een variabele. Gebruik voorlopig hardcoded het type "dad". `getJokeByType("dad")`. Print de response uit. **Kijk er goed naar. Er is wel degelijk een verschil met wat er terugkwam uit `getRandomJoke`!**

#### Oefening 4c
We gaan tot slot de buttons die je in 3b hebt aangemaakt interactief maken.
- In de for loop waar je per type een knop aanmaakt en de tekst op de button goed zet, moeten we nu ook aan elke button interactiviteit toevoegen. 
- Hang aan elke knop die je maakt een eventListener die naar click events gaat luisteren.
- Wanneer er op de knop geklikt wordt, wil je dat `loadJokesWithType` wordt uitgevoerd. **Let op, deze functie verwacht als parameter het type dus vergeet het niet mee te geven.**

### Oefening 5 [EXTRA]
De applicatie kan in het algemeen wel wat liefde gebruiken als het op styling aankomt!
Pas je kennis van CSS toe om het er wat mooier uit te laten zien. Enkele suggesties:
- Er kunnen wel wat dingen gecentreerd of mooier uitgelijnd worden
- De pagina kan wel wat kleur gebruiken

### Oefening 6 [EXTRA]
Denk zelf even na of het steek houdt om ipv async / await iets te refactoren naar Promise.all of Promise.allSettled en probeer om optimalisaties te vinden. Je mag het zeker bespreken als je ideeën hebt!