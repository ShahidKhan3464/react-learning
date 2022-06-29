const Search = (props) => {
    return (
        <div className="item">
            <div className="ui transparent icon input">
                <input type="text" placeholder={props.search} />
                <i className="search icon"></i>
            </div>
        </div>
    )
}

export default Search;