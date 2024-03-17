import style from "./index.module.css"
 import HeroImage from "../../assert/footer/icons/Illustration.svg"
import button1 from "../../assert/footer/Ellipse 5.png"
import button2 from "../../assert/footer/Ellipse 7@2x.png"
import button3 from "../../assert/footer/icons/Ellipse 6.png"


const Hero = ()=>{
    return(
        <div className={style.major}>


        <div className={style.main}>

            <div>

            <div >
                <h1 className={style.insight}>Lesson and insights<span style={{color: "#66BA6A"}}><br/> from 8 years</span></h1>
                <p >where to grow your business as a photographer: sites or social media</p>

            </div>

            <button className={style.button}>register</button>
            </div>

            <div className={style.img}>
                <img src={HeroImage} alt={"heroImage"} className={style.img}/>
            </div>



        </div>
            <div className={style.circle}>
                <img src={button1} alt={"button1"} className={style.b1}/>
                <img src={button2} alt={"button2"} className={style.b2}/>
                <img src={button3} alt={"button3"} className={style.b3}/>
            </div>


        </div>
    )
}

export default Hero;