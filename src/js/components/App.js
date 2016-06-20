import React, {
  PropTypes,
} from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.changeUser = this.changeUser.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount() {
    this.props.refreshRepos(this.props.user);
  }

  changeUser() {
    const input = prompt('Enter Github Username');
    if (input) {
      const newUser = { name: input };
      this.props.changeUser(newUser);
      this.props.refreshRepos(newUser);
    }
  }

  showDetails(repo) {
    this.props.history.push(`/details/${repo.name}`);
  }

  render() {
    return (
      <div className="header">
        <h1>{this.props.user.name}</h1>
        <button onClick={() => this.changeUser()}>Change User</button>
        <ul className="content">
          {this.props.repos.map((repo, repoIndex) =>
            <li key={repoIndex}>
              <button onClick={() => this.showDetails(repo)}>
                {repo.name}
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  }

}

App.propTypes = {
  user: PropTypes.object,
  repos: PropTypes.array,
};

App.defaultProps = {
  user: {},
  repos: [],
};
