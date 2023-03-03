import React from 'react'

const SearchForm = ({search, onSearchChange}) => {
    
    console.log(search)

    return (
        <form>
            <input
                name='search'
                placeholder='search countries'
                onChange={onSearchChange}
            />
        </form>
    )
}

export default SearchForm