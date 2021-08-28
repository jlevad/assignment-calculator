const insert = (event) => {
  let displayText = document.getElementById('calc');
  switch (event.target.innerHTML) {
    case '=':
      displayText.innerHTML = eval(displayText.innerHTML);
      break;
    case 'AC':
      displayText.innerHTML = '0';
      break;
    case 'CE':
      displayText.innerHTML = displayText.innerHTML.slice(0, -1);
      if (displayText.innerHTML === '') {
        displayText.innerHTML = '0';
      } 
      break;
    default:
      if (displayText.innerHTML === '0') {
        displayText.innerHTML = event.target.innerHTML;
      } else {
        displayText.innerHTML += event.target.innerHTML;
      }
      break;
  }
}