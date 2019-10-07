import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Contexts

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { tsPropertySignature } from '@babel/types';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
		<ProductContext.Provider value={{ products, addItem }}>
			<Route
				exact
				path="/"

				/* Before */
				// render={() => (
				// 	<Products
				// 		products={products}
				// 		addItem={addItem}
				// 	/>

				/* After */
				component={Products}
			/>
				<CartContext value ={cart}>
					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
						/>
				</CartContext>
		 </ProductContext.Provider>
		</div>
	);
}

export default App;
