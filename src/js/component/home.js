import React, { useState } from "react";

export function Home() {
	const [selected, setSelected] = useState("");

	const userClick = color => {
		setSelected(color);
	};

	return (
		<div id="container">
			<div
				className={
					selected == "red" ? "light red clicked" : "light red"
				}
				onClick={() => userClick("red")}></div>
			<div
				className={
					selected == "yellow"
						? "light yellow clicked"
						: "light yellow"
				}
				onClick={() => userClick("yellow")}></div>
			<div
				className={
					selected == "green" ? "light green clicked" : "light green"
				}
				onClick={() => userClick("green")}></div>
		</div>
	);
}
