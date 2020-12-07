import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";

import {
  fetchDayRemindersSuccess,
  fetchAllExpensesSuccess,
  fetchTagsSuccess,
  fetchExpensesToChartSuccess,
} from "./actions";

function* getDayReminders({ payload }) {
  const { token, today } = payload;

  const response = yield call(
    api.get,
    `/expense?token=${token}&reminderCreated=${today}`
  );
  if (response) yield put(fetchDayRemindersSuccess(response.data));
}

function* getAllExpenses({ payload }) {
  const { token } = payload;

  const response = yield call(api.get, `/expense?token=${token}`);
  if (response) yield put(fetchAllExpensesSuccess(response.data));
}

function* getTags({ payload }) {
  const { token } = payload;

  const response = yield call(api.get, `/tag?token=${token}`);
  if (response) yield put(fetchTagsSuccess(response.data));
}

function* getExpensesToChart({ payload }) {
  const { token } = payload;

  const response = yield call(api.get, `/expensestochart?token=${token}`);
  if (response) yield put(fetchExpensesToChartSuccess(response.data));
}

export default all([
  takeLatest("FETCH_DAY_REMINDERS_REQUEST", getDayReminders),
  takeLatest("FETCH_ALL_EXPENSES_REQUEST", getAllExpenses),
  takeLatest("FETCH_TAGS_REQUEST", getTags),
  takeLatest("FETCH_EXPENSES_TO_CHART_REQUEST", getExpensesToChart),
]);
