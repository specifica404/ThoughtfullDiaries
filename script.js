document.querySelector('.me').addEventListener('click',() => {
  document.querySelectorAll('.target').forEach((item) => {
  item.classList.toggle('change')
  })
}) 


const icons = document.querySelectorAll('.section-1-icons img');
let currentIndex = 0;

// Hide all images initially
icons.forEach((icon) => {
  icon.style.display = 'none';
});

function showNextIcon() {
  const currentIcon = icons[currentIndex];
  currentIcon.style.display = 'none';

  currentIndex = (currentIndex + 1) % icons.length;

  const nextIcon = icons[currentIndex];
  nextIcon.style.display = 'block';
}

// Initially, show the first icon after a delay (e.g., 1000ms)
setTimeout(() => {
  const firstIcon = icons[0];
  firstIcon.style.display = 'block';

  // Set an interval to show the next icon every 1000ms (1 second)
  const intervalId = setInterval(showNextIcon, 1000);

  // To stop the slideshow after a certain number of iterations (e.g., 5 seconds)
  const numberOfIterations = 5;
  let iterations = 0;

  function stopSlideshow() {
    clearInterval(intervalId);
  }

  // Uncomment this line to stop the slideshow after a certain number of iterations
  // setTimeout(stopSlideshow, numberOfIterations * 1000);
}, 1000); // Delay before starting the slideshow


