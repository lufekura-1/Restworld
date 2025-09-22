const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function setActiveTab(id) {
  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === id);
  });

  tabContents.forEach((section) => {
    section.classList.toggle('active', section.id === id);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => setActiveTab(button.dataset.target));
});

// Toggle status button state
const statusButtons = document.querySelectorAll('.status-button');
statusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('complete');
  });
});

// Render star ratings using dataset values
const starCells = document.querySelectorAll('.stars');
starCells.forEach((cell) => {
  const value = Number(cell.dataset.stars) || 0;
  const maxStars = 5;
  const filled = '★'.repeat(Math.min(value, maxStars));
  const empty = '☆'.repeat(Math.max(maxStars - value, 0));
  cell.textContent = `${filled}${empty}`;
});
