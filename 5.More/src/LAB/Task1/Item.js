const Item = (props) => {
    const activeClass = props.isActive ? 'active teal item' : 'teal item'
    return (
        <a className={activeClass} href='https://test.com'>
            {props.item}
            <div className='ui teal left pointing label'>{props.value}</div>
        </a>
    )
}

export default Item;