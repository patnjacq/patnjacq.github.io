
class Hike {
    constructor(name, imgSrc, imgAlt,  distance, difficulty, description, directions) {
        this.name = name;
        this.imgScr = imgSrc;
        this.imgAlt = imgAlt;
        this.distance= distance;
        this.difficulty = difficulty;
        this.description = description;
        this.directions = directions;
    }
     renderOneHike() {
        const item = document.createElement("li");
      
        item.innerHTML = ` <h2>${this.name}</h2>
              <img src="${imgBasePath}${this.imgSrc}" alt="${this.imgAlt}">
              <div class = "info">
                      <div>
                          <h3>Distance</h3>
                          <p>${this.distance}</p>
                      </div>
                      <div>
                          <h3>Difficulty</h3>
                          <p>${this.difficulty}</p>
                      </div>
              </div>`;
      
        return item;
        
    }
    
    

}