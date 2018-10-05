document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.querySelector('.user-form');
    const userContainerList = document.querySelector('.user-container__list');
    
    const createLi = () => {
        const nameValue = document.querySelector('.user-form__name').value;
        const addressValue = document.querySelector('.user-form__address').value;
        const emailValue = document.querySelector('.user-form__email').value;

        const userItem = document.createElement('li');
        const userList = document.createElement('ul');
        userList.classList.add('user-container__inner-list');

        const addUserUtility = (innerContent) => {
            const userName = document.createElement('li');
            userName.classList.add('user-container__utility');
            const userNameParagraph = document.createElement('p');
            userNameParagraph.textContent = innerContent;
            userName.appendChild(userNameParagraph);
            userList.appendChild(userName);
        };

        addUserUtility(nameValue);
        addUserUtility(addressValue);
        addUserUtility(emailValue);

        userItem.appendChild(userList)
        
        userContainerList.appendChild(userItem);
    }
    
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();

        createLi();

        userForm.reset();
    }); 
    
});