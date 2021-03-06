import { useState } from 'react';
import ed from '../assets/img/edit.svg';
import del from '../assets/img/delete.svg';
import styleRows from './Rows.module.css';
import * as classnames from 'classnames';

function Rows(props) {
    const defaultState = {
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        tags: props.tags
    }
    const [isEditMode, setIsEditMode] = useState(false);
    const [state, setState] = useState(defaultState)
    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        setClicked(true);
        setCancel(false);
        setIsEditMode(true);
    }
    const [cancel, setCancel] = useState(false);
    const handleCancel = () => {
        setCancel(true);
        setClicked(false);
        setIsEditMode(false)
        setState({
            ...defaultState
        })
    }

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.dataset.name]: event.target.value,
        })
    }

    return (
        <tr>
            <td className={styleRows.rows}>
                {isEditMode ?
                    <input className={styleRows.input} data-name={'english'} onChange={handleChange} value={state.english}></input>
                    : props.english}</td>
            <td className={styleRows.rows}>
                {isEditMode ?
                    <input className={styleRows.input} data-name={'transcription'} onChange={handleChange} value={state.transcription}></input>
                    : props.transcription}</td>
            <td className={styleRows.rows}>
                {isEditMode ?
                    <input className={styleRows.input} data-name={'russian'} onChange={handleChange} value={state.russian}></input>
                    : props.russian}</td>
            <td className={styleRows.rows}>
                {isEditMode ?
                    <input className={styleRows.input} data-name={'tags'} onChange={handleChange} value={state.tags}></input>
                    : props.tags}</td>
            <td className={styleRows.rows}>
                <button className={classnames(styleRows.btn_save, { [styleRows.nonactive]: clicked === false }, { [styleRows.nonactive]: cancel })} >Save</button>
                <button onClick={handleCancel} className={classnames(styleRows.btn_save, { [styleRows.nonactive]: clicked === false }, { [styleRows.nonactive]: cancel })}>Cancel</button>
                <button onClick={handleClicked} className={classnames(styleRows.btn_edit, { [styleRows.btn_edit]: cancel && clicked === false }, { [styleRows.nonactive]: clicked })}>
                    <img className={styleRows.img_edit} src={ed} alt="edit"></img>
                </button>

            </td>
            <td className={styleRows.rows}>
                <button className={styleRows.btn_delete}>
                    <img className={styleRows.img_edit} src={del} alt="delete"></img>
                </button>
            </td>
        </tr>
    )
}
export default Rows