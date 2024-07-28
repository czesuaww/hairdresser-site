import style from './Gallery.module.css';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img8 from '../../assets/images/8.jpg';
import img9 from '../../assets/images/9.jpg';
import img10 from '../../assets/images/10.jpg';
import img11 from '../../assets/images/11.jpg';
import img12 from '../../assets/images/12.jpg';

const Gallery = () => {
    return (
        <div className={style.container}>
            <p className={style.header}>
                Kilka moich prac
            </p>
            <ul>
                <li>
                    <figure>
                        <img src={img1} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img2} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img3} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img4} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img5} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img6} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img7} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img8} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img9} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img10} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img11} alt='Hair styling'/>
                    </figure>
                </li>
                <li>
                    <figure>
                        <img src={img12} alt='Hair styling'/>
                    </figure>
                </li>
            </ul>
        </div>
     
    ); 
}

export default Gallery;