import style from "./index.module.css"
import image from  "../../assert/footer/icons/rafiki.png"


const Hero4 = ()=>{
    return(
        <div className={style.mainCont}>

            <div>
                <img src={image} alt={""}/>
            </div>
           <div>

            <div className={style.midCont}>
                <h5>The unseen of spending three <span style={{display:"block"}}>
                </span> years at Pixelgrade</h5>
            </div>

            <div className={style.thirdCont}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <span style={{display:"block"}}></span>
                    accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
                    <span style={{display:"block"}}></span> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam
                    <span style={{display:"block"}}></span> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            </div>

            <div>
                <button className={style.learn}>Learn More</button>
            </div>

           </div>

        </div>
    )
}
export default Hero4;