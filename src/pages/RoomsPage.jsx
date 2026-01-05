import { useState } from 'react'
import { Link } from 'react-router-dom'

function RoomsPage() {
    const [deluxeMainImg, setDeluxeMainImg] = useState('/images/deluxe1.jpg')
    const [suiteMainImg, setSuiteMainImg] = useState('/images/suite1.jpg')

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our Rooms & Suites</h1>
                    <p>Choose the perfect accommodation for your stay</p>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="rooms-section">
                <div className="container">
                    {/* Deluxe Room */}
                    <div className="room-detail" id="deluxe">
                        <div className="room-detail-content reverse">
                            <div className="room-detail-info">
                                <h2>Deluxe Room</h2>
                                <p className="room-price">Rs. 3,500 <span>per night</span></p>
                                <p className="room-description">Experience enhanced comfort in our Deluxe Rooms, featuring modern amenities and stylish decor. Perfect for travelers seeking a blend of luxury and value.</p>

                                <h3>Room Features:</h3>
                                <ul className="feature-list">
                                    <li><i className="fas fa-check"></i> Queen Size Bed</li>
                                    <li><i className="fas fa-check"></i> Premium Air Conditioning</li>
                                    <li><i className="fas fa-check"></i> Smart TV with Streaming</li>
                                    <li><i className="fas fa-check"></i> High-Speed WiFi</li>
                                    <li><i className="fas fa-check"></i> Premium Bathroom Amenities</li>
                                    <li><i className="fas fa-check"></i> Work Desk & Chair</li>
                                    <li><i className="fas fa-check"></i> Mini Refrigerator</li>
                                    <li><i className="fas fa-check"></i> Coffee/Tea Maker</li>
                                    <li><i className="fas fa-check"></i> Complimentary Breakfast</li>
                                    <li><i className="fas fa-check"></i> Room Service Available</li>
                                </ul>

                                <div className="room-specs">
                                    <div className="spec">
                                        <i className="fas fa-users"></i>
                                        <span>Max: 2-3 Guests</span>
                                    </div>
                                    <div className="spec">
                                        <i className="fas fa-ruler-combined"></i>
                                        <span>250 sq ft</span>
                                    </div>
                                    <div className="spec">
                                        <i className="fas fa-bed"></i>
                                        <span>1 Queen Bed</span>
                                    </div>
                                </div>

                                <Link to="/booking?room=deluxe" className="btn btn-primary">Book This Room</Link>
                            </div>
                            <div className="room-detail-gallery">
                                <div className="main-image">
                                    <img src={deluxeMainImg} alt="Deluxe Room" id="deluxeMainImg" />
                                </div>
                                <div className="thumbnail-gallery">
                                    <button type="button" className="thumbnail-btn" onClick={() => setDeluxeMainImg('/images/deluxe1.jpg')}>
                                        <img src="/images/deluxe1.jpg" alt="Deluxe Room View 1" />
                                    </button>
                                    <button type="button" className="thumbnail-btn" onClick={() => setDeluxeMainImg('/images/deluxe2.jpg')}>
                                        <img src="/images/deluxe2.jpg" alt="Deluxe Room View 2" />
                                    </button>
                                    <button type="button" className="thumbnail-btn" onClick={() => setDeluxeMainImg('/images/deluxe3.jpg')}>
                                        <img src="/images/deluxe3.jpg" alt="Deluxe Room View 3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Suite Room */}
                    <div className="room-detail" id="suite">
                        <div className="room-detail-content">
                            <div className="room-detail-info">
                                <h2>Suite Room</h2>
                                <p className="room-price">Rs. 4,500 <span>per night</span></p>
                                <p className="room-description">Indulge in our luxurious Suites, offering spacious living areas and premium amenities. Ideal for extended stays or those seeking the ultimate comfort and privacy.</p>

                                <h3>Room Features:</h3>
                                <ul className="feature-list">
                                    <li><i className="fas fa-check"></i> King Size Bed</li>
                                    <li><i className="fas fa-check"></i> Separate Living Area</li>
                                    <li><i className="fas fa-check"></i> Premium Air Conditioning</li>
                                    <li><i className="fas fa-check"></i> Two Smart TVs</li>
                                    <li><i className="fas fa-check"></i> Ultra-Fast WiFi</li>
                                    <li><i className="fas fa-check"></i> Luxury Bathroom with Bathtub</li>
                                    <li><i className="fas fa-check"></i> Executive Work Desk</li>
                                    <li><i className="fas fa-check"></i> Mini Bar & Refrigerator</li>
                                    <li><i className="fas fa-check"></i> Coffee/Tea Making Facilities</li>
                                    <li><i className="fas fa-check"></i> Complimentary Breakfast & Dinner</li>
                                    <li><i className="fas fa-check"></i> Butler Service</li>
                                    <li><i className="fas fa-check"></i> City View Balcony</li>
                                </ul>

                                <div className="room-specs">
                                    <div className="spec">
                                        <i className="fas fa-users"></i>
                                        <span>Max: 4 Guests</span>
                                    </div>
                                    <div className="spec">
                                        <i className="fas fa-ruler-combined"></i>
                                        <span>450 sq ft</span>
                                    </div>
                                    <div className="spec">
                                        <i className="fas fa-bed"></i>
                                        <span>1 King Bed</span>
                                    </div>
                                </div>

                                <Link to="/booking?room=suite" className="btn btn-primary">Book This Room</Link>
                            </div>
                            <div className="room-detail-gallery">
                                <div className="main-image">
                                    <img src={suiteMainImg} alt="Suite Room" id="suiteMainImg" />
                                </div>
                                <div className="thumbnail-gallery">
                                    <button type="button" className="thumbnail-btn" onClick={() => setSuiteMainImg('/images/suite1.jpg')}>
                                        <img src="/images/suite1.jpg" alt="Suite View 1" />
                                    </button>
                                    <button type="button" className="thumbnail-btn" onClick={() => setSuiteMainImg('/images/suite2.jpg')}>
                                        <img src="/images/suite2.jpg" alt="Suite View 2" />
                                    </button>
                                    <button type="button" className="thumbnail-btn" onClick={() => setSuiteMainImg('/images/suite3.jpg')}>
                                        <img src="/images/suite3.jpg" alt="Suite View 3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="container">
                    <h2>Room Gallery</h2>
                    <p className="section-subtitle">Explore our beautiful rooms and facilities</p>
                    <div className="gallery-grid">
                        <div className="gallery-item">
                            <img src="/images/deluxe4.jpg" alt="Deluxe Room Lounge" />
                            <div className="gallery-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="/images/conference1.jpg" alt="Conference Hall Setup" />
                            <div className="gallery-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="/images/dinning1.jpg" alt="Dining Area" />
                            <div className="gallery-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="/images/hall1.jpg" alt="Celebration Hall" />
                            <div className="gallery-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="/images/hallway1.jpg" alt="Hotel Hallway" />
                            <div className="gallery-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div className="gallery-item">
                            <img src="/images/hotelimg1.jpg" alt="Hotel Exterior" />
                            <div className="gallery-overlay">
                                <i className="fas fa-search-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Book Your Room?</h2>
                    <p>Reserve your preferred room now and enjoy our hospitality</p>
                    <Link to="/booking" className="btn btn-large">Book Now</Link>
                </div>
            </section>
        </>
    )
}

export default RoomsPage
