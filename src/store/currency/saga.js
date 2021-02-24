import {call, put} from "redux-saga/effects";
import apiMethods from "../../api/apiMethods";
import {setCurrencyRate} from "./actions";

export function* fetchCurrencyRate(props) {
    const {globalActions: {enqueueSnackbar, setLoading}} = props;
    yield setLoading(true)
    try {
        const data = yield call(apiMethods.getCurrency);
        yield put(setCurrencyRate(data));
        yield setLoading(false)
    } catch (error) {
        yield put(enqueueSnackbar({
            message: error.toString(),
            options: {variant: 'error'},
        }));
    }
}

export default function* sagaWatcher(props) {
    yield call(fetchCurrencyRate, props);
}
