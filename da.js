function showImage() {
  const img = document.getElementById('sz1');
  img.classList.add('visible');
  setTimeout(() => {
    img.classList.remove('visible');
  }, 1000);
}
