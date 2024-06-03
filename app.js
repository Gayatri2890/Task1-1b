// Get all the buttons
const listButton = document.getElementById('list-button');
const boardButton = document.getElementById('board-button');
const everyoneButton = document.getElementById('everyone-button');
const onlyAdminsButton = document.getElementById('only-admins-button');
const onlySpecificPeopleButton = document.getElementById('only-specific-people-button');
const backButton = document.getElementById('back-button');
const nextButton = document.getElementById('next-button');

// Add event listeners to the buttons
listButton.addEventListener('click', () => {
  alert('You clicked the List button!');
});

boardButton.addEventListener('click', () => {
  alert('You clicked the Board button!');
});

everyoneButton.addEventListener('click', () => {
  alert('You clicked the Everyone button!');
});

onlyAdminsButton.addEventListener('click', () => {
  alert('You clicked the Only Admin\'s button!');
});

onlySpecificPeopleButton.addEventListener('click', () => {
  alert('You clicked the Only to Specific people button!');
});

backButton.addEventListener('click', () => {
  alert('You clicked the Back button!');
});

nextButton.addEventListener('click', () => {
  alert('You clicked the Next button!');
});
