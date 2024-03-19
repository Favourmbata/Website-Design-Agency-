import style from "./index.module.css"
import image from "../../assert/footer/icons/image 9.png"
import logo1 from  "../../assert/footer/icons/Logo (13).png"
import logo2 from  "../../assert/footer/icons/Logo (14).png"
import logo3 from "../../assert/footer/icons/Logo (9).png"
import logo4 from "../../assert/footer/icons/Logo.png"
import logo5 from "../../assert/footer/icons/Logo (3).png"



const Hero7 = ()=>{
    return(
        <div className={style.mainDiv}>

            <div className={style.linkDiv}>

               <div>
                   <img src={image} className={style.picture}/>
               </div>


                <div>

                <div className={style.text}>
                    <span>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                        <span style={{display:"block"}}></span> tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                        <span style={{display:"block"}}></span> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                        <span style={{display:"block"}}></span> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                        <span style={{display:"block"}}></span> eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                        <span style={{display:"block"}}></span> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum
                        <span style={{display:"block"}}></span>  id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</span>
                </div>

                    {/*<div>*/}
                            <h4 className={style.themes}>Tim Smith</h4>

                            <p>British Dragon Boat Racing Association</p>
                        {/*</div>*/}


                    <div className={style.iconLogos}>

                        <img src={logo1} alt={""} style={{color:"#5c23d8"}} />

                        <img src={logo2} alt={""}/>

                        <img src={logo3} alt={""}/>

                        <img src={logo4} alt={""}/>

                        <img src={logo5} alt={""}/>
                       <h4 className={style.customer}>Meet All Customer -></h4>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Hero7;