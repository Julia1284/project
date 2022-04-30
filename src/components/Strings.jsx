import ed from '../assets/img/edit.svg';
import del from '../assets/img/delete.svg';
import styleStrings from './Strings.module.css';
console.log(styleStrings)
function Strings(props) {
    let nonactiveEdit = '';
    let nonacticeSave = '';
    if (props.displayEdit === false) nonactiveEdit = styleStrings.nonactive
    if (props.displayEdit === true) nonacticeSave = styleStrings.nonactive
    return (
        <tr>
            <td className={styleStrings.rows}>{props.english}</td>
            <td className={styleStrings.rows}>{props.transcription}</td>
            <td className={styleStrings.rows}>{props.russian}</td>
            <td className={styleStrings.rows}>{props.tags}</td>
            <td className={styleStrings.rows}>
                <button className={`${styleStrings.btn_save} ${nonacticeSave}`} >Save</button>
                <button className={`${styleStrings.btn_save} ${nonacticeSave}`} >Cancel</button>
                <button className={`${styleStrings.btn_edit} ${nonactiveEdit}`}>
                    <img className={styleStrings.img_edit} src={ed} alt="edit"></img>
                </button>

            </td>
            <td className={styleStrings.rows}>
                <button className={styleStrings.btn_delete}>
                    <img className={styleStrings.img_edit} src={del} alt="delete"></img>
                </button>
            </td>
        </tr>
    )
}
export default Strings