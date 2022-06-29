const getMood = () => {
    const moodes = ['Angry', 'Happy', 'Sad', 'Excited', 'Fear']
    const randomMood = moodes[Math.floor(Math.random() * moodes.length)]
    return randomMood
}

// To embeed JS use curly braces inside JSX
class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My Mood is : {getMood()}</h1>
            </div>
        )
    }
}