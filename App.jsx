// App component - represents the whole app
const {AppCanvas, AppBar, IconButton, SvgIcons, FlatButton, List, FloatingActionButton, TextField, RaisedButton} = MUI;
App = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		return Tasks.find({}, {
			sort: {
				createdAt: -1
			}
		}).fetch();
	},

	getTasks() {
		return this.getMeteorData();
	},
	handleSubmit() {
		event.preventDefault();

		var text = this.refs.taskInput.getValue();
		Tasks.insert({text: text, createdAt: new Date(), checked: false});

		this.refs.taskInput.setValue("");
	},
	renderTasks() {
		return this.getTasks().map((task) => {
			return <Task key={task._id} task={task}/>;
		});
	},

	render() {
		return (
			<AppCanvas>
				<AppBar title={<span>Todo</span>} iconElementLeft={<IconButton></IconButton>} iconElementRight={<FlatButton label="Save" />}/>
				<div style={{paddingTop: "80px"}}>
					<form onSubmit={this.handleSubmit}>
						<TextField ref="taskInput" hintText="Todo Content" required/> <RaisedButton label="add" onClick={this.handleSubmit} />
					</form>
					<List>
						{this.renderTasks()}
					</List>
					<Match />
				</div>
			</AppCanvas>
		);
	}
});
