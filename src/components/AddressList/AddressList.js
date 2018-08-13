import React from 'react';
import './addresslist.scss';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class AddressList extends React.Component {

  render() {
    return (
      <div className="addresslist-component">
        <Card>
          <CardContent>
            Addresses
            <Typography>
              Your addresses
            </Typography>
            <p>address1</p>
            <p>address2</p>
            <p>address3</p>
            <p>address4</p>
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
