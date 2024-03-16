let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

//Rewrite the code (talked though in the chapter) to create the nested rectangles
//using a loop.
//Hint; think about how to manipulate the looping variableto retrieve a stroke 
//color from an array  and set the strokeRect argumenets appropriately//

let drawTangles = () => {
  ctx.lineWidth = 2;
  let tangleColor = ['red', 'orange', 'yellow', 'green', 'blue'];
  let x = 10;
  let y = 10;
  let width = 200;
  let height = 100;
  for (let color of tangleColor) {

    ctx.strokeStyle = color;
    ctx.strokeRect(x, y, width, height);

    x += 10;
    y += 10;
    width -= 20;
    height -= 20;

  };
  
}
drawTangles();
