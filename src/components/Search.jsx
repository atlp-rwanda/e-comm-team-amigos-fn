import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ratings from "../assets/img/ratings.png";
import "../assets/css/Search.scss";
import Loader from "./Loader/Loader";

const SearchedProduct = () => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [searchCompleted, setSearchCompleted] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const searchValue = new URLSearchParams(location.search).get("query");

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				let url =
					process.env.BASE_URL ||
					"https://e-comm-team-amigos-bn-project.onrender.com";
				if (searchValue) {
					url += `/product/search?name=${searchValue}`;
					const response = await fetch(url);
					const data = await response.json();
					const fetchedProducts = data.responseData.products;
					setProducts(fetchedProducts);
					setSearchCompleted(true); // Set searchCompleted to true when the search is completed
				} else if (searchValue == "") {
					url += `?page=${page}`;
					const response = await fetch(url);
					const data = await response.json();
					const fetchedProducts = data.responseData.listProduct || [];
					setProducts((prevProducts) => [
						...prevProducts,
						...fetchedProducts,
					]);
					setTotalPages(data.responseData.totalPages);
					if (page >= data.responseData.totalPages) {
						setSearchCompleted(true); // Set searchCompleted to true when all pages are rendered
					}
				}

				console.log("product:", products);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [searchValue, page]);

	const handleClick = (id) => {
		navigate(`/product/${id}`);
	};

	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : products?.length != 0 ? (
				<>
					<div className="cards">
						{products.map((product) => (
							<div
								className="card"
								key={product.id}
								onClick={() => handleClick(product.id)}
							>
								<img
									src={product.images[0]}
									alt={product.name}
									className="product-image"
								/>
								<div className="card-description">
									<h1>{product.name}</h1>
									<p className="price">{`$${product.price}`}</p>
								</div>
								<p className="product-description">
									combine high-fidelity audio with
									industry-leading Active Noise Cancellation
									to deliver an unparalleled listening
									experience
								</p>
								<img
									src={ratings}
									alt="rating image"
									style={{ width: "50%" }}
								/>
							</div>
						))}
					</div>

					{totalPages > 1 && page < totalPages && (
						<div className="load-more-container">
							<button
								className="load-more-button"
								onClick={handleLoadMore}
							>
								Load More
							</button>
						</div>
					)}
				</>
			) : (
				<h2 className="not-found">No product(s) found</h2>
			)}
		</>
	);
};

export default SearchedProduct;
