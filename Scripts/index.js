const imgEdit = document.querySelector(".img-edit"),
      textGroup = document.querySelector(".textgroup-edit"),
      glasses = document.querySelector(".glasses"),
      text = document.querySelector(".text-enter"),
      bg = document.querySelector(".bg");

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(TextPlugin);

  function ChangeText() {
    text.style.padding = "7px";
    text.style.letterSpacing = "-3px";
    text.style.backgroundColor = "#3281a8"
    imgEdit.style.backgroundImage = "url('https://b1745379.smushcdn.com/1745379/wp-content/uploads/2024/01/652812-Gray-Tabby-Cat-777x437.jpg?lossy=2&strip=1&webp=0')";
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


function eyes() {
  imgEdit.style.backgroundImage = "url('https://carlasonheim.wordpress.com/wp-content/uploads/2015/04/cateyephoto.jpg?w=660')";
  gsap.to(".header-edit", { duration: 2, text: "Eyes" });
  gsap.to(".text-edit", { duration: 2, text: "Eyes are the most important part of a cat's anatomy. They are the window to the soul. A cat's eyes are highly adapted for low light conditions, allowing them to see well in the dark. The large cornea and tapetum lucidum, a layer of tissue behind the retina, help to reflect light and enhance night vision. Additionally, cats have a third eyelid, known as the nictitating membrane, which helps to protect and moisten the eye. The slit-shaped pupils of a cat can expand and contract dramatically to control the amount of light entering the eye, providing excellent vision in both bright and dim conditions." });
}

function Nose() {
  imgEdit.style.backgroundImage = "url('https://www.animalfriends.co.uk/contentassets/dd2632b7491f4785953000f3ab9e1ca8/imager3y4p.png')";
  gsap.to(".header-edit", { duration: 2, text: "Nose" });
  gsap.to(".text-edit", { duration: 2, text: "A cat's nose is unique to each cat. It's like a fingerprint. The nose is covered in a layer of skin that has a unique pattern of ridges and bumps, similar to human fingerprints. This pattern is unique to each cat and can be used to identify them. The nose also plays a crucial role in a cat's sense of smell, which is far superior to that of humans. Cats have a specialized organ called the vomeronasal organ, or Jacobson's organ, located on the roof of their mouth. This organ allows them to detect pheromones, which are chemical signals used for communication between animals. When a cat curls back its lips and opens its mouth after sniffing something, it is using this organ to get a better sense of the scent. This behavior is known as the Flehmen response. Additionally, the nose helps to regulate a cat's body temperature through a process called thermoregulation. When a cat is hot, it can lose heat through its nose by increasing blood flow to the area, which helps to cool the blood and lower the cat's overall body temperature." });
}

function Ear() {
  imgEdit.style.backgroundImage = "url('https://icatcare.org/app/uploads/2019/03/Caring-for-your-cats-ears.png')";
  gsap.to(".header-edit", { duration: 2, text: "Ear" });
  gsap.to(".text-edit", { duration: 2, text: "A cat's ear is a complex organ. It is used for balance and hearing. The outer part of the ear, called the pinna, captures sound waves and funnels them into the ear canal. The ear canal leads to the eardrum, which vibrates in response to sound waves. These vibrations are transmitted to the inner ear through three small bones called the ossicles. The inner ear contains the cochlea, which converts these vibrations into electrical signals that are sent to the brain. Additionally, the inner ear contains the vestibular system, which helps the cat maintain its balance and orientation." });
}

function Mouth() {
  imgEdit.style.backgroundImage = "url('https://humanepro.org/sites/default/files/styles/article_new/public/images/hero/HPO_FactSheet_CatsMouth_Hero.jpg?itok=dncuG5b-')";
  gsap.to(".header-edit", { duration: 2, text: "Mouth" });
  gsap.to(".text-edit", { duration: 2, text: "A cat's mouth is used for eating, grooming, and communication. It contains sharp teeth for tearing meat, a rough tongue for grooming, and vocal cords for making sounds." });
}

function Whiskers() {
  imgEdit.style.backgroundImage = "url('https://i0.wp.com/mrfrs.org/wp-content/uploads/2020/10/whisker.jpg?fit=800%2C799&ssl=1')";
  gsap.to(".header-edit", { duration: 2, text: "Whiskers" });
  gsap.to(".text-edit", { duration: 2, text: "A cat's whiskers are highly sensitive and help them navigate their environment. Whiskers, also known as vibrissae, are specialized hairs that are deeply embedded in the cat's body and are connected to the nervous system. They are highly sensitive to touch and can detect even the slightest changes in the environment. Whiskers help cats navigate in the dark, avoid obstacles, and sense the presence of prey or predators. They also play a role in communication, as cats can move their whiskers to express different emotions. For example, forward-facing whiskers indicate curiosity or aggression, while whiskers pulled back against the face indicate fear or contentment. Whiskers are typically found on the muzzle, above the eyes, and on the back of the front legs, providing cats with a 3D map of their surroundings." });
}

function Tail() {
  imgEdit.style.backgroundImage = "url('https://laurelpets.com/wp-content/uploads/2024/05/do-cats-have-tail-bones.jpg')";
  gsap.to(".header-edit", { duration: 2, text: "Tail" });
  gsap.to(".text-edit", { duration: 2, text: "A cat's tail is used for balance and communication. The tail is an extension of the spine and consists of many small vertebrae, which allow it to be highly flexible. This flexibility helps cats maintain their balance, especially when making quick turns or walking along narrow surfaces. The tail acts as a counterbalance, helping to stabilize the cat's body during these movements. In addition to its role in balance, the tail is also an important tool for communication. Cats use their tails to express a wide range of emotions and intentions. For example, a tail held high often indicates confidence or happiness, while a tail that is puffed up can signal fear or aggression. A tail that is twitching or lashing back and forth may indicate irritation or excitement. By observing the position and movement of a cat's tail, one can gain insight into the cat's mood and intentions. The tail also plays a role in social interactions with other cats, as well as with humans. Overall, the tail is a versatile and essential part of a cat's anatomy, contributing to both its physical abilities and its communication skills." });
}

function SkullnBrain() {
  imgEdit.style.backgroundImage = "url('https://chestergates.org.uk/wp-content/uploads/Craniectomy-article.jpg')";
  gsap.to(".header-edit", { duration: 2, text: "Skull & Brain" });
  gsap.to(".text-edit", { duration: 2, text: "A cat's skull and brain are highly adapted for hunting and survival. The skull is designed to protect the brain while providing a strong structure for the attachment of powerful jaw muscles. This allows cats to deliver a strong bite, which is essential for catching and killing prey. The brain itself is relatively large in proportion to the cat's body size, indicating a high level of intelligence and sensory processing capabilities. The brain is divided into several regions, each responsible for different functions. The cerebrum, which is the largest part of the brain, is involved in decision-making, problem-solving, and voluntary movements. The cerebellum, located at the back of the brain, is responsible for coordinating movement and balance. The brainstem controls basic life functions such as heart rate, breathing, and sleep. Cats also have a highly developed olfactory bulb, which processes smells, and a large visual cortex, which processes visual information. These adaptations make cats highly effective hunters, with keen senses and quick reflexes that allow them to detect and capture prey with precision." });
}

function Lungs() {
  imgEdit.style.backgroundImage = "url('https://wilvet.com/wp-content/uploads/sites/260/2022/05/catRespiratory.png')";
  gsap.to(".header-edit", { duration: 2, text: "Lungs" });
  gsap.to(".text-edit", { duration: 2, text: "A cat's lungs are highly efficient and allow them to run, jump, and play with great agility. The respiratory system of a cat is designed to maximize oxygen intake and carbon dioxide expulsion, which is crucial for maintaining their high energy levels. The lungs are divided into several lobes, with the right lung having four lobes and the left lung having three lobes. This division allows for a large surface area for gas exchange. The alveoli, tiny air sacs within the lungs, are where this gas exchange occurs. Oxygen from the air is absorbed into the bloodstream, while carbon dioxide, a waste product of metabolism, is expelled from the bloodstream into the alveoli to be exhaled. Cats have a relatively high respiratory rate compared to humans, which helps to ensure that their muscles receive a constant supply of oxygen during physical activity. Additionally, the diaphragm, a muscle located below the lungs, plays a key role in breathing. When the diaphragm contracts, it creates a vacuum that pulls air into the lungs. When it relaxes, air is pushed out of the lungs. This efficient respiratory system allows cats to maintain their high levels of activity and agility, making them excellent hunters and playful companions."   });
}

function Heart() {
  imgEdit.style.backgroundImage = "url('https://bowwowinsurance.com.au/wp-content/uploads/2018/10/Feline-heart-veins-arteries.png')";
  gsap.to(".header-edit", { duration: 1, text: "Heart" });
  gsap.to(".text-edit", { duration: 3, text: "A cat's heart is a powerful organ that pumps blood throughout the body, delivering oxygen and nutrients while removing waste. It has four chambers: two atria and two ventricles. The right side pumps deoxygenated blood to the lungs, and the left side pumps oxygenated blood to the body. The heart's rhythm is controlled by the sinoatrial (SA) node, which acts as a natural pacemaker. Cats have a high heart rate, typically 140-220 beats per minute, ensuring their muscles receive a constant supply of oxygen and nutrients. The heart's efficiency is enhanced by strong valves that prevent backflow and maintain proper blood flow. The autonomic nervous system regulates heart rate and blood pressure, adapting to the cat's activity levels. Overall, the cat's heart is essential for their active lifestyle and well-being." });
}

function Liver() {
  imgEdit.style.backgroundImage = "url('https://drbillspetnutrition.com/wp-content/uploads/2016/08/1.-Liver-is-Largest-Organ-1024x576.jpg')";
  gsap.to(".header-edit", { duration: 1, text: "Liver" });
  gsap.to(".text-edit", { duration: 3, text: "A cat's liver is a vital organ that plays a crucial role in their overall health and well-being. It is responsible for a wide range of essential functions, including detoxification, metabolism, and the production of important proteins and enzymes. The liver helps to filter out toxins and waste products from the bloodstream, ensuring that the cat's body remains free from harmful substances. Additionally, the liver is involved in the metabolism of fats, proteins, and carbohydrates, converting these nutrients into energy and other necessary compounds. This highly efficient organ also produces bile, which aids in the digestion and absorption of fats. Overall, the liver's multifaceted roles are indispensable for maintaining a cat's health and enabling them to lead an active and energetic life." });
}

function Spleen() {
  imgEdit.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/cat-spleen-felis-catus-anatomy-isolated-white-whiten-53355698.jpg')";
  gsap.to(".header-edit", { duration: 1, text: "Spleen" });
  gsap.to(".text-edit", { duration: 3, text: "A cat's spleen filters blood, recycles old red blood cells, and stores white blood cells and platelets. It acts as a blood reservoir, releasing stored cells during physical exertion or injury. The spleen also plays a crucial role in the immune system by producing lymphocytes and antibodies, helping to fight infections and diseases. Overall, the spleen supports the circulatory and immune systems, ensuring the cat remains healthy and active." });
}
  
function Kidneys() {
  imgEdit.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/5f87b82c3640400719116914/c4f9af45-56a8-4f45-919a-b2a2536c0116/cat+kidney.jpg')";
  gsap.to(".header-edit", { duration: 1, text: "Kidneys" });
  gsap.to(".text-edit", { duration: 3, text: "A cat's kidneys are highly efficient organs that play a crucial role in maintaining their overall health. These bean-shaped organs are responsible for filtering waste products from the blood, balancing electrolytes, and regulating hydration levels. Cats have evolved to thrive in environments with limited water sources, which is why their kidneys are particularly adept at conserving water. This efficiency allows them to produce highly concentrated urine, minimizing water loss. Additionally, the kidneys help in the production of certain hormones that regulate blood pressure and stimulate the production of red blood cells. Proper kidney function is essential for a cat's well-being, and any impairment can lead to serious health issues such as chronic kidney disease, which is common in older cats." });
}

function Spine() {
  imgEdit.style.backgroundImage = "url('https://media.istockphoto.com/id/530704555/photo/cat-behind-a-cat-skeleton.jpg?s=612x612&w=0&k=20&c=-dO9aGivsz18fxj95myORsvhSS_S2h2Xu8jQyO93fBg=')";
  gsap.to(".header-edit", { duration: 1, text: "Spine" });
  gsap.to(".text-edit", { duration: 3, text: "A cat's spine is a marvel of nature, designed to provide exceptional flexibility and agility. Unlike humans, cats have more vertebrae in their spine, which allows for a greater range of motion. This flexibility is crucial for their ability to twist and turn their bodies mid-air, aiding in balance and precision when they leap or fall. Additionally, the intervertebral discs in a cat's spine are more elastic, contributing to their ability to stretch and compress their bodies with ease. This unique structure not only supports their graceful movements but also plays a vital role in their predatory skills, enabling them to pounce on prey with remarkable accuracy." });
}

function smallIntestine() {
  imgEdit.style.backgroundImage = "url('https://vcahospitals.com/-/media/2/vca/images/lifelearn-images-foldered/76/cat_digestive_tract_2020-01.jpg?rev=0a268c90613d43cfbfa13f14f5ead0a9&hash=5CF76061A54EA76A895DFC2B7E63066C')";
  gsap.to(".header-edit", { duration: 1, text: "Small Intestine" });
  gsap.to(".text-edit", { duration: 3, text: "A cat's small intestine is highly efficient and allows them to run" });
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
