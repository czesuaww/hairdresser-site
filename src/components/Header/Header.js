import style from './Header.module.css';
import Arrow from '../Arrow/Arrow';

const Header = () => {
    return (
        <div className={style.header}>
            <header className={style.firstPic}>
            </header>
            <p className={style.titleSearch}>Chcesz poznać więcej moich prac?</p>
            <Arrow/>
        </div>    
    )
}

export default Header;