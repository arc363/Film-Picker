// Pick randomly between shelf, chest and Curzon

const randomSource = function () {
  const randomNumber1 = Math.floor(Math.random() * 3);
  const source = [`the shelf`, `the chest`, `Curzon`];

  console.log(`Choose a film from...
      ...${source[randomNumber1]}!`);
};

randomSource();
