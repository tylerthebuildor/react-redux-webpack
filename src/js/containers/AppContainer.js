import { connect } from 'react-redux';
import {
  changeUser,
} from '../actions';

import App from '../components/App';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  changeUser: (user) => {
    dispatch(changeUser(user));
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
