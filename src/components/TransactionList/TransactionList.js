import React from 'react';
import './transactionlist.scss';

// Material UI
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Card, CardHeader, CardContent } from '@material-ui/core';

import {FormattedTime, FormattedDate} from 'react-intl';

class TransactionList extends React.Component {

  constructor(props) {
    super(props);
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.props.getBitcoinAddresses();
  }

  render() {
    const { bitcoinAddressData } = this.props;
    return (
      <div className="transactionlist-component">
        <Card>
          <CardHeader
            title="Transactions"
            subheader="Subheader">
          </CardHeader>
          <CardContent>
            {bitcoinAddressData.txs && bitcoinAddressData.txs.map((transaction, index, array) => {
              return (
                <ExpansionPanel key={index}>
                  <ExpansionPanelSummary>
                    <Typography>
                      <FormattedDate
                        value={new Date(transaction.time)}
                        month='long'
                        day='2-digit'
                      />
                      <span> @ </span>
                      <FormattedTime value={new Date(transaction.time)} />
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <span><strong>Bitcoin Address:</strong> {transaction.out[0].addr}</span>
                    <span><strong>Balance:</strong> {transaction.balance}</span>
                    <span><strong>Size:</strong> {transaction.size}</span>
                    <span><strong>Fee: </strong>{transaction.fee}</span>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )
            })}
          </CardContent>
        </Card>
      </div>
    );
  }
}

TransactionList.displayName = 'TransactionList';
TransactionList.propTypes = {};
TransactionList.defaultProps = {};

export default TransactionList;
