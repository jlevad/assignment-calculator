const insert = (event) => {
  let displayText = document.getElementById('calc');

  switch (event.target.innerHTML) {
    case '=':
      displayText.innerHTML = eval(displayText.innerHTML);
      break;
    case 'AC':
      displayText.innerHTML = '';
      break;
    case 'CE':
      displayText.innerHTML = displayText.innerHTML.slice(0, -1);
      break;
    default:
      displayText.innerHTML += event.target.innerHTML;
      break;
  }
}