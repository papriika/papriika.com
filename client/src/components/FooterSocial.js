import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterSocial extends Component {
  render() {
    return this.props.footerSocialItems.map((item) => (
      <li key={item.id} className="list-inline-item"
        style={{
          marginRight: '0.75rem',
          marginLeft: '0.75rem'
        }}
        >
        <a 
          href={item.href} 
          alt={item.alt}
          className="text-white"
          style={{
            fontSize: '1.15rem'
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
