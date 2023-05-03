import { Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
export default function Back({title}){
    return(
        <Link style={{textDecoration:'none'}} to={'/login'} className='backBtn'>
            <Unicons.UilArrowLeft size="24" color="#848181"/>
            <p className='backBtnTitle'>{title}</p>
        </Link>
    )
}