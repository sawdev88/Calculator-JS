var
  input = document.getElementById('inputField'),
  buttons = document.querySelectorAll('button'),
  arr = [];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {

    if (this.value === '=') {
      var equals = arr.join('');
      var answer = eval(equals);
      input.innerHTML = eval(answer);
      arr = [];
      arr.push(answer);
    } else if (this.value === 'clear') {
      arr = [];
      input.innerHTML = '';
    }else {
      arr.push(this.value);
      input.innerHTML += this.value;
      console.log(this.value);
    }

  })
}
