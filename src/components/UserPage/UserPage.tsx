        import React, { useState ,useEffect } from "react";
        import "./UserPage.css";
import { Link } from "lucide-react";

        const TABS = [
        { id: "overview", label: "Overview" },
        { id: "services", label: "Menu" },
        { id: "photos", label: "Photos" },
        { id: "reviews", label: "Ratings" },
        ];

        const initialPhotos = [
        "https://placehold.co/300x200/c084fc/ffffff?text=Styling+Chair",
        "https://placehold.co/300x200/f472b6/ffffff?text=Nail+Art",
        "https://placehold.co/300x200/34d399/ffffff?text=Hair+Color",
        "https://placehold.co/300x200/60a5fa/ffffff?text=Salon+Interior",
        ];

        const morePhotos = [
        "https://placehold.co/300x200/fbbf24/ffffff?text=Massage+Room",
        "https://placehold.co/300x200/f87171/ffffff?text=Manicure+Tools",
        "https://placehold.co/300x200/22d3ee/ffffff?text=Makeup+Session",
        ];

        // Your extra images for below main image gallery
        const galleryImages = [
        "https://as2.ftcdn.net/v2/jpg/07/14/81/73/1000_F_714817369_sHOlcXEswzX22DjXEysr4b8agQ2T393U.jpg",
        "https://t3.ftcdn.net/jpg/05/06/74/32/240_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "https://as1.ftcdn.net/v2/jpg/12/97/83/90/1000_F_1297839007_5NBfccgFYMct92WPfWCdWpUyRUHeiw0H.jpg",
        "https://as1.ftcdn.net/v2/jpg/15/52/05/66/1000_F_1552056631_kZAg6TQSNWSMNbxNSlPI45m6qE2JwEvH.jpg",
        "https://as1.ftcdn.net/v2/jpg/15/06/02/96/1000_F_1506029610_zGzxpb7OX2RTRL9IHgigBTYMHK0a2Cvg.jpg",
        ];

        export default function UserPage() {
        const [activeTab, setActiveTab] = useState("overview");
        const [showMorePhotos, setShowMorePhotos] = useState(false);
     const renderTabContent = () => {
            switch (activeTab) {
case "overview":
    return (
        <div className="card">
            <h2 className="card-title">About this place</h2>
            <p className="text-body">
                Welcome to Modern Style Salon – where your beauty comes first! Our mission is to provide top-notch beauty services in a relaxing and comfortable environment. Whether you're here for a quick haircut, a rejuvenating facial, or a full day of pampering, we’re dedicated to making you look and feel your best.
            </p>

            <p>
                We believe in personalized care, and our skilled professionals ensure that each visit is tailored to meet your unique needs. From trendy haircuts to luxurious spa treatments, we have something for everyone. At Modern Style Salon, it’s not just about beauty – it’s about confidence, self-care, and relaxation.
            </p>

            <p>
                Visit us today to experience the ultimate beauty transformation!
            </p>
        </div>
    );

                case "services":
    return (
        <div className="card">
            <h2 className="card-title">Menu</h2>
            
            {/* Hair Category */}
            <div className="service-category">
                <h3 className="service-title">Hair</h3>
                <div className="service-items">
                    <div className="service-item">
                        <p>Men's Haircut</p>
                        <p className="service-price">₹200</p>
                    </div>
                    <div className="service-item">
                        <p>Women's Haircut</p>
                        <p className="service-price">₹500</p>
                    </div>
                    <div className="service-item">
                        <p>Kids Haircut</p>
                        <p className="service-price">₹150</p>
                    </div>
                    <div className="service-item">
                        <p>Beard Trim</p>
                        <p className="service-price">₹100</p>
                    </div>
                </div>
            </div>
            
            {/* Skin Care Category */}
            <div className="service-category">
                <h3 className="service-title">Skin Care</h3>
                <div className="service-items">
                    <div className="service-item">
                        <p>Facial</p>
                        <p className="service-price">₹800</p>
                    </div>
                    <div className="service-item">
                        <p>Threading</p>
                        <p className="service-price">₹150</p>
                    </div>
                    <div className="service-item">
                        <p>Waxing</p>
                        <p className="service-price">₹250</p>
                    </div>
                </div>
            </div>
            
            {/* Nail Care Category */}
            <div className="service-category">
                <h3 className="service-title">Nail Care</h3>
                <div className="service-items">
                    <div className="service-item">
                        <p>Manicure</p>
                        <p className="service-price">₹350</p>
                    </div>
                    <div className="service-item">
                        <p>Pedicure</p>
                        <p className="service-price">₹400</p>
                    </div>
                    <div className="service-item">
                        <p>Gel Manicure</p>
                        <p className="service-price">₹550</p>
                    </div>
                </div>
            </div>
            
            {/* Massage Category */}
            <div className="service-category">
                <h3 className="service-title">Massage</h3>
                <div className="service-items">
                    <div className="service-item">
                        <p>Head Massage</p>
                        <p className="service-price">₹300</p>
                    </div>
                    <div className="service-item">
                        <p>Full Body Massage</p>
                        <p className="service-price">₹1200</p>
                    </div>
                </div>
            </div>
        </div>
    );
  case "photos":
        return (
            <div className="card">
            <h2 className="card-title">Photos</h2>
        <div className="photo-grid">
    {initialPhotos.map((src, idx) => (
        <img
        key={idx}
        src={src}
        className="gallery-img"
        alt={`Gallery photo ${idx + 1}`}
        />
    ))}

    {showMorePhotos &&
        morePhotos.map((src, idx) => (
        <img
            key={idx + initialPhotos.length}
            src={src}
            className="gallery-img"
            alt={`Gallery photo ${idx + initialPhotos.length + 1}`}
        />
        ))}
    </div>

            {/* Show button only if morePhotos has images */}
            {morePhotos.length > 0 && (
                <button
                className="show-more-btn"
                onClick={() => setShowMorePhotos((prev) => !prev)}
                >
                {showMorePhotos ? "Show Less" : "Show More"}
                </button>
            )}
            </div>
        );

            case "reviews":
    return (
        <div className="card">
            <h2 className="card-title">Ratings</h2>

            {/* Review 1 */}
            <div className="review">
                <div className="review-header">
                    <img
                        src="https://placehold.co/40x40/c084fc/ffffff?text=P"
                        alt="avatar"
                        className="avatar"
                    />
                    <div>
                        <p className="review-author">Priya</p>
                        <p className="review-count">8 reviews</p>
                    </div>
                    <span className="rating-badge-small">5.0 ★</span>
                </div>
                <p className="text-body">Great service, clean and friendly staff.</p>
            </div>

            {/* Review 2 */}
            <div className="review">
                <div className="review-header">
                    <img
                        src="https://placehold.co/40x40/ff7f50/ffffff?text=A"
                        alt="avatar"
                        className="avatar"
                    />
                    <div>
                        <p className="review-author">Amit</p>
                        <p className="review-count">5 reviews</p>
                    </div>
                    <span className="rating-badge-small">4.5 ★</span>
                </div>
                <p className="text-body">Very professional team. Worth the price.</p>
            </div>

            {/* Review 3 */}
            <div className="review">
                <div className="review-header">
                    <img
                        src="https://placehold.co/40x40/3b5998/ffffff?text=S"
                        alt="avatar"
                        className="avatar"
                    />
                    <div>
                        <p className="review-author">Sanya</p>
                        <p className="review-count">12 reviews</p>
                    </div>
                    <span className="rating-badge-small">4.8 ★</span>
                </div>
                <p className="text-body">Loved the haircut! Highly recommend.</p>
            </div>

            {/* Review 4 */}
            <div className="review">
                <div className="review-header">
                    <img
                        src="https://placehold.co/40x40/8e44ad/ffffff?text=R"
                        alt="avatar"
                        className="avatar"
                    />
                    <div>
                        <p className="review-author">Ravi</p>
                        <p className="review-count">3 reviews</p>
                    </div>
                    <span className="rating-badge-small">4.0 ★</span>
                </div>
                <p className="text-body">Good service, but the wait time could be shorter.</p>
            </div>

            {/* Review 5 */}
            <div className="review">
                <div className="review-header">
                    <img
                        src="https://placehold.co/40x40/2ecc71/ffffff?text=M"
                        alt="avatar"
                        className="avatar"
                    />
                    <div>
                        <p className="review-author">Manju</p>
                        <p className="review-count">6 reviews</p>
                    </div>
                    <span className="rating-badge-small">5.0 ★</span>
                </div>
                <p className="text-body">Amazing experience! I’ll be coming back for sure.</p>
            </div>
        </div>
    );
default:
                return null;
            }
        };
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };
        return (
        <>
            <div className="container">
            {/* Header */}
  <header className="header">
        <div className="header-top">
            <div className="header-info">
                <div className="logo-section">
                    <svg className="salon-logo" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="28" fill="#25d366" stroke="#047857" stroke-width="2"/>
                        <path d="M20 25 C20 20, 25 15, 30 15 C35 15, 40 20, 40 25 C40 30, 35 35, 30 35 C25 35, 20 30, 20 25 Z" fill="white"/>
                        <circle cx="25" cy="25" r="2" fill="#047857"/>
                        <circle cx="35" cy="25" r="2" fill="#047857"/>
                        <path d="M25 30 Q30 35 35 30" stroke="#047857" stroke-width="2" fill="none"/>
                        <path d="M15 40 Q30 50 45 40" stroke="white" stroke-width="3" fill="none"/>
                    </svg>
                    <h1>Modern Style Salon</h1>
                </div>
                <p>Haircuts, Coloring, Facials, Manicures</p>
                <p className="address">Virar West, Mumbai</p>
            </div>
            <div className="right-section">
                <div className="mobile-row">
                    <div className="ratings-share">
                        <div className="rating-display">
                            <span className="rating-badge">4.8 ★</span>
                            <span className="rating-count">800+ Ratings</span>
                        </div>
                    </div>
                    <button className="appointment-btn" >Book Appointment</button>
                </div>
                <div className="working-hours">
                    <p><strong>Hours:</strong> Tue - Sun: 9 AM - 10 PM | Mon: Closed</p>
                </div>
            </div>
        </div>
    </header>








                {/* Main Image and gallery below */}
                <div className="image-gallery mb-6">
                    <div className="gallery-main-image">
                    <img
                        src={galleryImages[0]}
                        alt="Salon Interior"
                        className="gallery-img main-image"
                    />
                    </div>
        <div className="gallery-thumbnails">
        {galleryImages.slice(1).map((src, idx, arr) => {
            const isLast = idx === arr.length - 1;
            return (
            <div
                key={idx}
                onClick={() => {
                if (isLast) setActiveTab("photos");
                }}
            >
                <img
                src={src}
                alt={`Gallery thumbnail ${idx + 1}`}
                className="gallery-img"
                style={{ cursor: isLast ? "pointer" : "default" }}
                />
                {isLast && (
                <div>
                    See All
                </div>
                )}
            </div>
            );
        })}
        </div>


                </div>

            {/* Tabs BELOW image */}
            <div className="tabs-nav mb-6">
                {TABS.map((tab) => (
                <button
                    key={tab.id}
                    className={`tab ${activeTab === tab.id ? "tab-active" : ""}`}
                    onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== "photos") setShowMorePhotos(false);
                    }}
                >
                    {tab.label}
                </button>
                ))}
            </div>
 
            {/* Tab Content */}
            <div className="tab-content">{renderTabContent()}</div>
                    <section className="promotions-section">
        <div className="promotions-container">
            <h2 className="promotions-title">Offers</h2>
            
            <div className="promotions-grid">
                <div className="promotion-card">
                    <div className="discount-badge">20% OFF</div>
                    <div className="promotion-content">
                        <h3 className="promotion-title">Haircuts Special</h3>
                        <p className="promotion-details">Get 20% off your first haircut at Modern Style Salon. Limited time offer for new customers!</p>
                        <div className="promotion-expiry">
                            <span className="expiry-label">Valid until:</span>
                            <span className="expiry-date">September 30th</span>
                        </div>
                        <button className="promotion-btn" >Book Now</button>
                    </div>
                </div>

                <div className="promotion-card">
                    <div className="discount-badge seasonal">FREE GIFT</div>
                    <div className="promotion-content">
                        <h3 className="promotion-title">Facial Service Bonus</h3>
                        <p className="promotion-details">Get a free premium skincare product with any facial service. Choose from our exclusive collection!</p>
                        <div className="promotion-expiry">
                            <span className="expiry-label">Valid until:</span>
                            <span className="expiry-date">October 15th</span>
                        </div>
                        <button className="promotion-btn">Book Now</button>
                    </div>
                </div>

                <div className="promotion-card">
                    <div className="discount-badge combo">COMBO DEAL</div>
                    <div className="promotion-content">
                        <h3 className="promotion-title">Hair & Nails Package</h3>
                        <p className="promotion-details">Book a haircut and manicure together and save 15% on the total service. Perfect for a complete makeover!</p>
                        <div className="promotion-expiry">
                            <span className="expiry-label">Valid until:</span>
                            <span className="expiry-date">November 30th</span>
                        </div>
                        <button className="promotion-btn" >Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
       <h1 className="location-title">
        Location
      </h1>

   <div className="contact-map-wrapper">
      <section className="map-section">
<iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7523.8786099076!2d72.79138409357913!3d19.458183500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aba3c9bbf46d%3A0xfeb015031bda55a3!2sLocks%20%26%20Lustre%20-%20Salon%20%26%20Academy!5e0!3m2!1sen!2sin!4v1756632173089!5m2!1sen!2sin&zoom=15&scrollwheel=0&disableDefaultUI=0"
  allowFullScreen
  loading="lazy"
  
  referrerPolicy="no-referrer-when-downgrade"
></iframe>


      </section>

      <section className="contact-section">
        <h2>Contact Details</h2>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
        <p><strong>Email:</strong> contact@example.com</p>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Locks+%26+Lustre+-+Salon+%26+Academy,+Mumbai,+India"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-button"
        >
          Get Directions
        </a>
      </section>
    </div>
            </div>

        </>
            
            
        );
        }
