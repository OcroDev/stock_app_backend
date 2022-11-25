const $inputName = document.getElementById("productName");
const $inputPrice = document.getElementById("productPrice");
// console.log({ $inputName, $inputPrice });

const $button = document.querySelector("button");
const pokeApiURL = "https://pokeapi.co/api/v2/pokemon";

axios(`${pokeApiURL}/mew`)
  .then((res) => {
    if (res.status === 200) {
      const pokedata = res.data;
      console.log(pokedata.name);
      const $html = `
     <h3>${pokedata.name}</h3>
     <img src="${pokedata.sprites.front_default}" alt="imagen de un pokemon" />
     <span>#${pokedata.id}</span>
     `;
      const $div = document.createElement("div");
      $div.classList.add("poke-card");
      $div.innerHTML = $html;
      document.querySelector("body").appendChild($div);
    }
  })
  .catch((err) => {
    const $html = `<h2>Pokemon not found ${err}</h2>`;
    const $div = document.createElement("div");
    $div.classList.add("poke-card");
    $div.innerHTML = $html;
    document.querySelector("body").appendChild($div);
  });

// fetch(`${pokeApiURL}/charizard`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((pokemon) => {
//     console.log(pokemon);
//     const $html = `
//     <h3>${pokemon.name}</h3>
//     <img src="${pokemon.sprites.front_default}" alt="imagen de un pokemon" />
//     <span>#${pokemon.id}</span>
//     `;
//     const $div = document.createElement("div");
//     $div.classList.add("poke-card");
//     $div.innerHTML = $html;
//     document.querySelector("body").appendChild($div);
//   })
//   .catch((err) => console.log(err));

setTimeout(() => {
  const $body = document.querySelector("body");
  const $div = document.createElement("div");
  const $html =
    "<h2>Este contenido lo agregamos a la web utilizando JAVASCRIPT</h2>";
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
