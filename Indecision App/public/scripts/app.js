"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var IndecisionApp = /*#__PURE__*/function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);
  var _super = _createSuper(IndecisionApp);
  function IndecisionApp(props) {
    var _this;
    _classCallCheck(this, IndecisionApp);
    _this = _super.call(this, props);
    _this.state = {
      options: []
    };
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_assertThisInitialized(_this));
    _this.handlePick = _this.handlePick.bind(_assertThisInitialized(_this));
    _this.handleAdd = _this.handleAdd.bind(_assertThisInitialized(_this));
    _this.handleRemove = _this.handleRemove.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(IndecisionApp, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options); //chuyển object về chuỗi JSON
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var random = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[random]);
    }
  }, {
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(id) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (element, index) {
            return index !== id;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Action, {
        options: this.state.options,
        handlePick: this.handlePick,
        handleRemoveAll: this.handleRemoveAll
      }), /*#__PURE__*/React.createElement(Options, {
        options: this.state.options,
        handleRemove: this.handleRemove
      }), /*#__PURE__*/React.createElement(AddOption, {
        handleAdd: this.handleAdd
      }));
    }
  }]);
  return IndecisionApp;
}(React.Component);
var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("p", null, props.subTitle));
};
Header.defaultProps = {
  title: 'Indecision app',
  subTitle: 'What should i eat for lunch?'
};
var Action = /*#__PURE__*/function (_React$Component2) {
  _inherits(Action, _React$Component2);
  var _super2 = _createSuper(Action);
  function Action() {
    _classCallCheck(this, Action);
    return _super2.apply(this, arguments);
  }
  _createClass(Action, [{
    key: "render",
    value: function render() {
      var tmp = this.props.options.length <= 0;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: this.props.handlePick,
        disabled: tmp
      }, "Offer"), /*#__PURE__*/React.createElement("button", {
        onClick: this.props.handleRemoveAll
      }, "Remove All Options"));
    }
  }]);
  return Action;
}(React.Component);
var Options = /*#__PURE__*/function (_React$Component3) {
  _inherits(Options, _React$Component3);
  var _super3 = _createSuper(Options);
  function Options() {
    _classCallCheck(this, Options);
    return _super3.apply(this, arguments);
  }
  _createClass(Options, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement("div", null, this.props.options.map(function (element, index) {
        return /*#__PURE__*/React.createElement(Option, {
          key: element,
          option: element,
          index: index,
          handleRemove: _this2.props.handleRemove
        });
      }));
    }
  }]);
  return Options;
}(React.Component);
var Option = /*#__PURE__*/function (_React$Component4) {
  _inherits(Option, _React$Component4);
  var _super4 = _createSuper(Option);
  function Option() {
    _classCallCheck(this, Option);
    return _super4.apply(this, arguments);
  }
  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("li", null, this.props.option), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick(e) {
          _this3.props.handleRemove(_this3.props.index);
        }
      }, "Remove"));
    }
  }]);
  return Option;
}(React.Component);
var AddOption = /*#__PURE__*/function (_React$Component5) {
  _inherits(AddOption, _React$Component5);
  var _super5 = _createSuper(AddOption);
  function AddOption(props) {
    var _this4;
    _classCallCheck(this, AddOption);
    _this4 = _super5.call(this, props);
    _this4.handleAdd = _this4.handleAdd.bind(_assertThisInitialized(_this4));
    return _this4;
  }
  _createClass(AddOption, [{
    key: "handleAdd",
    value: function handleAdd(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      this.props.handleAdd(option);
      e.target.elements.option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAdd
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option"
      }), /*#__PURE__*/React.createElement("button", null, "Submit")));
    }
  }]);
  return AddOption;
}(React.Component);
var appRoot = document.getElementById('app');
var root = ReactDOM.createRoot(appRoot);
root.render( /*#__PURE__*/React.createElement(IndecisionApp, null));
