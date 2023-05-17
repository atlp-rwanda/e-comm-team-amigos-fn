import Header from "../Header/HeaderMain.jsx";
import product from "../../assets/img/computerBag.png";
import AddtoCartForm from "./addtocartform.jsx";
import "../../assets/css/addToCart.scss";
export default function Cart() {
	return (
		<div>
			<Header />
			<div className="adcontainer">
				<div className="col-1">
					<img src={product} alt="Product image" />
				</div>
				<AddtoCartForm/>
			</div>
			<div className="col-3">
				<img src={product} alt="Product image" />
				<img src={product} alt="Product image" />
				<img src={product} alt="Product image" />
				<img src={product} alt="Product image" />
			</div>
		</div>
	);
}

