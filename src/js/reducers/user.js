const user = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return Object.assing({}, action.user);
    default:
      return state;
  }
};

export default user;
