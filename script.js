$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){+
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // typing 
    var typed = new Typed("#typed-text", {
        strings: ["And Kill It In The Gym"],
        typeSpeed: 150,
        backSpeed: 40,
        loop: true
      });

// // email Notification  
// const form = document.getElementById('contact-form');
// const popup = document.getElementById('popup');

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);

//   try {
//     const response = await fetch('https://formspree.io/f/mqaqkgze', {
//       method: 'POST',
//       headers: { 'Accept': 'application/json' },
//       body: formData
//     });

//     if (response.ok) {
//       form.reset();
//       popup.classList.add('show');
//       setTimeout(() => {
//         popup.classList.remove('show');
//       }, 3000);
//     } else {
//       alert('Failed to send message. Please try again.');
//     }
//   } catch (error) {
//     alert('Error occurred: ' + error.message);
//   }
// });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});





// // // emai or whatsappconst whatsappBtn = document.getElementById("whatsapp-btn");
const whatsappBtn = document.getElementById("whatsapp-btn");
const form = document.getElementById("contact-form");
const popup = document.getElementById("popup");

function showPopup() {
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

whatsappBtn.addEventListener("click", function () {
  const name = form.name.value.trim();
  const mobail = form.mobail.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Validation: Check if any field is empty
  if (!name || !mobail || !subject || !message) {
    alert("Please fill out all fields before sending the message.");
    return;
  }

  const whatsappMessage = `*Name:*           ${name}%0A*Mobile:*         ${mobail}%0A*Subject:*        ${subject}%0A*Message:*     ${message}`;

  // ✅ Your WhatsApp number (India)
  const phoneNumber = "918789537734";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  window.open(whatsappURL, '_blank');

  showPopup();
  form.reset();
});

// classes section 
let currentSlide = 0;
const slides = document.querySelectorAll(".class-slide");
const dots = document.querySelectorAll(".nav-dots .dot");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
    currentSlide = index;
}
