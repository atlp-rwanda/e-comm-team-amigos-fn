import { motion } from "framer-motion";
import paymentSuccess from "../../assets/img/1329003-200.png";
import "./style.scss";

export default function CheckoutSuccessPage(){
    return(
        <motion.div
            initial={{y: -500}} 
            animate={{y: -10}} 
            transition={{ delay: 0.2, type: 'spring', stiffness:120}}
            className="successSection"
        >
            <img className="TickIcon" src={paymentSuccess} alt="Tick icon"/>
            <h2 className='title'>Payment done successfully</h2>
            <h2 className='title'>Thank you for shopping with amigos store!!</h2>
            <Link to={"/"} className='title'>Back to home</Link>
        </motion.div>
    )
}