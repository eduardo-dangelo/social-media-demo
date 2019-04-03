import React from 'react';
import { ModalContainer, Overlay } from '../../elements/layout';
import Tada from 'react-reveal/Tada';
import ModalBox from './ModalBox';

class Modal extends React.Component {
  render() {
    const { header, size, children, onClose, show } = this.props;

    if (!show) {
      return null;
    }

    return (
      <ModalContainer>
        <Tada duration={1000}>
          <ModalBox
            header={header}
            size={size}
            onClose={onClose}
          >
            {children}
          </ModalBox>
        </Tada>
        <Overlay onClick={onClose}/>
      </ModalContainer>
    )
  }
}

export default Modal;