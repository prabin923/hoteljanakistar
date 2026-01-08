import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function BookingPage() {
    const [searchParams] = useSearchParams()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        room: searchParams.get('room') || 'deluxe',
        checkIn: '',
        checkOut: '',
        adults: '1',
        children: '0',
        requests: ''
    })
    const [showModal, setShowModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('http://localhost:3001/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowModal(true)
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    room: 'deluxe',
                    checkIn: '',
                    checkOut: '',
                    adults: '1',
                    children: '0',
                    requests: ''
                })
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to submit booking');
            }
        } catch (error) {
            console.error('Booking error:', error)
            alert('Booking Error: ' + error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    // Set minimum dates
    const today = new Date().toISOString().split('T')[0]
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Book Your Stay</h1>
                    <p>Reserve your room at Janaki Star Hotel</p>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="booking-section">
                <div className="container">
                    <div className="booking-container">
                        <div className="booking-form-wrapper">
                            <h2>Reservation Form</h2>
                            <form id="bookingForm" className="booking-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <i className="fas fa-user"></i> Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Enter your full name"
                                            value={formData.name}
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
                                            name="email"
                                            required
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            <i className="fas fa-phone"></i> Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            placeholder="+977-123-456789"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="room">
                                            <i className="fas fa-bed"></i> Room Type *
                                        </label>
                                        <select
                                            id="room"
                                            name="room"
                                            required
                                            value={formData.room}
                                            onChange={handleChange}
                                        >
                                            <option value="deluxe">Deluxe Room - Rs. 3,500/night</option>
                                            <option value="suite">Suite Room - Rs. 4,500/night</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="checkIn">
                                            <i className="fas fa-calendar-alt"></i> Check-In Date *
                                        </label>
                                        <input
                                            type="date"
                                            id="checkIn"
                                            name="checkIn"
                                            required
                                            min={today}
                                            value={formData.checkIn}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="checkOut">
                                            <i className="fas fa-calendar-alt"></i> Check-Out Date *
                                        </label>
                                        <input
                                            type="date"
                                            id="checkOut"
                                            name="checkOut"
                                            required
                                            min={formData.checkIn || tomorrow}
                                            value={formData.checkOut}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="adults">
                                            <i className="fas fa-users"></i> Number of Adults *
                                        </label>
                                        <select
                                            id="adults"
                                            name="adults"
                                            required
                                            value={formData.adults}
                                            onChange={handleChange}
                                        >
                                            <option value="1">1 Adult</option>
                                            <option value="2">2 Adults</option>
                                            <option value="3">3 Adults</option>
                                            <option value="4">4 Adults</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="children">
                                            <i className="fas fa-child"></i> Number of Children
                                        </label>
                                        <select
                                            id="children"
                                            name="children"
                                            value={formData.children}
                                            onChange={handleChange}
                                        >
                                            <option value="0">0 Children</option>
                                            <option value="1">1 Child</option>
                                            <option value="2">2 Children</option>
                                            <option value="3">3 Children</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="requests">
                                        <i className="fas fa-comment-dots"></i> Special Requests
                                    </label>
                                    <textarea
                                        id="requests"
                                        name="requests"
                                        rows="4"
                                        placeholder="Any special requirements..."
                                        value={formData.requests}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large" disabled={isSubmitting}>
                                    <i className="fas fa-check"></i> {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                                </button>
                            </form>
                        </div>

                        <div className="booking-info">
                            <h3>Booking Information</h3>
                            <div className="info-card">
                                <h4><i className="fas fa-clock"></i> Check-in / Check-out</h4>
                                <p>Check-in: 2:00 PM<br />Check-out: 12:00 PM</p>
                            </div>
                            <div className="info-card">
                                <h4><i className="fas fa-credit-card"></i> Payment</h4>
                                <p>Pay at the hotel. We accept cash and major credit cards.</p>
                            </div>
                            <div className="info-card">
                                <h4><i className="fas fa-ban"></i> Cancellation</h4>
                                <p>Free cancellation up to 24 hours before check-in.</p>
                            </div>
                            <div className="info-card">
                                <h4><i className="fas fa-phone"></i> Need Help?</h4>
                                <p>Call us at +977 985-4080119</p>
                            </div>
                        </div>
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
                        <h2>Booking Request Submitted!</h2>
                        <p>Thank you for choosing Janaki Star Hotel.</p>
                        <p>We will contact you shortly to confirm your reservation.</p>
                        <button className="btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default BookingPage
