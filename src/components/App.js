import React from 'react';
// import ReactDOM from 'react-dom';
import './app.scss';

import Layout from './Layout/Layout.js'

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app-component">
      <Layout />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
