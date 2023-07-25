// Define casting gigs
const castingGigs = [
  {
    image: "./images/Stadium.png",
    date: "25th May 2023",
    game: "Project Stadium Split 2 Mini Cup #1 (Paid)",
    description: "I was invited back to Stadium for their Split 2 tournament. I was casting the Top EU Teams with great Co-casters.",
    casters: "Casted With: Outqasted & Mqrine",
    vodUrl: "https://projectstadium.com/events/sss2mini1",
    buttonLabel: "View Vods"
  },
  {
    image: "./images/Stadium.png",
    date: "8th June 2023",
    game: "Project Stadium Split 2 Mini Cup #2 (Paid)",
    description: "Taking more of a Hosting role, I was casting the Top EU Teams and doing some analysis with other EU Casters.",
    casters: "Casted With: Outqasted & Mqrine",
    vodUrl: "https://projectstadium.com/events/sss2mini2",
    buttonLabel: "View Vods"
  },
  {
    image: "./images/Stadium.png",
    date: "11th June 2023",
    game: "Project Stadium Split 2 Mega Cup #2 (Paid)",
    description: "The final Mega Cup for Split 2, this was a huge event and a great enjoyment to cast. The Final match was dropped but the stream was smooth.",
    casters: "Casted With: Mqrine & Lethal_HT",
    vodUrl: "https://projectstadium.com/events/sss2mega2",
    buttonLabel: "View Vods"
  },
  {
    image: "./images/Stadium.png",
    date: "25th June 2023",
    game: "Project Stadium Split 2 Last Chance Qualifier (Paid)",
    description: "This was Glory's first cast it was great to work with him in this Open Qualifier",
    casters: "Casted With: Outqasted & GloryGGz",
    vodUrl: "https://projectstadium.com/events/sss2foq",
    buttonLabel: "View Vods"
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