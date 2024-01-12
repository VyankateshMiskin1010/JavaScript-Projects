const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID;
function startChangingColor() {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
}
document.querySelector('#start').addEventListener('click', startChangingColor);

// Stop Button

function stopBtn() {
  clearInterval(intervalID);
  intervalID = null;
}

document.querySelector('#stop').addEventListener('click', stopBtn);
