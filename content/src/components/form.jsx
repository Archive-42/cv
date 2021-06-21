

import React from 'react';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default Contacts;



var NewComponent = React.createClass({
  render: function() {
    return (

      <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/{form_id}" method="post">
        <fieldset id="fs-frm-inputs">
          <label htmlFor="full-name">Full Name</label>
          <input type="text" name="name" id="full-name" placeholder="First and Last" required />
          <label htmlFor="email-address">Email Address</label>
          <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required />
          <label htmlFor="message">Message</label>
          <textarea rows={5} name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required defaultValue={""} />
          <input type="hidden" name="_subject" id="email-subject" defaultValue="Contact Form Submission" />
        </fieldset>
        <input type="submit" defaultValue="Submit" />
      </form>
    );
  }
});