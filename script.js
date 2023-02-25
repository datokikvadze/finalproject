let navigationeElement = document.getElementById('navBar');
let burgerElement = document.getElementById('burgerBar');

burgerElement.addEventListener('click',function(){
    navigationeElement.classList.toggle('activeNav');
});
document.getElementById('submit').addEventListener('click',function(){
  alert('Thanks For Comment')
})