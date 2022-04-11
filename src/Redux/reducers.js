const AllReducers = (
  state = {
    getAllRecordCount: 0,
    getAllArticleBatchWise: [],
    getAllArticlesUserWise: [],
    getAllUsers: [],
    hasUserMarked: [],
    getAllAuthors: [],
    getAllAuthorsFailed: [],
    currentSelectedAuthor: "",
    currentSelectedCategory: "",
    currentSearchQuery: "",
    getCurrentPostHtml: "",
    getCurrentPostHtmlFailed: "",
    openPopModal: false,
    totalPages: 1,
    currentPage: 1,
  },
  action
) => {
  switch (action.type) {
    case "GET_TOTAL_PAGES": {
      return {
        ...state,
        totalPages: action.payload,
      };
    }
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case "GET_SELECTED_AUTHOR": {
      return {
        ...state,
        currentSelectedAuthor: action.payload,
      };
    }
    case "OPEN_POPUP_MODAL": {
      return {
        ...state,
        openPopModal: action.payload,
      };
    }
    case "GET_CURRENT_POST_HTML": {
      return {
        ...state,
        getCurrentPostHtml: action.payload,
      };
    }
    case "GET_CURRENT_POST_HTML_FAILED": {
      return {
        ...state,
        getCurrentPostHtmlFailed: action.payload,
      };
    }
    case "GET_SEARCH_QUERY": {
      return {
        ...state,
        currentSearchQuery: action.payload,
      };
    }
    case "GET_SELECTED_CATEGORY": {
      return {
        ...state,
        currentSelectedCategory: action.payload,
      };
    }
    case "GET_ALL_AUTHORS": {
      return {
        ...state,
        getAllAuthors: action.payload,
      };
    }
    case "GET_ALL_AUTHORS_FAILED": {
      return {
        ...state,
        getAllAuthorsFailed: action.payload,
      };
    }
    case "GET_ALL_RECORDS": {
      return {
        ...state,
        getAllArticleBatchWise: action.payload,
      };
    }
    case "GET_RECORD_COUNT": {
      return {
        ...state,
        getAllRecordCount: action.payload,
      };
    }
    case "HAS_USER_MARKED": {
      return {
        ...state,
        hasUserMarked: action.payload,
      };
    }
    case "GET_ALL_USERS": {
      return {
        ...state,
        getAllUsers: action.payload,
      };
    }
    case "GET_ALL_ARTICLES_BY_USER": {
      return {
        ...state,
        getAllArticlesUserWise: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default AllReducers;
