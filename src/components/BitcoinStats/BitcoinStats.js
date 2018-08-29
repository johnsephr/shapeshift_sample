import React from 'react';
import './bitcoinstats.scss';

// Material UI
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';

class BitcoinStats extends React.Component {

  constructor(props) {
    super(props);
    this.getBitcoinStats = this.getBitcoinStats.bind(this);
    this.formatNum = this.formatNum.bind(this);
  }

  componentWillMount() {
    this.getBitcoinStats();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  getBitcoinStats() {
    this.props.getBitcoinStats();
  }

  // Format Number
  formatNum(num) {
    // Convert num to currency format
    const formattedNum = parseFloat(num).toFixed(2).toString(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNum;
  }

  // addCommas(num) {
  //   const withCommas = parseFloat(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return withCommas;
  // }

  render() {
    const { bitcoinStats } = this.props;
    return (
      <div className="bitcoinstats-component">
        <Card>
          {/* <CardHeader
            title="Bitcoin Stats"
            subheader="Summary of bitcoin statistics for the previous 24 hour period."
            >
          </CardHeader> */}
          <h2>Bitcoin Stats</h2>
          <p>Summary of bitcoin statistics for the previous 24 hour period.</p>
          <CardContent className="card-content">
            <Grid
              container
              className="grid-container"
              spacing={24}
              justify='center'
            >
              <Grid item md={2} sm={4} xs={6}>
                <span>${this.formatNum(bitcoinStats.market_price_usd)}</span><br />
                <span>Market Price USD</span>
              </Grid>
              <Grid item md={2} sm={4} xs={6}>
                <span>${this.formatNum(bitcoinStats.trade_volume_usd)}</span><br />
                <span>Trade Volume USD</span>
              </Grid>
              <Grid item md={2} sm={4} xs={6}>
                <span>{this.formatNum(bitcoinStats.trade_volume_btc)}</span><br />
                <span>Trade Volume BTC</span>
              </Grid>
              <Grid item md={2} sm={4} xs={6}>
                <span>{this.formatNum(bitcoinStats.n_blocks_mined)}</span><br />
                <span>Blockes Mined</span>
              </Grid>
              <Grid item md={2} sm={4} xs={6}>
                <span>{this.formatNum(bitcoinStats.minutes_between_blocks)}</span><br />
                <span>Time Between Blocks</span>
              </Grid>
              <Grid item md={2} sm={4} xs={6}>
                <span>{this.formatNum(bitcoinStats.n_btc_mined)}</span><br />
                <span>Bitcoins Mined</span>
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      </div>
    );
  }
}

BitcoinStats.displayName = 'BitcoinStats';
BitcoinStats.propTypes = {};
BitcoinStats.defaultProps = {};

export default BitcoinStats;
