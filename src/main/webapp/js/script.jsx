
class AgentsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false}
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);  
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>

        <ReactBootstrap.Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
        Add Developer
        </ReactBootstrap.Button>

        <ReactBootstrap.Modal show={this.state.showModal} onHide={this.close}>
          <ReactBootstrap.Modal.Header closeButton>
            <ReactBootstrap.Modal.Title>Manage Developer</ReactBootstrap.Modal.Title>
          </ReactBootstrap.Modal.Header>
          <ReactBootstrap.Modal.Body>
           Hello World!
          </ReactBootstrap.Modal.Body>
          <ReactBootstrap.Modal.Footer>
            <ReactBootstrap.Button onClick={this.close}>Close</ReactBootstrap.Button>
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
      <div className="form-group form-group-sm">
      <label className="col-xs-2 control-label">
        {this.props.label}
      </label>
      <div className="col-xs-2">
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
      <AgentsModal/>
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
