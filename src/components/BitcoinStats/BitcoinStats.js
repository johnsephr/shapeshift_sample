import React from 'react';
import './bitcoinstats.scss';

// Material UI
import { Card, CardContent, CardHeader } from '@material-ui/core';

// Recharts
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class BitcoinStats extends React.Component {

  constructor(props) {
    super(props);
    this.getBitcoinStats = this.getBitcoinStats.bind(this);
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

  render() {
    const { bitcoinStats } = this.props;
    console.log('bitcoinStatszzz', bitcoinStats);
    return (
      <div className="bitcoinstats-component">
        <Card>
          <CardHeader
            title="Market Value (USD)"
            subheader="Subheader">
          </CardHeader>
          <CardContent className="card-content" style={{height: 500}}>

            {bitcoinStats.values && <ResponsiveContainer>
              <LineChart data={bitcoinStats.values}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid stroke='#f5f5f5' />
                <XAxis dataKey="name" hide />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Line dataKey="USD" stroke="#3C91E6" dot={false} />
              </LineChart>
            </ResponsiveContainer>}

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
