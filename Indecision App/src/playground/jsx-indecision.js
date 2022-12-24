console.log('app.js is running!')

const obj = {
    title: 'Indecision app',
    subTitle: 'What should i eat for lunch?',
    options: []
}

const appRoot = document.getElementById('app')
const root = ReactDOM.createRoot(appRoot)

const handleSubmitted = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value
    if(option) {
        obj.options.push(option)
        e.target.elements.option.value = ''  
    }
    renderApp()
}

const handleClick = () => {
    obj.options = []
    renderApp()
}

const renderApp = () => {
    const template = (
        <React.Fragment>       
        {obj.title && (<h1>{obj.title}</h1>)}
        {obj.title && (<p>{obj.subTitle}</p>)}
        <button onClick = {handleClick}>Remove list</button>
        <form onSubmit = {handleSubmitted}>
        <input type = 'text' name = 'option'></input>
        <button>Add option</button>
        </form>
        {((obj.options).length>0) ? (<p>Here are your options</p>) : (<p>No options</p>)}
        {((obj.options).length>0) && 
        (<ol>
            {(obj.options).map((element, index) => (
                <li key = {index}>{element}</li>
            ))}
        </ol>)}
        </React.Fragment>
    )
    
    
    root.render(template)
}

renderApp()