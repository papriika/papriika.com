import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';

// Using a ES6 class component as it contains state.
class MailerSuccess extends Component {
  render() {
    return (
      <div className="container-fluid pl-0 pr-0">
        <div 
          className="
            container-fluid 
            d-flex 
            align-items-center 
            justify-content-center
            pl-0 pr-0
          ">
          <div className="card col-md-8 mt-4c mt-md-6">
            <div className="card-body">
              <div className="text-center mb-9">
                <p className="lead-md font-weight-bold">
                  Message Sent...
                </p>
                <p>
                  Thank you for getting in touch!
                </p>
                <p className="mb-5">
                  Someone will respond within 24hrs. Have a great day!
                </p>
                <p className="font-weight-bold">
                  What's next?
                </p>
                <p className="mb-4b">
                  Follow Papriika on <a href="https://www.facebook.com/papriikaco/" alt="Facebook Papriika (papriikaco)" target="_blank" rel="noopener noreferrer" className="text-dark link-dynamic-dark">Facebook</a>, <a href="https://www.instagram.com/papriikaco/" alt="Instagram Papriika (papriikaco)" target="_blank" rel="noopener noreferrer" className="text-dark link-dynamic-dark">Instagram</a>, <a href="https://twitter.com/UniverseLabs" alt="Twitter Papriika (@papriikaco)" target="_blank" rel="noopener noreferrer" className="text-dark link-dynamic-dark">Twitter</a> and <a href="https://www.pinterest.com/papriika/" alt="Pinterest Papriika" target="_blank" rel="noopener noreferrer" className="text-dark link-dynamic-dark">Pinterest</a>. <a href="/subscribe" alt="Subscribe to newsletter" className="text-dark link-dynamic-dark">Subscribe</a> for offers.
                </p>
              </div>
              <div className="text-center mb-4">
                <a
                  className="btn btn-secondary btn-subscribe mx-auto"
                  style={{
                    textDecoration: 'none'
                  }}
                  href="/" 
                  role="button"
                  tabIndex="1">
                  Back to home
                </a>
                
              </div>
              <div className="text-center small letter-space mt-9 mb-4">
                <CopyrightUpdate 
                  style={{
                    display: 'inline-block'
                  }}
                />
                &nbsp;Papriika Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailerSuccess;
