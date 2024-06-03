const app = document.getElementById('app');

const buttons = [
  {
    type: 'button',
    content: '< Back',
    x: 116,
    y: 658,
    width: 68,
    height: 30
  },
  // ... add the rest of the buttons here
];

buttons.forEach(button => {
  const newButton = document.createElement('button');
  newButton.innerText = button.content;
  newButton.style.position = 'absolute';
  newButton.style.left = ${button.x}px;
  newButton.style.top = ${button.y}px;
  newButton.style.width = ${button.width}px;
  newButton.style.height = ${button.height}px;
  app.appendChild(newButton);
});
