import React, { useState } from 'react'
import AddGiphyCategory from './AddGiphyCategory';
import GiphyGrid  from './GiphyGrid';

 const GhipyMainApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    
    return (
        <main>
            <section>
                <h1>
                    Gihpy Main App
                </h1>
            </section>

            {/* Section Add GhipyCategory */}
            <section>
                <AddGiphyCategory onNewCategory = {onAddCategory}/>
            </section>

            {/* Section GiphyGrid */}
            <section>
                {
                    categories.map(category => {
                        return (
                            <GiphyGrid key={category} category={category}/>
                        )
                    })
                }
            </section>
        </main>
    );
}

export default GhipyMainApp;