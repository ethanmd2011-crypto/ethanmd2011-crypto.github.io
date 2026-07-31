// Wait until the webpage completely loads before running code
document.addEventListener("DOMContentLoaded", () => {
    
    // Step 1: Find tab buttons and section elements
    const homeTab = document.getElementById("homeTab");
    const aboutTab = document.getElementById("aboutTab");
    const homeSection = document.getElementById("homeSection");
    const aboutSection = document.getElementById("aboutSection");

    const magicButton = document.getElementById("magicBtn");
    const magicMessage = document.getElementById("magicMessage");

    const emojiItems = document.querySelectorAll(".emoji-item");
    const emojiInfoBox = document.getElementById("emojiInfoBox");

    const flipCards = document.querySelectorAll(".flip-card");

    // Step 2: Tab Switching Logic - Home Tab
    homeTab.addEventListener("click", () => {
        homeTab.classList.add("active");
        aboutTab.classList.remove("active");
        
        homeSection.classList.remove("hidden-section");
        homeSection.classList.add("active-section");
        
        aboutSection.classList.remove("active-section");
        aboutSection.classList.add("hidden-section");
    });

    // Step 3: Tab Switching Logic - About Tab
    aboutTab.addEventListener("click", () => {
        aboutTab.classList.add("active");
        homeTab.classList.remove("active");
        
        aboutSection.classList.remove("hidden-section");
        aboutSection.classList.add("active-section");
        
        homeSection.classList.remove("active-section");
        homeSection.classList.add("hidden-section");
    });

    // Step 4: Make Home Tab Emojis Interactive
    emojiItems.forEach((emoji) => {
        emoji.addEventListener("click", () => {
            const infoText = emoji.getAttribute("data-info");
            emojiInfoBox.textContent = infoText;
        });
    });

    // Step 5: Make About Tab 3D Cards Flip on Click
    flipCards.forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("is-flipped");
        });
    });

    // Step 6: Multi-Click Background Color Changer Logic
    const colors = ["red", "green", "yellow", "blue"];
    let colorIndex = 0;

    magicButton.addEventListener("click", () => {
        document.body.classList.remove("bg-red", "bg-green", "bg-yellow", "bg-blue");

        const currentColor = colors[colorIndex];
        document.body.classList.add(`bg-${currentColor}`);

        magicMessage.textContent = `🎨 Background color changed to ${currentColor.toUpperCase()}!`;

        colorIndex = (colorIndex + 1) % colors.length;
    });
    
});
