let text = document.querySelector('p');


function handler1() {
    alert ('Good!');
}
text.addEventListener("click", handler1);

  function handler2() {
    alert ('Not bad');
}

 
text.addEventListener("click", handler2);