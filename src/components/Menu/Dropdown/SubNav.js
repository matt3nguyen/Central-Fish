import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { SubNcontainer, SubNItem, SubNLink, SubNMenu } from "./SubNAvElements";

function Dropdown() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<>
		<SubNcontainer>
			<SubNMenu onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
				{MenuItems.map((item, index) => {
					return (
						<SubNItem key={index}>
							<SubNLink className={item.cName} to={item.path} >
								{item.title}
							</SubNLink>
						</SubNItem>
					);
				})}
			</SubNMenu>
			</SubNcontainer>
		</>
	);
}
export default Dropdown;
