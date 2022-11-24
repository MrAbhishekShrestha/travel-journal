import logoUrl from "../assets/world2.svg";
import "../App.css"

export const Header = () => (
	<header className="header">
		<img src={logoUrl} alt="World Icon" className="logo" />
		<h1 className="heading">my travel journal.</h1>
	</header>
);