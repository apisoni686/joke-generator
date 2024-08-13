function displayJoke(response) {
  console.log;
  let jokeElement = document.querySelector("#joke");
  jokeElement.innerHTML = response.data.answer;

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function tellJoke(event) {
  event.preventDefault();

  let key = "df01d4d69fab3f5otaf6694bc9e08ea8";
  let prompt = "Tell me a random joke about millenials.";
  let context =
    "You are an expert AI assistant on the millenial generation. Please don't make the same joke every time.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayJoke);
}

let jokeButton = document.querySelector("button");
jokeButton.addEventListener("click", tellJoke);
