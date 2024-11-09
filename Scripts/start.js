document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin);

  let catisClicked = false;
  const cat = document.querySelector(".cat");
  cat.addEventListener("click", () => catisClicked = true);

  gsap.to(".text-enter", {
    duration: 4,
    opacity: 1,
    ease: "ease",
    onComplete: () => {
      if (!catisClicked) {
        gsap.to(".text-enter", { duration: 1, text: "oi hooman" })
          .then(() => gsap.to(".text-enter", { delay: 1, text: "" }))
          .then(() => gsap.to(".text-enter", { duration: 2, text: "wat r u doing here?" }))
          .then(() => gsap.to(".text-enter", { delay: 1, duration: 1, text: "" }))
          .then(() => gsap.to(".text-enter", { duration: 0.5, text: "ok 👍" }))
          .then(() => gsap.to(".text-enter", { delay: 1, duration: 1, text: "" }))
          .then(() => gsap.to(".text-enter", { duration: 1, text: "just click me" }))
          .then(() => gsap.to(".text-enter", { delay: 2, duration: 1, text: "click me!!!!!!!!!" }));    
      }
    }
  })
  
  gsap.fromTo(".text-head1", { 
    opacity: 0,
    X: -200,
    y: -50,
  }, {
    duration: 2,
    opacity: 1,
    X: 0,
    y: 0,
    ease: "ease",
  })
  
  gsap.fromTo(".text-head2", { 
    opacity: 0,
    X: 200,
    y: -50,
  }, {
    duration: 2,
    opacity: 1,
    X: 0,
    y: 0,
    ease: "ease",
  });

  gsap.fromTo(
    ".cat",
    { y: 500, },
    { duration: 3,
      opacity: 1,
      y: 0,
      ease: "ease",
      rotate: 360,
    }
  );
  // });
});

function catClick() {
  const cat = document.querySelector("#cat");
  cat.src = "./images/outtahere.png";
  cat.style.width = "90rem";
  gsap.to(".cat", {
    duration: 4,
    x: -1000,
    opacity: 0,
    ease: "ease",
  })
  gsap.to(".text-enter", { duration: 0.1, text: "" })
  .then(()=> gsap.to(".text-enter", { duration: 2, text: "me no liek u :(" }))
  .then(()=> gsap.to(".text-enter", { delay: 1, text: "bai bai" }))
  .then(()=> gsap.to(".black", { duration: 1, y: 0 }))
  setTimeout(() => {
    window.location.href = "./pages/main.html";
  }, 6000);
}