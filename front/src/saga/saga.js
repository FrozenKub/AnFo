import {takeLatest, takeEvery, put} from "redux-saga/effects"

function *workPost()
{
    yield put({type: "ALERT_POST"})
}

export function* watchPost()
{
    yield takeLatest("ADD_POST", workPost);
}

function *workLogin()
{
    yield put({type: "ALERT_LOGIN"})
}

export function* watchLogin()
{
    yield takeEvery("LOGGING", workLogin);
}

function *workRegister()
{
    yield put({type: "ALERT_REGISTER"})
}

export function* watchRegister()
{
    yield takeEvery("REGISTER", workRegister);
}