// Wait until the webpage completely loads before running code
document.addEventListener("DOMContentLoaded", () => {
    
    // Step 1: Find tab buttons and section elements using their IDs
    const homeTab = document.getElementById("homeTab");
    const aboutTab = document.getElementById("aboutTab");
    const homeSection = document.getElementById("homeSection");
    const aboutSection = document.getElementById("aboutSection");

    const magicButton = document.getElementById("magicBtn");
    const magicMessage = document.getElementById("magicMessage");

    // Step 2: Tab Switching Logic - Show Home, Hide About
    homeTab.addEventListener("click", () => {
        homeTab.classList.add("active");
        aboutTab.classList.remove("active");
        
        homeSection.classList.remove("hidden-section");
        homeSection.classList.add("active-section");
        
        aboutSection.classList.remove("active-section");
        aboutSection.classList.add("hidden-section");
    });

    // Step 3: Tab Switching Logic - Show About, Hide Home
    aboutTab.addEventListener("click", () => {
        aboutTab.classList.add("active");
        homeTab.classList.remove("active");
        
        aboutSection.classList.remove("hidden-section");
        aboutSection.classList.add("active-section");
        
        homeSection.classList.remove("active-section");
        homeSection.classList.add("hidden-section");
    });

    // Step 4: Magic Button Event Listener
    magicButton.addEventListener("click", () => {
        magicMessage.textContent = "🎉 Welcome to Ethan DeVoll's site! Thanks for visiting!";
        magicButton.style.backgroundColor = "#80ffdb";
        magicButton.style.color = "#001219";
        magicButton.textContent = "Clicked!";
    });
    
});
