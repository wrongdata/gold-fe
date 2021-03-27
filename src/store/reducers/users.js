export default (users = [], action) => {
  switch (action.type) {
    case "IS_AUTH":
      return action.payload;
    default:
      return users;
  }
};
