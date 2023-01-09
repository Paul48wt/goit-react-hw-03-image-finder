import { Component } from 'react';

export class Button extends Component {
  state = {
    page: 1,
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.props.onClick(this.state.page);
  };

  render() {
    return (
      <button type="button" className="Button" onClick={this.loadMore}>
        Load more
      </button>
    );
  }
}
