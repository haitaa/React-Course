import investImg from "../../assets/investment-calculator-logo.png";
import "./header.css";

export default function Header() {
  return (
    <header id="header">
      <img src={investImg} alt="Investmen calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
