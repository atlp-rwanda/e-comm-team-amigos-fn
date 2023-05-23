import { useEffect, useState } from "react";
import "./style.scss";
import ProductCard from "../../../components/product-card/index.jsx";
import imagePlaceHolder from "../../../assets/img/placeholder-image.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector, useDispatch } from "react-redux";
import ConfirmDeleteModal from "../../../components/product-card/ConfirmDeleteModal";
import {
	fetchProduct,
	updateProductAction,
	viewSingleProduct,
} from "../../../redux/actions";
import Loader from "../../../components/Loader/index.jsx";

const columns = [
	{ id: "picture", label: "Photo", minWidth: 170 },
	{ id: "name", label: "Product\u00a0Name", minWidth: 100 },
	{ id: "price", label: "Price", minWidth: 100 },
	{
		id: "category",
		label: "Category",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "actionEdit",
		label: "Edit\u00a0Product",
		minWidth: 170,
		align: "right",
	},
	{
		id: "actionDelete",
		label: "Delete\u00a0Product",
		minWidth: 170,
		align: "right",
	},
];

function createData(product, actionEdit, actionDelete, handleViewProduct) {
	const picture = (
		<img
			className="product-image"
			src={product.images[0] ? product.images[0] : imagePlaceHolder}
			alt="product image"
			onClick={() => handleViewProduct(product.id)}
		/>
	);
	const name = product.name;
	const price = product.price;
	const category = product.category;
	const id = product.id;

	return { picture, name, price, category, actionEdit, actionDelete, id };
}

export default function ProductLayout() {
	const dispatch = useDispatch();
	const { products, fetchProductStart } = useSelector(
		(state) => state.fetchProductState,
	);
	const [page, setPage] = useState(1);

	const handlePrevious = () => {
		setPage(page - 1);
	};
	const handleNext = () => {
		setPage(page + 1);
	};

	useEffect(() => {
		dispatch(fetchProduct(page));
	}, [dispatch, page]);

	const [rows, setRows] = useState();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const handleCloseDeleteModal = () => setOpenDeleteModal(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const handleOpenDeleteModal = (product) => {
		setSelectedProduct(product);
		setOpenDeleteModal(true);
	};

	const handleDelete = async () => {};

	const handleViewProduct = (productId) => {
		dispatch(viewSingleProduct(productId));
	};

	const createProducts = (products) => {
		return products?.map((product) =>
			createData(
				product,
				<button
					className="primary-button"
					onClick={() => {
						dispatch(updateProductAction(product.id));
						console.log("clicked");
					}}
				>
					Edit
				</button>,
				<button
					className="primary-button"
					style={{ backgroundColor: "#BB0D02" }}
					onClick={() => handleOpenDeleteModal(product)}
					data-testid="delete-btn-seller"
				>
					DELETE
				</button>,
				handleViewProduct,
			),
		);
	};
	useEffect(() => {
		const handleViewProduct = (productId) => {
			dispatch(viewSingleProduct(productId));
		};
		const createProducts = (products) => {
			return products?.map((product) =>
				createData(
					product,
					<button
						className="primary-button"
						onClick={() => {
							// setProductId(product.id);
							// setUpdateProduct(true);
							dispatch(updateProductAction(product.id));
						}}
					>
						Edit
					</button>,
					<button
						className="primary-button"
						style={{ backgroundColor: "#BB0D02" }}
						onClick={() => handleOpenDeleteModal(product)}
						data-testid="delete-btn-seller"
					>
						DELETE
					</button>,
					handleViewProduct,
				),
			);
		};
		setRows(createProducts(products?.product));
	}, [dispatch, products]);

	return (
		<ProductCard>
			<TableContainer sx={{ maxHeight: 440 }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{fetchProductStart ? (
							<TableRow data-testid="loader-product-list">
								<TableCell colSpan={6} align="center">
									<Loader />
								</TableCell>
							</TableRow>
						) : (
							<>
								{rows?.map((row, index) => {
									return (
										<TableRow
											hover
											role="checkbox"
											tabIndex={-1}
											key={index}
											data-testid="row-product-list"
										>
											{columns?.map((column) => {
												const value = row[column.id];
												return (
													<TableCell
														key={column.id}
														align={column.align}
													>
														{column.format &&
														typeof value ===
															"number"
															? column.format(
																	value,
																	// eslint-disable-next-line no-mixed-spaces-and-tabs
															  )
															: value}
													</TableCell>
												);
											})}
										</TableRow>
									);
								})}
							</>
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<div className="pagination">
				<p style={{ marginRight: "1rem" }}>
					Page {products?.currentPage} of {products?.totalPages}
				</p>
				<div className="pagination-controller">
					{products?.previousPage && (
						<button
							className="btn-controller"
							onClick={handlePrevious}
						>
							Previous Page
						</button>
					)}
					{products?.nextPage && (
						<button className="btn-controller" onClick={handleNext}>
							Next Page
						</button>
					)}
				</div>
			</div>
			<ConfirmDeleteModal
				open={openDeleteModal}
				handleClose={handleCloseDeleteModal}
				product={selectedProduct}
				onDelete={handleDelete}
				page={page}
			/>
		</ProductCard>
	);
}