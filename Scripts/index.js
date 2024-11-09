document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin);

  const glasses = document.querySelector(".glasses"),
        text = document.querySelector(".text-enter"),
          bg = document.querySelector(".bg");

  function ChangeText() {
    text.style.padding = "7px";
    text.style.letterSpacing = "-3px";
    text.style.backgroundColor = "#3281a8"
  }

  gsap.to(".text-enter", {
    opacity: 1,
    delay: 5,
    duration: 1,
    ease: "ease",
  }).then(() => { 
    return gsap.to(".text-enter", { delay: 1, duration: 0.3, text: "" }) 
  }).then(() => { 
    return gsap.to(".text-enter", { duration: 1, text: "What's that?" })
  });

  gsap.fromTo(
    ".text-head1",
    { opacity: 0, X: -200, y: -50 },
    { duration: 2, opacity: 1, X: 0, y: 0, ease: "ease" }
  );

  gsap.fromTo(
    ".text-head2",
    { opacity: 0, X: 200, y: -50, },
    { duration: 2, opacity: 1, X: 0, y: 0, ease: "ease",}
  );

  gsap.fromTo(".cat", 
    { y: -1500 },
    { y: 0, delay: 1, duration: 3, ease: "ease", opacity: 1,
      onComplete: () => {
        const cat = document.querySelector(".cat");
        cat.style.transform = "scaleX(1)"   
      }
    }
  );

  gsap.to(".glasses", {
    opacity: 1,
    delay: 8
  }).then(() => {
    return gsap.to(".glasses", { duration: 2, scale: 3, y: 0 });
  }).then(() => {
    return gsap.to(".glasses", { opacity: 0, onComplete: () => {
      glasses.style.zIndex = "-5";
      gsap.to(".bg", { opacity: 1, duration: 1 });
    }});
  }).then(() => {
    return gsap.to(".text-enter", { text: "", onComplete: ChangeText  });
  }).then(() => {
    return gsap.to(".text-enter", { text: "Cat Anatomy"});
  });

}); 

const imgEdit = document.querySelector(".img-edit"),
      textGroup = document.querySelector(".textgroup-edit");

function eyes() {
  imgEdit.classList.remove("hidden");
  textGroup.classList.remove("hidden");
  imgEdit.style.backgroundImage = "url('https://carlasonheim.wordpress.com/wp-content/uploads/2015/04/cateyephoto.jpg?w=660')";
  gsap.to(".header-edit", { text: "Eyes" });
  gsap.to(".text-edit", { text: "Eyes are the most important part of a cat's anatomy. They are the window to the soul. A cat's eyes are highly adapted for low light conditions, allowing them to see well in the dark. The large cornea and tapetum lucidum, a layer of tissue behind the retina, help to reflect light and enhance night vision. Additionally, cats have a third eyelid, known as the nictitating membrane, which helps to protect and moisten the eye. The slit-shaped pupils of a cat can expand and contract dramatically to control the amount of light entering the eye, providing excellent vision in both bright and dim conditions." });
}

function Nose() {
  imgEdit.classList.remove("hidden");
  textGroup.classList.remove("hidden");
  imgEdit.style.backgroundImage = "url('https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-cute.jpg')";
  gsap.to(".header-edit", { text: "Nose" });
  gsap.to(".text-edit", { text: "A cat's nose is unique to each cat. It's like a fingerprint." });
}

function Ear() {
  imgEdit.classList.remove("hidden");
  textGroup.classList.remove("hidden");
  imgEdit.style.backgroundImage = "url('https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-cute.jpg')";
  gsap.to(".header-edit", { text: "Ear" });
  gsap.to(".text-edit", { text: "A cat's ear is a complex organ. It is used for balance and hearing." });
}

function Mouth() {
  imgEdit.classList.remove("hidden");
  textGroup.classList.remove("hidden");
  imgEdit.style.backgroundImage = "url('https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-cute.jpg')";
  gsap.to(".header-edit", { text: "Mouth" });
  gsap.to(".text-edit", { text: "A cat's mouth is used for eating, grooming, and communication." });
}

// Tilt animation
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const bgElements = document.querySelectorAll('.bg');

document.addEventListener('mousemove', (event) => {
  window.requestAnimationFrame(() => {
    // Calculate positions based on mouse movement
    const xPos = (event.clientX / windowWidth) - 0.5;
    const yPos = (event.clientY / windowHeight) - 0.5;

    bgElements.forEach((element) => {
      gsap.to(element, {
        duration: 1,
        rotationY: xPos * 50,
        rotationX: yPos * 50,
        ease: "power1.out"
      });
    });
  });
});
