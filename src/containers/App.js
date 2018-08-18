/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {
  getBitcoinAddresses,
  getBitcoinAddressesSuccess,
  getBitcoinAddressesError
} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  // constructor() {   super() }
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }
  render() {
    const { actions, bitcoin } = this.props;
    return <Main actions={actions} bitcoin={bitcoin} />;
  }
}
App.propTypes = {
  actions: PropTypes.shape({
    getBitcoinAddresses: PropTypes.func.isRequired,
    getBitcoinAddressesSuccess: PropTypes.func.isRequired,
    getBitcoinAddressesError: PropTypes.func.isRequired,
  }),
  bitcoin: PropTypes.shape({}),
  example: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    example: state.example,
    bitcoin: state.bitcoin,
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    getBitcoinAddresses,
    getBitcoinAddressesSuccess,
    getBitcoinAddressesError
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
