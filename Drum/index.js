console.log("Drums Playing Baby");

window.addEventListener("keydown",(e)=>{
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key=document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio) return;
    key.classList.add('playing')
    audio.currentTime=0;
    audio.play()
})

function remove(e){
    
    if (e.propertyName==="transform") {
         this.classList.remove("playing");
    }
}

let keys=document.querySelectorAll('.key')
keys.forEach(key=> key.addEventListener('transitionend',remove))
