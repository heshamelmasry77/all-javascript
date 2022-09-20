'use strict';

let promise = new Promise((resolve, reject) => {

    let loadImage = () => {
        let url = 'image.jpg',
            img = new Image();

        img.src = url;    
        
        img.onload = () => 
            resolve(url);
        
        img.onerror = () => 
            reject(url);
    };

    setTimeout(loadImage, 500);  
});

promise
    .then(
        result => {
             document.getElementById('task').innerHTML = '<img src="' + result + '" alt="Cat" />'
        },
        error => {
            alert("По адресу " + error + " изображения не найдено.");
        }
    );