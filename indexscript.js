// Define casting gigs
const castingGigs = [
  {
    image: "images/Europa.jpg",
    date: "December 2022",
    game: "Europa Halo Nations Cup",
    description: "This was my first official casting gig, UHL covered the B-Stream and I covered a portion of the tournament.",
    vodUrl: "https://www.youtube.com/watch?v=3LReLtK81v8",
    buttonLabel: "View Vods"
  },
  {
    image: "./images/Stadium.jpg",
    date: "January 2023",
    game: "Project Stadium Pre (Paid)",
    description: "The newest TO in European Halo did not disappoint. I was honored to help welcome stadium into the European Scene.",
    vodUrl: "stadiumpreseason.html",
    buttonLabel: "View Tournaments"
  },
  {
    image: "./images/UHL.jpg",
    date: "Feb 2023",
    game: "UHL Draft Tournament Finals",
    description: "I supported the UK University Halo Scene by solo casting the Draft Tournament finals",
    vodUrl: "https://www.youtube.com/watch?v=zEZepPC20Z4",
    buttonLabel: "View Vods"
  },
  {
    image: "./images/Stadium.jpg",
    date: "Feb - April 2023",
    game: "Project Stadium Split 1 (Paid)",
    description: "Following on from the Pre-Season Cup, I was honored to continue to be part of the broadcast team as stadium expanded in the European Scene.",
    vodUrl: "stadiumsplit1.html",
    buttonLabel: "View Tournaments"
  },
  {
    image: "./images/UHL.jpg",
    date: "March 2023",
    game: "UHL Spring Playoffs Finals",
    description: "I used the opportunity of the UHL Finals to cast with new people and build up experiance as the lead on a broadcast",
    vodUrl: "https://www.youtube.com/watch?v=eqNTTz07v44",
    buttonLabel: "View Vods"
  },
  {
    image: "./images/EuropeanFFA.png",
    date: "March - May 2023",
    game: "European FFA Spring Series",
    description: "A Community Led Effort. I had the opportunity to spearhead & cast the European FFA Series",
    vodUrl: "EuropeanHaloFFA.html",
    buttonLabel: "View Tournaments"
  },
  {
    image: "./images/SN.png",
    date: "April 2023",
    game: "Swat Nation BTB Bonanza B-Stream",
    description: "My first NA Cast, it was great to be able to cover a new selection of players and gain more experiance.",
    vodUrl: "https://www.youtube.com/watch?v=dvToJcSgvJA",
    buttonLabel: "View Vods"
  },
  {
    image: "./images/egl-logo.jpg",
    date: "April 2023",
    game: "EGL Halo Infinite Cup 2",
    description: "My first time working with EGL as a Caster. I was also in charge of organising the stream.",
    vodUrl: "https://youtu.be/pHhna4vcop4",
    buttonLabel: "View Vods"
  },
  {
    image: "./images/Stadium.jpg",
    date: "May - July 2023",
    game: "Project Stadium Split 2 (Paid)",
    description: "Coming out of Split 1, Stadium mixed up the format for Split 2 and I was thrilled to continue to be a part of it.",
    vodUrl: "stadiumsplit2.html",
    buttonLabel: "View Tournaments"
  },
  {
    image: "./images/UHL.jpg",
    date: "July 2023",
    game: "UHL Summer Playoffs Finals",
    description: "I had to solo cast the UHL Finals due to a clash with HCS & Europa events. The viewers enjoyed the laid-back approach.",
    vodUrl: "https://youtu.be/FEgEGFp8eo0",
    buttonLabel: "View Vods"
  },
];

// Create casting gig boxes
const castingGigBoxes = castingGigs.map((castingGig) => {
  return `
    <div class="box">
      <img src=${castingGig.image} alt="Casting gig image">
      <div class="box-info">
        <h3>${castingGig.date}</h3>
        <h4>${castingGig.game}</h4>
        <div class="textbox">
          <p>${castingGig.description}</p>
        </div>
        <a href="${castingGig.vodUrl}" class="button">${castingGig.buttonLabel}</a>
      </div>
    </div>
  `;
});

// Add casting gig boxes to page
document.getElementById("casting-gigs").innerHTML = castingGigBoxes.join("");