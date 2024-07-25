import style from './Offers.module.css';

const Offers = () => {
    return (
        <div className={style.container}>
            <p className={style.title}>
                Usługi
            </p>

            <div className={style.right}>
                <p className={style.text}>
                    Upięcia okolicznościowe
                </p>
                <p className={style.text}>
                    Koloryzacja
                </p>
            </div>
            <div className={style.left}>
                <p className={style.text}>
                    Strzyżenie męskie
                </p>
                <p className={style.text}>
                    Strzyżenie damskie
                </p>
            </div>
        </div>
    );
}

export default Offers;