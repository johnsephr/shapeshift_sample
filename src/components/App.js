import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

import Button from '@material-ui/core/Button';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app-component">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }

}

AppComponent.defaultProps = {};

export default AppComponent;
