import "./style.scss";

export default function MainCard(props) {
  return (
    <div data-testid="main-card" className="main-card">
      {props.children}
    </div>
  );
}
