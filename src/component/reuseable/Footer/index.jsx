 import style from "./index.module.css"
 import logo from "../../../assert/footer/icons/Icon.png"
 import instagramIcon from "../../../assert/footer/instagram.png"
 import logo1 from "../../../assert/footer/icons/twitter-Icons.png"
 import twitterIcon from "../../../assert/footer/icons/tire.png"
import youtubeIcon from "../../../assert/footer/icons/youtube Icons.png"
 import emailIcon from "../../../assert/footer/icons/Vector.png"


const Footer = ()=>{


    const date = new Date().getFullYear();
    return(
      <div className={style.mainCont}>

          <div className={style.secondCont}>


              <div className={style.nextDesign}>

                  <div className={style.nextDD}>
                      <img src={logo} alt={""}/>
                      <h3 className={style.core}>NexCent</h3>
                  </div>

              </div>


              <div className={style.write}>
                  <span className={style.copy}> Copyright &copy; {date} Nexcent ltd.</span>
              </div>
              <div>

                  <div>
                      <p className={style.reserve}> All rights reserved</p>
                  </div>
              </div>

                  <div className={style.followIcon}>
                      <img src={instagramIcon}/>
                      <img src={twitterIcon}/>
                      <img src={logo1}/>
                      <img src={youtubeIcon}/>
                  </div>
          </div>


               <div className={style.grouped}>

              <div className={style.sub2}>
                      <h3>Company</h3>
                      <span>About us</span>
                      <span>Blog</span>
                      <span>Contact us</span>
                      <span>Pricing</span>
                      <span>Testimonials</span>
              </div>
                   <div className={style.sub2}>
                       <h3>Support</h3>
                       <span>Help Center</span>
                       <span>Terms Of service</span>
                       <span>Legal</span>
                       <span>Privacy Policy</span>
                       <span>Status</span>
                   </div>


                   <div className={style.sub3}>

                       <h3>Stay up to date </h3>

                       <div className={style.address}>
                           <button className={style.email}>Your Email Address</button>
                           <img src={emailIcon} alt={""}/>
                       </div>

                   </div>

               </div>

      </div>
    )
}

 export default Footer;