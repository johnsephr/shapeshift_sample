import React from 'react';
import './rightdrawer.scss';

import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import { Drawer, Button, List, ListItem, ListItemText, Divider } from '@material-ui/core';

// const styles = {
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: 'auto',
//   },
// };

class RightDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="rightdrawer-component">
        <Button onClick={this.toggleDrawer}>Open Right</Button>
        <Drawer anchor="right" open={this.state.open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >

          {/* inside of drawer */}
            <div>
              <List component="nav">
                <ListItem button>
                  {/* <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon> */}
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                  {/* <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon> */}
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
              <Divider />
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Trash" />
                </ListItem>
                <ListItem button component="a" href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItem>
              </List>
            </div>


          </div>
        </Drawer>
      </div>
    );
  }
}

RightDrawer.displayName = 'RightDrawer';
RightDrawer.propTypes = {
  // classes: PropTypes.object.isRequired,
};
RightDrawer.defaultProps = {};

export default RightDrawer;
