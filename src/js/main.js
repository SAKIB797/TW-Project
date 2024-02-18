const toggleButtons = document.querySelectorAll('.toggleButton');
const elementsToToggle = document.querySelectorAll('.elementToToggle');

toggleButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    toggleElement(elementsToToggle[index]);
  });
});

function toggleElement(element) {
  // Toggle the desired property
  if (element.style.display === 'none') {
    element.style.display = 'block'; // or any other value
  } else {
    element.style.display = 'none';
  }
}
