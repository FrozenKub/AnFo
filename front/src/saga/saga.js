import {takeEvery, put} from "redux-saga/effects"

function *workPost()
{
    yield put({type: "ALERT_POST"})
}

export function* watchPost()
{
    yield takeEvery("ADD_POST", workPost);
}