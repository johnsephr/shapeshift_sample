import React from 'react';
import './layout.scss';

import AddressList from '../AddressList/AddressList.js';
import TransactionList from '../TransactionList/TransactionList.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import BitcoinStats from '../BitcoinStats/BitcoinStats';

const styles = {
  root: {
    boxShadow: '0 6px 24px -3px rgba(0, 0, 0, .29)'
  }
};

class Layout extends React.Component {

  render() {
    const { actions, bitcoinAddressData, bitcoinStats, classes } = this.props;
    return (
      <div className="layout-component">
        <Grid
          container
          className="grid-container"
          spacing={24}
          justify='center'
        >
          <Grid item xs={12}>
            <Card
              classes={{ root: classes.root }}
            >
              <BitcoinStats getBitcoinStats={actions.getBitcoinStats} bitcoinStats={bitcoinStats}></BitcoinStats>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card
              classes={{ root: classes.root }}
            >
              <TransactionList bitcoinAddressData={bitcoinAddressData}></TransactionList>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card
              classes={{ root: classes.root }}
            >
              <AddressList addBitcoinAddress={actions.addBitcoinAddress} getBitcoinAddresses={actions.getBitcoinAddresses} bitcoinAddressData={bitcoinAddressData}></AddressList>
            </Card>
          </Grid>

        </Grid>
      </div>
    );
  }
}

Layout.displayName = 'Layout';
Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};
Layout.defaultProps = {};

export default withStyles(styles)(Layout);
