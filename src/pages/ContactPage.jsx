import { useState } from 'react'

function ContactPage() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_subject: '',
        user_message: ''
    })
    const [showModal, setShowModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [activeQuestion, setActiveQuestion] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowModal(true)
                setFormData({ user_name: '', user_email: '', user_phone: '', user_subject: '', user_message: '' })
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Email error:', error)
            alert('Contact Error: ' + error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    const faqs = [
        {
            question: 'What is the check-in and check-out time?',
            answer: 'Check-in time is 2:00 PM and check-out time is 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges.'
        },
        {
            question: 'Do you offer airport transfer services?',
            answer: 'Yes, we can arrange airport transfers for our guests. Please contact us in advance to make arrangements.'
        },
        {
            question: 'Is parking available at the hotel?',
            answer: 'Yes, we offer free parking facilities for all our guests. The parking area is secure and monitored 24/7.'
        },
        {
            question: 'What is your cancellation policy?',
            answer: 'We offer free cancellation up to 24 hours before your check-in date. Cancellations made within 24 hours of check-in may be subject to a one-night charge.'
        },
        {
            question: 'Do you have a restaurant on-site?',
            answer: 'Yes, we have an on-site restaurant serving local and international cuisine from 6:00 AM to 10:00 PM daily. Room service is also available 24/7.'
        }
    ]

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We're here to help - get in touch with us</p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-container">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send Us a Message</h2>
                            <p>Have questions or special requests? Fill out the form below and we'll get back to you as soon as possible.</p>

                            <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="fas fa-user"></i> Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="user_name"
                                        required
                                        placeholder="Enter your full name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="fas fa-envelope"></i> Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="user_email"
                                        required
                                        placeholder="your@email.com"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i className="fas fa-phone"></i> Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="user_phone"
                                        placeholder="+977-123-456789"
                                        value={formData.user_phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">
                                        <i className="fas fa-tag"></i> Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="user_subject"
                                        required
                                        value={formData.user_subject}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="booking">Booking Question</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="complaint">Complaint</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">
                                        <i className="fas fa-comment-dots"></i> Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="user_message"
                                        rows="6"
                                        required
                                        placeholder="Write your message here..."
                                        value={formData.user_message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                                    {isSubmitting ? ' Sending...' : ' Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="contact-info-wrapper">
                            <h2>Contact Information</h2>
                            <p>Feel free to reach out to us through any of these channels:</p>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-details">
                                    <h4>Address</h4>
                                    <p>Janakpur, Dhanusha District<br />Province No. 2, Nepal</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="info-details">
                                    <h4>Phone</h4>
                                    <p>Main: +977 985-4080119</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-details">
                                    <h4>Email</h4>
                                    <p>General: janakistarhoteljanakpur@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="info-details">
                                    <h4>Working Hours</h4>
                                    <p>Reception: 24/7<br />Restaurant: 6:00 AM - 10:00 PM</p>
                                </div>
                            </div>

                            <div className="social-section">
                                <h4>Follow Us</h4>
                                <div className="social-links-large">
                                    <a href="https://www.facebook.com/janakistarhotel/" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-facebook"></i>
                                        <span>Facebook</span>
                                    </a>
                                    <a href="https://www.instagram.com/hotel_janakistar/" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a href="https://www.tiktok.com/@_janaki_star_hotel_" className="social-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-tiktok"></i>
                                        <span>TikTok</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <div className="container">
                    <h2>Find Us on the Map</h2>
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.397299447524!2d85.9171421!3d26.7327909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec41fa422c6b1b%3A0x53f25973805a44a0!2sJanaki%20Star%20Hotel!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Janaki Star Hotel Location"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {faqs.map((faq, index) => (
                            <div
                                className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
                                key={index}
                            >
                                <div
                                    className="faq-question"
                                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                                >
                                    <h4>{faq.question}</h4>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            {showModal && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <div className="modal-icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2>Message Sent Successfully!</h2>
                        <p>Thank you for contacting Janaki Star Hotel.</p>
                        <p>We have received your message and will respond within 24 hours.</p>
                        <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default ContactPage
