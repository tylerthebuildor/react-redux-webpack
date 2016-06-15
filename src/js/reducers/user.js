const defaultUser = { name: 'tylerbuchea' };

const user = (state = defaultUser, action) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return Object.assign({}, action.user);
    default:
      return state;
  }
};

export default user;
