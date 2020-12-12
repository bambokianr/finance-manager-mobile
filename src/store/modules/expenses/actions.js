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