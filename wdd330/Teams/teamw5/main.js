//import Hikes from "./hikes.js";

//create an array of hikes
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }

];

class Hike {
   // constructor(name, imgSrc, imgAlt,  distance, difficulty, description, directions) {
       constructor (hike){

        this.name = hike.name;
        this.imgScr = hike.imgSrc;
        this.imgAlt = hike.imgAlt;
        this.distance= hike.distance;
        this.difficulty = hike.difficulty;
        this.description = hike.description;
        this.directions = hike.directions; 
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
const hikeObjList = hikeList.forEach(hike => new Hike(hike));
const myObj = new Hike(hikeList[0]);
console.log(myObj);
console.log(hikeObjList);



