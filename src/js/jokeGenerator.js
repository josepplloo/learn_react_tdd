import React from 'react';

export default class JokeGenerator extends React.Component {
  state = {
    joke: null,
    loading: true,
  };

  loadJoke = async () => {
    this.setState({loading: true});
  }

  render() {
    const {joke, loading} = this.state;

    return (
      <React.Fragment>
        {!joke && <div>You haven't loaded any jokes yet!</div>}
        {loading && <div>Loading...</div>}

        <button onClick={this.loadJoke} type="button">
          Load a random joke
        </button>
      </React.Fragment>  
    );
  }
}