const {Checkbox} = MUI;
// Task component - represents a single todo item
Task = React.createClass({
	propTypes: {
		// This component gets the task to display through a React prop.
		// We can use propTypes to indicate it is required
		task: React.PropTypes.object.isRequired
	},
	toggleChecked() {
		Tasks.update(this.props.task._id, {
			$set: {checked: ! this.props.task.checked}
		});
	},
	render() {
		return (
			<Checkbox ref="checkbox" name={this.props.task.text} label={this.props.task.text} onCheck={this.toggleChecked} checked={this.props.task.checked}/>
		);
	}
});
