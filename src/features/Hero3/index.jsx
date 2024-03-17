import style from "./index.module.css"
import {Content} from "./data";

const Hero3 = ()=>{
    return(
        <div>
        <div className={style.mainCont}>

            <div className={style.mid}>
                <p>Manage Your Entire Community <span style={{display:"block"}}>in a Single system </span></p>
                <p className={style.p}>Who is Nextcent suitable for?</p>
            </div>

        </div>

            <div className={style.mapped}>
                {
                    Content.map((item,index)=>(
                        <div key={index}>
                            <img src={item.image} alt={"text"}/>
                            <h3 className={style.title}>
                                {item.title}
                            </h3>
                            <p className={style.text}>
                                {item.text}
                            </p>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default Hero3;