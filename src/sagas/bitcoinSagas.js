import 'babel-polyfill'
import axios from 'axios'
import { call, put, takeEvery, select } from 'redux-saga/effects'
import PropTypes from 'prop-types';
// import { browserHistory } from 'react-router';

// Get Bitcoin instance handle
const getBitcoin = state => state.bitcoin;

// Get Bitcoin Addresses Saga
export function* getBitcoinAddresses(action) {

  // Testnet API
  axios.defaults.baseURL = 'https://testnet.blockchain.info';

  // Pull bitcoin instance off the store
  const bitcoin = yield select(getBitcoin)

  // Build endpoint from bitcoin address list
  let endpoint = `multiaddr?active=`;
  bitcoin.bitcoinAddresses.forEach((address, index, array) => {
    if (index == 0) {
      endpoint += address;
    } else {
      endpoint += `|${address}`
    }
  })

  endpoint += '&cors=true'

  try {
    const resp = yield call(axios.get, endpoint)
    yield put({
      type: 'GET_BITCOIN_ADDRESSES_SUCCESS',
      payload: resp.data
    })


  } catch (err) {
    yield put({
      type: 'GET_BITCOIN_ADDRESSES_ERROR'
    });
    console.log(err);
  }

}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // console.log('day', day, 'monthIndex', monthIndex, 'year', year);
  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

// console.log('formatDate()', formatDate(new Date()));


// Get Bitcoin Stats Saga
export function* getBitcoinStats(action) {

  // Blockchain API
  axios.defaults.baseURL = 'https://api.blockchain.info';
  // Stats endpoint
  let endpoint = `/stats`;

  // Pull bitcoin instance off the store
  const bitcoin = yield select(getBitcoin)

  try {
    const resp = yield call(axios.get, endpoint)

    // Format response before propagating to redux store
    let formattedBitcoinStatsValues = [];
    if (resp.data && resp.data.values) {
      resp.data.values.forEach((value, index, array) => {
        // console.log('value.x', value.x)
        formattedBitcoinStatsValues.push({
          name: formatDate(new Date(value.x)),
          USD: parseFloat(value.y.toFixed(2))
        })
      });
      resp.data.values = formattedBitcoinStatsValues;
    }

    yield put({
      type: 'GET_BITCOIN_STATS_SUCCESS',
      payload: resp.data
    })
  } catch (err) {
    yield put({
      type: 'GET_BITCOIN_STATS_ERROR'
    });
    console.log(err);
  }
}

// Get Bitcoin Addresses Watch
export function* watchGetBitcoinAddresses() {
  yield takeEvery('GET_BITCOIN_ADDRESSES', getBitcoinAddresses)
}

// Get Bitcoin Stats Watch
export function* watchGetBitcoinStats() {
  yield takeEvery('GET_BITCOIN_STATS', getBitcoinStats)
}

// single entry point to start all Sagas at once
export default function* bitcoinSagas() {
  yield [watchGetBitcoinAddresses(), watchGetBitcoinStats()]
}