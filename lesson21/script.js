
class ForSprites{
    constructor(){
    this.img = document.getElementById("image");
    this.selectSprite = document.getElementById("select");
    this.seedElement = document.getElementById("seed");
    this.inputColor = document.getElementById("colorWell");
    this.downloadImage = document.getElementById("downloadButton");

    this.currentSprite = this.selectSprite.value;
    this.currentSeed = this.seedElement.value;
    this.currentBack = this.inputColor.value.slice(1);

    this.updateImage();
    this.listeners();
    }

    updateImage() {    
        this.img.src = `https://avatars.dicebear.com/api/${this.currentSprite}/${this.currentSeed}.svg?background=%23${this.currentBack}`;
    }
    
    listeners(){
        this.selectSprite.addEventListener("change", (e) => {
            const {value} = e.target
            this.currentSprite = value;
            this.updateImage();
        })
        this.seedElement.addEventListener("input", (e) => {
            const {value} = e.target
            this.currentSeed = value;
            this.updateImage();
        })
        this.inputColor.addEventListener("input", (e) => {
            const {value} = e.target
            this.currentBack = value.slice(1);
            this.updateImage();
        })
        this.downloadImage.addEventListener("click", (e) => {
            this.fetchDown(`${this.currentSprite}_${this.currentSeed}_${this.currentBack}`);
        })
    } 

    async fetchDown (saveas) {
        let someImage = await fetch(`https://avatars.dicebear.com/api/${this.currentSprite}/${this.currentSeed}.svg?background=%23${this.currentBack}`, {
            method: "GET"
        });
        someImage = await someImage.blob();
        let a = document.createElement("a");
        a.href = window.URL.createObjectURL(someImage);
        a.download = saveas;
        a.click();
    }
}

new ForSprites();