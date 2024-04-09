(() => {
  class étoiles {
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
  }
  let arr = [];

  function randomNum() {
    for (let i = 0; i < 1000; i++) {
      let topLeftXPos = Math.floor(Math.random() * 100);
      let topLeftYPos = Math.floor(Math.random() * 100);
      let width = Math.floor(Math.random() * 1) + 1;
      let length = Math.floor(Math.random() * 1) + 1;
      arr.push(new étoiles(topLeftXPos, topLeftYPos, width, length));
    }
    return arr;
  }

  let etoiles = randomNum();
  console.log(arr);
})();
