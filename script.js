// Couple's Photo - Will show placeholder if image fails to load
document.querySelector('.placeholder-text').style.display = 'none';

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('May 31, 2025 12:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = `
        <div>${days} <span>Days</span></div>
        <div>${hours} <span>Hours</span></div>
        <div>${minutes} <span>Minutes</span></div>
        <div>${seconds} <span>Seconds</span></div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Initialize Map
const map = L.map('map').setView([7.3775, 3.9470], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Add Wedding Venue Marker
const venueMarker = L.marker([7.3775, 3.9470]).addTo(map)
    .bindPopup(`
        <strong>Pearl Gate Event Center</strong><br>
        Olunbokun Bus Stop, Olodo<br>
        Ibadan, Nigeria
    `);

// Directions Functionality
document.getElementById('directions-btn').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            
            // Clear previous routing if any
            if (window.routeControl) {
                map.removeControl(window.routeControl);
            }
            
            // Add routing control
            window.routeControl = L.Routing.control({
                waypoints: [
                    L.latLng(userLat, userLng),
                    L.latLng(7.3775, 3.9470)
                ],
                routeWhileDragging: true,
                showAlternatives: true,
                addWaypoints: false,
                draggableWaypoints: false,
                fitSelectedRoutes: true,
                show: true,
                collapsible: true,
                lineOptions: {
                    styles: [{color: '#e67e7e', opacity: 0.7, weight: 5}]
                },
                createMarker: function() { return null; } // Disable default markers
            }).addTo(map);
            
            // Open the instructions panel
            document.querySelector('.leaflet-routing-container').style.display = 'block';
            
        }, function(error) {
            alert('Could not get your location. Please enable location services or use the link below.');
            window.open('https://www.openstreetmap.org/directions?engine=osrm_car&route=7.3775,3.9470#map=15/7.3775/3.9470');
        }, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        alert("Geolocation is not supported by your browser.");
        window.open('https://www.openstreetmap.org/directions?engine=osrm_car&route=7.3775,3.9470#map=15/7.3775/3.9470');
    }
});

// RSVP Form
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    
    alert(`Thank you, ${name}! Your RSVP has been ${attendance === 'yes' ? 'received. We look forward to seeing you!' : 'noted. We\'re sorry you can\'t make it.'}`);
    
    this.reset();
});
