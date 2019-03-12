import React, { Component } from 'react';

class FooterColRight extends Component {
  state = {
    data : [
      {
        id: 1,
        url: '/contact',
        text: 'Contact',
        alt: 'Contact'
      },
      {
        id: 2,
        url: 'https://join.slack.com/t/papriika/shared_invite/enQtNTc1Mzk0MDUxMDYyLWE4YmMyNzM5MGQ1OTcxNjM2MzEyMjVhNTE1Y2M5ZWY3M2IyZjRlZGZjMGY2ZjdiMmJmOGUxMjA0YzA0OTg5OTc',
        text: 'Developers',
        alt: 'Developers'
      }
    ]
  }
  
  render() {
    return this.state.data.map((item) => (
      <li key={item.id} className="text-white-20 mb-2">
        <a 
          href={item.url} 
          alt={item.alt}
          className={this.props.className}>
          {item.text}
        </a>
      </li>
    ));
  }
}

export default FooterColRight;
