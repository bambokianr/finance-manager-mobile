const INITIAL_STATE = {
  dayReminders: [],
  allExpenses: [],
  tags: [],
  expensesToChart: [],
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
    case "FETCH_TAGS_SUCCESS": {
      const { tags } = action.payload;
      return { ...state, tags };
    }
    case "FETCH_EXPENSES_TO_CHART_SUCCESS": {
      const { expensesToChart } = action.payload;
      return { ...state, expensesToChart };
    }
    default: {
      return state;
    }
  }
};
export default expenses;
