import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import EventsPreview from '../components/EventsPreview'

function HomePage() {
    return (
        <>
            <HeroSlider />

            {/* About Section */}
            <section className="about-preview">
                <div className="container">
                    <h2>About Janaki Star Hotel</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>Welcome to Janaki Star Hotel, your premier destination in the sacred city of Janakpur. Located in the heart of this historic city, we offer comfortable accommodations with modern amenities while maintaining the warmth of traditional Nepali hospitality.</p>
                            <p>Our hotel features well-appointed rooms ranging from cozy Standard rooms to luxurious Suites, all designed to provide you with the utmost comfort during your stay. Whether you're visiting for pilgrimage, business, or leisure, Janaki Star Hotel is your perfect home away from home.</p>
                            <h3>Key Amenities:</h3>
                            <ul className="amenities-list">
                                <li><i className="fas fa-wifi"></i> Free High-Speed WiFi</li>
                                <li><i className="fas fa-car"></i> Free Parking</li>
                                <li><i className="fas fa-concierge-bell"></i> 24/7 Room Service</li>
                                <li><i className="fas fa-utensils"></i> Restaurant & Dining</li>
                                <li><i className="fas fa-shield-alt"></i> 24-Hour Security</li>
                                <li><i className="fas fa-broom"></i> Daily Housekeeping</li>
                            </ul>
                            <Link to="/about" className="btn btn-secondary">Learn More</Link>
                        </div>
                        <div className="about-image">
                            <img src="/images/janaki1.jpg" alt="Hotel Lobby" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Rooms */}
            <section className="featured-rooms">
                <div className="container">
                    <h2>Our Rooms</h2>
                    <p className="section-subtitle">Choose from our comfortable and affordable accommodations</p>
                    <div className="rooms-grid">
                        <div className="room-card featured">
                            <div className="badge">Popular</div>
                            <img src="/images/deluxe1.jpg" alt="Deluxe Room" />
                            <div className="room-info">
                                <h3>Deluxe Room</h3>
                                <p className="price">Rs. 3,500 <span>/ night</span></p>
                                <ul className="room-features">
                                    <li><i className="fas fa-bed"></i> Queen Size Bed</li>
                                    <li><i className="fas fa-wifi"></i> Free WiFi</li>
                                    <li><i className="fas fa-tv"></i> Smart TV</li>
                                    <li><i className="fas fa-bath"></i> Premium Bathroom</li>
                                </ul>
                                <Link to="/rooms#deluxe" className="btn btn-outline">View Details</Link>
                            </div>
                        </div>
                        <div className="room-card">
                            <img src="/images/suite1.jpg" alt="Suite" />
                            <div className="room-info">
                                <h3>Suite Room</h3>
                                <p className="price">Rs. 4,500 <span>/ night</span></p>
                                <ul className="room-features">
                                    <li><i className="fas fa-bed"></i> King Size Bed</li>
                                    <li><i className="fas fa-couch"></i> Living Area</li>
                                    <li><i className="fas fa-wifi"></i> Premium WiFi</li>
                                    <li><i className="fas fa-concierge-bell"></i> Butler Service</li>
                                </ul>
                                <Link to="/rooms#suite" className="btn btn-outline">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="cta-center">
                        <Link to="/rooms" className="btn btn-primary">View All Rooms</Link>
                    </div>
                </div>
            </section>

            {/* Events Preview */}
            <EventsPreview />

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Book Your Stay?</h2>
                    <p>Experience the best hospitality in Janakpur at affordable rates</p>
                    <Link to="/booking" className="btn btn-large">Book a Room Now</Link>
                </div>
            </section>
        </>
    )
}

export default HomePage
