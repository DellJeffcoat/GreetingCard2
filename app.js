
// Name
const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');
nameInput.addEventListener('input', () => {
  nameHeader.textContent = nameInput.value;
});

// Character
const characterSelect = document.getElementById('character-select');
const characterImage = document.getElementById('character-image');
characterSelect.addEventListener('change', () => {
  characterImage.src = characterSelect.value;
});

// Description
const descriptionTextarea = document.getElementById('description-textarea');
const descriptionDisplay = document.getElementById('description-display');
descriptionTextarea.addEventListener('input', () => {
  descriptionDisplay.textContent = descriptionTextarea.value;
});

// Theme
const themeSelect = document.getElementById('theme-select');
const character = document.getElementById('character');
themeSelect.addEventListener('change', () => {
  character.classList.value = '';
  character.classList.add(themeSelect.value);
});

//Export
const exportButton = document.getElementById('export-button');
exportButton.addEventListener('click', async () => {
  const dataUrl = await domtoimage.toPng(character);
  const link = document.createElement('a');
  link.download = nameInput.value + '.png';
  link.href = dataUrl;
  link.click();
});