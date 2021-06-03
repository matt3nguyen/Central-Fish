import { GiFlatfish } from '@react-icons/all-files/gi/GiFlatfish'
import Fillet from '../../../images/fillet3.svg'
import{GiSadCrab} from '@react-icons/all-files/gi/GiSadCrab'
import{ GiFrozenOrb} from '@react-icons/all-files/gi/GiFrozenOrb'
import {GiFishCooked} from '@react-icons/all-files/gi/GiFishCooked'
import {GiFrenchFries} from '@react-icons/all-files/gi/GiFrenchFries'

export const MenuItems = [
	{
		title:[<GiFlatfish className="icon" style={{fontSize: '40px', color:"black"}}></GiFlatfish>, <p>Fresh Fish</p> ],
		path: "Fresh",
		cName: " dropdown-link",
	},
	{
		title: [<img className="icon" src={Fillet} alt="fillet" style={{width:'40px', height: '40px'}}></img>, <p>Fillet</p>],
		path: "Fillet",
		cName: " dropdown-link",	
	},
	{
		title: [<GiSadCrab className="icon" style={{fontSize: '40px', color:"black"}}></GiSadCrab>,<p>Shell Fish</p>],
		path: "Shell",
		cName: " dropdown-link",
	},
	{
		title: [<GiFrozenOrb className="icon" style={{fontSize: '40px', color:"black"}}></GiFrozenOrb>,<p>Frozen Goods</p>],
		path: "Frozen",
		cName: " dropdown-link",
	},
	{
		title: [<GiFishCooked className="icon" style={{fontSize: '40px', color:"black"}}></GiFishCooked>,<p>Cooking</p>],
		path: "Cooking",
		cName: " dropdown-link",
	},
	{
		title: [<GiFrenchFries className="icon" style={{fontSize: '40px', color:"black"}}></GiFrenchFries>, <p>Sides</p>],
		path: "Sides",
		cName: " dropdown-link",
	},
];
