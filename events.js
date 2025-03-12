document.addEventListener("DOMContentLoaded", function() {
    // Sample events array (you can replace or extend this with your actual data)
    const events = [
      { id: 1, title: "Community Meetup", date: "2025-03-15", interest: "community", description: "Join our community meetup to connect with like-minded people.", location: "Community Hall" },
      { id: 2, title: "Art Workshop", date: "2025-04-10", interest: "creative", description: "Explore your creativity in our hands-on art workshop.", location: "Art Studio" },
      { id: 3, title: "Networking Night", date: "2025-03-20", interest: "networking", description: "Exclusive networking event for professionals.", location: "Downtown Venue" },
      { id: 4, title: "Yoga Session", date: "2025-03-18", interest: "wellness", description: "Relax and rejuvenate with a morning yoga session.", location: "Central Park" },
      { id: 5, title: "Tech Talk", date: "2025-04-05", interest: "technology", description: "Hear experts discuss the latest in technology.", location: "Conference Center" }

    ];

    // Function to render events into a container
    function renderEvents(eventsArray, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = ""; // Clear previous content
      if (eventsArray.length === 0) {
        container.innerHTML = "<p>No events found.</p>";
        return;
      }
      eventsArray.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `
          <h3>${event.title}</h3>
          <div class="event-date">${new Date(event.date).toLocaleDateString()}</div>
          <p>${event.description}</p>
          <div class="event-interests">Interest: ${event.interest}</div>
          <div class="event-location">Location: ${event.location}</div>
        `;
        container.appendChild(eventCard);
      });
    }
  
    // Initially render all events
    renderEvents(events, "eventsList");

    // Filter functionality
    document.getElementById("filterForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const interestFilter = document.getElementById("interestFilter").value.toLowerCase();
        const dateFilter = document.getElementById("dateFilter").value; // Format: YYYY-MM-DD
        let filteredEvents = events;
        if (interestFilter) {
          filteredEvents = filteredEvents.filter(ev => 
            ev.interest.toLowerCase().includes(interestFilter) ||
            ev.title.toLowerCase().includes(interestFilter)
          );
        }
        if (dateFilter) {
          filteredEvents = filteredEvents.filter(ev => ev.date === dateFilter);
        }
        renderEvents(filteredEvents, "eventsList");
      });
    });  