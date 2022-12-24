import React from 'react'

class Action extends React.Component {
    render() {
        const tmp = this.props.options.length <= 0
        return (
            <div>
                <button className = 'todo-button' onClick = {this.props.handlePick} disabled = {tmp}>Offer</button>
                <div className='widget-header'>
                    <h3 className='widget-title'>Your Options</h3>
                    <button className = 'remove-button' onClick = {this.props.handleRemoveAll}>Remove All Options</button>
                </div>
            </div>
            
        )
    }
}

export default Action