import {takeLatest, put} from "redux-saga/effects"

function *workPost()
{
    yield put({type: "ALERT_POST"})
}

export function* watchPost()
{
    yield takeLatest("ADD_POST", workPost);
}