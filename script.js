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

    const interestCards = document.querySelectorAll(".interest-card");
    const cardDetailBox = document.getElementById("cardDetailBox");

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
            // Retrieve custom info from data-info attribute
            const infoText = emoji.getAttribute("data-info");
            emojiInfoBox.textContent = infoText;
        });
    });

    // Step 5: Make About Tab Interest Cards Interactive
    interestCards.forEach((card) => {
        card.addEventListener("click", () => {
            // Retrieve custom detail from data-detail attribute
            const detailText = card.getAttribute("data-detail");
            cardDetailBox.textContent = detailText;
        });
    });

    // Step 6: Magic Button Event Listener
    magicButton.addEventListener("click", () => {
        magicMessage.textContent = "🎉 Welcome to Ethan DeVoll's site! Thanks for visiting!";
        magicButton.style.backgroundColor = "#80ffdb";
        magicButton.style.color = "#001219";
        magicButton.textContent = "Clicked!";
    });
    
});
