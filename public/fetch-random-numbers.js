function fetchRandomNumbers() {
  var container = document.getElementById("randomNumbersContainer");
  container.innerHTML = "<div>Please wait until loading data ... </div>";
  fetch("/getRandomNumbers").then(function(res) {
    res.json().then(function(data) {
      console.log("data", data);

      container.innerHTML = "";
      for (var i = 0; i < data.length; i++) {
        var item = document.createElement("div");
        container.appendChild(item);
        showNumber(item, data[i]);
      }
    });
  });
}

// Show results by Animation
function showNumber(container, number) {
  if (container.innerHTML == "") container.innerHTML = "0";

  var currentNumber = parseInt(container.innerHTML);
  if (currentNumber < number) {
    container.className='loading'
    container.innerHTML = ++currentNumber;
    window.setTimeout(function() {
      showNumber(container, number);
    }, 1500/number);
  }else{
    container.className='loaded'
  }
}
window.onload = function() {
  fetchRandomNumbers();
};
