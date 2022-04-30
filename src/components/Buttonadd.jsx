
import styleBtnAdd from './Buttonadd.module.css'
import '../App.css'
function ButtonAdd(props) {
    return (
        <div >
            <button className={styleBtnAdd.btn_add}>Add {props.element}</button>
        </div>
    )
}
export default ButtonAdd