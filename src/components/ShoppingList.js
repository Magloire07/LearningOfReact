import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import './styles/ShoppingList.css'
import { useState } from 'react'
import React from 'react'

function ShoppingList({ cart, updateCart }) {
   const [catCourant,FiltrerCat]= useState(" ") // si on creer le state dans categories on ne poura pas le passé à shoppingList
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
/*
catCourant : categories selectionnée
FiltrerCat : la fonction d'apdate dela categories selectionnée
categories : la liste des categories sans doublons 

*/
function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name)
    if (currentPlantSaved) {
        const cartFilteredCurrentPlant = cart.filter(
            (plant) => plant.name !== name
        )
        updateCart([
            ...cartFilteredCurrentPlant,
            { name, price, amount: currentPlantSaved.amount + 1 }
        ])
    } else {
        updateCart([...cart, { name, price, amount: 1 }])
    }
}

localStorage.setItem("cart",JSON.stringify(cart))

	return (
		<div>
             <Categories  FiltrerCat={FiltrerCat} categories={categories}/> 

			<ul className='lmj-plant-list'>
				{plantList.map((plant) => ((plant.category===catCourant||catCourant===" ") &&
				 <div key={plant.id}>
                    <PlantItem name={plant.name} cover={plant.cover} id={plant.id}light={plant.light}water={plant.water}/> 
                    <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                    </div>	
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
