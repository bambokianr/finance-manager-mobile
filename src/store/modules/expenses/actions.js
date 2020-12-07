export function fetchDayRemindersRequest(token, today) {
  return {
    type: "FETCH_DAY_REMINDERS_REQUEST",
    payload: { token, today },
  };
}

export function fetchDayRemindersSuccess(dayReminders) {
  return {
    type: "FETCH_DAY_REMINDERS_SUCCESS",
    payload: { dayReminders },
  };
}

export function fetchAllExpensesRequest(token) {
  return {
    type: "FETCH_ALL_EXPENSES_REQUEST",
    payload: { token },
  };
}

export function fetchAllExpensesSuccess(allExpenses) {
  return {
    type: "FETCH_ALL_EXPENSES_SUCCESS",
    payload: { allExpenses },
  };
}

export function fetchTagsRequest(token) {
  return {
    type: "FETCH_TAGS_REQUEST",
    payload: { token },
  };
}

export function fetchTagsSuccess(tags) {
  return {
    type: "FETCH_TAGS_SUCCESS",
    payload: { tags },
  };
}

export function fetchExpensesToChartRequest(token) {
  return {
    type: "FETCH_EXPENSES_TO_CHART_REQUEST",
    payload: { token },
  };
}

export function fetchExpensesToChartSuccess(expensesToChart) {
  return {
    type: "FETCH_EXPENSES_TO_CHART_SUCCESS",
    payload: { expensesToChart },
  };
}
