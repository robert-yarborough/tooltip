import React, {useState} from "react";
import './ToolTip.css';

/*
* Create a react component which accept a prop 'position' and renders a button and a tooltip.
The position prop can accept either one of the below and place the tooltip accordingly.
position : top, right, bottom, left.*/


function ToolTip(props) {
	let timeout;
	const [active, setActive] = useState(false);

	//show tooltip
	const showToolTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
		}, props.delay || 400);
		return timeout;
	}


	return (
		<div className='Tooltip-Wrapper' onMouseEnter={showToolTip}>
			{props.children}
			{active && (<button className={`Tooltip ${props.direction || "top"}`}>
					{props.content}
				</button>)
			}
		</div>
	)
};
export default ToolTip;
