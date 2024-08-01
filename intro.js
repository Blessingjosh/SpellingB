function loopobjects(elements) {
    elements.forEach(function(element) {
        const height = window.innerHeight - 100;
        const width = window.innerWidth - 100;
        const x = Math.ceil((Math.random() * height) + 1);
        const y = Math.ceil((Math.random() * width) + 1);
        element.style.left = y+'px';
        element.style.top = x+'px';
    });
    
}
function randomstandard() {
    const circles = document.querySelectorAll('.circle');
    loopobjects(circles);
}
function randomsmaller() {
    const smallcircles = document.querySelectorAll('.circlesmall');
    loopobjects(smallcircles);
}
setInterval(randomstandard, 1200);
setInterval(randomsmaller, 1000);


  $('input').focusin(function() {
    $('label').transition({x:'80px'},500,'ease').next()
    .transition({x:'5px'},500, 'ease');

     setTimeout(function(){
    $('label').next().addClass('move-pen');
    },100);

});
  
  $('input').focusout(function() {
      $('label').transition({x:'0px'},500,'ease').next()
       .transition({x:'-100px'},500, 'ease').removeClass('move-pen');
  });

  function fun(){
    window.location.href = "welcome.html"
    var r =  document.getElementById('input1').value
    document.getElementById('input1').value = " "
var k=document.getElementById('demo').innerHTML = r
    localStorage.setItem('myvalue', k)
  }
  function pressKey(event) {
  console.log(event.key)
  if (event.key === 'Enter') {
    fun()
  }
}
 