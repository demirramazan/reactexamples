import React from 'react'

const SearchForm = (props) => {
    return (
        <form>
            <input
                name="search"
                placeholder="Bir Ülke İsmi Giriniz"
                value={props.search}
                onChange={props.onSearchChange}
            />
        </form>
    );
}

export default SearchForm;