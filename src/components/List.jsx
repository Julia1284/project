import ButtonAdd from "./Buttonadd";
import ButtonLearn from "./Buttonlearn";

function List(props) {
    const list = ['black', 'white', 'yellow', 'green']
    return (
        <div className="list">
            <h4 className="title">{props.title}</h4>
            {list.map(item => <li key={item}>{item}</li>)}
            <ButtonAdd element="слово" />
            <ButtonLearn />

        </div>


    )
}

export default List