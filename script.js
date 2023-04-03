document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("green-hover-button").addEventListener('click', green);
    


function green() {
const gridContainer = document.querySelector('.grid-container');
    

    return gridContainer.classList.add('green-hover');
}
		const gridContainer = document.querySelector('.grid-container');

		for (let i = 0; i < 256; i++) {
			const gridItem = document.createElement('div');
			gridItem.classList.add('grid-item');
			gridContainer.appendChild(gridItem);
		}

    const gridContaine = document.querySelector('.grid-container');
    const rgbHoverButton = document.querySelector('#rgb-hover-button');

    function generateRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    rgbHoverButton.addEventListener('click', () => {
      const randomColor = generateRandomColor();
      gridContaine.style.setProperty('--random-color', randomColor);
      gridContaine.classList.add('rgb-hover');
    });
    });

   