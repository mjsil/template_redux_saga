import { all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { loadDataSuccess, loadDataError } from './actions';

function *loadData() {
    try {
        const { data } = yield axios.get('http://httpbin.org/ip');
    
        yield put(loadDataSuccess(data));
    }
    catch(error) {
        yield put(loadDataError());
    };
};

export default all([
    takeLatest('@ip/LOAD_DATA_REQUEST', loadData),
]);