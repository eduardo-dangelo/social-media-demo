import React from 'react';
import { BoxContainer, BoxContent, BoxHeader } from '../../elements/layout';
import Flip from 'react-reveal/Flip';
import { FaTimes } from 'react-icons/fa';

class Box extends React.Component {
  render() {
    const { header, size, children, onClose, mt } = this.props;
    return (
      <BoxContainer size={size} mt={mt}>
        {header && (
          <BoxHeader>
            <Flip top cascade>
              {header}
            </Flip>
            {onClose && <a onClick={onClose}><FaTimes/></a>}
          </BoxHeader>
        )}
        <BoxContent>
          {children}
        </BoxContent>
      </BoxContainer>
    )
  }
}

export default Box;
