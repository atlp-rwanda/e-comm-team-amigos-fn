import "../../views/resetPassword/resetPassword/style.scss";
export default function Header({title, subTitle}){
    return(
        <div className='titleSection'>
            <h2 className='title'>{title}</h2>
            <p className='introTitle'>{subTitle}</p>
        </div>
    )
}