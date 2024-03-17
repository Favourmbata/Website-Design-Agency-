import style from "./index.module.css"
import icon1 from "../../assert/Vector (1).png"
import icon2 from "../../assert/footer/icons/Icon (2).png"
import icon3 from "../../assert/footer/Icon.png"
import icon4 from "../../assert/Icon.png"


const Hero5 = ()=>{
    return(
        <div>
            <div className={style.mainCont}>

                <div className={style.secondCont}>
                    <h4>Helping a local business <span
                        style={{color: "#66BA6A", display: "block"}}>reinvent itself</span></h4>
                </div>
            </div>

            <div className={style.thirdCont}>
                <p>We reached here with our hard work and dedication</p>
            </div>



            <div className={style.description}>

                <div className={style.group1}>

                    <div>
                    <img src={icon1} alt={""} className={style.iconPic}/>
                    </div>

                        <div>
                        <h4>2,245,341</h4>
                       </div>

                    <div>
                        <p className={style.members}>Members</p>
                    </div>


                    <div>
                        <img src={icon2} alt={""}/>
                    </div>

                    <div>
                        <h4>46,328</h4>
                    </div>
                    <p className={style.club}>Clubs</p>

                </div>


                <div className={style.group2}>

            <div>
                <img src={icon3} alt={""}/>
            </div>

            <div>
                <h4>828,867</h4>
            </div>
            <p className={style.book}>Event Bookings</p>


            <div>
                <img src={icon4} alt={""}/>
            </div>

            <div>
                <h4>1,926,436</h4>
            </div>
            <p className={style.pay}>Payment</p>




              </div>



            </div>



        </div>
    )
}

export default Hero5;