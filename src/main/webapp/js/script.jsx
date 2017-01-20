
class AgentsModal extends React.Component {
  constructor(props) {
    super(props);
    var developerObj = {first_name:'',
    middle_name: '',
  last_name: '',
email:''}
    this.state = {showModal: false, developer : developerObj};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onModalChange = this.onModalChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  close() {
    var newState = this.state;
    var developerObj = {first_name:'',
    middle_name: '',
  last_name: '',
email:''}
    newState.showModal=false;
    newState.developer = developerObj;
    this.setState(newState);
  }

  open() {
    var newState = this.state;
    newState.showModal=true;
    this.setState(newState);

  }
  
  onModalChange(id,value) {
	  var newState = this.state;
	  newState.developer[id] = value;
	  this.setState(newState);

	}
  
  handleSave(event) {
	  this.props.onClick(this.state.developer);
	  this.close();
  }

  render() {
    console.log(this.state);
    return (
      <div className="form-group form-group-sm">

        <ReactBootstrap.Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open}
        >
        Add Developer
        </ReactBootstrap.Button>

        <ReactBootstrap.Modal show={this.state.showModal} onHide={this.close} bsSize="large">
          <ReactBootstrap.Modal.Header closeButton>
            <ReactBootstrap.Modal.Title>Manage Developer</ReactBootstrap.Modal.Title>
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body>
           <div className="container-fluid">
             <div className="form-horizontal">
           <Field field="first_name" label="First Name" type="textarea" value={this.state.developer.first_name} onChange={this.onModalChange}/>
           <Field field="middle_name" label="Middle Name" type="textarea" value={this.state.developer.middle_name} onChange={this.onModalChange}/>
           <Field field="last_name" label="Last Name" type="textarea" value={this.state.developer.last_name} onChange={this.onModalChange}/>
           <Field field="email" label="Email" type="textarea" value={this.state.developer.email} onChange={this.onModalChange}/>
            </div>
         </div>
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer>
            <ReactBootstrap.Button onClick={this.close}>Close</ReactBootstrap.Button>
            <ReactBootstrap.Button onClick={this.handleSave}>Save and close</ReactBootstrap.Button>
          </ReactBootstrap.Modal.Footer>
        </ReactBootstrap.Modal>
      </div>
    );
  }
}
class AgentsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.props.value = nextProps.value;
  }

  render() {
    return(

<div className="form-group form-group-sm">
      <div className="col-sm-offset-2 col-sm-8">
        <h2>Developers</h2>
        <Griddle results = {this.props.value} />
      </div>
</div>
);
  }

}

class Field extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);


  }

  handleChange(event) {
    this.props.onChange(this.props.field,event.target.value);
  }

componentWillReceiveProps(nextProps) {
  this.props.value = nextProps.value;
}

  render() {
	  return(
      <div className="form-group form-group-sm row">
      <label className="col-xs-2 control-label">
        {this.props.label}
      </label>
      <div className="col-xs-4">
        <input name={this.props.field} id={this.props.field} className="form-control" type={this.props.type} value={this.props.value} onChange={this.handleChange} />
      </div>
    </div>);
  }

}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {metadata : {}};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseLoadResponse = this.parseLoadResponse.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onModalSubmit = this.onModalSubmit.bind(this);


  }

  componentDidMount() {
	    doAjax('GET', 'services?action=load', this.parseLoadResponse);
  }


 parseLoadResponse(responseData) {
    this.setState({
    	metadata : responseData.metadata
    });
}

onStateChange(id,value) {
  var newState = this.state;
  newState.metadata[id] = value;
  this.setState(newState);

}

onModalSubmit(developer) {
	  var newState = this.state;
	  newState.metadata.developers.push(developer);
	  this.setState(newState);
}

  handleSubmit(event) {
    console.log(this.state.metadata);
    event.preventDefault();
  }

  render() {
    console.log(this.state.developers);


    return (
      <div className="container-fluid">
      <form id="react_form" className="form-horizontal" onSubmit={this.handleSubmit}>
      <Field field="software_title" label="Software Title" type="textarea" value={this.state.metadata.software_title} onChange={this.onStateChange}/>
      <AgentsTable value={this.state.metadata.developers}/>

      <AgentsModal onClick={this.onModalSubmit}/>

      <div className="form-group form-group-sm">
        <div className="col-xs-offset-2">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
      </form>
    </div>
      );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
