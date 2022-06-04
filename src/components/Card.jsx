import React, { useState, useRef, useEffect } from "react";
import ButtonAdd from "./Buttonadd";
import stylecard from './Card.module.css';
import * as classnames from 'classnames';


function Card(props) {
    const [clicked, setClicked] = useState(false);
    const ref = useRef()

    useEffect(() => {
        ref.current.focus()
    })
    const handleClicked = () => {
        setClicked(!clicked)
        props.addWord()
    }


    return (
        <div className={stylecard.card}>
            <div className={stylecard.card_body}>
                <h4 className="title">{props.english}</h4>
                <div className="card-word">{props.transcription}</div>
                <button onClick={handleClicked} ref={ref} className={classnames(stylecard.btn_flip, { [stylecard.visibility]: clicked })}>Flip the card</button>
                <span className={classnames(stylecard.translation, { [stylecard.visibility]: clicked === false })}>{props.translation}</span>
            </div>
            {/* <ButtonAdd element="to learn" /> */}
        </div >
    )
}
export default Card