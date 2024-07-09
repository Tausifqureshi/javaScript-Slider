let currentIndex = 0;
const sliderCard = document.getElementById('slider-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalCards = document.querySelectorAll('.card').length;

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === totalCards - 1;
} 

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    sliderCard.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();
  }
}

function nextCard() {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    sliderCard.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateButtons();
  }
}

updateButtons();