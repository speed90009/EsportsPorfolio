const socialMediaLinks = [
    {name: "Twitter", url: "https://twitter.com/yourusername"},
    {name: "Instagram", url: "https://instagram.com/yourusername"},
    {name: "Facebook", url: "https://facebook.com/yourusername"}
  ];
  
  const socialMediaContainer = document.getElementById("social-media");
  
  socialMediaLinks.forEach(link => {
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    socialMediaContainer.appendChild(anchor);
  });

const castingGigs = [
    {name: "ESL One", event: "CS:GO", date: "January 1, 2021", location: "Los Angeles"},
    {name: "DreamHack", event: "League of Legends", date: "February 14, 2021", location: "Stockholm"},
    {name: "IEM", event: "Starcraft II", date: "March 21, 2021", location: "Katowice"}
  ];

  const container = document.getElementById("casting-gigs-container");

castingGigs.forEach(gig => {
    const box = document.createElement("div");
    box.classList.add("casting-gig-box");
    box.classList.add("floating-box");
    // create elements for each property
    const name = document.createElement("h3");
    name.textContent = gig.name;
    box.appendChild(name);
    
    const event = document.createElement("div");
    event.textContent = gig.event;
    box.appendChild(event);
    
    const date = document.createElement("div");
    date.textContent
  
    date.textContent = gig.date;
    box.appendChild(date);
  
    const location = document.createElement("div");
    location.textContent = gig.location;
    box.appendChild(location);
  
    // append the box to the container
    container.appendChild(box);
});

    