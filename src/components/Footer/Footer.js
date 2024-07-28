import style from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();
      
    return (
        <div className={style.container}>
            <p className={style.text}>
                &#64; Agnieszka Olszówka {year}
            </p>
        </div>
    );
}

export default Footer;