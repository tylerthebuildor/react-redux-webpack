const details = (state = {}, action) => {
  switch (action.type) {
    case 'REFRESH_DETAILS':
      return Object.assign({}, action.details);
    default:
      return state;
  }
};

export default details;
