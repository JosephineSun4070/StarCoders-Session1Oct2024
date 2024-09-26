var photos = document.getElementsByClassName('dailyPhoto');

function changePhoto(index) {
    var oldPhoto = document.getElementsByClassName('active')[0];
    var newPhoto = photos[index];

    if (newPhoto) {
        if (oldPhoto) {
            oldPhoto.classList.remove('active');
        }

        newPhoto.classList.add('active');

    }

}