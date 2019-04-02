import React from 'react';
import { BodyContainer, BodyContent } from '../../elements/shell';
import { StyleContext } from '../../scenes';

class Body extends React.Component {
  render() {
    return (
      <StyleContext.Consumer>
        {(styles) => (
          <BodyContainer styles={styles}>
            <BodyContent>
              {this.props.children}
            </BodyContent>
          </BodyContainer>
        )}
      </StyleContext.Consumer>
    );
  }
}

export default Body;
