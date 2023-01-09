export const LoadMoreButton = ({ onClick }) => {
  // loadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  //   this.props.onClick(this.state.page);
  // };

  return (
    <button type="button" className="Button" onClick={onClick}>
      Load more
    </button>
  );
};
