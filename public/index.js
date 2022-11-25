const $inputName = document.getElementById("productName");
const $inputPrice = document.getElementById("productPrice");
console.log({ $inputName, $inputPrice });

const $button = document.querySelector("button");

console.log($button);

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
