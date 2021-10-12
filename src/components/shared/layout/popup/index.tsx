import React from "react"
import Modal from "react-modal"
import { PopupProps } from "./props"

export const customStylesDesktop = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 50,
        border: 'none',
        borderRadius: 18,
        maxWidth: 509
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
};

export const customStylesMobile = {
    content: {
        top: 'auto',
        right: 'auto',
        left: 0,
        bottom: 0,
        padding: '24px 24px 32px 24px',
        border: 'none',
        borderRadius: '30px 30px 0 0',
        width: '100%'
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
}

const Popup = (props: PopupProps) => {

    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            style={props.isMobile ? customStylesMobile : customStylesDesktop}>
            {props.children}
        </Modal>
    )
}

export default Popup;