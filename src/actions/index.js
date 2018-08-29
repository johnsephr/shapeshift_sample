/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import addBitcoinAddress from '../actions/addBitcoinAddress.js';
import getBitcoinStatsError from './getBitcoinStatsError.js';
import getBitcoinStatsSuccess from './getBitcoinStatsSuccess.js';
import getBitcoinStats from './getBitcoinStats.js';
import example from '../actions/example.js';
import getBitcoinAddresses from '../actions/getBitcoinAddresses';
import getBitcoinAddressesSuccess from './getBitcoinAddressesSuccess.js';
import getBitcoinAddressesError from './getBitcoinAddressesError.js';
const actions = {
  example,
  getBitcoinAddresses,
  getBitcoinAddressesSuccess,
  getBitcoinAddressesError,
  getBitcoinStats,
  getBitcoinStatsSuccess,
  getBitcoinStatsError,
  addBitcoinAddress
};
module.exports = actions;
