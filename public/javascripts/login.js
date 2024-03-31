document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
  
    gsap.from(cards, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.3,
      scale: 0.8,
      ease: "power3.out",
      delay: 0.5
    });
  
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
   
  
    btn1.addEventListener("click", function(event) {
      event.preventDefault();
    //   btn1.style.backgroundColor = "blue";
    //   btn2.style.backgroundColor = "";
    });
  
    btn2.addEventListener("click", function(event) {
      event.preventDefault();
    //   btn2.style.backgroundColor = "blue";
    //   btn1.style.backgroundColor = "";
    });
  });
  