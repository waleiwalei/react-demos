(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{62:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(25),_userInfo=__webpack_require__(45),enterModule;function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}enterModule=__webpack_require__(4).enterModule,enterModule&&enterModule(module);var UserInfo=function(_Component){function UserInfo(){return _classCallCheck(this,UserInfo),_possibleConstructorReturn(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return _inherits(UserInfo,_Component),_createClass(UserInfo,[{key:"render",value:function(){var e=this,r=this.props.userInfo,t=r.userInfo,n=r.isLoading,o=r.errMsg;return console.log(this.props.userInfo),_react2.default.createElement("div",null,n?"请求信息中!......":o||_react2.default.createElement("div",null,_react2.default.createElement("p",null,"用户信息："),_react2.default.createElement("p",null,"用户名：",t.name),_react2.default.createElement("p",null,"介绍：",t.intro)),_react2.default.createElement("button",{onClick:function(){return e.props.getUserInfo()}},"请求用户信息"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),UserInfo}(_react.Component),_default=(0,_reactRedux.connect)(function(e){return{userInfo:e.userInfo}},{getUserInfo:_userInfo.getUserInfo})(UserInfo),reactHotLoader,leaveModule;exports.default=_default,reactHotLoader=__webpack_require__(4).default,leaveModule=__webpack_require__(4).leaveModule,reactHotLoader&&(reactHotLoader.register(UserInfo,"UserInfo","/Users/qitmac000511/project/react-family/src/pages/UserInfo/UserInfo.js"),reactHotLoader.register(_default,"default","/Users/qitmac000511/project/react-family/src/pages/UserInfo/UserInfo.js"),leaveModule(module))}).call(this,__webpack_require__(6)(module))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvVXNlckluZm8vVXNlckluZm8uanMiXSwibmFtZXMiOlsiX3JlYWN0IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIl9yZWFjdFJlZHV4IiwiX3VzZXJJbmZvIiwiVXNlckluZm8iLCJfdGhpczIiLCJ0aGlzIiwiX3Byb3BzJHVzZXJJbmZvIiwicHJvcHMiLCJ1c2VySW5mbyIsImlzTG9hZGluZyIsImVyck1zZyIsImNvbnNvbGUiLCJsb2ciLCJfcmVhY3QyIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJuYW1lIiwiaW50cm8iLCJvbkNsaWNrIiwiZ2V0VXNlckluZm8iLCJjb25uZWN0Iiwic3RhdGUiXSwibWFwcGluZ3MiOiJtY0FBQUEsT0FBQUMsb0JBQUEsMENBQ0FDLFlBQUFELG9CQUFBLElBQ0FFLFVBQUFGLG9CQUFBLHV4QkFFTUcsaVNBRU8sSUFBQUMsRUFBQUMsS0FBQUMsRUFDaUNELEtBQUtFLE1BQU1DLFNBQTFDQSxFQURGRixFQUNFRSxTQUFVQyxFQURaSCxFQUNZRyxVQUFXQyxFQUR2QkosRUFDdUJJLE9BRTVCLE9BREFDLFFBQVFDLElBQUlQLEtBQUtFLE1BQU1DLFVBRW5CSyxRQUFBQyxRQUFBQyxjQUFBLFdBRVFOLEVBQVksZUFFSkMsR0FDSUcsUUFBQUMsUUFBQUMsY0FBQSxXQUNJRixRQUFBQyxRQUFBQyxjQUFBLGtCQUNBRixRQUFBQyxRQUFBQyxjQUFBLGdCQUFRUCxFQUFTUSxNQUNqQkgsUUFBQUMsUUFBQUMsY0FBQSxlQUFPUCxFQUFTUyxRQUlwQ0osUUFBQUMsUUFBQUMsY0FBQSxVQUFRRyxRQUFTLGtCQUFNZCxFQUFLRyxNQUFNWSxnQkFBbEMsOEtBYUQsRUFBQWxCLFlBQUFtQixTQUFRLFNBQUNDLEdBQUQsT0FBYWIsU0FBVWEsRUFBTWIsWUFBYVcsbUNBQWxELENBQWdFaEIsb01BL0J6RUEiLCJmaWxlIjoidXNlckluZm8uYTk2NWExMjZlMjgyNTBiOGE2YzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtnZXRVc2VySW5mb30gZnJvbSBcImFjdGlvbnMvdXNlckluZm9cIjtcblxuY2xhc3MgVXNlckluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dXNlckluZm8sIGlzTG9hZGluZywgZXJyTXNnfSA9IHRoaXMucHJvcHMudXNlckluZm87XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMudXNlckluZm8pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZyA/ICfor7fmsYLkv6Hmga/kuK0hLi4uLi4uJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnID8gZXJyTXNnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPueUqOaIt+S/oeaBr++8mjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPueUqOaIt+WQje+8mnt1c2VySW5mby5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS7i+e7je+8mnt1c2VySW5mby5pbnRyb308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZ2V0VXNlckluZm8oKX0+6K+35rGC55So5oi35L+h5oGvPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuLypjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB1c2VySW5mbzogc3RhdGUudXNlckluZm9cbiAgICB9XG59OyovXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7Z2V0VXNlckluZm99KShVc2VySW5mbyk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4gKHt1c2VySW5mbzogc3RhdGUudXNlckluZm99KSwge2dldFVzZXJJbmZvfSkoVXNlckluZm8pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9