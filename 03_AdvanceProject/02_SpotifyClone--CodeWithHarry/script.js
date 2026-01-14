console.log("Welcome to Spotify");

// variables initialize
let songIndex = 0;
let audioElement = new Audio('songs/4.mp3');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let masterPlay = document.getElementById('masterPlay');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let myProgressBar = document.getElementById('myProgressBar');

// song array
let songs = [
    {songName: "Track-1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Track-2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Track-3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Track-4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Track-5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Track-6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Track-7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Track-8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Track-9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Track-10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

// ##### diff between tag name and class name
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Events Listerner 
audioElement.addEventListener('timeupdate', ()=>{
    // -update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})

// ############ Array.form() && e.target
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
// ###########parseInt()
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays(); // line 57
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        
        gif.style.opacity = 1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// song control
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0;
    }else if(songIndex <= 0){
        songIndex = 0
    }else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})