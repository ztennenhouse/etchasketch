const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.setAttribute('id', 'box' + c);
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "square";
  };
};

makeRows(16, 16);

document.querySelectorAll(".square").forEach(item => {
item.addEventListener('mouseover', function() {
    item.classList.replace('square', 'black');

})
})