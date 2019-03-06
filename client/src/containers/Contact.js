import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Social from '../components/Social';
import ContactForm from '../components/ContactForm';
import '../css/Subscribe.css';

class Contact extends Component {
  state = {
    socialItems: [
      {
        id: 1,
        href: 'https://github.com/papriika/',
        alt: 'GitHub Papriika (Papriika)',
        icon: 'github'
      },
      {
        id: 2,
        href: 'https://www.facebook.com/papriikaco/',
        alt: 'Facebook Papriika (papriikaco)',
        icon: 'facebook'
      },
      {
        id: 3,
        href: 'https://www.instagram.com/papriikaco/',
        alt: 'Instagram Papriika (papriikaco)',
        icon: 'instagram'
      },
      {
        id: 4,
        href: 'https://twitter.com/papriikaco',
        alt: 'Twitter Papriika (@papriikaco)',
        icon: 'twitter'
      },
      {
        id: 5,
        href: 'https://www.pinterest.com/papriika/',
        alt: 'Pinterest Papriika (Papriika)',
        icon: 'pinterest'
      }
    ]
  }

  render() {
    return (
      <div>
        <Navbar colorScheme="bg-white"
          style={{
            boxShadow: '0px 2px 21px 0px rgba(0,0,0,0.08)'
          }}/>
        <div style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div 
            className="container text-left mb-8 pb-8"
            style={{
              maxWidth: '550px'
            }}>
            <div></div>
            <h1 className="h1-editorial mb-4b">
              Contact
            </h1>
            <p className="mb-5">
              General inquiries, please fill out the form below.
            </p>
            <ContactForm />
            <div className="text-center mt-2 pt-9">
              <p className="font-weight-bold">
                What's next?
              </p>
              <p className="mb-4b">
                Follow Papriika on <a href="https://www.facebook.com/papriikaco/" alt="Facebook Papriika (papriikaco)" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Facebook&nbsp;</a>, <a href="https://www.instagram.com/papriikaco/" alt="Instagram Papriika (papriikaco)" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Instagram&nbsp;</a> and <a href="https://twitter.com/UniverseLabs" alt="Twitter Papriika (@papriikaco)" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Twitter&nbsp;</a>. <a href="https://github.com/papriika/" alt="GitHub Papriika (Papriika)" target="_blank" rel="noopener noreferrer" className="bg-black text-light mx-1">&nbsp;Star&nbsp;</a> the open source project. <a href="/subscribe" alt="Subscribe to newsletter" className="bg-black text-light mx-1">&nbsp;Subscribe&nbsp;</a> for offers.
              </p>
              <Social 
                socialItems={this.state.socialItems}
                className="lead link-dark"
                listAlign="list-inline-item"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
