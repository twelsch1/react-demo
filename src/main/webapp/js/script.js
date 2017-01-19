"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field(props) {
    _classCallCheck(this, Field);

    var _this = _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).call(this, props));

    _this.state = {
      value: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);

    return _this;
  }

  _createClass(Field, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "form-group form-group-sm" },
        React.createElement(
          "label",
          { className: "col-xs-2 control-label" },
          this.props.label
        ),
        React.createElement(
          "div",
          { className: "col-xs-2" },
          React.createElement("input", { name: this.props.field, id: this.props.field, className: "form-control", type: this.props.type, value: this.state.value, onChange: this.handleChange })
        )
      );
    }
  }]);

  return Field;
}(React.Component);

var NameForm = function (_React$Component2) {
  _inherits(NameForm, _React$Component2);

  function NameForm(props) {
    _classCallCheck(this, NameForm);

    var _this2 = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

    _this2.state = { metadata: {} };
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    _this2.parseLoadResponse = _this2.parseLoadResponse.bind(_this2);

    return _this2;
  }

  _createClass(NameForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      doAjax('GET', 'services?action=load', this.parseLoadResponse);
    }
  }, {
    key: "parseLoadResponse",
    value: function parseLoadResponse(responseData) {
      this.setState({
        metadata: responseData.metadata
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      alert('A name was submitted: ' + $('#name').val());
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {

      var keys = Object.keys(this.state.metadata);
      console.log(keys);

      return React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "form",
          { id: "react_form", className: "form-horizontal", onSubmit: this.handleSubmit },
          React.createElement(Field, { field: "software_title", label: "Software Title", type: "textarea", value: "something" }),
          React.createElement(
            "div",
            { className: "col-xs-offset-2" },
            React.createElement(
              "button",
              { className: "btn btn-primary", type: "submit" },
              "Submit"
            )
          )
        )
      );
    }
  }]);

  return NameForm;
}(React.Component);

ReactDOM.render(React.createElement(NameForm, null), document.getElementById('root'));
