import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import canclePayment from "../../assets/img/2479502-200.png";
import "./style.scss";

export default function CancelPaymentPage(){
    return(
        <motion.div
            initial={{y: -500}} 
            animate={{y: -10}} 
            transition={{ delay: 0.2, type: 'spring', stiffness:120}}
            className="successSection"
        >
            <img className="TickIcon" src={canclePayment} alt="Tick icon"/>
            <h2 className='title'>Your payment to amigos store have been canceled</h2>
            <Link to={"/"} className='title'>Back to home</Link>
        </motion.div>
    )
}