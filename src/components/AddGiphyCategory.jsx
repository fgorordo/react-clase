import React, { useState } from 'react'

const AddGiphyCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 2) return;
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }


    return (
        <section>
            <h3>Add Gihpy Category</h3>
            <form action="#" onSubmit={onFormSubmit}>
                <label htmlFor="search">Ingrese la categoria</label><br />

                <input
                    type="text"
                    name="search"
                    value={inputValue}
                    onChange={onInputChange}
                /><br />

                <button type="submit">Buscar</button>
            </form>

            
        </section>
    )
}

export default AddGiphyCategory;
