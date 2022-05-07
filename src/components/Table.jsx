import data from '../data/data.json';
import Strings from './Strings';
import styleTable from './Table.module.css';
import ButtonAdd from './Buttonadd';


function Table(props) {
    return (
        <div className={styleTable.wrapper}>
            <table className={styleTable.container}>
                <thead>
                    <tr className={styleTable.header}>
                        <th className={styleTable.columns}>English word</th>
                        <th className={styleTable.columns}>Transcription</th>
                        <th className={styleTable.columns}>Translation</th>
                        <th className={styleTable.columns}>Topic</th>
                        <th className={styleTable.columns}>Edit</th>
                        <th className={styleTable.columns}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) =>
                        <Strings key={data.id} english={data.english} transcription={data.transcription} russian={data.russian} tags={data.tags} displayEdit={data.display} />)}
                </tbody>
            </table>
            <ButtonAdd element='word' />
        </div>
    )

}
export default Table