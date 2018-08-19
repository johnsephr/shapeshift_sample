import React from 'react';
import './layout.scss';

import AddressList from '../AddressList/AddressList.js';
import TransactionList from '../TransactionList/TransactionList.js';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import BitcoinStats from '../BitcoinStats/BitcoinStats';

class Layout extends React.Component {

  render() {
    const {actions, bitcoinAddressData, bitcoinStats} = this.props;
    return (
      <div className="layout-component">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <BitcoinStats getBitcoinStats={actions.getBitcoinStats} bitcoinStats={bitcoinStats}></BitcoinStats>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <TransactionList bitcoinAddressData={bitcoinAddressData}></TransactionList>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <AddressList getBitcoinAddresses={actions.getBitcoinAddresses} bitcoinAddressData={bitcoinAddressData}></AddressList>
          </Grid>

        </Grid>
      </div>
    );
  }
}

Layout.displayName = 'Layout';
Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
