document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const form = document.querySelector('#new-driver-form');
    form.addEventListener('submit', handleFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
});


// const handleFormSubmit = function(event){
//     event.preventDefault();
    
//     const resultList = document.querySelector('#drivers-list');
//     const newListItem = document.createElement('li');
//     const newOtherListItem = document.createElement('li')
//     const newOtherOtherListItem = document.createElement('li')
  
//     newListItem.textContent = `${event.target.driver.value}`
//     newOtherListItem.textContent = `${event.target.team.value}`
//     newOtherOtherListItem.textContent = `${event.target.nationality.value}`
  
//     resultList.appendChild(newListItem);
//     resultList.appendChild(newOtherListItem);
//     resultList.appendChild(newOtherOtherListItem);
  
//     document.getElementById("new-driver-form").reset()
// };
const handleFormSubmit = function(event) {
    event.preventDefault();
  
    const driverListItem = createDriverListItem(event.target);
    const driversList = document.querySelector('#drivers-list');
    driversList.appendChild(driverListItem);
  
    event.target.reset();
};


const createDriverListItem = function (form) {
    const driverListItem = document.createElement('li');
    driverListItem.classList.add('driver-list-item');
  
    const driver = document.createElement('h2');
    driver.textContent = form.driver.value;
    driverListItem.appendChild(driver);
  
    const team = document.createElement('h3');
    team.textContent = form.team.value;
    driverListItem.appendChild(team);
  
    const nationality = document.createElement('p');
    nationality.textContent = form.nationality.value;
    driverListItem.appendChild(nationality);
  
    return driverListItem;
};

const handleDeleteAllClick = function(event) {
    const driversList = document.querySelector('#drivers-list');
    driversList.innerHTML = '';
};
