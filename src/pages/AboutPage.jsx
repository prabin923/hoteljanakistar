import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                    <p>Learn more about Janaki Star Hotel</p>
                </div>
            </section>

            {/* About Story */}
            <section className="about-story">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p>Welcome to Janaki Star Hotel, your premier destination in the heart of Janakpur, Nepal. Established with a vision to provide exceptional hospitality, we have been serving travelers, pilgrims, and business visitors with warmth and dedication.</p>
                            <p>Located in the sacred city famous for the Janaki Temple, our hotel offers the perfect blend of modern comfort and traditional Nepali hospitality. Whether you're here for religious purposes, business meetings, or leisure travel, Janaki Star Hotel ensures a memorable stay.</p>
                            <p>Our commitment to excellence has made us one of the most trusted names in hospitality in the region. We take pride in our personalized service, clean accommodations, and attention to every guest's needs.</p>
                        </div>
                        <div className="story-image">
                            <img src="/images/hotelimg1.jpg" alt="Janaki Star Hotel" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="mission-section">
                <div className="container">
                    <h2>Our Mission & Values</h2>
                    <div className="mission-grid">
                        <div className="mission-card">
                            <i className="fas fa-heart"></i>
                            <h3>Hospitality</h3>
                            <p>We treat every guest like family, ensuring comfort and care throughout their stay.</p>
                        </div>
                        <div className="mission-card">
                            <i className="fas fa-star"></i>
                            <h3>Excellence</h3>
                            <p>We strive for excellence in every aspect of our service and facilities.</p>
                        </div>
                        <div className="mission-card">
                            <i className="fas fa-handshake"></i>
                            <h3>Trust</h3>
                            <p>Building lasting relationships with our guests through honest and reliable service.</p>
                        </div>
                        <div className="mission-card">
                            <i className="fas fa-leaf"></i>
                            <h3>Sustainability</h3>
                            <p>Committed to eco-friendly practices and responsible tourism.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="facilities-section">
                <div className="container">
                    <h2>Our Facilities</h2>
                    <p className="section-subtitle">Everything you need for a comfortable stay</p>
                    <div className="facilities-grid">
                        <div className="facility-item">
                            <i className="fas fa-utensils"></i>
                            <h3>Restaurant</h3>
                            <p>Multi-cuisine restaurant serving delicious local and international dishes</p>
                        </div>
                        <div className="facility-item">
                            <i className="fas fa-wifi"></i>
                            <h3>Free WiFi</h3>
                            <p>High-speed internet access throughout the hotel</p>
                        </div>
                        <div className="facility-item">
                            <i className="fas fa-car"></i>
                            <h3>Free Parking</h3>
                            <p>Secure parking facilities for all guests</p>
                        </div>
                        <div className="facility-item">
                            <i className="fas fa-concierge-bell"></i>
                            <h3>24/7 Service</h3>
                            <p>Round-the-clock room service and front desk</p>
                        </div>
                        <div className="facility-item">
                            <i className="fas fa-users"></i>
                            <h3>Event Venues</h3>
                            <p>Multiple halls for weddings, conferences, and celebrations</p>
                        </div>
                        <div className="facility-item">
                            <i className="fas fa-shield-alt"></i>
                            <h3>Security</h3>
                            <p>24-hour security and CCTV surveillance</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="location-section">
                <div className="container">
                    <h2>Our Location</h2>
                    <div className="location-content">
                        <div className="location-info">
                            <p>Janaki Star Hotel is conveniently located in Janakpur, Nepal, providing easy access to the famous Janaki Temple and other local attractions.</p>
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i> Janakpur, Dhanusha District, Province No. 2, Nepal</li>
                                <li><i className="fas fa-plane"></i> 5 minutes from Janakpur Airport</li>
                                <li><i className="fas fa-gopuram"></i> 10 minutes from Janaki Temple</li>
                                <li><i className="fas fa-train"></i> Near Janakpur Railway Station</li>
                            </ul>
                        </div>
                        <div className="location-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.397299447524!2d85.9171421!3d26.7327909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec41fa422c6b1b%3A0x53f25973805a44a0!2sJanaki%20Star%20Hotel!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Janaki Star Hotel Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2>Experience Our Hospitality</h2>
                    <p>Book your stay with us and feel the warmth of Nepali hospitality</p>
                    <Link to="/booking" className="btn btn-large">Book Now</Link>
                </div>
            </section>
        </>
    )
}

export default AboutPage
