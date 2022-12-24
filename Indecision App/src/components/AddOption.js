import React from "react"

class AddOption extends React.Component {
    constructor(props) {
        super(props)
    }

    handleAdd = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        this.props.handleAdd(option)
        e.target.elements.option.value = ''
    }

    render() {
        return (
        <div>
            <form onSubmit = {this.handleAdd} className="add-option">
                <input className="add-option-input" type = 'text' name = 'option'></input>
                <button className = 'add-button'>Submit</button>
            </form>
        </div>
        )
    }
}

export default AddOption