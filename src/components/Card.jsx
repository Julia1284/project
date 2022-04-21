import ButtonAdd from "./Buttonadd"
function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="title">{props.title}</h4>
                <div className="card-word">{props.word}</div>
                <button>Перевернуть</button>
            </div>
            <ButtonAdd element="к изучению" />
        </div>
    )
}
export default Card