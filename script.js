const container = document.getElementById('imageContainer');
const topImage = document.querySelector('.top');

topImage.onload = () => {
  // Set container size based on the top image (1x.png)
  container.style.width = `${topImage.naturalWidth}px`;
  container.style.height = `${topImage.naturalHeight}px`;
};

container.addEventListener('click', () => {
  container.classList.toggle('transition');
});
