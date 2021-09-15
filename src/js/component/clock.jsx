import React from "react";
import PropTypes from "prop-types";

const Clock = props => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-2 digit">{props.a}</div>
				<div className="col-2 digit">{props.b}</div>
				<div className="col-2 digit">{props.c}</div>
				<div className="col-2 digit">{props.d}</div>
				<div className="col-2 digit">{props.e}</div>
				<div className="col-2 digit">{props.f}</div>
			</div>
		</div>
	);
};

Clock.propTypes = {
	a: PropTypes.number,
	b: PropTypes.number,
	c: PropTypes.number,
	d: PropTypes.number,
	e: PropTypes.number,
	f: PropTypes.number
};
export default Clock;
