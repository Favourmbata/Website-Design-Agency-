import style from "./index.module.css"
import image from "../../assert/footer/pana.png";


const  Hero6 = ()=>{
    return (
        <div className={style.mainCont}>

            <div className={style.midCont}>

              <div>
                  <img src={image} alt={""} className={style.imageIcon}/>
              </div>


                <div className={style.middleDiv}>

                  <div>
                      <h3>How to design your site footer like <span style={{display:"block"}}></span> we did</h3>
                  </div>

                    <div>
                        <div>
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
                            <span style={{display: "block"}}></span> molestie, massa nunc varius arcu, at scelerisque
                            elit
                            erat a magna. Donec quis erat at
                            <span style={{display: "block"}}></span> libero ultrices mollis. In hac habitasse platea
                            dictumst. Vivamus vehicula leo dui, at porta
                            <span style={{display: "block"}}></span> nisi facilisis finibus. In euismod augue vitae nisi
                            ultricies, non aliquet urna tincidunt. Integer
                            <span style={{display: "block"}}></span> in nisi eget nulla commodo faucibus efficitur quis
                            massa. Praesent felis est, finibus et nisi
                            <span style={{display: "block"}}></span>
                            ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                        </div>

                        <button className={style.learnButton}>Learn More</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Hero6;