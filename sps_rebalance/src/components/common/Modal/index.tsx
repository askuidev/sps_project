import * as React from 'react';
const ReactModal = require('react-modal');
import { ModalProps } from '../../../types';

class Modal extends React.Component<ModalProps, {}> {
    componentWillMount() {
        ReactModal.setAppElement('body');
    }
    // callback function when Modal hide event occurs
    onModalHide = () => {
        const { onModalHide } = this.props;
        if (onModalHide) { onModalHide(); }
    }
    // callback function when Modal click event occurs
    onClick = () => {
        const { onSubmitClick } = this.props;
        if (onSubmitClick) { onSubmitClick(); }
    }
    // rendering the modal component based on the props
    renderModal() {
        const {
          children,
          titleText = 'Title',
          showModal = false
        } = this.props;
        return (
          <ReactModal
            contentLabel={titleText}
            onRequestClose={this.onModalHide}
            isOpen={showModal}
            shouldCloseOnOverlayClick={false}
            overlayClassName='reactmodal2-backdrop-custom modal-backdrop'
            className='reactmodal2-custom modal'
          >
            <div className="reactmodal2-header">
              <h1>{titleText}</h1>
            </div>
            <div className="reactmodal2-content">{children}</div>
            <div className="reactmodal2-footer">
              <button className="btn btn-default" onClick={this.onModalHide}>Close</button>
              <button
                  className="btn btn-primary btn-light-blue active"
                  onClick={this.onClick}
              >Save changes
              </button>
            </div>
          </ReactModal>
        );

    }
    render() {
        // adding draggable feature to the modal component based on the draggable prop
        return this.renderModal()
    }
}

export default Modal;
