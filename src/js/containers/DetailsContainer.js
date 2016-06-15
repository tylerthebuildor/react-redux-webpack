import { connect } from 'react-redux';
import {
  changeUser,
  refreshRepos,
  refreshDetails,
} from '../actions';

import Details from '../components/Details';

function getRepos(user) {
  return dispatch => {
    fetch(`https://api.github.com/users/${user.name}/repos`)
      .then(res => res.json())
      .then(res => {
        if (res.errors) throw Error(res.errors[0].message);
        dispatch(refreshRepos(res));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

function getDetails(user, repoName) {
  return dispatch => {
    fetch(`https://api.github.com/repos/${user.name}/${repoName}`)
      .then(res => res.json())
      .then(res => {
        if (res.errors) throw Error(res.errors[0].message);
        dispatch(refreshDetails(res));
      })
      .catch(e => {
        console.log(e);
      });
  };
}

const mapStateToProps = (state, ownProps) => ({
  repoName: ownProps.params.repoName,
  user: state.user,
  repos: state.repos,
  details: state.details,
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => {
    dispatch(changeUser(user));
  },
  refreshRepos: (user) => {
    dispatch(getRepos(user));
  },
  refreshDetails: (user, repoName) => {
    dispatch(getDetails(user, repoName));
  },
});

const DetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);

export default DetailsContainer;
