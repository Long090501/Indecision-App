class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    componentDidMount() {
        const json = localStorage.getItem('count')
        if(json !== 'undefined') {
            this.setState(() => {
            return {
                count: Number.parseInt(json)
            }})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state.count)
        localStorage.setItem('count',json)
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleReset}>reset</button>
            </div>
        )
    }
}

const appRoot = document.getElementById('app')
const root = ReactDOM.createRoot(appRoot)

root.render(<Counter></Counter>)

