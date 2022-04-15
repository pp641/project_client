const AllReducers = (
  state = {
    accountCreationDetails: {},
    accountLoginDetails: {},
    hasUserMarked: [],
    currentUser: {},
    isSnackBarSuccess: 0,
    currentStatusCode: 0,
  },
  action
) => {
  switch (action.type) {
    case "SET_SNACK_BAR": {
      return {
        ...state,
        isSnackBarSuccess: action.payload,
      };
    }

    case "CURRENT_STATUS_CODE": {
      return {
        ...state,
        currentStatusCode: action.payload,
      };
    }
    case "CREATE_ACCOUNT_SUCCESS": {
      return {
        ...state,
        accountCreationDetails: action.payload,
      };
    }
    case "GET_CURRENT_USER": {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case "GET_CURRENT_USER_FAILED": {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case "HAS_USER_MARKED": {
      return {
        ...state,
        hasUserMarked: true,
      };
    }
    case "HAS_USER_MARKED_FAILED": {
      return {
        ...state,
        hasUserMarked: true,
      };
    }
    case "CREATE_ACCOUNT_FAILED": {
      return {
        ...state,
        accountCreationDetails: action.payload,
      };
    }

    case "LOGIN_ACCOUNT_SUCCESS": {
      return {
        ...state,
        accountLoginDetails: action.payload,
      };
    }
    case "LOGIN_ACCOUNT_FAILED": {
      return {
        ...state,
        accountLoginDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default AllReducers;
