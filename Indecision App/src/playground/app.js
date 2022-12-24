class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: []
        };
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {            
                const json = JSON.stringify(this.state.options)    //chuyển object về chuỗi JSON
                localStorage.setItem('options', json)       

            }    
    }

    handlePick() {
        const random = Math.floor(Math.random()* this.state.options.length)
        alert(this.state.options[random])
    }

    handleRemoveAll() {
        this.setState(() => ({options: []}))
    }

    handleAdd(option) {
        this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }

    handleRemove(id) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((element, index) => {
                    return index !== id
                })
            }
        })        
    }
    
    render() {
        return (
            <div>
                <Header></Header>
                <Action
                    options = {this.state.options}
                    handlePick = {this.handlePick}
                    handleRemoveAll = {this.handleRemoveAll}>
                </Action>
                <Options options = {this.state.options} handleRemove = {this.handleRemove}></Options>
                <AddOption handleAdd = {this.handleAdd}></AddOption>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subTitle}</p>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision app',
    subTitle: 'What should i eat for lunch?'
}

class Action extends React.Component {
    render() {
        const tmp = this.props.options.length <= 0
        return (
            <div>
                <button onClick = {this.props.handlePick} disabled = {tmp}>Offer</button>
                <button onClick = {this.props.handleRemoveAll}>Remove All Options</button>
            </div>
            
        )
    }
} 

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((element,index) => {
                        return <Option key = {element} option = {element} index = {index} handleRemove = {this.props.handleRemove}></Option>
                    })
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.option}</li>
                <button onClick = {(e) => {
                    this.props.handleRemove(this.props.index)
                    }}>Remove</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        this.props.handleAdd(option)
        e.target.elements.option.value = ''
    }

    render() {
        return (
        <div>
            <form onSubmit = {this.handleAdd}>
                <input type = 'text' name = 'option'></input>
                <button>Submit</button>
            </form>
        </div>
        )
    }
}

const appRoot = document.getElementById('app')
const root = ReactDOM.createRoot(appRoot)

root.render(<IndecisionApp/>)