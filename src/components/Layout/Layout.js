import React from 'react';
import './layout.scss';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class Layout extends React.Component {

  render() {
    return (
      <div className="layout-component">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card>
              <CardContent>BEIg SHeit</CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>SHMalL SHeit</CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>Anuthr SHMalL SHeit</CardContent>
            </Card>
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
