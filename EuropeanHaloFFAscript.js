// Define casting gigs
const castingGigs = [
  {
    image: "./images/EuropeanFFA.png",
    date: "March 15th 2023",
    game: "EU FFA Spring Series Kick-Off",
    description: "James and I kicked off the community led tournament, with a good amount of success!",
    casters: "Casted With: CptJamesForce",
    vodUrl: "https://youtu.be/3apDZURLFf0"
  },
  {
    image: "./images/EuropeanFFA.png",
    date: "April 12th 2023",
    game: "EU FFA Open #4",
    description: "I was joined by Outqasted to cover the mad gameplay that was Series Open #4",
    casters: "Casted With: Outqasted",
    vodUrl: "https://youtu.be/LX3qrtn18Hw"
  },
  {
    image: "./images/EuropeanFFA.png",
    date: "April 19th 2023",
    game: "EU FFA Open #5",
    description: "I was joined once again by James as we were blessed by these matches in Open #5",
    casters: "Casted With: CptJamesForce",
    vodUrl: "https://youtu.be/LX3qrtn18Hw"
  },
  {
    image: "./images/EuropeanFFA.png",
    date: "May 3rd 2023",
    game: "EU FFA Series Open #7",
    description: "This was a great cast, by this point we could make some good predictions and conversation.",
    casters: "Casted With: CptJamesForce",
    vodUrl: ""
  },
  {
    image: "./images/EuropeanFFA.png",
    date: "May 10th 2023",
    game: "EU FFA Series Finals",
    description: "The series finals were insane, we got some major matches with some of the EU's top talent",
    casters: "Casted With: CptJamesForce",
    vodUrl: ""
  },
];

// Create casting gig boxes
const castingGigBoxes = castingGigs.map((castingGig) => {
  return `
    <div class="box">
      <img src=${castingGig.image} alt="Casting gig image">
      <h3>${castingGig.date}</h3>
      <h4>${castingGig.game}</h4>
      <p>${castingGig.description}</p>
      <p>${castingGig.casters}</p>
      <a href="${castingGig.vodUrl}" class="button">View Vods</a>
    </div>
  `;
});

// Add casting gig boxes to page
document.getElementById("casting-gigs").innerHTML = castingGigBoxes.join("");