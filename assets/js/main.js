const btn = document.querySelector("button");
const inputFile = document.querySelector("#file");

btn.addEventListener("click", () => {
  event.preventDefault();

  //* INPUTS
  const inputName = document.querySelector("#name").value;
  const inputAge = document.querySelector("#age").value;
  const inputSize = document.querySelector("#size").value;
  const inputElement = document.querySelector("#element").value;
  const inputRarity = document.querySelector("#rarity").value;
  const inputImage = document.querySelector("#file");

  //* CLASS
  class Monster {
    constructor(name, age, size, element, rarity, image) {
      this.name = name;
      this.age = age;
      this.size = size;
      this.element = element;
      this.rarity = rarity;
      this.image = image;
    }
  }

  const newMonster = new Monster(
    inputName,
    inputAge,
    inputSize,
    inputElement,
    inputRarity,
    inputImage
  );
  console.log(newMonster);
  const myJSON = JSON.stringify(newMonster);
  console.log(myJSON);
});
