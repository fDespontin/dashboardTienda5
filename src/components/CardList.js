import React from "react"
import Card from "./Card"

let moviesInDB = {
    title: 'Total de productos',
    color: 'primary', 
    cuantity: 8,
    icon: 'fa-gift'
}

let totalAwards = {
    title:' Total de categorías', 
    color:'success', 
    cuantity: '7',
    icon:'fa-archive'
}

let actorsQuantity = {
    title:'Cantidad de usuarios' ,
    color:'warning',
    cuantity:'2',
    icon:'fa-user-check'
}

let cardProps = [moviesInDB, totalAwards, actorsQuantity]

function CardList () {

return(

	<div className="row">

	{

		cardProps.map((data, i) => {

		return	<Card data ={data} key= {i} />

		})

	}

	</div>

    
)
}

export default CardList

