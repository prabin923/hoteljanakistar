import { Link } from 'react-router-dom'

function EventsPage() {
    const venues = [
        {
            id: 'banquet',
            icon: 'fas fa-crown',
            title: 'Grand Banquet Hall',
            capacity: '300-500 Guests',
            image: 'https://images.unsplash.com/photo-1519167758481-83f29da8fd30?w=800',
            features: [
                'Elegant interior design with chandeliers',
                'State-of-the-art sound and lighting system',
                'Customizable stage and backdrop',
                'Professional catering services',
                'Dedicated event coordinator',
                'Ample parking space'
            ],
            description: 'Our Grand Banquet Hall is the epitome of elegance, designed to make your special occasions truly memorable. With its stunning interior, modern amenities, and flexible layout, it\'s the perfect choice for grand weddings, corporate galas, and large celebrations.'
        },
        {
            id: 'conference',
            icon: 'fas fa-briefcase',
            title: 'Conference Hall',
            capacity: '50-100 Attendees',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            features: [
                'Modern audio-visual equipment',
                'High-speed WiFi connectivity',
                'Projector and screen',
                'Whiteboard and presentation tools',
                'Comfortable seating arrangement',
                'Coffee/tea service available'
            ],
            description: 'Our Conference Hall provides the ideal setting for business meetings, seminars, and corporate events. Equipped with modern technology and comfortable amenities, it ensures productive and professional gatherings.'
        },
        {
            id: 'marriage',
            icon: 'fas fa-heart',
            title: 'Marriage Hall',
            capacity: '150-250 Guests',
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
            features: [
                'Traditional and modern decor options',
                'Separate bride and groom preparation rooms',
                'Customizable mandap/stage setup',
                'Full catering services',
                'Photography-friendly lighting',
                'Air-conditioned comfort'
            ],
            description: 'Celebrate your union in our beautifully designed Marriage Hall. With attention to traditional aesthetics and modern comfort, we create the perfect ambiance for your wedding ceremonies and receptions.'
        },
        {
            id: 'party',
            icon: 'fas fa-birthday-cake',
            title: 'Party Hall',
            capacity: '50-100 Guests',
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
            features: [
                'Vibrant and customizable decor',
                'DJ setup and sound system',
                'Dance floor space',
                'Balloon and theme decorations',
                'Birthday cake arrangements',
                'Kid-friendly environment'
            ],
            description: 'Make birthdays, anniversaries, and celebrations extra special in our Party Hall. With fun decorations, great music options, and a lively atmosphere, your party will be one to remember.'
        }
    ]

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Events & Venues</h1>
                    <p>Perfect spaces for your special occasions</p>
                </div>
            </section>

            {/* Venues Section */}
            <section className="venues-section">
                <div className="container">
                    <h2>Our Venues</h2>
                    <p className="section-subtitle">From intimate gatherings to grand celebrations, we have the perfect space for you</p>

                    <div className="venues-grid">
                        {venues.map((venue, index) => (
                            <div className="venue-card" id={venue.id} key={venue.id}>
                                <div className={`venue-content ${index % 2 === 1 ? 'reverse' : ''}`}>
                                    <div className="venue-image">
                                        <img src={venue.image} alt={venue.title} />
                                        <div className="venue-capacity">
                                            <i className="fas fa-users"></i> {venue.capacity}
                                        </div>
                                    </div>
                                    <div className="venue-info">
                                        <h3><i className={venue.icon}></i> {venue.title}</h3>
                                        <p className="venue-description">{venue.description}</p>
                                        <h4>Features:</h4>
                                        <ul className="venue-features">
                                            {venue.features.map((feature, i) => (
                                                <li key={i}><i className="fas fa-check"></i> {feature}</li>
                                            ))}
                                        </ul>
                                        <Link to="/contact" className="btn btn-primary">Inquire Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="event-services">
                <div className="container">
                    <h2>Our Event Services</h2>
                    <p className="section-subtitle">We take care of every detail to make your event perfect</p>
                    <div className="services-grid">
                        <div className="service-item">
                            <i className="fas fa-utensils"></i>
                            <h3>Catering</h3>
                            <p>Delicious menus customized to your preferences</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-palette"></i>
                            <h3>Decoration</h3>
                            <p>Beautiful themes and decor arrangements</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-music"></i>
                            <h3>Entertainment</h3>
                            <p>DJ, live music, and sound systems</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-camera"></i>
                            <h3>Photography</h3>
                            <p>Professional photo and video services</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Plan Your Event?</h2>
                    <p>Contact us today to discuss your requirements and get a customized quote</p>
                    <Link to="/contact" className="btn btn-large">Get in Touch</Link>
                </div>
            </section>
        </>
    )
}

export default EventsPage
