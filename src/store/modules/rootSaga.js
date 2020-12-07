import { all } from "redux-saga/effects";
import expenses from "./expenses/sagas";

export default function* rootSaga() {
  return yield all([expenses]);
}
