import React,{useEffect, useState} from 'react';
import toTop from "../../assets/img/toTop.png";

const BackToTop = () =>{
    const [showBackToTop, setShowBackToTop] = useState(false);
	useEffect(() => {
        const handleShowBackToTop = () => {
          const shouldShow = window.scrollY > window.innerHeight / 2;
          setShowBackToTop(shouldShow);
        };
        window.addEventListener('scroll', handleShowBackToTop);
        return () => {
          window.removeEventListener('scroll', handleShowBackToTop);
        };
      }, []);

      const handleBackToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

	const backToTopStyle = {
		position:'fixed',
		display:'flex',
		justifyContent: 'center',
		width:'100%',
		bottom: '0',
		display: showBackToTop ? 'flex' : 'none',
		zIndex:3,
	};

	const backToTopButton = {
		display:'flex',
		justifyContent:'center',
		alignItems: 'center',
		gap:'1rem',
		width:'200px',
		height:'40px',
		cursor: 'pointer',
		backgroundColor: '#fff',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
		borderRadius: '50px 50px 0 0',
	}
    return (
        <div style={backToTopStyle}
				onClick={()=>{
					handleBackToTop();
				}}
			>
				<div 
					style={backToTopButton}
				>
					<img style={{height:'15px'}} src={toTop} alt="backToTop" />
					<span>Scroll to top</span>
				</div>
				
		</div>
    )
}

export default BackToTop;