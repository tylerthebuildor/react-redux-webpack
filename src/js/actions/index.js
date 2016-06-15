export const changeUser = (user) => ({
  type: 'CHANGE_USER',
  user,
});

export const refreshRepos = (repos) => ({
  type: 'REFRESH_REPOS',
  repos,
});

export const refreshDetails = (details) => ({
  type: 'REFRESH_DETAILS',
  details,
});
