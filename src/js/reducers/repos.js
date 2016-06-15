const repos = (state = [], action) => {
  switch (action.type) {
    case 'REFRESH_REPOS':
      return [...action.repos];
    default:
      return state;
  }
};

export default repos;
