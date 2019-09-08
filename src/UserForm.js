import React from "react";
import PaneFooter from './PaneFooter';
import './UserForm.css';
// import css from './UserForm.css';

class UserForm extends React.Component {
  paneFooterRef = React.createRef();

  componentDidMount() {
    // this.paneFooterRef.current.style.zoom='2';
    console.log(this.paneFooterRef.current);
  }

  render() {
    return (
      <div>
        <h3>Hello</h3>
        <PaneFooter
          ref={this.paneFooterRef}
          placeholder='test'
          element='footer'
          className='footer'//{css.footer}
          className_inner='content'//{css.content}
        >
          {/* <h1>TEST</h1> */}
        </PaneFooter>
      </div>
    );  
  }
}

export default UserForm;
