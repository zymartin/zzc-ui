'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body.js');

var _Body2 = _interopRequireDefault(_Body);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by samciu on 17/1/12.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Section = function (_Component) {
    _inherits(Section, _Component);

    function Section(props) {
        _classCallCheck(this, Section);

        return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));
    }

    _createClass(Section, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'section',
                { className: 'zzc-section' },
                this.props.children
            );
        }
    }]);

    return Section;
}(_react.Component);

Section.Header = _Header2.default;
Section.Body = _Body2.default;
exports.default = Section;