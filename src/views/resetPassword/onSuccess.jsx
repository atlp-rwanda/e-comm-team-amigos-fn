import { motion } from "framer-motion";
import TickIcon from "../../assets/img/Green-Tick-Icon-SVG-03vd.png";

export default function OnSuccess(){
    return(
        <motion.div
            initial={{y: -500}} 
            animate={{y: -10}} 
            transition={{ delay: 0.2, type: 'spring', stiffness:120}}
            className="successSection"
        >
            <img className="TickIcon" src={TickIcon} alt="Tick icon"/>
            <h2 className='title'>Reset password link sent to your email</h2>
        </motion.div>
    )
}