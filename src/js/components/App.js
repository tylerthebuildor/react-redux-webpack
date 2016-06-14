import React, {
  PropTypes,
} from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>Asuh dude!</h1>
        <h2>Get lit fam</h2>
      </div>
    );
  }

}

App.propTypes = {
  user: PropTypes.object,
};

App.defaultProps = {
  user: {},
};
