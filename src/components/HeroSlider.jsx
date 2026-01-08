import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            image: '/images/hotelimg1.jpg',
            alt: 'Hotel Exterior',
            title: 'Welcome to Janaki Star Hotel',
            subtitle: 'Experience Comfort & Hospitality in the Heart of Janakpur',
            buttonText: 'Book Now',
            buttonLink: '/booking'
        },
        {
            image: '/images/dinning1.jpg',
            alt: 'Hotel Room',
            title: 'Luxury Rooms & Suites',
            subtitle: 'Modern Amenities with Traditional Hospitality',
            buttonText: 'View Rooms',
            buttonLink: '/rooms'
        },
        {
            image: '/images/suite1.jpg',
            alt: 'Hotel Interior',
            title: 'Your Home Away From Home',
            subtitle: 'Affordable Rates Starting from Rs. 3,500',
            buttonText: 'Book Your Stay',
            buttonLink: '/booking'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const changeSlide = (direction) => {
        setCurrentSlide(prev => {
            const newIndex = prev + direction
            if (newIndex < 0) return slides.length - 1
            if (newIndex >= slides.length) return 0
            return newIndex
        })
    }

    return (
        <section className="hero">
            <div className="slider">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        <img src={slide.image} alt={slide.alt} />
                        <div className="slide-content">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <Link to={slide.buttonLink} className="btn btn-primary">{slide.buttonText}</Link>
                        </div>
                    </div>
                ))}
            </div>
            <button className="slider-btn prev" onClick={() => changeSlide(-1)}>&#10094;</button>
            <button className="slider-btn next" onClick={() => changeSlide(1)}>&#10095;</button>
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    )
}

export default HeroSlider
