'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var preventDefault = function preventDefault(f) {
  return function (e) {
    e.preventDefault();
    f(e);
  };
};

var PreventDefaultForm = function PreventDefaultForm(_ref) {
  var children = _ref.children,
      submitLabel = _ref.submitLabel,
      onSubmit = _ref.onSubmit,
      buttonProps = _ref.buttonProps,
      props = _objectWithoutProperties(_ref, ['children', 'submitLabel', 'onSubmit', 'buttonProps']);

  return _react2.default.createElement(
    'form',
    _extends({ onSubmit: preventDefault(onSubmit) }, props),
    children,
    _react2.default.createElement(
      'button',
      _extends({ type: 'submit' }, buttonProps),
      submitLabel || 'Submit'
    )
  );
};

PreventDefaultForm.propTypes = {
  buttonProps: _react.PropTypes.object,
  onSubmit: _react.PropTypes.func.isRequired,
  submitLabel: _react.PropTypes.string
};

exports.default = PreventDefaultForm;