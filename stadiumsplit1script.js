// Define casting gigs
const castingGigs = [
  {
    image: "./images/Stadium.png",
    date: "February 6th 2023",
    game: "Stadium Spartan Series Split 1 Div 1 Week 1 (Paid)",
    description: "I started off as Show Host for Week 1, this was my first cast as show host and it went really smooth. I had to spot things to discuss about that was important from every series.",
    casters: "Casted With: CaseyLunny & CptJamesForce & Lethal_HT",
    vodUrl: "https://twitchtracker.com/projectstadium/streams"
  },
  {
    image: "./images/Stadium.png",
    date: "February 13th 2023",
    game: "Stadium Spartan Series Split 1 Div 1 Week 2 (Paid)",
    description: "After a smooth Week 1, we had a great continuation in Week 2 with some of the top EU teams battling it out with new rosters.",
    casters: "Casted With: CptJamesForce & Lethal_HT",
    vodUrl: "https://twitchtracker.com/projectstadium/streams"
  },
  {
    image: "./images/Stadium.png",
    date: "February 20th 2023",
    game: "Stadium Spartan Series Split 1 Div 1 Week 3 (Paid)",
    description: "Week 3 had a decline in the viewers as the top teams decided to prepare for HCS Charlotte. Our Casting worked well as the chemistry was solid between the 3 of us now.",
    casters: "Casted With: CptJamesForce & Lethal_HT",
    vodUrl: "https://twitchtracker.com/projectstadium/streams"
  },
  {
    image: "./images/Stadium.png",
    date: "March 6th 2023",
    game: "Stadium Spartan Series Split 1 Div 1 Week 4 (Paid)",
    description: "Coming back after charlotte, discussion was all on the new season 2 rosters and changes post Charlotte for the game.",
    casters: "Casted With: CptJamesForce & Lethal_HT",
    vodUrl: "https://twitchtracker.com/projectstadium/streams"
  },
  {
    image: "./images/Stadium.png",
    date: "March 13th 2023",
    game: "Stadium Spartan Series Split 1 Div 1 Week 5 (Paid)",
    description: "I switched from host to casting some matches here as we had a longer stream. We had essentially nullified mistakes this far into the season, we got great responses from the audiance.",
    casters: "Casted With: CptJamesForce & Lethal_HT",
    vodUrl: "https://twitchtracker.com/projectstadium/streams"
  },
  {
    image: "./images/Stadium.png",
    date: "March 20th 2023",
    game: "Stadium Spartan Series Split 1 Div 1 Week 6 (Paid)",
    description: "As we started to solidify the placings in division one, we had some of the best players in the region pulling out all the stops.",
    casters: "Casted With: CptJamesForce & Lethal_HT",
    vodUrl: "https://twitchtracker.com/projectstadium/streams"
  },
  {
    image: "./images/Stadium.png",
    date: "March 27th 2023",
    game: "Stadium Spartan Series Split 1 Div 1 Week 7 (Paid)",
    description: "A shorter stream this week, we had some issues with teams dropping out as they were unable to achieve higher in their rankings. That aside, Lethal and I put on a well reviewed show.",
    casters: "Casted With: Lethal_HT",
    vodUrl: "https://twitchtracker.com/projectstadium/streams"
  },
  {
    image: "./images/Stadium.png",
    date: "April 3rd 2023",
    game: "Stadium Spartan Series Split 1 Div 1 Week 8 (Paid)",
    description: "We had a great final week, having the top couple teams in Europe go head to head gave us great exposure. It was amazing for everyone involved!",
    casters: "Casted With: CptJamesForce & Lethal_HT",
    vodUrl: "https://twitchtracker.com/projectstadium/streams"
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
      <a href="${castingGig.vodUrl}" class="button">View Twitch Tracker</a>
    </div>
  `;
});

// Add casting gig boxes to page
document.getElementById("casting-gigs").innerHTML = castingGigBoxes.join("");