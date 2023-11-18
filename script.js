var mousemove = document.querySelector("#mouse-move");

// gsap.registerPlugin(MotionPathPlugin);

gsap.to("#car", {
  x: 500,
  duration: 2,
  // yoyo : true,
  repeat: -1,
});


window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#loader").style.display = "none";
  counter();
  gsap.from(".text h1",{
    y: 200,
    delay : .3,
    duration: 1
  })
});

function counter() {
  var loadingtext = document.querySelector("#load h1");
  var load = 0;
  var int = setInterval(() => {
    //  load = load + 1;
    if (load >= 100) {
      clearInterval(int);
      // console.log(load)
      loadingtext.textContent = "100%";
    } else {
      load += 1;
      document.querySelector("#seek").style.width = load + "%";
      loadingtext.textContent = load + "%";
    }
  }, 20);
}


gsap.from("#page2 h1:nth-child(1)",{
  x : -1000,
  scrollTrigger: {
    trigger : "#page2 h1:nth-child(1)",
    start : "top 80%",
    // markers : true
  }
})

gsap.from("#page2 h1:nth-child(2)",{
  x : -1000,
  scrollTrigger: {
    trigger : "#page2 h1:nth-child(2)",
    start : "top 80%",
    // markers : true
  }
})

gsap.from("#page2 h1:nth-child(3)",{
  x : -1500,
  scrollTrigger: {
    trigger : "#page2 h1:nth-child(3)",
    start : "top 80%",
    // markers : true
  }
})

gsap.from("#page2 h1:nth-child(4)",{
  x : -2000,
  scrollTrigger: {
    trigger : "#page2 h1:nth-child(4)",
    start : "top 80%",
    // markers : true
  }
})


gsap.from("#skills>h1",{
  scale: 0,
  scrollTrigger: {
    trigger : "#skills>h1",
    start : "top 80%",
    // markers : true
  }
})

document.addEventListener("mousemove", function (dets) {
  gsap.to("#mouse-move", {
    left: `${dets.x - 80}px`,
    top: `${dets.y - 80}px`,
    rotate: `${dets.x * 0.7}deg`,
    // rotate: `${dets.y*0.5}deg`
  });
});

document.querySelectorAll(".text>h1").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    document.querySelector("#overlay").style.backgroundColor =
      "rgba(0, 0, 0, 0.9)";
    mousemove.style.backgroundColor = "rgb(214, 173, 255)";
    mousemove.style.scale = "1.2";
    document.querySelector("#mouse-move h1").style.scale = "0";
    // console.log("entered")
  });
});

document.querySelectorAll(".text>h1").forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    document.querySelector("#overlay").style.backgroundColor = "transparent";
    mousemove.style.backgroundColor = "purple";
    mousemove.style.scale = ".6";
    document.querySelector("#mouse-move h1").style.scale = "1";
    // console.log("entered")
  });
});

document
  .querySelector(".nav-part h2")
  .addEventListener("mouseenter", function () {
    mousemove.style.scale = "0.05";
    document.querySelector("#mouse-move h1").style.scale = "0";
  });

document
  .querySelector(".nav-part h2")
  .addEventListener("mouseleave", function () {
    mousemove.style.scale = "0.6";
    document.querySelector("#mouse-move h1").style.scale = "1";
  });

document.querySelectorAll(".nav-part a").forEach(function (change) {
  change.addEventListener("mouseenter", function () {
    mousemove.style.scale = "0.05";
    document.querySelector("#mouse-move h1").style.scale = "0";
  });
});

document.querySelectorAll(".nav-part a").forEach(function (change) {
  change.addEventListener("mouseleave", function () {
    mousemove.style.scale = "0.6";
    document.querySelector("#mouse-move h1").style.scale = "1";
  });
});

document.querySelectorAll(".text h1").forEach(function (elem) {
  gsap.to(".text h1", {
    scale: 0.95,
    duration: 5,
    repeat: -1,
    yoyo: true,
  });
});

document.querySelector("#page1").addEventListener("mouseenter", function () {
  mousemove.style.zIndex = "9";
  document.querySelector("#mouse-move h1").style.scale = "1";
  mousemove.style.scale = "0.6";
});

document.querySelector("#page1").addEventListener("mouseleave", function () {
  mousemove.style.zIndex = "9999";
  mousemove.style.backgroundColor = "rgb(232,232,232)";
  document.querySelector("#mouse-move h1").style.scale = "0";
  mousemove.style.scale = "0.2";
});

document.querySelector("#b1").addEventListener("mouseenter", function () {
  console.log("helloo");
});

