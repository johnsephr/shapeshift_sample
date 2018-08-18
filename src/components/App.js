import React from 'react';
// import ReactDOM from 'react-dom';
import './app.scss';

import Layout from './Layout/Layout.js'

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {actions, bitcoin} = this.props;
    return (
      <div className="app-component">
        <Layout actions={actions} bitcoinAddressData={bitcoin.bitcoinAddressData}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
