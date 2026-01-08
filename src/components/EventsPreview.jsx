import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function EventsPreview() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const events = [
        {
            image: 'https://images.unsplash.com/photo-1519167758481-83f29da8fd30?w=800',
            icon: 'fas fa-crown',
            title: 'Grand Banquet Hall',
            capacity: '300-500 Guests',
            description: 'Perfect for weddings, receptions, and large celebrations. Elegant decor with state-of-the-art facilities.',
            link: '/events#banquet'
        },
        {
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800',
            icon: 'fas fa-briefcase',
            title: 'Conference Hall',
            capacity: '50-100 Attendees',
            description: 'Modern conference space equipped with AV technology, perfect for corporate meetings and seminars.',
            link: '/events#conference'
        },
        {
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
            icon: 'fas fa-heart',
            title: 'Marriage Hall',
            capacity: '150-250 Guests',
            description: 'Intimate and elegant venue for traditional weddings, engagements, and special ceremonies.',
            link: '/events#marriage'
        },
        {
            image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
            icon: 'fas fa-birthday-cake',
            title: 'Party Hall',
            capacity: '50-100 Guests',
            description: 'Vibrant space ideal for birthday parties, anniversaries, and social celebrations with customizable decor.',
            link: '/events#party'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % events.length)
        }, 7000)
        return () => clearInterval(timer)
    }, [events.length])

    const changeSlide = (direction) => {
        setCurrentSlide(prev => (prev + direction + events.length) % events.length)
    }

    return (
        <section className="events-preview">
            <div className="container">
                <h2>Events & Venues</h2>
                <p className="section-subtitle">Perfect spaces for your special occasions</p>
                <div className="events-intro-text">
                    <p>Beyond comfortable accommodations, Janaki Star Hotel offers versatile event spaces perfect for weddings, conferences, meetings, birthday parties, and all your special occasions. Our professional team ensures every detail is handled with care.</p>
                </div>
                <div className="events-slider-wrapper">
                    <button type="button" className="events-slider-btn prev" onClick={() => changeSlide(-1)}>&#10094;</button>
                    <div className="events-slider">
                        {events.map((event, index) => (
                            <article key={index} className={`event-slide ${index === currentSlide ? 'active' : ''}`}>
                                <div className="event-card">
                                    <img src={event.image} alt={event.title} />
                                    <div className="event-info">
                                        <h3><i className={event.icon}></i> {event.title}</h3>
                                        <p className="capacity"><i className="fas fa-users"></i> {event.capacity}</p>
                                        <p>{event.description}</p>
                                        <Link to={event.link} className="btn btn-outline">View Details</Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <button type="button" className="events-slider-btn next" onClick={() => changeSlide(1)}>&#10095;</button>
                </div>
                <div className="events-slider-dots">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`event-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </div>
                <div className="cta-center">
                    <Link to="/events" className="btn btn-primary">Explore All Venues</Link>
                </div>
            </div>
        </section>
    )
}

export default EventsPreview
