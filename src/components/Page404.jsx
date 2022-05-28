
import stylePage404 from './Page404.module.css'
import Page404Image from '../assets/img/Page404.jpg'

function Page404() {
    return (
        <div>
            <div className={stylePage404.title}>404</div>
            <div className={stylePage404.text}>
                <p> Ошибка!</p>
                <p> К сожалению, запрашиваемая </p>
                <p>Вами страница не найдена ...</p>
            </div>
            <div className={stylePage404.image}>
                <img src={Page404Image} alt='Error'></img>
            </div>
        </div>
    )
}
export default Page404