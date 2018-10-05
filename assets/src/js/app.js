document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.querySelector('.user-form');
    const userContainerList = document.querySelector('.user-container__list');

    const nameValue = document.querySelector('.user-form__name').value;
    const emailValue = document.querySelector('.user-form__email').value;

    const createLi = () => {
        const userItem = document.createElement('li');
        const userList = document.createElement('ul');
        userItem.appendChild(userList)
        
        userContainerList.appendChild(userItem);
    }
    
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log('test');

        // createLi();
    }); 
    
});