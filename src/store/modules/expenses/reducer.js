const INITIAL_STATE = {
  dayReminders: [],
  allExpenses: [],
};

const expenses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_DAY_REMINDERS_SUCCESS": {
      const { dayReminders } = action.payload;
      return { ...state, dayReminders };
    }
    case "FETCH_ALL_EXPENSES_SUCCESS": {
      const { allExpenses } = action.payload;
      return { ...state, allExpenses };
    }
    default: {
      return state;
    }
  }
};
export default expenses;
