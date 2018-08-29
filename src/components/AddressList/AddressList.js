import React from 'react';
import './addresslist.scss';

// Material UI
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Card, CardHeader, CardContent, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@material-ui/core';

class AddressList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false, input: '' }
    this.getAddresses = this.getAddresses.bind(this);
    this.addNewAddress = this.addNewAddress.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  componentWillMount() {
    this.getAddresses();
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
  }

  getAddresses() {
    this.props.getBitcoinAddresses();
  }

  addNewAddress() {
    console.log(this.state.input)
    this.props.addBitcoinAddress(this.state.input);
    this.props.getBitcoinAddresses();
    this.handleClose();
    this.setState({ input: '' })
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  updateInput(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { bitcoinAddressData } = this.props;
    return (
      <div className="addresslist-component">


        {/* <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Bitcoin Address</DialogTitle>
          <DialogContent className="dialog-content">
            <DialogContentText>
              Enter your bitcoin address below. Please enter only Testnet Addresses.
            </DialogContentText>
            <input
              autoFocus
              placeholder="Enter Bitcoin Address..."
              value={this.state.input}
              onChange={this.updateInput}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.addNewAddress} color="default">
              Add
            </Button>
          </DialogActions>
        </Dialog> */}


        <CardHeader
          title="Addresses"
          subheader="Subheader"
          action={
            <div className="add-address-button">
              <Button onClick={this.handleOpen}>
                Add New
                </Button>
            </div>
          }
        >
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
      </div>
    );
  }
}

AddressList.displayName = 'AddressList';
AddressList.propTypes = {};
AddressList.defaultProps = {};

export default AddressList;
