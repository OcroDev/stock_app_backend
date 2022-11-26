const $inputName = document.getElementById("productName");
const $inputPrice = document.getElementById("productPrice");
// console.log({ $inputName, $inputPrice });

const $button = document.querySelector("button");

const getPokeData = async (pokemon) => {
  const pokeApiURI = "https://pokeapi.co/api/v2/pokemon";
  console.log("estoy en la funcion pokedata");
  try {
    const response = await axios(`${pokeApiURI}/${pokemon}`);
    if (response.status === 200) {
      const pokedata = response.data;
      console.log(pokedata.name);
      const $html = ` <p>This is Client Side Rendering</p>
     <h3>${pokedata.name}</h3>
     <img src="${pokedata.sprites.front_default}" alt="imagen de un pokemon" />
     <span>#${pokedata.id}</span>
     `;
      const $div = document.createElement("div");
      $div.classList.add("poke-card");
      $div.innerHTML = $html;
      document.querySelector("body").appendChild($div);
    }
  } catch (error) {
    const $html = `<h2>Pokemon not found ${err}</h2>`;
    const $div = document.createElement("div");
    $div.classList.add("poke-card");
    $div.innerHTML = $html;
    document.querySelector("body").appendChild($div);
  }
};

getPokeData("mew");

setTimeout(() => {
  const $body = document.querySelector("body");
  const $div = document.createElement("div");
  const $html = "<h2>This content add to web use Javascript</h2 > ";
  $div.innerHTML = $html;
  $body.appendChild($div);
}, 3000);

$button.addEventListener("click", (e) => {
  console.log({ name: $inputName.value, price: $inputPrice.value });
  const name = $inputName.value;
  const price = $inputPrice.value;
  fetch("/api/v1/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: $inputName.value,
      price: $inputPrice.value,
    }),
  });
});
