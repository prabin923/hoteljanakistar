import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

function EventsPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const form = useRef()

    const venues = [
        {
            id: 'banquet',
            icon: 'fas fa-crown',
            title: 'Grand Banquet Hall',
            capacity: '300-500 Guests',
            size: '5,000 sq ft',
            type: 'Premium Venue',
            price: 'Rs. 3,500',
            image: 'https://images.unsplash.com/photo-1519167758481-83f29da8fd30?w=800',
            features: [
                'Professional Sound & Stage Setup',
                'Customizable Lighting & Decorations',
                'Dedicated Bridal Suite',
                'Dance Floor Area',
                'Full Catering Services',
                'Audio/Visual Equipment',
                'Free WiFi',
                'Ample Parking Space',
                'Event Coordinator Support',
                'Generator Backup'
            ],
            description: 'Our Grand Banquet Hall is perfect for weddings and large celebrations. Experience enhanced elegance with state-of-the-art facilities and customizable decor.'
        },
        {
            id: 'marriage',
            icon: 'fas fa-heart',
            title: 'Marriage Hall',
            capacity: '150-250 Guests',
            size: '3,000 sq ft',
            type: 'Wedding Venue',
            price: 'Rs. 2,500',
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
            features: [
                'Mandap/Stage Decoration',
                'Professional Sound System',
                'Premium Lighting',
                'Comfortable Seating',
                'Separate Preparation Rooms',
                'Photo/Video Friendly Spaces',
                'Traditional Setup Options',
                'Full Catering Services',
                'Decoration Consultation',
                'Valet Parking Available'
            ],
            description: 'Intimate and elegant wedding venue perfect for traditional ceremonies. Combining classic charm with modern amenities for your special day.'
        },
        {
            id: 'conference',
            icon: 'fas fa-briefcase',
            title: 'Conference Hall',
            capacity: '50-100 Attendees',
            size: '1,500 sq ft',
            type: 'Business Ready',
            price: 'Rs. 1,500',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            features: [
                'Projector & Large Screen',
                'Video Conferencing',
                'Whiteboard & Flip Charts',
                'Professional Sound System',
                'Podium with Microphone',
                'High-Speed WiFi',
                'Air Conditioning',
                'Coffee/Tea Service',
                'Business Lunch Options',
                'Registration Desk',
                'Technical Support',
                'Flexible Seating Setup'
            ],
            description: 'Professional conference space equipped with cutting-edge technology. Ideal for corporate meetings, seminars, and business events in Janakpur.'
        },
        {
            id: 'meeting',
            icon: 'fas fa-handshake',
            title: 'Private Meeting Room',
            capacity: '10-20 People',
            size: '500 sq ft',
            type: 'Soundproof',
            price: 'Rs. 500',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
            features: [
                'LED TV with HDMI',
                'Conference Phone',
                'Whiteboard',
                'High-Speed WiFi',
                'Executive Chairs',
                'Air Conditioning',
                'Complimentary Tea/Coffee',
                'Natural Lighting',
                'Stationery Supplies',
                'Private Entrance'
            ],
            description: 'Exclusive space for small gatherings and business meetings. Intimate and professional environment with essential business amenities.'
        },
        {
            id: 'party',
            icon: 'fas fa-birthday-cake',
            title: 'Party Hall',
            capacity: '50-100 Guests',
            size: '1,200 sq ft',
            type: 'Party Ready',
            price: 'Rs. 2,000',
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
            features: [
                'Colorful Decorations',
                'Music & DJ Setup',
                'Dance Floor',
                'Themed Decorations',
                'Buffet Service Options',
                'Kids Play Area Access',
                'Photo Booth Area',
                'Custom Menu Options',
                'Air Conditioning',
                'Party Planning Assistance'
            ],
            description: 'Fun and festive celebration space perfect for birthday parties and special occasions. Versatile venue with flexible arrangements and vibrant ambiance.'
        }
    ]

    const changeSlide = (n) => {
        setCurrentSlide(prev => (prev + n + venues.length) % venues.length)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const formData = new FormData(form.current)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch('http://localhost:3001/api/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setShowModal(true)
                form.current.reset()
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit inquiry');
            }
        } catch (error) {
            console.error('Inquiry error:', error)
            alert('Inquiry Error: ' + error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Events & Venues</h1>
                    <p>Perfect spaces for your special occasions</p>
                </div>
            </section>

            <section className="events-intro">
                <div className="container">
                    <div className="intro-content">
                        <h2>Host Your Perfect Event</h2>
                        <p>Janaki Star Hotel offers versatile event spaces perfect for weddings, conferences, meetings, engagements, birthday parties, and all your special occasions. Our professional team ensures every detail is handled with care, making your event truly memorable.</p>
                        <p>With modern facilities, customizable setups, and dedicated event coordinators, we provide the ideal setting for events of all sizes in the heart of Janakpur.</p>
                    </div>
                </div>
            </section>

            <section className="venues-section">
                <div className="container">
                    <h2>Our Event Spaces</h2>
                    <p className="section-subtitle">Choose the perfect venue for your special occasion</p>

                    <div className="venue-slider-wrapper">
                        <button type="button" className="venue-slider-btn prev" onClick={() => changeSlide(-1)}>&#10094;</button>

                        <div className="venue-slider">
                            {venues.map((venue, index) => (
                                <div key={venue.id} className={`venue-slide ${index === currentSlide ? 'active' : ''}`}>
                                    <div className="venue-slide-content">
                                        <div className="venue-slide-image">
                                            <img src={venue.image} alt={venue.title} />
                                        </div>
                                        <div className="venue-slide-info">
                                            <h3><i className={venue.icon}></i> {venue.title}</h3>
                                            <p className="venue-price">{venue.price} <span>per event</span></p>
                                            <p className="venue-description">{venue.description}</p>

                                            <h4>Venue Features:</h4>
                                            <div className="venue-features-grid">
                                                <div className="feature-col">
                                                    {venue.features.slice(0, 5).map((f, i) => (
                                                        <p key={i}><i className="fas fa-check"></i> {f}</p>
                                                    ))}
                                                </div>
                                                <div className="feature-col">
                                                    {venue.features.slice(5).map((f, i) => (
                                                        <p key={i}><i className="fas fa-check"></i> {f}</p>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="venue-specs">
                                                <div className="spec"><i className="fas fa-users"></i> {venue.capacity}</div>
                                                <div className="spec"><i className="fas fa-ruler-combined"></i> {venue.size}</div>
                                                <div className="spec"><i className={venue.icon}></i> {venue.type}</div>
                                            </div>

                                            <div className="venue-actions">
                                                <a href="#event-inquiry" className="btn btn-primary">Book This Venue</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button type="button" className="venue-slider-btn next" onClick={() => changeSlide(1)}>&#10095;</button>
                    </div>

                    <div className="venue-slider-dots">
                        {venues.map((_, index) => (
                            <span
                                key={index}
                                className={`venue-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="catering-section">
                <div className="container">
                    <h2>Catering & Services</h2>
                    <p className="section-subtitle">Complete event solutions under one roof</p>
                    <div className="services-grid">
                        <div className="service-card">
                            <i className="fas fa-utensils"></i>
                            <h3>Custom Catering</h3>
                            <p>Traditional Nepali cuisine, Indian delicacies, Continental dishes, and customized menus to suit your preferences and dietary requirements.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-glass-cheers"></i>
                            <h3>Beverage Services</h3>
                            <p>Comprehensive beverage packages including welcome drinks, soft drinks, juices, tea/coffee stations, and bar services.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-paint-brush"></i>
                            <h3>Decoration</h3>
                            <p>Professional decoration team to transform venues according to your theme, from traditional to contemporary styles.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-camera"></i>
                            <h3>Photography</h3>
                            <p>Professional photography and videography services to capture your special moments forever.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-music"></i>
                            <h3>Entertainment</h3>
                            <p>DJ services, live music arrangements, sound systems, and entertainment coordination for your event.</p>
                        </div>
                        <div className="service-card">
                            <i className="fas fa-user-tie"></i>
                            <h3>Coordination</h3>
                            <p>Dedicated event managers to handle all aspects of your event, ensuring smooth execution from start to finish.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="event-inquiry-section" id="event-inquiry">
                <div className="container">
                    <h2>Request Event Booking</h2>
                    <p className="section-subtitle">Fill out the form below and our event team will contact you within 24 hours</p>

                    <div className="inquiry-container">
                        <form id="eventInquiryForm" ref={form} className="event-inquiry-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="eventName"><i className="fas fa-user"></i> Your Name *</label>
                                    <input type="text" id="eventName" name="from_name" required placeholder="Enter your full name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="eventEmail"><i className="fas fa-envelope"></i> Email Address *</label>
                                    <input type="email" id="eventEmail" name="reply_to" required placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="eventPhone"><i className="fas fa-phone"></i> Phone Number *</label>
                                    <input type="tel" id="eventPhone" name="phone" required placeholder="+977 123-456789" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="venueType"><i className="fas fa-building"></i> Venue Type *</label>
                                    <select id="venueType" name="venue_type" required>
                                        <option value="">Select Venue</option>
                                        {venues.map(v => <option key={v.id} value={v.id}>{v.title}</option>)}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="eventType"><i className="fas fa-calendar-alt"></i> Event Type *</label>
                                    <select id="eventType" name="event_type" required>
                                        <option value="">Select Event Type</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="engagement">Engagement Ceremony</option>
                                        <option value="birthday">Birthday Party</option>
                                        <option value="conference">Corporate Conference</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="eventDate"><i className="fas fa-calendar-check"></i> Preferred Date *</label>
                                    <input type="date" id="eventDate" name="date" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="eventDetails"><i className="fas fa-comment-dots"></i> Additional Details</label>
                                <textarea id="eventDetails" name="message" rows="5" placeholder="Please share any specific requirements..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-large" disabled={isSubmitting}>
                                <i className="fas fa-paper-plane"></i> {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                            </button>
                        </form>

                        <div className="inquiry-info">
                            <div className="info-box">
                                <h3><i className="fas fa-info-circle"></i> Booking Information</h3>
                                <ul>
                                    <li><i className="fas fa-check"></i> Advance booking required</li>
                                    <li><i className="fas fa-check"></i> Site visit available</li>
                                    <li><i className="fas fa-check"></i> Custom packages available</li>
                                    <li><i className="fas fa-check"></i> Free consultation</li>
                                </ul>
                            </div>
                            <div className="info-box">
                                <h3><i className="fas fa-headset"></i> Immediate Help?</h3>
                                <p><i className="fas fa-phone"></i> +977 985-4080119</p>
                                <p><i className="fas fa-envelope"></i> janakistarhoteljanakpur@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showModal && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <div className="modal-icon"><i className="fas fa-check-circle"></i></div>
                        <h2>Inquiry Submitted!</h2>
                        <p>Thank you! Our event team will contact you within 24 hours.</p>
                        <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default EventsPage
