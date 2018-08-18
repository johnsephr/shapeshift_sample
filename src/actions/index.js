/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import example from '../actions/example.js';
import getBitcoinAddresses from '../actions/getBitcoinAddresses';
import getBitcoinAddressesSuccess from './getBitcoinAddressesSuccess.js';
import getBitcoinAddressesError from './getBitcoinAddressesError.js';
const actions = {
  example,
  getBitcoinAddresses,
  getBitcoinAddressesSuccess,
  getBitcoinAddressesError
};
module.exports = actions;
