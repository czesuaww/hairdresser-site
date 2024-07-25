import style from './Arrow.module.css';

const Arrow = () => {

    const scrollToAboutMe = () => {
        const aboutMeSection = document.getElementById('aboutMeSection');
        if (aboutMeSection) aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    }

 return (
     <div className={style.container}>
        <p onClick={scrollToAboutMe}> 
            <i className={style.arrow}></i>
        </p>
     </div>
 );
}

export default Arrow;