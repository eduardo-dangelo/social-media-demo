import React from 'react';
import { ModalBoxContainer, BoxContent, BoxHeader } from '../../elements/layout';
import Flip from 'react-reveal/Flip';
import { FaTimes } from 'react-icons/fa';

class ModalBox extends React.Component {
  render() {
    const { header, size, children, onClose, mt } = this.props;
    return (
      <ModalBoxContainer size={size} mt={mt}>
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
      </ModalBoxContainer>
    )
  }
}

export default ModalBox;
