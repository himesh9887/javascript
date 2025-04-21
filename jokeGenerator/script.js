//-------------------------------------------------------------------------------------------------------------------
//                          Predefined Random Jokes
//--------------------------------------------------------------------------------------------------------------------

// const jokeElement = document.getElementById("joke");
// const btn = document.getElementById("btn");

// function getrandomJoke() {
//   const jokes = [
//     "What does a storm cloud wear under his raincoat? Thunderwear.",
//     "What do kids play when their mom is using the phone? Bored games.",
//     "What do you call an ant who fights crime? A vigilANTe!",
//     "Why are snails slow? Because they're carrying a house on their back.",
//     "What's the smartest insect? A spelling bee!",
//     "What is fast, loud and crunchy? A rocket chip.",
//   ];

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * jokes.length);
//       const randomJoke = jokes[randomIndex];

//       if (randomJoke) {
//         resolve(randomJoke);
//       } else {
//         reject("Failed to fetch Joke....");
//       }
//     }, 2000);
//   });
// }

// btn.addEventListener("click", () => {
//   jokeElement.textContent = "Fetching Joke....";
//   getrandomJoke()
//     .then((joke) => {
//       jokeElement.textContent = joke;
//       localStorage.setItem("latestJoke", joke);
//     })
//     .catch((error) => {
//       jokeElement.textContent = error;
//     });
// });

//--------------------------------------------------------------------------------------------
//                  Random Jokes form the Api
//--------------------------------------------------------------------------------------------
// const jokeElement = document.getElementById("joke");
// const btn = document.getElementById("btn");
// const URL = "https://official-joke-api.appspot.com/random_joke";

// async function getrandomJoke() {
//   const joke = await fetch(URL);
//   const jokeData = await joke.json();
//   return jokeData;
// }

// btn.addEventListener("click", async () => {
//   jokeElement.textContent = "Fetching Joke....";
//   const joke = await getrandomJoke();
//   jokeElement.innerText = `${joke.setup}\n${joke.punchline}`;
// });



const jokeElement = document.getElementById("joke");
const btn = document.getElementById("btn");
const URL = "https://official-joke-api.appspot.com/random_joke";

async function getrandomJoke() {
  const response = await fetch(URL)
  const data = await response.json()
  return data
}

btn.addEventListener('click', async ()=>{
  jokeElement.textContent = "Fetching Joke..."
  const joke  = await getrandomJoke()
  jokeElement.textContent = `${joke.setup}\n${joke.punchline}`
})