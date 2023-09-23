const progress=document.getElementById("progress");
const audio=document.getElementById("audio");
const play=document.getElementById("play");  

audio.onloadedmetadata=()=>{
    progress.max=audio.duration;
    progress.value=audio.currentTime;
}

play.addEventListener('click',()=>{
    if(play.classList.contains("fa-pause")){
        audio.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
    else{
        audio.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
}

)
if(audio.play()){
    setInterval(()=>{
        progress.value=audio.currentTime;
    },500);
}
progress.onchange=()=>{ 
    audio.play();
    audio.currentTime=progress.value;
}