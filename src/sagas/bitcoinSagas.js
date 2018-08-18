import 'babel-polyfill'
import axios from 'axios'
import { call, put, takeEvery, select } from 'redux-saga/effects'
import { browserHistory } from 'react-router';

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

// Get Bitcoin Addresses Watch
export function* watchGetBitcoinAddresses() {
  yield takeEvery('GET_BITCOIN_ADDRESSES', getBitcoinAddresses)
}

// single entry point to start all Sagas at once
export default function* bitcoinSagas() {
  yield [watchGetBitcoinAddresses()]
}