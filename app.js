console.log("welcome to spotify");



let songindex = 0;
let audioelement = new Audio('songs/1.mp3');

let masterplay = document.getElementById('masterplay');



let myprogressbar = document.getElementById('myprogressbar');

let gif = document.getElementById('gif');





let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
   
   
]



masterplay.addEventListener("click",()=>
{
    if(audioelement.paused ||audioelement.currentTime<=0)
    {
    audioelement.play();
  masterplay.classList.remove("fa-play");
  masterplay.classList.add("fa-pause");
  gif.style.opacity=1;
    }
    else{
      audioelement.pause();
      masterplay.classList.remove("fa-pause");
      masterplay.classList.add("fa-play");
      gif.style.opacity=0;
    }

   
})





audioelement.addEventListener("timeupdate",()=>
{
  console.log("Time update");


  //updateseakbar  
let progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
console.log(progress);

myprogressbar.value = progress;



})

myprogressbar.addEventListener("change",()=>
{
  audioelement.currentTime = ((myprogressbar.value* audioelement.duration)/100 );
})
