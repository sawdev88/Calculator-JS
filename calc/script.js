var
  input = document.getElementById('inputField'),
  buttons = document.querySelectorAll('button'),
  values = [];

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
