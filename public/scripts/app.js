'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoApp = function (_React$Component) {
	_inherits(DemoApp, _React$Component);

	function DemoApp(props) {
		_classCallCheck(this, DemoApp);

		var _this = _possibleConstructorReturn(this, (DemoApp.__proto__ || Object.getPrototypeOf(DemoApp)).call(this, props));

		_this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
		_this.handleAddNewOption = _this.handleAddNewOption.bind(_this);
		_this.handlePickOne = _this.handlePickOne.bind(_this);
		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(DemoApp, [{
		key: 'handleRemoveAll',
		value: function handleRemoveAll() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: 'handleAddNewOption',
		value: function handleAddNewOption(option) {
			if (!option) {
				return 'Please enter valid option';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'Value already exists';
			}
			this.setState(function (prevState) {
				return {
					options: prevState.options.concat(option)
				};
			});
		}
	}, {
		key: 'handlePickOne',
		value: function handlePickOne() {
			var randomNum = Math.floor(Math.random() * this.state.options.length);
			var option = this.state.options[randomNum];
			alert(option);
		}
	}, {
		key: 'render',
		value: function render() {
			var title = "Indecision";
			var subTitle = "Put your life in the hands of programming!";
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subtitle: subTitle }),
				React.createElement(Action, { handlePickOne: this.handlePickOne, hasOptions: this.state.options.length > 0 }),
				React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll }),
				React.createElement(AddOption, { handleAddNewOption: this.handleAddNewOption })
			);
		}
	}]);

	return DemoApp;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					this.props.title
				),
				React.createElement(
					'h3',
					null,
					this.props.subtitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.props.hasOptions,
				React.createElement(
					'button',
					{ onClick: this.props.handlePickOne, disabled: !this.props.hasOptions },
					'What should I do?'
				)
			);
		}
	}]);

	return Action;
}(React.Component);

var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options() {
		_classCallCheck(this, Options);

		return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
	}

	_createClass(Options, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.props.handleRemoveAll },
					'Remove All'
				),
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optionText: option });
				})
			);
		}
	}]);

	return Options;
}(React.Component);

var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'p',
				null,
				this.props.optionText
			);
		}
	}]);

	return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this6.handleAddOption = _this6.handleAddOption.bind(_this6);

		_this6.state = {
			error: ''
		};
		return _this6;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();

			var option = e.target.elements.newoption.value.trim();
			var error = this.props.handleAddNewOption(option);

			this.setState(function () {
				return { error: error };
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					{ style: { color: 'red' } },
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'newoption' }),
					React.createElement(
						'button',
						null,
						'Add Option'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(DemoApp, null), document.getElementById('DemoContainer'));
