
document.querySelectorAll('button').forEach(item => {

  if (item.innerHTML == '=') {
    item.addEventListener('click', () => {

    
      var result = eval(document.querySelector('#result').value);
      document.querySelector('#result').value = result;

    })
  }
  else{
    item.addEventListener('click', event => {
        
      var input = event.target.innerText;
      document.querySelector('#result').value += input;
    
    })
  }  
})
