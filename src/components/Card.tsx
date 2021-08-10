import './Card.css'
import {PropsWithChildren} from 'react';

function Card(props: PropsWithChildren<any>) {
    const classes = 'card ' + props.className;
    return  <div className={classes}>{props.children}</div>;
}

export default Card;
