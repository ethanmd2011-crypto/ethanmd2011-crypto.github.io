// Wait until the webpage completely loads before running code
document.addEventListener("DOMContentLoaded", () => {
    
    // Step 1: Find elements in the HTML page using their IDs
    const magicButton = document.getElementById("magicBtn");
    const magicMessage = document.getElementById("magicMessage");

    // Step 2: Add an event listener to respond to button clicks
    magicButton.addEventListener("click", () => {
        // Step 3: Display a cool forest-themed message!
        magicMessage.textContent = "🌲 You discovered a secret path in the blue forest!";
        
        // Update button style and text upon click
        magicButton.style.backgroundColor = "#64ffda";
        magicButton.style.color = "#0a192f";
        magicButton.textContent = "Secrets Unlocked!";
    });
    
});
