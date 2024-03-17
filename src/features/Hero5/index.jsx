import style from "./index.module.css"
import icon1 from "../../assert/Vector (1).png"
import icon2 from "../../assert/footer/icons/Icon (2).png"
import icon3 from "../../assert/footer/Icon.png"
import icon4 from "../../assert/Icon.png"


const Hero5 = ()=>{
    return(
        <div className={style.general}>
            <div className={style.mainCont}>
                <div>
                    <div className={style.secondCont}>
                        <h4>Helping a local business <span
                            style={{color: "#66BA6A", display: "block"}}>reinvent itself</span></h4>
                    </div>

                    <div className={style.thirdCont}>
                        <p>We reached here with our hard work and dedication</p>
                    </div>

                </div>

                <div className={style.majorDiv}>
                    <div className={style.description}>

                        <div className={style.group1}>
                            <div>
                                <img src={icon1} alt={""} className={style.iconPic}/>
                            </div>

                            <div>
                                <h4>2,245,341</h4>
                                <p>Members</p>

                            </div>

                        </div>

                        <div className={style.group2}>
                            <div>
                                <img src={icon2} alt={""} className={style.iconPic2}/>
                            </div>

                            <div>
                                <h4>46,328</h4>
                                <p className={style.club}>Clubs</p>

                            </div>

                        </div>

                    </div>

                    <div className={style.description1}>

                        <div className={style.group3}>
                            <div>
                                <img src={icon3} alt={""} className={style.iconPic3}/>
                            </div>
                            <div>
                                <h4> 828,867</h4>
                                <p>Event Booking</p>

                            </div>

                        </div>

                        <div className={style.group4}>

                            <div>
                                <img src={icon4} alt={""} className={style.iconPic4}/>
                            </div>


                            <div>
                                <h4>1,926,436</h4>
                                <p className={style.pay}>Payments</p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Hero5;