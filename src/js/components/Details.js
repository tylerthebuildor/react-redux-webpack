import React, {
  PropTypes,
} from 'react';

export default class Details extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.refreshDetails(this.props.user, this.props.repoName);
  }

  render() {
    return (
      <div>
        <h1>{this.props.details.name}</h1>
        <ul>
          <li>Stars: {this.props.details.stargazers_count}</li>
          <li>Forks: {this.props.details.forks}</li>
          <li>Watchers: {this.props.details.watchers}</li>
        </ul>
      </div>
    );
  }

}

Details.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
  details: PropTypes.object,
};

Details.defaultProps = {
  user: {},
  repos: [],
  details: {},
};
