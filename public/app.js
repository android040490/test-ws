$(function () {
    let socket = io.connect('http://localhost:3001');

    socket.on('users', function (users) {
        users.forEach(function(user){
            $('#list-users').append($('<li class="user-card">').html(
                `<div class="user-card__img">
                    <img src="${user.avatar}" alt="${user.name}">
                </div>
                <p class="user-card__text">${user.name} - <span>${user.age}</span></p>`
            ));
        })
    });
});