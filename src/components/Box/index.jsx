import React from 'react';
import { BoxContainer, BoxContent, BoxHeader } from '../../elements/layout';
import Flip from 'react-reveal/Flip';

class Box extends React.Component {
  render() {
    return (
      <BoxContainer size={this.props.size} mt={this.props.mt}>
        {this.props.header && (
          <BoxHeader>
            <Flip top cascade>
              {this.props.header}
            </Flip>
          </BoxHeader>
        )}
        <BoxContent>
          {this.props.children}
        </BoxContent>
      </BoxContainer>
    )
  }
}

export default Box;
