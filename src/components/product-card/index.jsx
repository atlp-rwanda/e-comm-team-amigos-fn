import "./style.scss";

export default function ProductCard(props) {
  return (
    <div data-testid="products-card" className="products-card">
      {props.children}
    </div>
  );
}
