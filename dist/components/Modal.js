"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./styles/modal.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Modal(_ref) {
  let {
    title,
    content
  } = _ref;
  (0, _react.useEffect)(() => {
    let btnOpenModal = document.getElementsByClassName('btn-modal')[0];
    btnOpenModal.addEventListener('click', openModal);
  }, []);
  function openModal() {
    let body = document.getElementsByTagName("body")[0];
    body.classList.add('overflow-hidden');
    let bgModal = document.createElement("div");
    body.appendChild(bgModal);
    bgModal.classList.add("bg-modal");
    let modal = document.getElementsByClassName("modal-wrap")[0];
    modal.classList.add("active");
    bgModal.addEventListener("click", handleModal);
  }
  function closeModal() {
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove('overflow-hidden');
    document.getElementsByClassName("bg-modal")[0].remove();
    let modal = document.getElementsByClassName("modal-wrap")[0];
    modal.classList.remove("active");
  }
  function handleModal(event) {
    if (document.getElementsByClassName("modal-wrap")[0].classList.contains('active') && !event.target.closest(".modal-wrap") && !event.target.matches(".btn-save")) {
      closeModal();
    }
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    onClick: closeModal
  }), title ? /*#__PURE__*/_react.default.createElement("h1", {
    className: "modal-title"
  }, title) : "", content ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-text"
  }, content) : ""));
}
var _default = Modal;
exports.default = _default;