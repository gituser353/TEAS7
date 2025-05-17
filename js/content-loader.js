document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile nav
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Auto-scroll testimonials (slider)
  const testimonialScroll = document.getElementById("testimonialScroll");
  const testimonials = document.querySelectorAll(".testimonial");
  let currentIndex = 0;

  function autoScrollTestimonials() {
    if (currentIndex >= testimonials.length) {
      currentIndex = 0; // Reset to the first testimonial
    }

    // Calculate the translate value based on the current index
    testimonialScroll.style.transform = `translateX(-${currentIndex * 100}%)`;

    currentIndex++;
  }

  setInterval(autoScrollTestimonials, 4000); // Scroll every 4 seconds

  // Optional: Add manual navigation buttons for better UX
  const prevButton = document.createElement("button");
  const nextButton = document.createElement("button");

  prevButton.textContent = "❮";
  nextButton.textContent = "❯";

  prevButton.style.position = "absolute";
  prevButton.style.top = "50%";
  prevButton.style.left = "10px";
  prevButton.style.transform = "translateY(-50%)";
  prevButton.style.fontSize = "24px";
  prevButton.style.cursor = "pointer";
  prevButton.style.backgroundColor = "transparent";
  prevButton.style.border = "none";
  prevButton.style.color = "#003366";

  nextButton.style.position = "absolute";
  nextButton.style.top = "50%";
  nextButton.style.right = "10px";
  nextButton.style.transform = "translateY(-50%)";
  nextButton.style.fontSize = "24px";
  nextButton.style.cursor = "pointer";
  nextButton.style.backgroundColor = "transparent";
  nextButton.style.border = "none";
  nextButton.style.color = "#003366";

  document.querySelector(".testimonial-scroll-wrapper").appendChild(prevButton);
  document.querySelector(".testimonial-scroll-wrapper").appendChild(nextButton);

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    testimonialScroll.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonialScroll.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
});