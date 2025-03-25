class KeyImageAssigner {
    constructor(targetDivId, spriteSheet, spriteWidth, spriteHeight, keyFrameMap) {
        this.targetDiv = document.getElementById(targetDivId);
        this.spriteSheet = spriteSheet;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.keyFrameMap = keyFrameMap;
        this.init();
    }

    init() {
        document.addEventListener("keydown", (event) => this.assignSprite(event.key));
        this.targetDiv.style.backgroundImage = `url(${this.spriteSheet})`;
        this.targetDiv.style.backgroundSize = "auto";
    }

    assignSprite(key) {
        if (this.keyFrameMap[key] !== undefined) {
            const frameX = this.keyFrameMap[key] * this.spriteWidth;
            this.targetDiv.style.backgroundPosition = `-${frameX}px 0`;
            this.targetDiv.style.width = `${this.spriteWidth}px`;
            this.targetDiv.style.height = `${this.spriteHeight}px`;
        }
    }
}

// Ejemplo de uso:
const keyFrameMap = {
    "ArrowLeft": 0, // Primera imagen del sprite sheet
    "ArrowRight": 1, // Segunda imagen del sprite sheet
    "ArrowUp": 2, // Tercera imagen del sprite sheet
    "ArrowDown": 3  // Cuarta imagen del sprite sheet
};

// Asegúrate de que el div con id "airplane" exista en tu HTML
targetDiv = document.createElement("div");
targetDiv.id = "jugador";
targetDiv.style.position = "absolute";
targetDiv.style.top = "100px";
targetDiv.style.left = "100px";
document.body.appendChild(targetDiv);

const airplaneSprite = new KeyImageAssigner("jugador", "spritesheet.png", 64, 64, keyFrameMap);
