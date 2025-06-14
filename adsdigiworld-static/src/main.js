// Scroll/fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-8');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('[class*="animate-fade-in"]').forEach((el) => {
  el.classList.add(
    'opacity-0',
    'translate-y-8',
    'transition-all',
    'duration-700'
  );
  observer.observe(el);
});

// Testimonial carousel
const carouselTrack = document.querySelector('[data-carousel-track]');
const dots = document.querySelectorAll('[data-carousel-dot]');
let currentSlide = 0;
const totalSlides = carouselTrack ? carouselTrack.children.length : 0;

function goToSlide(idx) {
  if (!carouselTrack) return;
  carouselTrack.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('bg-blue-400', i === idx);
    dot.classList.toggle('bg-blue-200', i !== idx);
  });
  currentSlide = idx;
}

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => goToSlide(idx));
});

// Auto-slide every 6s
if (totalSlides > 1) {
  setInterval(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, 6000);
}

goToSlide(0);
