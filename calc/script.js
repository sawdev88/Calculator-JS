var
  display = document.getElementById('displayField'),
  buttons = document.querySelectorAll('button'),
  values = [],
  colors = ['#FF5A5A', '#32ADFF', '#ad5aff'];

function randomColor() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  var randColor = colors[randomNumber];

  document.body.style.background = randColor;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.color = randColor;
  }
}

function clearArray(arr) {
  arr.splice(0);
}

randomColor();

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {

    if (this.value === '=') {
      // Turn values into string and evaluate
      var equals = values.join('');
      var answer = eval(equals);

      // Display answer
      display.innerHTML = eval(answer);

      // Clear array to prevent OOO and store answer as first param
      clearArray(values);
      values.push(answer);

    } else if (this.value === 'clear') {
      // Clear all info
      clearArray(values);
      display.innerHTML = '';
    }else {
      // Add values to array and display
      values.push(this.value);
      display.innerHTML += this.value;
    }

  })
}
