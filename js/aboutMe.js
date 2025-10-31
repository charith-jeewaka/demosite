const aboutBlocks = document.querySelectorAll("#about-texts .about-texts");

const content = [
    {
        img: "assets/images/myCollage.jpg",
        text: `I pursued my secondary education at <a href="https://en.wikipedia.org/wiki/St._John%27s_College,_Panadura" target="_blank" rel="noopener" class="underline-animate">St John's College, Panadura</a>, where I successfully completed my G.C.E. Ordinary Level examinations.`
    },
    {
        img: "assets/images/myTeam.jpg",
        text: `We’re a small but <span>passionate</span> team, working together to build meaningful digital experiences. Each of us brings unique strengths <span>and we love what we do.</span>`
    },
    {
        img: "assets/images/mobileApps.jpg",
        text: "sdfdfdssfsdfsdf<span>ABS</span>"
    },
    {
        img: "assets/images/webApplication.jpg",
        text: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
    }
];

let startIndex = 0;      // Which content to show next
let divIndex = 0;        // Which div to update next
const intervalTime = 3500;

// Helper: remove all slide-in direction classes
function resetSlideDirection(block) {
    block.classList.remove("down", "left", "up", "right");
}

function updateSingleDiv(block, data) {
    // Remove active to reset previous animation
    block.classList.remove("active");

    // Remove old direction classes
    resetSlideDirection(block);

    // Add right direction class
    block.classList.add("right");

    // Wait a moment to allow browser to apply removal
    setTimeout(() => {
        const imgElement = block.querySelector("img");
        const textElement = block.querySelector(".about-texts-txt");

        imgElement.src = data.img;
        textElement.innerHTML = data.text;

        // Add active to trigger slide-in from right
        block.classList.add("active");
    }, 50); // small delay ensures transition triggers
}

// Initial animation (optional: slide in right)
aboutBlocks.forEach(b => {
    resetSlideDirection(b);
    b.classList.add("right", "active");
});

setInterval(() => {
    const block = aboutBlocks[divIndex];
    const current = content[startIndex];

    updateSingleDiv(block, current);

    // Move to next div
    divIndex = (divIndex + 1) % aboutBlocks.length;
    // Move to next content
    startIndex = (startIndex + 1) % content.length;
}, intervalTime);













// 1️⃣ Selecting the Divs
// const aboutBlocks = document.querySelectorAll("#about-texts .about-texts");
//
//
// #about-texts is your parent container.
//
//     .about-texts are the two divs that hold image + text.
//
//     querySelectorAll returns all matched divs in a NodeList, stored in aboutBlocks.
//
//     These are the “slots” we will update one by one.
//
// 2️⃣ Your Content Array
// const content = [
//     { img: "assets/images/myCollage.jpg", text: `...` },
//     { img: "assets/images/myTeam.jpg", text: `...` },
//     { img: "assets/images/mobileApps.jpg", text: `...` },
//     { img: "assets/images/webApplication.jpg", text: `...` }
// ];
//
//
// content stores all images + text descriptions you want to show.
//
//     Each element has two properties:
//
//     img → the image source
//
// text → HTML for the text
//
// This array is cycled through, so all content eventually appears in your divs.
//
// 3️⃣ Index Tracking
// let startIndex = 0; // Which content to show next
// let divIndex = 0;   // Which div to update next
// const intervalTime = 5000;
//
//
// startIndex → tracks which content from the array should appear next.
//
//     divIndex → tracks which div we are updating (0 or 1).
//
// intervalTime → time interval (5 seconds) between updates.
//
// 4️⃣ Resetting Slide Direction
// function resetSlideDirection(block) {
//     block.classList.remove("down", "left", "up", "right");
// }
//
//
// Each block can have different slide-in directions via CSS classes (.down, .up, .left, .right).
//
// We remove all direction classes before applying a new one, so the browser can correctly animate the new direction.
//
// 5️⃣ Updating a Single Div
// function updateSingleDiv(block, data) {
//     block.classList.remove("active");   // stop any previous animation
//     resetSlideDirection(block);         // remove old slide-in direction
//     block.classList.add("right");       // set new direction: slide from right
//
//     setTimeout(() => {
//         const imgElement = block.querySelector("img");
//         const textElement = block.querySelector(".about-texts-txt");
//
//         imgElement.src = data.img;     // update image
//         textElement.innerHTML = data.text; // update text
//
//         block.classList.add("active"); // trigger slide-in animation
//     }, 50); // tiny delay ensures transition triggers
// }
//

// Step-by-step explanation:
//
//     Remove .active
//
// Resets the current animation so it can replay.
//
//     Remove old direction classes
//
// Makes sure the new animation doesn’t conflict with a previous slide direction.
//
//     Add .right
//
// The new animation will slide from the right (translateX(80px) → 0).
//
// setTimeout(() => {...}, 50)
//
// The browser needs a small delay so it registers the removal of .active before adding it again.
//
//     Without this, the animation sometimes doesn’t play.
//
//     Update image + text
//
// Changes the content of the div after the slide-out/reset.
//
//     Add .active
//
// Triggers your CSS transition, sliding the div from right into view.
//
// 6️⃣ Initial Animation on Page Load
// aboutBlocks.forEach(b => {
//     resetSlideDirection(b);
//     b.classList.add("right", "active");
// });
//
//
// When the page first loads, both divs slide in from the right immediately.
//
//     This makes the page look animated from the start instead of appearing static.
//
// 7️⃣ Main Interval Loop
// setInterval(() => {
//     const block = aboutBlocks[divIndex]; // select the div to update
//     const current = content[startIndex];  // select the content to show
//
//     updateSingleDiv(block, current);     // update div with animation
//
//     divIndex = (divIndex + 1) % aboutBlocks.length; // move to next div
//     startIndex = (startIndex + 1) % content.length; // move to next content
// }, intervalTime);
//
//
// Every 5 seconds:
//
//     Pick one div (divIndex) to update.
//
//     Pick next content (startIndex) from the array.
//
//     Call updateSingleDiv → updates the div and triggers slide-in animation.
//
//     Increment divIndex → toggles between div 0 and div 1.
//
// Increment startIndex → moves through the content array, looping back to the start.
//
// ✅ What this achieves
//
// Only one div updates at a time, creating a “slot swap” effect.
//
//     Every time a div updates:
//
//     The content changes
//
// It slides in from the right (.right.active)
//
// The other div stays static until it’s its turn.
//
//     All 4 content items rotate indefinitely.