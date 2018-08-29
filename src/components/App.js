import React from 'react';
// import ReactDOM from 'react-dom';
import './app.scss';

import Layout from './Layout/Layout.js';
import RightDrawer from './RightDrawer/RightDrawer.js';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const { actions, bitcoin } = this.props;
    return (
      <div className="app-component">
        <div id="banner">
          <RightDrawer />
        </div>
        <Layout actions={actions} bitcoinAddressData={bitcoin.bitcoinAddressData} bitcoinStats={bitcoin.bitcoinStats} />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
