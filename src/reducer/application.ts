const initialState={
isAuthenticated:false,
}

export const application = (state:object = initialState, action:any) => {
  switch (action.type) {
    case "IS_USER_AUTHINTCATED":
      return !state;
    default:
      return state;
  }
};
