import React from 'react';

import { Card } from "../card/card.component";

import './card-list.styles.css';

export const CardListComponent = props => {
    return (
        <ul className='card-list'>
             {
                props.monsters.map(monster => (
                    <Card key={ monster.id } monster={ monster } />
                ))
            }
        </ul>
    )
}
    