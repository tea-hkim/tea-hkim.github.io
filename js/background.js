const images = [
  "mountains_1.png",
  "mountains_2.jpg",
  "mountains_3.jpg",
  "mountains_4.jpg",
  "mountains_5.jpg",
  "mountains_6.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
