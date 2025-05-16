:root {
    --peach: #FFD8B1;
    --dark-peach: #E8B796;
    --gold: #D4AF37;
    --dark-gray: #333;
    --light-gray: #f5f5f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    color: var(--dark-gray);
    line-height: 1.6;
    background-color: #fff9f5;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
}

.hero {
    position: relative;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 50px;
}

.hero-image {
    width: 100%;
    height: 100%;
    background-color: var(--peach);
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.placeholder-text {
    font-family: 'Great Vibes', cursive;
    font-size: 4rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-text {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 30px;
    border-radius: 10px;
    max-width: 600px;
}

.hero-text h1 {
    font-size: 3.5rem;
    margin-bottom: 10px;
    color: var(--dark-gray);
}

.wedding-date {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.countdown {
    margin-top: 20px;
}

#countdown-timer {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
}

#countdown-timer div {
    background-color: var(--peach);
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
}

.details {
    text-align: center;
    margin: 50px 0;
}

.details h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
}

.detail-card {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.detail-card h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: var(--gold);
}

.color-scheme {
    margin-top: 30px;
}

.color-scheme p {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.peach {
    color: #e67e7e;
    font-weight: bold;
}

.color-box {
    width: 100px;
    height: 100px;
    margin: 10px auto;
    border-radius: 50%;
    background-color: var(--peach);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

/* Map Section Styles */
.map-section {
    margin: 50px 0;
    text-align: center;
}

.map-section h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

#map {
    height: 400px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.leaflet-routing-container {
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    max-width: 90%;
    margin: 0 auto;
}

.leaflet-control-attribution {
    font-size: 11px;
    background: rgba(255,255,255,0.7);
    padding: 2px 5px;
    border-radius: 3px;
}

/* Directions Button */
#directions-btn {
    margin-top: 15px;
    background-color: var(--gold);
    color: white;
}

#directions-btn:hover {
    background-color: var(--dark-peach);
}

.route-instructions {
    margin-top: 15px;
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: left;
}

.rsvp {
    background-color: white;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin: 50px 0;
    text-align: center;
}

.rsvp h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.contact-info {
    margin: 20px 0;
}

.contact-info a {
    color: var(--dark-gray);
    text-decoration: none;
}

.contact-info a:hover {
    color: var(--gold);
}

#rsvp-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

input, select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
}

.btn {
    background-color: var(--peach);
    color: var(--dark-gray);
    border: none;
    padding: 12px 30px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn:hover {
    background-color: var(--dark-peach);
    transform: translateY(-2px);
}

.quote {
    text-align: center;
    margin: 50px 0;
    padding: 30px;
    background-color: var(--light-gray);
    border-radius: 10px;
}

blockquote {
    font-family: 'Great Vibes', cursive;
    font-size: 2rem;
    color: var(--dark-gray);
    margin-bottom: 20px;
}

.hashtag {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--gold);
}

@media (max-width: 768px) {
    .hero-text h1 {
        font-size: 2.5rem;
    }
    
    .hero-text {
        padding: 20px;
    }
    
    .detail-card {
        padding: 20px;
    }
    
    .rsvp {
        padding: 30px;
    }
    
    blockquote {
        font-size: 1.5rem;
    }
    
    #map {
        height: 300px;
    }
    
    .leaflet-routing-container {
        width: 95%;
        font-size: 0.9rem;
    }
}
