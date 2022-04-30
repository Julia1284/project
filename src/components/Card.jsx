import ButtonAdd from "./Buttonadd";
import stylecard from './Card.module.css';
function Card(props) {
    return (
        <div className={stylecard.card}>
            <div className={stylecard.card_body}>
                <h4 className="title">{props.english}</h4>
                <div className="card-word">{props.transcription}</div>
                <button className={stylecard.btn_flip}>Flip the card</button>
            </div>
            <ButtonAdd element="to learn" />
        </div>
    )
}
export default Card