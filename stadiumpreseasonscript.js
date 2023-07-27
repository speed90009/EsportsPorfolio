// Define casting gigs
const castingGigs = [
  {
    image: "./images/Stadium.png",
    date: "January 5th 2023",
    game: "Project Preseason Cup 1 (Paid)",
    description: "The First paid broadcast I have done went suprisingly smoothly. Great experiance getting to cast with Casey.",
    casters: "Casted With: CaseyLunny",
    vodUrl: "https://challonge.com/SSSPC1"
  },
  {
    image: "./images/Stadium.png",
    date: "January 12th 2023",
    game: "Project Preseason Cup 2 (Paid)",
    description: "Bringing James into the fold was great, we had a good dynamic between the 3 of us and enabled us to have more breaks as a duo casted.",
    casters: "Casted With: CptJamesForce & CaseyLunny",
    vodUrl: "https://challonge.com/SSSPC2"
  },
  {
    image: "./images/Stadium.png",
    date: "January 14th 2023",
    game: "Project Preseason Cup Showdown (Paid)",
    description: "Have a couple streams under our belt meant that come this Showdown event the 3 of us made a much more entertaining trio for the stream.",
    casters: "Casted With: CptJamesForce & CaseyLunny",
    vodUrl: "https://challonge.com/SSSPSS"
  }
];

// Create casting gig boxes
const castingGigBoxes = castingGigs.map((castingGig) => {
  return `
    <div class="box">
      <img src=${castingGig.image} alt="Casting gig image">
      <div class="box-info">
        <h3>${castingGig.date}</h3>
        <h4>${castingGig.game}</h4>
        <p>${castingGig.description}</p>
        <p>${castingGig.casters}</p>
        <a href="${castingGig.vodUrl}" class="button">View Brackets</a>
      </div>
    </div>
  `;
});

// Add casting gig boxes to page
document.getElementById("casting-gigs").innerHTML = castingGigBoxes.join("");