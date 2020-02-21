document.addEventListener('DOMContentLoaded', () =>{

  const newInput = document.querySelector('#new-form-item');
  newInput.addEventListener('submit', handleItemSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);

});

const handleItemSubmit = function (event) {
  event.preventDefault();

  const animalListItem = createAnimalListItem(event.target);
  const listOfAnimals = document.querySelector('#list-of-animals');
  listOfAnimals.appendChild(animalListItem);

  event.target.reset();

};

const createAnimalListItem = function (form) {
  const animalListItem = document.createElement('li');
  animalListItem.classList.add('animal-list-item');

  const animal = document.createElement('h2');
  animal.textContent = form.animal.value.toUpperCase();
  animalListItem.appendChild(animal);

  const type = document.createElement('p');
  type.textContent = form.type.value;
  animalListItem.appendChild(type);

  const country = document.createElement('p');
  country.textContent = form.country.value;
  animalListItem.appendChild(country);

  const severity = document.createElement('h2');
  severity.textContent = form.severity.value;
  severity.classList.add(form.severity.value)
  animalListItem.appendChild(severity);

  return animalListItem;
}

const handleDeleteAll = function (event) {
  const listOfAnimals = document.querySelector('#list-of-animals');
  listOfAnimals.innerHTML = '';
}
