import styleHeader from './Header.module.css'
import icon from '../assets/img/icon.png';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className={styleHeader.wrapper}>
            <Link to='/words'>
                <div className={styleHeader.icon}>
                    <img src={icon} alt='icon'></img>
                </div>
            </Link>
            <div className={styleHeader.toggle_buttons}>
                <Link to='/words'><button className={styleHeader.toggle}>Home   /</button></Link>
                <Link to='/game'><button className={styleHeader.toggle}>Game</button></Link>
            </div>
        </div>
    )
}
export default Header