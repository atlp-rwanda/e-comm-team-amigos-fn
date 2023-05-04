import "./style.scss";
import ProductCard from "../../../components/product-card/index.jsx";
import imagePlaceHolder from "../../../assets/img/placeholder-image.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
	{ id: 'picture', label: 'Photo', minWidth: 170 },
	{ id: 'name', label: 'Product\u00a0Name', minWidth: 100 },
    { id: 'price', label: 'Price', minWidth: 100 },
	{
		id: 'category',
		label: 'Category',
		minWidth: 170,
		align: 'right',
		format: (value) => value.toLocaleString('en-US'),
	},
	{
		id: 'actionEdit',
		label: 'Edit\u00a0Product',
		minWidth: 170,
		align: 'right',
	},
	{
		id: 'actionDelete',
		label: 'Delete\u00a0Product',
		minWidth: 170,
		align: 'right',
	},
];

function createData(product, actionEdit, actionDelete) {
    const picture = (
        <img
            className="product-image"
            src={product.images[0]? product.images[0]: imagePlaceHolder}
            alt="product image"
        />
    );
    const name = product.name;
    const price = product.price;
    const category = product.category;
    const id = product.id; // add the id property

    return { picture, name, price, category, actionEdit, actionDelete, id };
}

export default function ProductLayout({ products, setProductId, handleNext, handlePrevious }) {
    const createProducts = (products) => {
        const data = products?.map((product) =>
            createData(
                product,
                <button className="primary-button">Edit</button>,
                <button
                    className="primary-button"
                    style={{ backgroundColor: '#BB0D02' }}
                    onClick={() => handleOpenDeleteModal(product)}
                >
                    DELETE
                </button>,
            ),
        );
        return data;
    };
    const rows = createProducts(products?.listProduct);
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
                    {rows?.map((row, index) => {
                        return (
                            <TableRow
                                onClick={()=>setProductId(row.id)} // set the productId state on click
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                key={index}
                                
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
                                                'number'
                                                ? column.format(
                                                        value,
                                                    )
                                                : value}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="pagination">
                <p style={{marginRight:"1rem"}}>Page {products?.currentPage} of {products?.totalPages}</p>
                <div className="pagination-controller">
                    {products?.previousPage && (
                    <button className="btn-controller" onClick={() => handlePrevious()}>
                        Previous Page
                    </button>
                    )}
                    {products?.nextPage && (
                    <button className="btn-controller" onClick={()=>handleNext()}>
                        Next Page
                    </button>
                    )}
                </div>
            </div>
        </ProductCard>
    );
}