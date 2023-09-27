function videoanimator(){
    var videocon = document.querySelector  ("#videocontainer")
    var playbtn = document.querySelector ("#play")
    videocon.addEventListener ("mouseenter" , function(){
        gsap.to(playbtn, {
            
            scale:1 ,
            opacity:1 ,

        })
    })
    videocon.addEventListener ("mouseleave" , function(){
        gsap.to(playbtn, {
            scale:0 ,
            opacity:0 ,

        })
    })
    videocon.addEventListener ("mousemove" , function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 50,
        })
    })
}    
videoanimator();
function loadinganimation(){
    gsap.from("#page1 h1" , {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
    })
    gsap.from("#page1 #videocontainer" , {
        scale:0.9,
        opacity:0,
        delay:1.2,
        duration:0.5,
    })

}
    
loadinganimation()