import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>About Janaki Star Hotel</h1>
                    <p>Experience the finest hospitality in Janakpur</p>
                </div>
            </section>

            <section className="about-content-section">
                <div className="container">
                    <div className="about-intro">
                        <div className="about-text">
                            <h2>Welcome to Janaki Star Hotel</h2>
                            <p>Nestled in the heart of the sacred city of Janakpur, Janaki Star Hotel has been serving travelers with warmth, comfort, and traditional Nepali hospitality since our establishment. We take pride in being one of the premier accommodation providers in this historic city, known for its religious significance and cultural heritage.</p>
                            <p>Our hotel combines modern amenities with traditional charm, offering our guests a unique experience that reflects the spirit of Janakpur. Whether you're visiting for pilgrimage, business, or leisure, Janaki Star Hotel provides the perfect base for your stay.</p>
                        </div>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" alt="Hotel Building" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-section">
                <div className="container">
                    <div className="mission-vision">
                        <div className="mission-card">
                            <i className="fas fa-bullseye"></i>
                            <h3>Our Mission</h3>
                            <p>To provide exceptional hospitality services that exceed our guests' expectations while showcasing the rich cultural heritage of Janakpur. We strive to create memorable experiences through personalized service, comfortable accommodations, and genuine care for every guest.</p>
                        </div>
                        <div className="mission-card">
                            <i className="fas fa-eye"></i>
                            <h3>Our Vision</h3>
                            <p>To be recognized as the leading hotel in Janakpur, known for outstanding service, modern facilities, and authentic Nepali hospitality. We aim to contribute to the growth of tourism in Janakpur while preserving and promoting local culture and traditions.</p>
                        </div>
                        <div className="mission-card">
                            <i className="fas fa-heart"></i>
                            <h3>Our Values</h3>
                            <p>We believe in integrity, excellence, and respect. Our team is committed to treating every guest as family, maintaining the highest standards of cleanliness and service, and supporting our local community through sustainable practices.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container">
                    <h2>Our Services & Amenities</h2>
                    <div className="services-grid">
                        <div className="service-item">
                            <i className="fas fa-wifi"></i>
                            <h4>Free WiFi</h4>
                            <p>High-speed internet throughout the hotel</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-parking"></i>
                            <h4>Free Parking</h4>
                            <p>Secure parking facility for guests</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-concierge-bell"></i>
                            <h4>24/7 Room Service</h4>
                            <p>Round-the-clock service at your convenience</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-utensils"></i>
                            <h4>Restaurant</h4>
                            <p>Delicious local and international cuisine</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-shield-alt"></i>
                            <h4>24-Hour Security</h4>
                            <p>Your safety is our priority</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-broom"></i>
                            <h4>Daily Housekeeping</h4>
                            <p>Impeccable cleanliness maintained daily</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-suitcase"></i>
                            <h4>Luggage Storage</h4>
                            <p>Secure storage for your belongings</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-taxi"></i>
                            <h4>Travel Assistance</h4>
                            <p>Tour bookings and transport arrangements</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="history-section">
                <div className="container">
                    <div className="history-content">
                        <div className="history-image">
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" alt="Hotel History" />
                        </div>
                        <div className="history-text">
                            <h2>Our Story</h2>
                            <p>Janaki Star Hotel began its journey with a simple vision: to provide comfortable, affordable accommodations to the thousands of pilgrims and tourists visiting the sacred city of Janakpur each year.</p>
                            <p>Over the years, we have grown from a modest guesthouse to a full-service hotel, but our commitment to genuine hospitality has remained unchanged. We understand that our guests are often far from home, and we strive to make their stay as comfortable and welcoming as possible.</p>
                            <p>Our strategic location in Janakpur provides easy access to major religious sites, including the famous Janaki Mandir, while our modern facilities ensure that guests enjoy all the comforts they expect from a quality hotel.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-contact-section">
                <div className="container">
                    <h2>Get In Touch</h2>
                    <div className="contact-grid">
                        <div className="contact-card">
                            <i className="fas fa-map-marker-alt"></i>
                            <h4>Address</h4>
                            <p>Janakpur, Dhanusha District<br />Province No. 2, Nepal</p>
                        </div>
                        <div className="contact-card">
                            <i className="fas fa-phone"></i>
                            <h4>Phone</h4>
                            <p>+977 985-4080119</p>
                        </div>
                        <div className="contact-card">
                            <i className="fas fa-envelope"></i>
                            <h4>Email</h4>
                            <p>janakistarhoteljanakpur@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container">
                    <h2>Our Location</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.397299447524!2d85.9171421!3d26.7327909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec41fa422c6b1b%3A0x53f25973805a44a0!2sJanaki%20Star%20Hotel!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                            width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="Janaki Star Hotel Location">
                        </iframe>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Experience Janaki Star?</h2>
                    <p>Book your stay now and enjoy our premium hospitality</p>
                    <Link to="/booking" className="btn btn-large">Book Your Stay</Link>
                </div>
            </section>
        </>
    )
}

export default AboutPage
