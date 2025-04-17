function loadinganimation()
{
    let tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    duration: 0.5,
    delay:0.5,
    stagger: 0.25,
})
tl.from(".line1-part1",{
    opacity:0,
    onStart:()=>{
        let counth5 = document.querySelector(".line1-part1 h5");
        let count = 0;
        setInterval(()=>{
            if(count < 100)
            counth5.innerHTML = count++
            else
               counth5.innerHTML = count
        },35)
    }
})
tl.to(".line h2",{
    animationName:"aneme",
    opacity:1,
})
tl.to(".loader",{
    delay:1.5,
    opacity:0,
    duration:0.3,
})
tl.from(".page1",{
    y:1600,
    delay:0.2,
    duration:0.5,
    opacity:0,
    ease: "power4.out"
})

tl.to(".loader",{
    display:"none",
})

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1 ",{
    y:200,
    delay:0.3,
    duration:0.7,
    stagger:0.3
})
}

function cursurAnimation()
{
    document.addEventListener("mousemove",function(dets){
        gsap.to(".curr",{
           left:dets.x,
           top:dets.y,
        })
    })
    
    Shery.makeMagnet(".nav-part2 h4");
}


loadinganimation();
cursurAnimation();
