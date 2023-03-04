import React from 'react'

const SearchForm = (props) => {
  return (
    <div>
        <h1>{props.head}</h1>
        <h3>Konu: {props.subject}</h3>
        {props.children}
    </div>
  )
}

export default SearchForm
