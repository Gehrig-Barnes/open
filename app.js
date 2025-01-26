import { dankScript } from "./engine/dankEngine.js";
import { renderHomePage } from "./pages/homePage.js";

function init() {
  const page = window.location.hash || "#home"; // Declare page with const
  document.body.innerHTML = ""; // Clear the body

  if (page === "#home") {
    renderHomePage();
  } else {
    document.body.appendChild(dankScript("h1", {}, "404 - Page Not Found"));
  }
}
const helloFriendButton = document.querySelector(".hello-friend");

const onClickIntroButton = () => {
  if (helloFriendButton.textContent === "hello friend") {
    helloFriendButton.textContent = "It's great to meet you";
    helloFriendButton.className = "a";
  } else if (helloFriendButton.textContent === "It's great to meet you") {
    helloFriendButton.textContent = "Thank You For Stopping By";
    helloFriendButton.className = "b";
  } else if (helloFriendButton.textContent === "Thank You For Stopping By") {
    helloFriendButton.textContent = "I hope you're having a great day!";
    helloFriendButton.className = "c";
  } else if (
    helloFriendButton.textContent === "I hope you're having a great day!"
  ) {
    helloFriendButton.textContent = "Goodbye";
    helloFriendButton.className = "d";
  } else if (helloFriendButton.textContent === "Goodbye") {
    helloFriendButton.textContent = "...";
    helloFriendButton.className = "e";
  } else if (helloFriendButton.textContent === "...") {
    helloFriendButton.textContent = "....";
    helloFriendButton.className = "f";
  } else if (helloFriendButton.textContent === "....") {
    helloFriendButton.textContent = " .....";
    helloFriendButton.className = "g";
  } else if (helloFriendButton.textContent === " .....") {
    helloFriendButton.textContent = "You're still here?";
    helloFriendButton.className = "h";
  } else if (helloFriendButton.textContent === "You're still here?") {
    helloFriendButton.textContent = "Are you lost?";
    helloFriendButton.className = "i";
  } else if (helloFriendButton.textContent === "Are you lost?") {
    helloFriendButton.textContent = "I see ...";
    helloFriendButton.className = "j";
  } else if (helloFriendButton.textContent === "I see ...") {
    helloFriendButton.textContent = "hmmm ...";
    helloFriendButton.className = "k";
  } else if (helloFriendButton.textContent === "hmmm ...") {
    helloFriendButton.textContent = "OK!";
    helloFriendButton.className = "l";
  } else if (helloFriendButton.textContent === "OK!") {
    helloFriendButton.textContent = "this way";
    helloFriendButton.className = "m";
  
  } else if (helloFriendButton.textContent === "this way") {
    helloFriendButton.disabled = true;
    opening.classList.remove("hide");
    setTimeout(() => {
      animateDoor();
    }, 1000);
  }
};

helloFriendButton.addEventListener("click", onClickIntroButton);
const door = document.querySelector(".door");
const opening = document.querySelector(".opening");
// let frame = 1;

// const animateDoor = () => {

//   if (frame < 20) {
//     const clipValue = 100 - frame;
//     const polygon = `polygon(0% 0%, ${clipValue}% ${frame}%, ${clipValue}% ${clipValue}%, 0% 100%)`;
//     door.style.clipPath = polygon;

//     frame += 0.1;
//     setTimeout(animateDoor, 5);
//   } else {
//     const currentClipValue = 100 - frame;
//     animateDoorPhaseTwo(currentClipValue, frame);
//   }
// };

// const animateDoorPhaseTwo = (currentClipValue, currentFrame) => {
//   if (currentClipValue > 0) {
//     const polygon = `polygon(0% 0%, ${currentClipValue}% ${currentFrame}%, ${currentClipValue}% ${80}%, 0% 100%)`;
//     door.style.clipPath = polygon;
//     const newClipValue = currentClipValue - 0.2;
//     const newFrame = currentFrame + 0.05;
//     setTimeout(() => animateDoorPhaseTwo(newClipValue, newFrame), 10);
//   }
// };

let frame = 1;
let lastTime = 0;

const animateDoor = () => {
  const step = (timestamp) => {
    if (!lastTime) lastTime = timestamp; 
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (frame < 20) {
      const clipValue = 100 - frame;
      console.log(`Phase 1 - Frame: ${frame}, Clip Value: ${clipValue}`);
      const polygon = `polygon(0% 0%, ${clipValue}% ${frame}%, ${clipValue}% ${clipValue}%, 0% 100%)`;
      door.style.clipPath = polygon;

      frame += 10 * deltaTime;
      requestAnimationFrame(step);
    } else {
      console.log("Phase 1 complete. Moving to Phase 2.");
      const currentClipValue = 100 - frame;
      animateDoorPhaseTwo(currentClipValue, frame);
    }
  };

  requestAnimationFrame(step);
};

const animateDoorPhaseTwo = (currentClipValue, currentFrame) => {
  const stepPhaseTwo = (timestamp) => {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (currentClipValue > 0) {
      console.log(`Phase 2 - Current Clip Value: ${currentClipValue}, Current Frame: ${currentFrame}`);
      const polygon = `polygon(0% 0%, ${currentClipValue}% ${currentFrame}%, ${currentClipValue }% 80%, 0% 100%)`;
      door.style.clipPath = polygon;

      currentClipValue -= 40 * deltaTime;
      currentFrame += 20 * deltaTime;
      requestAnimationFrame(stepPhaseTwo);
    } else {
      console.log("Phase 2 complete. Door animation finished.");
    }
  };

  requestAnimationFrame(stepPhaseTwo);
};
