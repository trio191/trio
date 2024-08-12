document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([24.8607, 67.0011], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    var locations = [
        {
            name: 'KFC Store',
            coords: [31.5204, 74.3587], // Coordinates for Lahore
            details: 'Lahore\n05:00 AM - 12:00 AM'
        },
        {
            name: 'Shahbaz',
            coords: [24.8607, 67.0011], // Coordinates for Karachi
            details: '36, D.H.A Phase 6, Karachi City, Sindh 75500, Pakistan\n12:00 PM - 03:00 AM'
        }
    ];

    locations.forEach(function(location) {
        L.marker(location.coords)
            .addTo(map)
            .bindPopup(`<b>${location.name}</b><br>${location.details}`);
    });
});
