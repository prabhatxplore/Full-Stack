// Array of songs with audio, image, title, and description
const songs = [
    { audio: 'Audio/1.mp3', image: 'Images/1.jpg', title: 'Midnight Dreams', descr: 'Ambient electronic vibes' },

    { audio: 'Audio/3.mp3', image: 'Images/3.jpg', title: 'Ocean Waves', descr: 'Chillout relaxation' },
    { audio: 'Audio/4.mp3', image: 'Images/4.jpg', title: 'Neon Lights', descr: 'Synthwave journey' },
    { audio: 'Audio/5.mp3', image: 'Images/5.jpg', title: 'Summer Breeze', descr: 'Tropical vibes' },
    { audio: 'Audio/6.mp3', image: 'Images/6.jpg', title: 'Electric Soul', descr: 'Funk & groove' },
    { audio: 'Audio/7.mp3', image: 'Images/7.jpg', title: 'Forest Echo', descr: 'Nature-inspired' },
    { audio: 'Audio/8.mp3', image: 'Images/8.jpg', title: 'City Life', descr: 'Urban soundtrack' },
    { audio: 'Audio/9.mp3', image: 'Images/9.jpg', title: 'Cosmic Journey', descr: 'Sci-fi atmosphere' },
    { audio: 'Audio/10.mp3', image: 'Images/10.jpg', title: 'Golden Hour', descr: 'Sunset melodies' },
    { audio: 'Audio/11.mp3', image: 'Images/11.jpg', title: 'Midnight Rain', descr: 'Moody introspective' },
    { audio: 'Audio/12.mp3', image: 'Images/12.jpg', title: 'Futuristic', descr: 'Tech innovation' },
    { audio: 'Audio/13.mp3', image: 'Images/13.jpg', title: 'Tropical Storm', descr: 'Energy explosion' },
    { audio: 'Audio/14.mp3', image: 'Images/14.jpg', title: 'Serenity', descr: 'Peaceful meditation' },
    { audio: 'Audio/15.mp3', image: 'Images/15.jpg', title: 'Night Drive', descr: 'Cinematic vibes' },
    { audio: 'Audio/16.mp3', image: 'Images/16.jpg', title: 'Digital Dreams', descr: 'Synth pop beats' },
    { audio: 'Audio/17.mp3', image: 'Images/17.jpg', title: 'Skyline', descr: 'Epic instrumental' },
    { audio: 'Audio/18.mp3', image: 'Images/18.jpg', title: 'Eternal Flow', descr: 'Smooth jazz fusion' }
];

popular_songs = [
    { audio: 'Audio/12.mp3', image: 'Images/12.jpg', title: 'Futuristic', descr: 'Tech innovation' },
    { audio: 'Audio/13.mp3', image: 'Images/13.jpg', title: 'Tropical Storm', descr: 'Energy explosion' },
    { audio: 'Audio/14.mp3', image: 'Images/14.jpg', title: 'Serenity', descr: 'Peaceful meditation' },
    { audio: 'Audio/15.mp3', image: 'Images/15.jpg', title: 'Night Drive', descr: 'Cinematic vibes' },
    { audio: 'Audio/16.mp3', image: 'Images/16.jpg', title: 'Digital Dreams', descr: 'Synth pop beats' },
    { audio: 'Audio/17.mp3', image: 'Images/17.jpg', title: 'Skyline', descr: 'Epic instrumental' },
    { audio: 'Audio/18.mp3', image: 'Images/18.jpg', title: 'Eternal Flow', descr: 'Smooth jazz fusion' }

]
// display the trending music section
let trending = document.getElementById('trending_section')
let popular = document.getElementById('popular_section')
songs.forEach(song => insert(song, trending))
popular_songs.forEach(song => insert(song, popular))

// insert trending and popular song section
function insert(song, place) {
    const divTren = document.createElement("div")

    divTren.innerHTML = `<div class="music_card">
        <img src="${song.image}" alt="">
            <div class="music_play_btn">
                <i class="fa-solid fa-circle-play"></i>
            </div>
            <div class="img_title">${song.title}</div>
            <div class="img_desc">${song.descr}</div>
    </div>`

    // Add click listener to play button
    const playBtn = divTren.querySelector('.music_play_btn')
    playBtn.addEventListener('click', () => {
        audio.src = song.audio
        audio.play()
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")
        imgFootBar.src = song.image
        footTextBar.innerText = song.title
    })

    place.appendChild(divTren)

}

// imports



// click image feel
const press = document.getElementsByClassName("pressFeel")

Array.from(press).forEach(btn => {

    btn.addEventListener("click", () => {

    })
})



const play = document.getElementById("play")
const progressBar = document.getElementById("progressbar")
const footTextBar = document.getElementById("foot_bar_text")
const imgFootBar = document.getElementById("foot_image_photo")



// audio play using Audio
let audio = new Audio('Audio/1.mp3')
let angle = 0
let Rotation = null
play.addEventListener("click", () => {


    if (audio.paused || audio.currentTime == 0) {
        audio.play()
        play.classList.remove("fa-play")
        play.classList.add("fa-pause")

        Rotation = setInterval(() => {
            angle = angle + 1;
            imgFootBar.style.transform = `rotate(${angle}deg)`;
        }, 16)
    } else {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
        audio.pause()

        clearInterval(Rotation)
    }
})

// Update progress bar as audio plays
audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100
        progressBar.value = progress
    }
})

// Allow user to seek through the audio
progressBar.addEventListener("change", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration
})


// arrow head
const arrowFoot = document.getElementById("foot_bar_arrow_original")
const arrowFootWrap = document.getElementById("foot_bar_arrow")
let isOpen = true
const hideFoot = document.querySelector('.play_contents')

arrowFoot.addEventListener("click", () => {
    if (isOpen) {
        arrowFoot.classList.remove("fa-angles-left")
        arrowFoot.classList.add("fa-angles-right")
        hideFoot.style.width = "0px"
        hideFoot.style.opacity = "0"
        arrowFootWrap.style.transform = "translateX(-38px)"
        isOpen = false
    } else {
        arrowFoot.classList.remove("fa-angles-right")
        arrowFoot.classList.add("fa-angles-left")
        hideFoot.style.width = "14rem"
        hideFoot.style.opacity = "1"
        isOpen = true
        arrowFootWrap.style.transform = "translateX(0px)"
    }
})


function collapseFoot() {
    hideFoot.style.width = "0px"
}