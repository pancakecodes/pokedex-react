// @flow strict

import * as React from 'react';

function PokemonSearch() {
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
            />
            <button onClick={() => {
                console.log('click')
            }}>Search</button>
            </div>
            
    );
}

export default PokemonSearch;