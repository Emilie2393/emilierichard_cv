import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactCard from '../components/Contact/ContactCard';
import '../styles/pages/Contact.scss'

const Contact = () => {
    return (
      <div>
        <div className="contact__display">
          <div>
            <Navigation />
            <ContactCard />
          </div>
          <Footer />
        </div>
      </div>
    );
};

export default Contact;