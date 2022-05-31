import React, { useState } from "react"

function Item({ name, category }) {
	const [isAdded, setIsAdded] = useState(false)

	function handleLiClick() {
		setIsAdded((isAdded) => !isAdded)
	}

	const added = isAdded ? "in-cart" : ""
	const btnClass = isAdded ? "remove" : "add"

	return (
		<li className={added}>
			<span>{name}</span>
			<span className="category">{category}</span>
			<button
				className={btnClass}
				onClick={() => {
					handleLiClick()
				}}
			>
				{isAdded ? "Remove From Cart" : "Add to Cart"}
			</button>
		</li>
	)
}

export default Item
