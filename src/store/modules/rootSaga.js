import { all } from 'redux-saga/effects';

import ip from './ip/sagas';
import user from './user/sagas';

export default function* rootSaga() {
    return yield all([
        ip,
        user,
    ]);
}