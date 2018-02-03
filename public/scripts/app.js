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
		_this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
		_this.state = {
			options: props.options
		};
		return _this;
	}

	_createClass(DemoApp, [{
		key: 'handleRemoveAll',
		value: function handleRemoveAll() {
			this.setState(function () {
				return { options: [] };
			});
		}
	}, {
		key: 'handleRemoveOption',
		value: function handleRemoveOption(optionToRemove) {
			this.setState(function (prevState) {
				return {
					options: prevState.options.filter(function (option) {
						return optionToRemove !== option;
					})
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
				return { options: prevState.options.concat(option) };
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
		key: 'componentDidMount',
		value: function componentDidMount() {
			try {
				var json = localStorage.getItem('options');
				var options = JSON.parse(json);

				if (options) {
					this.setState(function () {
						return { options: options };
					});
				}
			} catch (error) {}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.options.length !== this.state.options.length) {
				var json = JSON.stringify(this.state.options);
				localStorage.setItem('options', json);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			console.log('component will unmount');
		}
	}, {
		key: 'render',
		value: function render() {
			var title = "My React App";
			var subTitle = "Enjoy React Programming!";
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subtitle: subTitle }),
				React.createElement(Action, { handlePickOne: this.handlePickOne, hasOptions: this.state.options.length > 0 }),
				React.createElement(Options, { options: this.state.options, handleRemoveAll: this.handleRemoveAll,
					handleRemoveOption: this.handleRemoveOption
				}),
				React.createElement(AddOption, { handleAddNewOption: this.handleAddNewOption })
			);
		}
	}]);

	return DemoApp;
}(React.Component);

DemoApp.defaultProps = {
	options: []
};

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		props.subtitle && React.createElement(
			'h3',
			null,
			props.subtitle
		)
	);
};
Header.defaultProps = {
	title: "My Demo App"
};

var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		props.hasOptions,
		React.createElement(
			'button',
			{ onClick: props.handlePickOne, disabled: !props.hasOptions },
			'What should I do?'
		)
	);
};

var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleRemoveAll },
			'Remove All'
		),
		props.options.length === 0 && React.createElement(
			'p',
			null,
			'please add an option'
		),
		props.options.map(function (option) {
			return React.createElement(Option, { key: option, optionText: option,
				handleRemoveOption: props.handleRemoveOption
			});
		})
	);
};

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'p',
			null,
			props.optionText
		),
		React.createElement(
			'button',
			{ onClick: function onClick(e) {
					return props.handleRemoveOption(props.optionText);
				} },
			'Remove '
		)
	);
};

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);

		_this2.state = {
			error: ''
		};
		return _this2;
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

			if (!error) {
				e.target.elements.newoption.value = '';
			}
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
