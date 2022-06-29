class App extends React.Component {
    render() {
        return (
            <div>
                <List
                    name='shahid'
                    hobbies={['Coding', 'Watching', 'Thinking']}
                />
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('root'))