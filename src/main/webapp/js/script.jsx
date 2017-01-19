
class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);

  }

  componentWillReceiveProps(nextProps) {
	    this.setState({
	        value: nextProps.value
	      });
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
	  return(
      <div className="form-group form-group-sm">
      <label className="col-xs-2 control-label">
        {this.props.label}
      </label>
      <div className="col-xs-2">
        <input name={this.props.field} id={this.props.field} className="form-control" type={this.props.type} value={this.state.value} onChange={this.handleChange} />
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
    

  }
  
  componentDidMount() {
	    doAjax('GET', 'services?action=load', this.parseLoadResponse);
  }


 parseLoadResponse(responseData) {
    this.setState({
    	metadata : responseData.metadata
    });
}
  
  handleSubmit(event) {
    alert('A name was submitted: ' + $('#name').val());
    event.preventDefault();
  }

  render() {
	  
	  var keys = Object.keys(this.state.metadata);
	  console.log(keys);
	  
	  		
    return (
      <div className="container-fluid">
      <form id="react_form" className="form-horizontal" onSubmit={this.handleSubmit}>
      <Field field="software_title" label="Software Title" type="textarea" value="something"/>
      <div className="col-xs-offset-2">
        <button className="btn btn-primary" type="submit">
        Submit
        </button>
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
