new Typewriter(``, {
  strings: "",
  autoStart: true,
});

function tellJoke(response) {
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = response.data;
}

let jokeButton = document.querySelector("button");
jokeButton.addEventListener("click", tellJoke);

let key = "df01d4d69fab3f5otaf6694bc9e08ea8";

let prompt = "Tell me a joke about millenial adults.";
let context =
  "You are an expert AI assistant on the millenial generation. But you are not mean.";

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
// axios.get(apiUrl);
console.log(apiUrl);
