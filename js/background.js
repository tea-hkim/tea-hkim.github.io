const images = [
  "프로미스나인1.jpg",
  "프로미스나인2.png",
  "프로미스나인3.png",
  "프로미스나인4.png",
  "프로미스나인5.png",
  "프로미스나인6.png",
  "프로미스나인7.jpg",
  "프로미스나인8.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
