import React from 'react';
import './addresslist.scss';

// Material UI
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Card, CardHeader, CardContent, Grid } from '@material-ui/core';

class AddressList extends React.Component {

  constructor(props) {
    super(props);
    this.getAddresses = this.getAddresses.bind(this);
  }

  componentWillMount() {
    this.getAddresses();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  getAddresses() {
    this.props.getBitcoinAddresses();
  }

  render() {
    const { bitcoinAddressData } = this.props;
    return (
      <div className="addresslist-component">
        <Card>
        <CardHeader
            title="Addresses"
            subheader="Subheader">
          </CardHeader>
            <CardContent className="card-content">
              {bitcoinAddressData.addresses && bitcoinAddressData.addresses.map((address, index, array) => {
                return (
                  <ExpansionPanel key={index}>
                    <ExpansionPanelSummary>
                      <Typography>{address.address}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Grid container className="main-container" spacing={24}>
                        <Grid item xs={12} md={6}>
                          <span><strong>Change Index:</strong> {address.change_index}</span><br />
                          <span><strong>Final Balance:</strong> {address.final_balance}</span><br />
                          <span><strong>Number of Transactions:</strong> {address.n_tx}</span>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <span><strong>Total Received:</strong> {address.total_received}</span><br />
                          <span><strong>Total Sent:</strong> {address.total_sent}</span>
                        </Grid>
                      </Grid>
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

AddressList.displayName = 'AddressList';
AddressList.propTypes = {};
AddressList.defaultProps = {};

export default AddressList;
