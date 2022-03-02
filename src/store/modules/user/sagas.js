import { all, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { loadDataSuccess, loadDataError } from './actions';

function *loadData() {
    try {
        const { data } = yield axios.get('https://httpbin.org/user-agent');
    
        yield put(loadDataSuccess(data));
    }
    catch(err) {
        yield put(loadDataError());
    };
};

export default all([
    takeLatest('@user/LOAD_DATA_REQUEST', loadData),
]);