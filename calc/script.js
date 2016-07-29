var
  input = document.getElementById('inputField'),
  buttons = document.querySelectorAll('button'),
  values = [],
  colors = ['#FF5A5A', '#ad5aff', '#32ADFF'];

function randomColor() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  var randColor = colors[randomNumber];
  console.log(randColor);
  document.body.style.background = randColor;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.color = randColor;
  }
}

randomColor();

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {

    if (this.value === '=') {
      // Turn values into string and evaluate
      var equals = values.join('');
      var answer = eval(equals);

      // Display answer
      input.innerHTML = eval(answer);

      // Clear array to prevent OOO and store answer as first param
      values = [];
      values.push(answer);

    } else if (this.value === 'clear') {
      // Clear all info
      values = [];
      input.innerHTML = '';
    }else {
      // Add values to array and display
      values.push(this.value);
      input.innerHTML += this.value;
    }

  })
}
