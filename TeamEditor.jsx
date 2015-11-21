{TextField} = MUI;
TeamEditor = React.createClass({
	getInitialState() {
		return {
			beacon: false,
			climber: false,
			parked: "",
			debris: {
				floor: 0,
				low: 0,
				mid: 0,
				high: 0
			},
			hang: false,
			allClear: false,
			parked: "",
			score: 0,
			number: 0
		};
	},
	render() {
		return (
			<span>{this.props.number}</span>
		);
	}
});
