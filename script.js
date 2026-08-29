const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg"
];

let currentPhoto = 0;

const photo = document.getElementById("photo");
const counter = document.getElementById("counter");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

const enterButton = document.getElementById("enterButton");
const cameraSection = document.querySelector(".camera");


if (nextButton && prevButton && photo && counter) {

    nextButton.addEventListener("click", function () {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        photo.src = photos[currentPhoto];

        counter.textContent =
            `${currentPhoto + 1} / ${photos.length}`;
    });


    prevButton.addEventListener("click", function () {

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        photo.src = photos[currentPhoto];

        counter.textContent =
            `${currentPhoto + 1} / ${photos.length}`;
    });

}


if (enterButton && cameraSection) {

    enterButton.addEventListener("click", function () {

        cameraSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}
