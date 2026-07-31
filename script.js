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

    // =========================================
    // Step 7: Snake Mini-Game Logic
    // =========================================
    const canvas = document.getElementById("snakeCanvas");
    const ctx = canvas.getContext("2d");
    const scoreDisplay = document.getElementById("snakeScore");
    const startBtn = document.getElementById("startSnakeBtn");

    const gridSize = 15; // Size of each square block
    const tileCount = canvas.width / gridSize; // 300 / 15 = 20 tiles across

    let snake = [{ x: 10, y: 10 }];
    let food = { x: 5, y: 5 };
    let dx = 1; // horizontal velocity
    let dy = 0; // vertical velocity
    let score = 0;
    let gameLoop = null;
    let gameRunning = false;

    // Start or Reset Game
    function startSnakeGame() {
        snake = [
            { x: 10, y: 10 },
            { x: 9, y: 10 },
            { x: 8, y: 10 }
        ];
        generateFood();
        dx = 1;
        dy = 0;
        score = 0;
        scoreDisplay.textContent = score;
        gameRunning = true;

        if (gameLoop) clearInterval(gameLoop);
        gameLoop = setInterval(drawGame, 120); // Speed: updates every 120ms
    }

    // Random Food Generator
    function generateFood() {
        food.x = Math.floor(Math.random() * tileCount);
        food.y = Math.floor(Math.random() * tileCount);
    }

    // Main Draw Function (runs every tick)
    function drawGame() {
        if (!gameRunning) return;

        // Move Snake Head
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        // Wall Collision Check
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            return gameOver();
        }

        // Self Collision Check
        for (let i = 0; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i].y) {
                return gameOver();
            }
        }

        // Add new head to snake
        snake.unshift(head);

        // Check if Snake ate Food
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            scoreDisplay.textContent = score;
            generateFood();
        } else {
            snake.pop(); // Remove tail segment if food wasn't eaten
        }

        // Clear Canvas Background
        ctx.fillStyle = "#0a192f";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw Food (Glow Red)
        ctx.fillStyle = "#ff4d6d";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#ff4d6d";
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);

        // Draw Snake (Cyan)
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#80ffdb";
        snake.forEach((segment, index) => {
            // Head is slightly brighter
            ctx.fillStyle = index === 0 ? "#80ffdb" : "#00b4d8";
            ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
        });

        // Reset shadow effect
        ctx.shadowBlur = 0;
    }

    // Game Over Handler
    function gameOver() {
        gameRunning = false;
        clearInterval(gameLoop);
        alert(`🎮 Game Over! Your final score was: ${score}`);
    }

    // Keyboard Arrow Controls
    document.addEventListener("keydown", (event) => {
        // Prevent scrolling page with arrow keys while playing
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
            event.preventDefault();
        }

        if (event.key === "ArrowUp" && dy === 0) { dx = 0; dy = -1; }
        if (event.key === "ArrowDown" && dy === 0) { dx = 0; dy = 1; }
        if (event.key === "ArrowLeft" && dx === 0) { dx = -1; dy = 0; }
        if (event.key === "ArrowRight" && dx === 0) { dx = 1; dy = 0; }
    });

    // On-Screen D-Pad Buttons Handler
    document.getElementById("upBtn").addEventListener("click", () => { if (dy === 0) { dx = 0; dy = -1; } });
    document.getElementById("downBtn").addEventListener("click", () => { if (dy === 0) { dx = 0; dy = 1; } });
    document.getElementById("leftBtn").addEventListener("click", () => { if (dx === 0) { dx = -1; dy = 0; } });
    document.getElementById("rightBtn").addEventListener("click", () => { if (dx === 0) { dx = 1; dy = 0; } });

    startBtn.addEventListener("click", startSnakeGame);
    
});
