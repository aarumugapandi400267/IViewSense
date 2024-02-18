const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            document.querySelector('.images').appendChild(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

const loadNPause = async function () {
    try {
        let img = await createImage('https://images.hdqwalls.com/wallpapers/demon-slayer-samurai-anime-girl-4k-kd.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        img = await createImage('https://external-preview.redd.it/aQf51IEqwlPdCtKomuwuqJ-BqLYhX5r8UxyNRMuz7r4.jpg?auto=webp&s=8da9670467862e53a2965b7734d239a7a78fb37c');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
    } catch (err) {
        console.error(err);
    }
};
const wait = function (seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};
const loadAll = async function (imgArr) {
    try {
        const imgs = await Promise.all(imgArr.map(imgPath => createImage(imgPath)));
        imgs.forEach(img => img.classList.add('parallel'));
        console.log(imgs);
    } catch (err) {
        console.error(err);
    }
};

const imgArr = [
    'https://th.bing.com/th?id=OIP.VMpgUAyr1sqTRD4_L2NrfQHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.BgRBoPE1_GSk1OhcaXer7QHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
    'https://th.bing.com/th?id=OIP.MR334Py4TKqo4ZtOjh4MsgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'];

loadAll(imgArr);
