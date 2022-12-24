import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
        <Modal isOpen = {!!props.selectedOption} contentLabel = 'Hello' closeTimeoutMS={200} className = 'modal'>
            <h3 className='modal-title'>Selected Option</h3>
            {props.selectedOption && (<p className='modal-body'>{props.selectedOption}</p>)}
            <button className = 'modal-button' onClick = {props.handleClose}>Okay</button>
        </Modal>
    )
}

export default OptionModal