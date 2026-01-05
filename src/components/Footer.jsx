import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3><i className="fas fa-hotel"></i> Janaki Star Hotel</h3>
                        <p>Your home away from home in the sacred city of Janakpur.</p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/janakistarhotel/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/hotel_janakistar/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.tiktok.com/@_janaki_star_hotel_" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-tiktok"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/rooms">Rooms</Link></li>
                            <li><Link to="/events">Events & Venues</Link></li>
                            <li><Link to="/booking">Booking</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="contact-info">
                            <li><i className="fas fa-map-marker-alt"></i> Janakpur, Nepal</li>
                            <li><i className="fas fa-phone"></i> +977 985-4080119</li>
                            <li><i className="fas fa-envelope"></i> janakistarhoteljanakpur@gmail.com</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Janaki Star Hotel. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
