/* Small page script */
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded');

  const kitty = document.getElementById('kitty');
  const flowerImg = document.getElementById('pawFlower');
  const speech = document.getElementById('speechBubble');
  const leftArm = document.getElementById('leftarm');

  if (kitty && flowerImg && leftArm && speech) {
    kitty.style.cursor = 'pointer';
    kitty.addEventListener('click', () => {
      flowerImg.classList.toggle('show');
      speech.classList.toggle('show');

      if (flowerImg.classList.contains('show')) {
        leftArm.classList.add('hidden-arm');
      } else {
        leftArm.classList.remove('hidden-arm');
      }
    });
  }
}); 