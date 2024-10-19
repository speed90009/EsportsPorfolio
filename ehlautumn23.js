// Define casting gigs
const castingGigs = [
  {
    image: "./images/EHL.jpg",
    date: "9th Sept 2023",
    game: "Project Stadium Split 2 Mini Cup #1 (Paid)",
    description: "",
    casters: "Casted With: ",
    vodUrl: "",
    buttonLabel: ""
  },
  {
    image: "./images/EHL.jpg",
    date: "16th Sept 2023",
    game: "Project Stadium Split 2 Mini Cup #2 (Paid)",
    description: "Taking more of a Hosting role, I was casting the Top EU Teams and doing some analysis with other EU Casters.",
    casters: "Casted With: ",
    vodUrl: "",
    buttonLabel: ""
  },
  {
    image: "./images/EHL.jpg",
    date: "23rd Sept 2023",
    game: "Project Stadium Split 2 Mega Cup #2 (Paid)",
    description: "The final Mega Cup for Split 2, this was a huge event and a great enjoyment to cast. The Final match was dropped but the stream was smooth.",
    casters: "Casted With: ",
    vodUrl: "",
    buttonLabel: ""
  }
];

// Create casting gig boxes
const castingGigBoxes = castingGigs.map((castingGig) => {
  return `
    <div class="box">
      <img src=${castingGig.image} alt="Casting gig image">
      <div class="box-info">
        <p>${castingGig.category}</p>
        <h4>${castingGig.game}</h4>
        <h3>${castingGig.date}</h3>
        <p>${castingGig.description}</p>
        <p>${castingGig.casters}</p>
        <a href="${castingGig.vodUrl}" class="button">View Brackets</a>
      </div>
    </div>
  `;
});

// Add casting gig boxes to page
document.getElementById("casting-gigs").innerHTML = castingGigBoxes.join("");