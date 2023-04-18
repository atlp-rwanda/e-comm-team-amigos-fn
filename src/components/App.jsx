import "./../App.css";
import Logo from "./../assets/img/logo.png";
import "./../style.scss";

export default function App() {
  return (
    <div className="container">
      <img src={Logo} alt="app logo" />
      <h1>Shop now and enjoy free shipping on all orders</h1>
      <h1 className="css-styled">CSS Styled Header</h1>
      <h1 className="scss-styled">SCSS Styled Header</h1>
    </div>
  );
}
