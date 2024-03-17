import style from "./index.module.css"
import logo1 from  "../../assert/footer/icons/Logo (13).png"
import logo2 from  "../../assert/footer/icons/Logo (14).png"
import logo3 from "../../assert/footer/icons/Logo (9).png"
import logo4 from "../../assert/footer/icons/Logo.png"
import logo5 from "../../assert/footer/icons/Logo (3).png"
import logo6 from "../../assert/footer/icons/Logo (6).png"



const Hero2 = ()=>{
    return (
        <div>
            <div className={style.mainCont}>

                <div className={style.client}>
                    <h1>Our Client</h1>
                    <p>We have been working with some Fortune 500 + clients</p>
                </div>


            </div>

            <div className={style.logos}>
                <img src={logo1} alt={"logo1"}/>
                <img src={logo2} alt={"logo2"}/>
                <img src={logo3} alt={"logo4"}/>
                <img src={logo4} alt={"logo3"}/>
                <img src={logo5} alt={"logo5"}/>
                <img src={logo6} alt={"logo6"}/>
                <img src={logo3} alt={"logo7"}/>

            </div>


        </div>

    )
}

export default Hero2;