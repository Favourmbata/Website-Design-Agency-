import  style from "./index.module.css";
import logo from "../../../assert/Logo (2).svg"



const Navbar = () =>{
    return (
        <div className={style.mainCont}>

            <div className={style.next}>
                <img src={logo} alt={"icon"}/>
            </div>

            <div className={style.linkCont}>
                <p>Home</p>
                <p>Service</p>
                <p>Feature</p>
                <p>Product</p>
                <p>Testimonial</p>
                <p>FQA</p>
            </div>

            <div className={style.login}>

                <div>
           <button className={style.log}>Login</button>
                </div>

                <div>
                    <button className={style.signUp}>Sign up</button>
                </div>

            </div>

        </div>
    )
}

export default Navbar;