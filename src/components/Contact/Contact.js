import style from './Contact.module.css';

const Contact = () => {
    return (
        <div className={style.container}>
            <p className={style.header}>
                Kontakt
            </p>

            <p className={style.text}>
                Jesli podoba Ci sie moja praca, zapraszam serdecznie do kontaktu:
            </p>

            <div className={style.contacts}>
                <span className={style.contact}>
                    514 441 942
                </span>
                <a href="https://www.instagram.com/fryzjer_mobilny_aga_olszowka_/" target="_blank" rel="noreferrer">
                    <span className={style.contact}>
                        Facebook
                    </span>
                </a>
               
                <a href="https://www.facebook.com/fryzjer.mobilny.aga.olszowka" target="_blank" rel="noreferrer">
                    <span className={style.contact}>
                        Instagram
                    </span>
                </a>
            </div>
        </div>
    );
}

export default Contact;