var click = 1;
document.querySelector("#b1").addEventListener("click", function () {
  gsap.to("#p1", {
    top: "27%",
    left: "15%",
  });

  gsap.to("#p2", {
    top: "27%",
    left: "83%",
  });

  gsap.to("#p3", {
    top: "75%",
    left: "15%",
  });

  gsap.to("#p4", {
    top: "75%",
    left: "83%",
  });

  gsap.to(".project", {
    scale: 0.96,
    duration: 2,
    repeat: -1,
    yoyo: true,
  });

  document.querySelector("#close-prj-icon").style.scale = "1";
  document.querySelector("#b2").style.scale = "1";
});

document
  .querySelector("#close-prj-icon")
  .addEventListener("click", function () {
    gsap.to("#p1", {
      top: "50%",
      left: "50%",
    });

    gsap.to("#p2", {
      top: "50%",
      left: "50%",
    });

    gsap.to("#p3", {
      top: "50%",
      left: "50%",
    });

    gsap.to("#p4", {
      top: "50%",
      left: "50%",
    });

    gsap.to(".project", {
      scale: 1,
      repeat: 0,
    });

    this.style.scale = "0";
    document.querySelector("#b2").style.scale = "0";
    document.querySelector("#b1").innerHTML = "view all";
  });

document.querySelector("#b2").addEventListener("click", function () {
  gsap.to(".more-projects", {
    left: "0%",
    duration: 1,
  });

  gsap.to(".pr", {
    left: "-490%",
    scrollTrigger: {
      trigger: ".pr",
      start: "top 5   %",
      scrub: 3,
      // markers: true,
    },
  });

  document.querySelectorAll(".pr-details").forEach(function (el) {
    var tr = el.parentElement.querySelectorAll(".pr-link");

    gsap.to(tr, {
      top: "0%",
      scrollTrigger: {
        // containerAnimation: 'scrollTween',
        trigger: tr,
        start: "top 80%",
        end: "top 79%",
        // markers: true,
        // snap: 1,
        scrub: 0.5,
      },
    });
  });

  // gsap.to(".pr-link",{
  //     top: "0%",
  //     // stagger: ,
  //     scrollTrigger:{
  //         trigger:".pr-link",
  //         start:"left 80%",
  //         end: "left 75%",
  //         markers: true,
  //         scrub: true
  //     }
  // })

  gsap.to("#page3", {
    scrollTrigger: {
      trigger: "#page3",
      start: "top top",
      end: "top -110%",
      scrub: 1,
      // markers: true,
      pin: true,
    },
  });
});

document
  .querySelector(".more-projects>h2")
  .addEventListener("click", function () {
    gsap.to(".more-projects", {
      left: "100%",
      duration: 1,
    });
    ScrollTrigger.killAll();
  });

document.querySelectorAll(".project video").forEach(function (vid) {
  vid.addEventListener("mouseenter", function (e) {
    vid.play();
  });
});

document.querySelectorAll(".project video").forEach(function (vid) {
  vid.addEventListener("mouseleave", function (e) {
    vid.pause();
  });
});

var skillClick = 1;

document.querySelector("#skills button").addEventListener("click", function () {
  var tl = gsap.timeline();

  if (skillClick == 1) {
    tl.to("#skills button", {
      opacity: 0,
    });

    gsap.to("#skills button", {
      top: "48%",
    });

    tl.to(".skill", {
      scale: 1,
      duration: 0.5,
    });

    tl.to(".skill", {
      transform: "rotate(calc(360deg / 8 * var(--i)) )",
      duration: 0.8,
      // ease: "power4"
    });

    tl.to(".circle", {
      animationName: "ro",
    });

    tl.to(".controls", {
      opacity: 1,
    });

    tl.to("#skills button", {
      opacity: 1,
    });

    gsap.to("#skills>h1", {
      opacity: 0,
    });

    document.querySelector("#skills button").innerHTML = "hide Skills";

    skillClick = 2;
  } else if (skillClick == 2) {
    tl.to(".circle", {
      animationName: "r",
    });

    tl.to(".skill", {
      transform: "rotate(0deg)",
      duration: 0.8,
      // ease: "power4"
    });

    tl.to(".skill", {
      scale: 0,
      duration: 0.5,
    });

    tl.to(".controls", {
      opacity: 0,
    });

    tl.to("#skills button", {
      opacity: 0,
    });

    tl.to("#skills button", {
      top: "80%",
    });

    tl.to("#skills button", {
      opacity: 1,
    });

    tl.to("#skills>h1", {
      opacity: 1,
    });
    document.querySelector("#skills button").innerHTML = "view Skills";

    skillClick = 1;
  }
});

function play() {
  gsap.to(".circle", {
    animationPlayState: "initial",
  });

  console.log("play");
}

function pause() {
  gsap.to(".circle", {
    animationPlayState: "paused",
  });
  console.log("pause");
}

document
  .querySelector("#skills button")
  .addEventListener("mouseenter", function () {
    mousemove.style.scale = "0";
  });

document
  .querySelector("#skills button")
  .addEventListener("mouseleave", function () {
    mousemove.style.scale = "0.2";
  });
