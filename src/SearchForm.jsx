import React from 'react'
import CountryList from './CountryList'

const SearchForm = (props) => {
  return (
    <CountryList>
        <h1>{props.head}</h1>
        <h3>Konu: {props.subject}</h3>
        {props.children}
        <p>Bu yazı children olarak country list comp a shearch comp dan gelmiştir.</p>
    </CountryList>
  )
}

export default SearchForm
