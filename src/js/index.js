//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import Clock from "./component/clock.jsx";

//render your react application
let segundo1 = 0;
let segundo2 = 0;
let minuto1 = 0;
let minuto2 = 0;
let hora1 = 0;
let hora2 = 0;

setInterval(() => {
	segundo2++;
	if (segundo2 >= 10) {
		segundo1++;
		segundo2 = 0;
	}

	if (segundo1 >= 6) {
		minuto2++;
		segundo1 = 0;
	}

	if (minuto2 > 9) {
		minuto2++;
		segundo1 = 0;
		minuto1++;
		minuto2 = 0;
	}

	if (minuto1 > 5) {
		hora2++;
		segundo1 = 0;
		minuto1 = 0;
		minuto2 = 0;
	}

	if (hora2 > 9) {
		hora1++;
		hora2 = 0;
		segundo2 = 0;
		segundo1 = 0;
		minuto1 = 0;
		minuto2 = 0;
	}
	if (hora1 > 9) {
		hora1 = 0;
		hora2 = 0;
		segundo2 = 0;
		segundo1 = 0;
		minuto1 = 0;
		minuto2 = 0;
	}

	ReactDOM.render(
		<Clock
			a={hora1}
			b={hora2}
			c={minuto1}
			d={minuto2}
			e={segundo1}
			f={segundo2}
		/>,
		document.querySelector("#app")
	);
}, 1);
