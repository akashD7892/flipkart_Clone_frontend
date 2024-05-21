import styled from '@emotion/styled'
import { InputBase, Box, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux' ;
import { getProducts } from '../../redux/actions/productActions';
import {Link} from 'react-router-dom'

const SearchConstainer = styled(Box)`
 background:white;
 width:38%;
 border-radius: 2px;
 margin-left:10px;
 display:flex;
`
const InputsearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`
const SearchIconWrapper = styled(Box)`
color:blue;
padding:5px;
display:flex ;

`
const ListWrapper = styled(List)`
 position: absolute ;
 color:black;
 background:white ;
 margin-top:36px;
`

export default function Search() {
    

    const [text, setText] = useState('') ;
    const { products } = useSelector( state => state.getProducts) ;
    const dispatch = useDispatch() ;

    useEffect( () => {
       dispatch(getProducts())
    }, [dispatch])
    const getText = (text) => {
      setText(text) ;
    }
    return (
        <SearchConstainer>
            <InputsearchBase
                placeholder='Search for product' 
                onChange={ (e) => getText(e.target.value) }
                value = {text} 
                />
            <SearchIconWrapper >
                <SearchIcon />
            </SearchIconWrapper >

            {
                text && 
                 <ListWrapper>
                    {
                        products
                        .filter( product => product.title.longTitle.toLowerCase().includes(text.toLowerCase()))
                        .map( product => (
                            <ListItem >
                                <Link 
                                 to={  `/product/${product.id}` }
                                 onClick={ () => setText('') }
                                 style={ {textDecoration:'none', color:'inherit'} }
                                >
                                 {product.title.longTitle} 
                                </Link>
                               
                            </ListItem>
                        ))
                    }
                 </ListWrapper>
            }
        </SearchConstainer>

    )
}
