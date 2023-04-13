import styles from '../../styles/Home.module.css'
import { BsStack } from "react-icons/bs";
import { IoIosHelpBuoy } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
 

export default function Footer() {
    return (
        <div className={styles.bigFooter} >
            <div className={styles.footer}>
                <div className={styles.book}>
                    <BsStack className={styles.iconFoot}/>
                    <div>
                        <h6>Book Information?</h6>
                        <p>Please send us email at support@gmail.com</p>
                    </div>
                </div>
                <div className={styles.need}>
                    <IoIosHelpBuoy className={styles.iconFoot}/>
                    <div>
                        <h6>Need Help?</h6>
                        <p>Please call at 0123456789</p>
                    </div>
                </div>

            </div>
            <hr className={styles.ligne} />
            <div className={styles.lastFooter}>
                <h6>Bookshelf</h6>
                <div className={styles.made}>
                   
                    <p>2023 All right reserved Mode with love by </p>
                    <AiFillHeart/>
                    <p>ThemeAtelier</p>
                </div>
                
            </div>
        </div>
    )
}