let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

let btn = document.querySelector("button");
let setup = document.querySelector("#result1");
let delivery = document.querySelector("#result2");

btn.addEventListener("click", async () => {
  try {
    let joke = await getjoke();
    if (Array.isArray(joke)) {
      setup.innerText = joke[0];
      delivery.innerText = joke[1];
    } else {
      setup.innerText = joke;
      delivery.innerText = "";
    }
  } catch (error) {
    console.log("Error detected:", error);
  }
});

async function getjoke() {
  try {
    let res = await axios.get(url);
    if (res.data.type == "twopart") {
      return [res.data.setup, res.data.delivery];
    } else {
      return res.data.joke;
    }
  } catch (e) {
    console.log("Error detected:", e);
  }
  return res.data.category;
}
