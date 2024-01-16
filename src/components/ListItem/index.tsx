import * as C from './styles';
import {Item} from '../../types/item'
import { useState } from 'react';

type Props ={
    item: Item;
}

export const ListItem = ({item}: Props) =>{
    const [IsChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container done={IsChecked}>
           <input 
           type="checkbox" 
           checked={IsChecked}
           onChange={e => setIsChecked(e.target.checked)}
           />
           <label>
            {item.name}
           </label>
        </C.Container>
    );
}