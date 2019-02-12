import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterSocial extends Component {
  render() {
    return this.props.footerSocialItems.map((item) => (
      <li key={item.id} className="list-inline-item mx-2">
        <a 
          href={item.href} 
          alt={item.alt}
          className="text-white"
          style={{
            fontSize: '1.2rem'
          }}
          >
          <FontAwesomeIcon 
            className="mr-1" 
            icon={[`fab`, `${item.icon}`]}
            />
        </a>
      </li>
    ));
  }
}

export default FooterSocial;
