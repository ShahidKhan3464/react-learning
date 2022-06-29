class App extends React.Component {
    render() {
        return (
            <div>
                <h1>About Props</h1>
                <Hello 
                    from='Shahid Khan'
                    to='React' 
                    bangs={4}
                    img='2.jpg'
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))