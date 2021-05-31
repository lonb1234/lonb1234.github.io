window.addEventListener('load',function(){
  document.querySelector('body').classList.add("loaded")  
});


  window.addEventListener('scroll', function(){
    var value = window.scrollY;
    
    document.getElementById("mountain").style.top=value *0.5+'px';
 
    document.getElementById("title4").style.marginTop=value*1.25+'px';

  
  })



  



  var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  var findMe = document.querySelectorAll('.viewcheck');
  
  window.addEventListener('scroll', function(event) {
    var counter=0
  findMe.forEach(element => {
      counter=counter+1
      if (isInViewport(element)) {
        

        element.style.visibility="visible"
        if (counter%2==0){
        element.classList.add("bounce-left");
        }
        else{
          element.classList.add("bounce")
        }
      }
  });
  }, false);  






  window.addEventListener('scroll', function(){
    var value = window.scrollY;
    
    document.getElementById("mountain").style.top=value *0.5+'px';
 
    document.getElementById("title4").style.marginTop=value*1.25+'px';
  
  })






  var findfade = document.querySelectorAll('.fade-scroll');
  
  window.addEventListener('scroll', function(event) {
    
  findfade.forEach(element => {
      
      if (isInViewport(element)) {
        

        element.style.visibility="visible"
      
        element.classList.add("fade-in");
        
      }
  });
  }, false);  



