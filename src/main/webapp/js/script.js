'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AgentsModal = function (_React$Component) {
  _inherits(AgentsModal, _React$Component);

  function AgentsModal(props) {
    _classCallCheck(this, AgentsModal);

    var _this = _possibleConstructorReturn(this, (AgentsModal.__proto__ || Object.getPrototypeOf(AgentsModal)).call(this, props));

    var developerObj = { first_name: '',
      middle_name: '',
      last_name: '',
      email: '' };
    _this.state = { showModal: false, developer: developerObj };
    _this.open = _this.open.bind(_this);
    _this.close = _this.close.bind(_this);
    _this.onModalChange = _this.onModalChange.bind(_this);
    _this.handleSave = _this.handleSave.bind(_this);
    return _this;
  }

  _createClass(AgentsModal, [{
    key: 'close',
    value: function close() {
      var newState = this.state;
      var developerObj = { first_name: '',
        middle_name: '',
        last_name: '',
        email: '' };
      newState.showModal = false;
      newState.developer = developerObj;
      this.setState(newState);
    }
  }, {
    key: 'open',
    value: function open() {
      var newState = this.state;
      newState.showModal = true;
      this.setState(newState);
    }
  }, {
    key: 'onModalChange',
    value: function onModalChange(id, value) {
      var newState = this.state;
      newState.developer[id] = value;
      this.setState(newState);
    }
  }, {
    key: 'handleSave',
    value: function handleSave(event) {
      this.props.onClick(this.state.developer);
      this.close();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state);
      return React.createElement(
        'div',
        { className: 'form-group form-group-sm' },
        React.createElement(
          ReactBootstrap.Button,
          {
            bsStyle: 'primary',
            bsSize: 'small',
            onClick: this.open
          },
          'Add Developer'
        ),
        React.createElement(
          ReactBootstrap.Modal,
          { show: this.state.showModal, onHide: this.close, bsSize: 'large' },
          React.createElement(
            ReactBootstrap.Modal.Header,
            { closeButton: true },
            React.createElement(
              ReactBootstrap.Modal.Title,
              null,
              'Manage Developer'
            )
          ),
          React.createElement(
            ReactBootstrap.Modal.Body,
            null,
            React.createElement(
              'div',
              { className: 'container-fluid' },
              React.createElement(
                'div',
                { className: 'form-horizontal' },
                React.createElement(Field, { field: 'first_name', label: 'First Name', type: 'textarea', value: this.state.developer.first_name, onChange: this.onModalChange }),
                React.createElement(Field, { field: 'middle_name', label: 'Middle Name', type: 'textarea', value: this.state.developer.middle_name, onChange: this.onModalChange }),
                React.createElement(Field, { field: 'last_name', label: 'Last Name', type: 'textarea', value: this.state.developer.last_name, onChange: this.onModalChange }),
                React.createElement(Field, { field: 'email', label: 'Email', type: 'textarea', value: this.state.developer.email, onChange: this.onModalChange })
              )
            )
          ),
          React.createElement(
            ReactBootstrap.Modal.Footer,
            null,
            React.createElement(
              ReactBootstrap.Button,
              { onClick: this.close },
              'Close'
            ),
            React.createElement(
              ReactBootstrap.Button,
              { onClick: this.handleSave },
              'Save and close'
            )
          )
        )
      );
    }
  }]);

  return AgentsModal;
}(React.Component);

var AgentsTable = function (_React$Component2) {
  _inherits(AgentsTable, _React$Component2);

  function AgentsTable(props) {
    _classCallCheck(this, AgentsTable);

    return _possibleConstructorReturn(this, (AgentsTable.__proto__ || Object.getPrototypeOf(AgentsTable)).call(this, props));
  }

  _createClass(AgentsTable, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.props.value = nextProps.value;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'form-group form-group-sm' },
        React.createElement(
          'div',
          { className: 'col-sm-offset-2 col-sm-8' },
          React.createElement(
            'h2',
            null,
            'Developers'
          ),
          React.createElement(Griddle, { results: this.props.value })
        )
      );
    }
  }]);

  return AgentsTable;
}(React.Component);

var Field = function (_React$Component3) {
  _inherits(Field, _React$Component3);

  function Field(props) {
    _classCallCheck(this, Field);

    var _this3 = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));

    _this3.handleChange = _this3.handleChange.bind(_this3);

    return _this3;
  }

  _createClass(Field, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.onChange(this.props.field, event.target.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.props.value = nextProps.value;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'form-group form-group-sm row' },
        React.createElement(
          'label',
          { className: 'col-xs-2 control-label' },
          this.props.label
        ),
        React.createElement(
          'div',
          { className: 'col-xs-4' },
          React.createElement('input', { name: this.props.field, id: this.props.field, className: 'form-control', type: this.props.type, value: this.props.value, onChange: this.handleChange })
        )
      );
    }
  }]);

  return Field;
}(React.Component);

var NameForm = function (_React$Component4) {
  _inherits(NameForm, _React$Component4);

  function NameForm(props) {
    _classCallCheck(this, NameForm);

    var _this4 = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

    _this4.state = { metadata: {} };
    _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
    _this4.parseLoadResponse = _this4.parseLoadResponse.bind(_this4);
    _this4.onStateChange = _this4.onStateChange.bind(_this4);
    _this4.onModalSubmit = _this4.onModalSubmit.bind(_this4);

    return _this4;
  }

  _createClass(NameForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      doAjax('GET', 'services?action=load', this.parseLoadResponse);
    }
  }, {
    key: 'parseLoadResponse',
    value: function parseLoadResponse(responseData) {
      this.setState({
        metadata: responseData.metadata
      });
    }
  }, {
    key: 'onStateChange',
    value: function onStateChange(id, value) {
      var newState = this.state;
      newState.metadata[id] = value;
      this.setState(newState);
    }
  }, {
    key: 'onModalSubmit',
    value: function onModalSubmit(developer) {
      var newState = this.state;
      newState.metadata.developers.push(developer);
      this.setState(newState);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      console.log(this.state.metadata);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.developers);

      return React.createElement(
        'div',
        { className: 'container-fluid' },
        React.createElement(
          'form',
          { id: 'react_form', className: 'form-horizontal', onSubmit: this.handleSubmit },
          React.createElement(Field, { field: 'software_title', label: 'Software Title', type: 'textarea', value: this.state.metadata.software_title, onChange: this.onStateChange }),
          React.createElement(AgentsTable, { value: this.state.metadata.developers }),
          React.createElement(AgentsModal, { onClick: this.onModalSubmit }),
          React.createElement(
            'div',
            { className: 'form-group form-group-sm' },
            React.createElement(
              'div',
              { className: 'col-xs-offset-2' },
              React.createElement(
                'button',
                { className: 'btn btn-primary', type: 'submit' },
                'Submit'
              )
            )
          )
        )
      );
    }
  }]);

  return NameForm;
}(React.Component);

ReactDOM.render(React.createElement(NameForm, null), document.getElementById('root'));
