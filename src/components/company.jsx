/** @format */

import styled from "styled-components";

const Logo = styled.div`
	text-align: center;
`;
export function Company({ name, model, sup, logo }) {
	return (
		<Logo>
			<img src={logo} alt='logo'></img>
			<p>
				{name} <br></br>
				<span>{model}</span>
				<br></br>
				{sup}
			</p>
		</Logo>
	);
}
