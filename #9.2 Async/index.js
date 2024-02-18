const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;
        img.style.width="100%"

        img.addEventListener('load', function () {
            document.querySelector('.images').appendChild(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

createImage('https://images.hdqwalls.com/wallpapers/demon-slayer-samurai-anime-girl-4k-kd.jpg')
    .then(img => {
        currentImg = img;
        console.log('Image 1 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('https://external-preview.redd.it/aQf51IEqwlPdCtKomuwuqJ-BqLYhX5r8UxyNRMuz7r4.jpg?auto=webp&s=8da9670467862e53a2965b7734d239a7a78fb37c');
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err));

const wait = function (seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};
