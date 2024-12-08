document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
  
    // Function to update the slider position
    function updateSliderPosition() {
      const offset = -(currentIndex * (slides[0].offsetWidth + 20)); // 20 is the gap between slides
      document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
    }
  
    // Event listener for the "previous" button
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
      updateSliderPosition();
    });
  
    // Event listener for the "next" button
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
      updateSliderPosition();
    });
  
    // Optionally, you can add autoplay functionality
    // setInterval(() => {
    //   nextButton.click();
    // }, 3000); // Slide every 3 seconds (optional)
  });
//slide2
const simpleSlider = document.querySelector(".simple-slider");
const simpleSlides = document.querySelectorAll(".simple-slide");
const totalSlides = simpleSlides.length;

let currentIndex = 0;

function updateSliderPosition() {
  simpleSlider.style.transform = `translateX(-${currentIndex * (100 / 4)}%)`; // Adjusted for 4 slides in view
}


function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back after the last slide
  updateSliderPosition();
}

// Auto-slide every 3 seconds
setInterval(autoSlide, 2000);

//slide3
  
    // Automatically move to the next slide every 3 seconds
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get slider elements
    const slider = document.getElementById("unique-slider");
    const prevBtn = document.getElementById("unique-prev-btn");
    const nextBtn = document.getElementById("unique-next-btn");
    
    // Define slider state
    const frameWidth = slider.querySelector(".frame").offsetWidth + 20; // Width + gap
    const visibleFrames = 4; // Frames visible at a time
    const totalFrames = slider.children.length;
    let currentPosition = 0;
  
    // Next button click handler
    nextBtn.addEventListener("click", function () {
      if (currentPosition > -(totalFrames - visibleFrames) * frameWidth) {
        currentPosition -= frameWidth;
      } else {
        currentPosition = 0; // Loop back to start
      }
      slider.style.transform = `translateX(${currentPosition}px)`;
    });
  
    // Previous button click handler
    prevBtn.addEventListener("click", function () {
      if (currentPosition < 0) {
        currentPosition += frameWidth;
      } else {
        currentPosition = -(totalFrames - visibleFrames) * frameWidth; // Loop to the end
      }
      slider.style.transform = `translateX(${currentPosition}px)`;
    });
  });
    

  //section6 



// Function to switch between content sections
function showContent(contentNumber) {
  const content1 = document.getElementById("content-1");
  const content2 = document.getElementById("content-2");

  const dots = document.querySelectorAll(".dot");

  // Hide both content sections initially
  content1.style.display = "none";
  content2.style.display = "none";

  // Show the selected content section
  if (contentNumber === 1) {
    content1.style.display = "block";
  } else if (contentNumber === 2) {
    content2.style.display = "block";
  }

  // Update the active dot
  dots.forEach(dot => dot.classList.remove("active"));
  dots[contentNumber - 1].classList.add("active");
}

// Initialize content 1 as active
showContent(1);


//navbar effect
document.addEventListener("scroll", function () {
  const stickyNav = document.querySelector(".sticky-nav");
  const heroSection = document.querySelector(".hero-h1");
  const heroH1 = heroSection.querySelector("h1");

  const heroRect = heroH1.getBoundingClientRect();
  const navRect = stickyNav.getBoundingClientRect();

  // Check if the hero h1 is near or has touched the sticky navbar
  if (heroRect.top <= navRect.bottom && heroRect.bottom >= navRect.top) {
      stickyNav.classList.add("fixed"); // Add fixed class when hero h1 touches navbar
  } else {
      stickyNav.classList.add("fixed"); // Remove fixed class when hero h1 is not touching navbar
  }
});
//reponsive

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  // Function to update the slider position
  function updateSliderPosition() {
    const offset = -(currentIndex * (slides[0].offsetWidth + 20)); // 20 is the gap between slides
    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
  }

  // Event listener for the "previous" button
  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSliderPosition();
  });

  // Event listener for the "next" button
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSliderPosition();
  });

  // Adjust auto-slide logic for mobile
  const slideWidth = slides[0].offsetWidth + 20; // 20 is the gap between slides
  const isMobile = window.innerWidth <= 768;

  function autoSlide() {
    if (isMobile) {
      currentIndex = (currentIndex + 1) % totalSlides; // Mobile auto-slide behavior
    }
    updateSliderPosition();
  }
  
  // Auto-slide every 3 seconds for mobile
  if (isMobile) {
    setInterval(autoSlide, 2000);
  }
});

// For the section slider (like the third slider)
document.addEventListener("DOMContentLoaded", function () {
const slider = document.getElementById("unique-slider");
const prevBtn = document.getElementById("unique-prev-btn");
const nextBtn = document.getElementById("unique-next-btn");

const frameWidth = slider.querySelector(".frame").offsetWidth + 20; // Width + gap
const visibleFrames = window.innerWidth <= 768 ? 1 : 4; // Show 1 frame on mobile, 4 on desktop
const totalFrames = slider.children.length;
let currentPosition = 0;

function updateSlider() {
  slider.style.transform = `translateX(${currentPosition}px)`;
}

nextBtn.addEventListener("click", function () {
  if (currentPosition > -(totalFrames - visibleFrames) * frameWidth) {
    currentPosition -= frameWidth;
  } else {
    currentPosition = 0; // Loop back to start
  }
  updateSlider();
});

prevBtn.addEventListener("click", function () {
  if (currentPosition < 0) {
    currentPosition += frameWidth;
  } else {
    currentPosition = -(totalFrames - visibleFrames) * frameWidth; // Loop to the end
  }
  updateSlider();
});
});



  
    
  

  