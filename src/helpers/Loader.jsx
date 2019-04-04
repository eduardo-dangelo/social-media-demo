import React from 'react';

class Loader extends React.Component {
  componentWillMount() {
    const { item, onLoad } = this.props;

    if (item) {
      onLoad(item);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { item, onLoad } = this.props;

    if (nextProps.item !== item) {
      onLoad(nextProps.item)
    }
  }


  render() {
    return <div/>;
  }
}

export default Loader;
