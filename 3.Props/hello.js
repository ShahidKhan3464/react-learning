class Hello extends React.Component {
    render() {
        const props = this.props
        let bangs = "!".repeat(this.props.bangs)
        let src = this.props.img
        return (
            <div>
                <p>Hi {props.to} from {props.from} {bangs}</p>
                <p>The Shown below img is mine</p>
                <img src={src}/>
            </div>
        )
    }
}