let socket = io.connect('http://localhost:3001');

socket.on('users', function (users) {
    let listUsers = document.getElementById('list-users');
    listUsers.innerHTML = '';
    users.forEach(function(user){
        let listItem = document.createElement('li');
        listItem.className = 'user-card';
        listItem.innerHTML = `
            <div class="user-card__img">
                <img src="${user.avatar}" alt="${user.name}">
            </div>
            <p class="user-card__text">${user.name} - <span>${user.age}</span></p>`
        listUsers.appendChild(listItem); 
    })
});
