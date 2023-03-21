(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\components\\Acomplishments\\Acomplishments.js";



const data = [{
  number: 20,
  text: "Developed various Game Projects and Websites"
}, {
  number: 30,
  text: "Repositories on GitHub"
}, {
  number: 180,
  text: "Problems solved at CodeChef"
}, {
  number: 10,
  text: "Course Certificates"
}];

const Acomplishments = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Personal Achievements"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
    children: data.map((card, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
        children: `${card.number}+`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
        children: card.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boxes = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Boxes",
  componentId: "vuq5bz-0"
})(["width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin:24px 0 40px;@media ", "{gap:16px;margin:20px 0 32px;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));}@media ", "{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:500px;margin:24px auto;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Box",
  componentId: "vuq5bz-1"
})(["background:#212D45;border-radius:12px;height:144px;padding:24px;@media ", "{height:210px;}@media ", "{height:135px;padding:16px;}@media ", "{height:110px;padding:12px;&:nth-child(2n){grid-row:2;}}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxNum = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__BoxNum",
  componentId: "vuq5bz-2"
})(["font-style:normal;font-weight:600;font-size:36px;line-height:40px;letter-spacing:0.01em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:28px;line-height:32px;}@media ", "{font-size:24px;line-height:26px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const BoxText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "AcomplishmentsStyles__BoxText",
  componentId: "vuq5bz-3"
})(["font-style:normal;font-weight:normal;font-size:18px;line-height:24px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:20px;};@media ", "{font-size:10px;line-height:14px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Join = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__Join",
  componentId: "vuq5bz-4"
})(["display:flex;max-width:1040px;justify-content:center;align-items:center;padding-bottom:80px;@media ", "{display:flex;justify-content:center;padding-bottom:64px;}@media ", "{display:flex;flex-direction:column;align-items:center;padding-bottom:32px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const JoinText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5.withConfig({
  displayName: "AcomplishmentsStyles__JoinText",
  componentId: "vuq5bz-5"
})(["display:flex;font-size:24px;line-height:40px;letter-spacing:0.02em;color:rgba(255,255,255,0.5);@media ", "{line-height:32px;font-size:20px;};@media ", "{font-size:16px;line-height:24px;margin:0 0 16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "AcomplishmentsStyles__IconContainer",
  componentId: "vuq5bz-6"
})(["display:flex;@media ", "{width:160px;justify-content:space-between;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\components\\BackgrooundAnimation\\BackgroundAnimation.js";


const BackgroundAnimation = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterStyles */ "./src/components/Footer/FooterStyles.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\components\\Footer\\Footer.js";





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.FooterWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkList, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Call"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "tel:956-586-9755",
          children: "(+91) 956-586-9755"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "mailto:iamutkarshyadav1@gmail.com",
          children: "iamutkarshyadav1@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIconsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.CompanyContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.Slogan, {
          children: "Innovating one project at a time"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://github.com/iamutkarshyadav",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://www.linkedin.com/in/shadowstorme/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://www.instagram.com/shadow_.storme/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillInstagram, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://www.behance.net/utkarshyadav3",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillBehanceCircle, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "FooterStyles__FooterWrapper",
  componentId: "sc-1ifsifd-0"
})(["width:calc(100vw - 96px);max-width:1040px;padding:2rem 48px 40px;margin:1rem auto;box-sizing:content-box;@media ", "{padding:0 16px 48px;width:calc(100vw - 32px);}"], props => props.theme.breakpoints.sm);
const LinkItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "FooterStyles__LinkItem",
  componentId: "sc-1ifsifd-1"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);margin-bottom:16px;transition:.3s ease;position:relative;left:0;&:hover{color:#fff;left:6px;}@media ", "{font-size:16px;line-height:28px;display:flex;}@media ", "{font-size:8px;line-height:14px;margin-bottom:8px;display:flex;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialIconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialIconsContainer",
  componentId: "sc-1ifsifd-2"
})(["max-width:1040px;display:flex;justify-content:space-between;@media ", "{display:flex;justify-content:space-between;}@media ", "{display:flex;width:100%;flex-direction:column;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CompanyContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__CompanyContainer",
  componentId: "sc-1ifsifd-3"
})(["display:flex;align-items:baseline;flex-wrap:wrap;margin-right:auto;@media ", "{flex-direction:column;align-items:baseline;}@media ", "{display:flex;flex-direction:column;margin:0 0 32px;align-items:center;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const Slogan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "FooterStyles__Slogan",
  componentId: "sc-1ifsifd-4"
})(["color:rgba(255,255,255,0.5);min-width:280px;letter-spacing:0.02em;font-size:18px;line-height:30px;padding:1rem;@media ", "{font-size:16px;line-height:28px;}@media ", "{line-height:22px;font-size:14px;min-width:100px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__SocialContainer",
  componentId: "sc-1ifsifd-5"
})(["display:flex;align-items:center;@media ", "{justify-content:center;padding-right:16px;flex-wrap:wrap;}"], props => props.theme.breakpoints.md);
const LinkList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "FooterStyles__LinkList",
  componentId: "sc-1ifsifd-6"
})(["border-top:1px solid rgba(255,255,255,0.1);display:grid;grid-template-columns:repeat(3,minmax(85px,220px));gap:40px;padding:40px 0 28px;@media ", "{padding:32px 0 16px;}@media ", "{width:100%;padding:32px 0 16px;gap:16px;}@media ", "{width:100%;padding:32px 4px 16px;gap:5px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const LinkColumn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "FooterStyles__LinkColumn",
  componentId: "sc-1ifsifd-7"
})(["display:flex;flex-direction:column;max-width:220px;width:100%;"]);
const LinkTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "FooterStyles__LinkTitle",
  componentId: "sc-1ifsifd-8"
})(["font-style:normal;font-weight:600;font-size:12px;line-height:24px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:16px;@media ", "{font-size:10px;line-height:12px;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\components\\Header\\Header.js";






const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: {
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiCssdeck, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Span, {
          children: " Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#projects",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#tech",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Technologies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://github.com/iamutkarshyadav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://www.linkedin.com/in/shadowstorme/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://www.instagram.com/shadow_.storme/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillInstagram, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      href: "https://www.behance.net/utkarshyadav3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillBehanceCircle, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Span": function() { return /* binding */ Span; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-0"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], props => props.theme.breakpoints.sm);
const Span = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "HeaderStyles__Span",
  componentId: "sc-9w0vkp-1"
})(["font-size:2rem;;"]);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-2"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], props => props.theme.breakpoints.sm);
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-3"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], props => props.theme.breakpoints.sm);
const Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-4"
})(["grid-area:1 / 5 / 2 / 6;display:flex;justify-content:space-around;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], props => props.theme.breakpoints.sm); // Navigation Links

const NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-5"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], props => props.theme.breakpoints.sm); /// DropDown Contact

const ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-6"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-7"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], ({
  isOpen
}) => isOpen ? '1' : '.75', ({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)', props => props.theme.breakpoints.sm); // Social Icons 

const SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-8"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}"]);

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\components\\Hero\\Hero.js";





const Hero = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  row: true,
  nopadding: true,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
      main: true,
      center: true,
      children: ["Hello there! ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 22
      }, undefined), "I am Utkarsh"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
      children: ["I am a Computer Science student at Graphic Era Deemed to be University and I make Websites and Games on Unreal Engine 4 and Unreal Engine 5.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: () => window.location = 'https://google.com',
        children: " Learn More"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LeftSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroStyles__LeftSection",
  componentId: "pbjia3-0"
})(["width:100%;@media ", "{width:80%;display:flex;flex-direction:column;margin:0 auto;}@media ", "{width:100%;display:flex;flex-direction:column;margin:0 auto;}"], props => props.theme.breakpoints.sm, props => props.theme.breakpoints.md);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\components\\Projects\\Projects.js";





const Projects = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  nopadding: true,
  id: "projects",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    main: true,
    children: "Projects"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map(({
      id,
      image,
      title,
      description,
      tags,
      source,
      visit
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
          title: true,
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
          children: "Stack"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
          children: tags.map((tag, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
            children: tag
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 19
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
          href: visit,
          children: "Code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
          href: source,
          children: "Visit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, undefined)]
    }, id, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], props => props.theme.breakpoints.sm);
const BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], props => props.theme.breakpoints.sm);
const TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;"]);
const HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:", ";"], props => props.title ? '3rem' : '2rem');
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
const Intro = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
const CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:.3rem}"], props => props.theme.breakpoints.sm);
const UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
const ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0___default().a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
const TagList = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\components\\Technologies\\Technologies.js";





const Technologies = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Technologies"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
    children: "I've worked with a range of technologies in the web development world. From Back-end To Design, from absolutely nothing to full-fetched games."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.List, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiReact, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Front-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 29
          }, undefined), "React.js", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), "Node.Js"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiFirebase, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Back-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, undefined), "Node.js", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiAndroid, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Game Development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, undefined), "Unreal Engine", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), "C++", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), "Blueprints", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), "Blender"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ImageContainer",
  componentId: "sc-1ehw0pq-0"
})(["text-align:center;background-image:radial-gradient(50% 50% at 50% 50%,rgba(79,108,176,0.25) 53.8%,rgba(79,108,176,0) 100%);width:100%;padding:60px;margin-top:48px;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{background-image:none;padding:0;margin-top:40px;}@media ", "{background-image:none;padding:0;margin-top:16px;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md);
const MainImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__MainImage",
  componentId: "sc-1ehw0pq-1"
})(["width:100%;"]);
const List = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TechnologiesStyles__List",
  componentId: "sc-1ehw0pq-2"
})(["list-style-type:none;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin:3rem 0;@media ", "{margin:64px 0;}@media ", "{margin:64px 0;gap:24px}@media ", "{display:flex;flex-direction:column;margin:32px 0;}"], props => props.theme.breakpoints.lg, props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TechnologiesStyles__ListContainer",
  componentId: "sc-1ehw0pq-3"
})(["display:flex;flex-direction:column;@media ", "{display:flex;margin-left:18px;}"], props => props.theme.breakpoints.sm);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TechnologiesStyles__ListTitle",
  componentId: "sc-1ehw0pq-4"
})(["font-weight:700;font-size:28px;line-height:32px;letter-spacing:0.02em;color:#FFFFFF;margin-bottom:8px;@media ", "{font-size:24px;line-height:28px;}@media ", "{font-size:20px;line-height:28px;letter-spacing:0.02em;margin-bottom:4px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListParagraph = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TechnologiesStyles__ListParagraph",
  componentId: "sc-1ehw0pq-5"
})(["font-size:18px;line-height:30px;color:rgba(255,255,255,0.75);@media ", "{font-size:16px;line-height:28px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "TechnologiesStyles__ListItem",
  componentId: "sc-1ehw0pq-6"
})(["max-width:320px;display:flex;flex-direction:column;@media ", "{max-width:203px;}@media ", "{margin-bottom:14px;max-width:320px;flex-direction:row;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ListIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img.withConfig({
  displayName: "TechnologiesStyles__ListIcon",
  componentId: "sc-1ehw0pq-7"
})(["display:block;width:48px;height:48px;margin-bottom:10px;@media ", "{width:40px;height:40px;margin-bottom:8px;}@media ", "{width:32px;height:32px;margin-bottom:0px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");


var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\components\\TimeLine\\TimeLine.js";




const TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

const Timeline = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const scroll = (node, left) => {
    return node.scrollTo({
      left,
      behavior: "smooth"
    });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "Game and Web Developer with 5 years of focused  experience and the proper foundation with education in Computer Sciences. My professional skills such as JavaScript, React.js, Next.js,HTML5,CSSTailwaind, C++,Unreal Engine, Blueprints are backed by solid interpersonal skills to ensure my fast adaptation in any environment."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
          final: index === TOTAL_CAROUSEL_COUNT - 1,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
            index: index,
            id: `carousel__item-${index}`,
            active: activeItem,
            onClick: e => handleClick(e, index),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
              children: [`${item.year}`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                width: "208",
                height: "6",
                viewBox: "0 0 208 6",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                  fill: "url(#paint0_linear)",
                  "fill-opacity": "0.33"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                    id: "paint0_linear",
                    x1: "-4.30412e-10",
                    y1: "0.5",
                    x2: "208",
                    y2: "0.500295",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      "stop-color": "white"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 112,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      offset: "0.79478",
                      "stop-color": "white",
                      "stop-opacity": "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 113,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, undefined))
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: e => handleClick(e, index),
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "TimeLineStyles__CarouselContainer",
  componentId: "vs8qb6-0"
})(["max-width:1040px;background:#0F1624;padding:0rem;list-style:none;display:flex;justify-content:space-between;margin-left:32px;&:first-of-type{margin-left:0px;}margin-bottom:80px;scrollbar-width:none;&::-webkit-scrollbar{display:none;}@media ", "{overflow-x:scroll;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;touch-action:pan-x;justify-content:initial;margin-bottom:8px;}"], props => props.theme.breakpoints.sm);
const CarouselMobileScrollNode = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselMobileScrollNode",
  componentId: "vs8qb6-1"
})(["@media ", "{display:flex;min-width:", "}"], props => props.theme.breakpoints.sm, ({
  final
}) => final ? `120%;` : `min-content`);
const CarouselItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselItem",
  componentId: "vs8qb6-2"
})(["background:#0F1624;border-radius:3px;max-width:196px;@media ", "{max-width:124px;}@media ", "{margin-left:32px;min-width:120px;background:#0E131F;padding:4px;align-content:start;scroll-snap-align:start;border-radius:3px;overflow:visible;position:relative;height:fit-content;", ";}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`);
const CarouselItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4.withConfig({
  displayName: "TimeLineStyles__CarouselItemTitle",
  componentId: "vs8qb6-3"
})(["font-weight:bold;font-size:24px;line-height:32px;letter-spacing:0.02em;display:flex;background:linear-gradient(121.57deg,#FFFFFF 10%,rgba(255,255,255,0.66) 30.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;@media ", "{font-size:20px;line-height:28px;margin-bottom:4px;}@media ", "{font-size:16px;line-height:24px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselItemImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg.withConfig({
  displayName: "TimeLineStyles__CarouselItemImg",
  componentId: "vs8qb6-4"
})(["margin-left:21px;-webkit-mask-image:linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0));width:100%;@media ", "{-webkit-mask-image:none;margin-left:16px;overflow:visible;}"], props => props.theme.breakpoints.sm);
const CarouselItemText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TimeLineStyles__CarouselItemText",
  componentId: "vs8qb6-5"
})(["font-size:14px;line-height:22px;letter-spacing:0.02em;color:rgba(255,255,255,0.75);padding-right:16px;@media ", "{font-size:12px;line-height:18px;padding-right:32px;}@media ", "{font-size:10px;line-height:16px;padding-right:0;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const CarouselButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtons",
  componentId: "vs8qb6-6"
})(["width:288px;display:none;visibility:hidden;@media ", "{display:flex;visibility:visible;margin-bottom:48px;}"], props => props.theme.breakpoints.sm);
const CarouselButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "TimeLineStyles__CarouselButton",
  componentId: "vs8qb6-7"
})(["box-sizing:border-box;background:none;padding:4px;border:none;cursor:pointer;margin-right:4px;opacity:", ";transform:", ";&:focus{outline:none;}"], props => props.active === props.index ? `1` : `.33`, props => props.active === props.index ? `scale(1.6)` : `scale(1)`);
const CarouselButtonDot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TimeLineStyles__CarouselButtonDot",
  componentId: "vs8qb6-8"
})(["background-color:white;border-radius:10px;margin:auto;width:3px;height:3px;"]);

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: "Endless Runner",
  description: "Using Unreal Engine 5 and visual Scripting tool - Buleprints, this is Subway Surfers themed game. While developing I completely used from Epic Games Unreal Engine MarketPlace",
  image: "/images/P1.png",
  tags: ["Unreal Engine 5", "Blueprints", "Endless Runner"],
  source: "https://google.com",
  visit: "https://google.com",
  id: 0
}, {
  title: "Heavy-Car Simulator",
  description: "This is Monster Car Simulator games which I made using Unreal Engine 4 and assets from Unreal Engine Marketplace",
  image: "/images/P2.png",
  tags: ["Unreal Engine", "Blueprints"],
  source: "https://google.com",
  visit: "https://google.com",
  id: 1
}, {
  title: "Metaverse",
  description: " This is a code repository of awesome website using Next.js.",
  image: "/images/P3.png",
  tags: ["Next.js", "Frontend"],
  source: "https://metaverse-git-master-iamutkarshyadav.vercel.app/",
  visit: "https://github.com/iamutkarshyadav/metaverse.git",
  id: 2
}, {
  title: "Unichat",
  description: "This is a code repository for the corresponding Real Time Chat(RTC) application using Chat Engine API and React.js",
  image: "/images/4.jpg",
  tags: ["React", "ChatEngine", "Firebase"],
  source: "https://google.com",
  visit: "https://github.com/iamutkarshyadav/GraceChatApp.git",
  id: 3
}, {
  title: "Zombie Shooter",
  description: "This is a code repository for the corresponding Zombie Shooter game using Unreal Engine 5 and Blueprints",
  image: "/images/p5.png",
  tags: ["Shooter", "Unreal Engine", "Blueprints"],
  source: "https://google.com",
  visit: " ",
  id: 4
}];
const TimeLineData = [{
  year: 2017,
  text: "Started my journey as learning C++ and JavaScript"
}, {
  year: 2018,
  text: "Started learning Game Development on Unreal Engine 4"
}, {
  year: 2019,
  text: "Worked on various Game Dev hobby projects"
}, {
  year: 2020,
  text: "Shared my projects with the world"
}, {
  year: 2021,
  text: "Started my College"
}, {
  year: 2022,
  text: "Worked as Game Devloper intern at Epic Games Inc."
}];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/layout/LayoutStyles.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\layout\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/layout/LayoutStyles.js":
/*!************************************!*\
  !*** ./src/layout/LayoutStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "LayoutStyles__Container",
  componentId: "mzu455-0"
})(["max-width:1280px;width:100%;margin:auto;"]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgrooundAnimation/BackgroundAnimation */ "./src/components/BackgrooundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\pages\\index.js";









const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__.Section, {
      grid: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 10
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 8
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\Utkarsh\\Documents\\GitHub\\Test121\\src\\styles\\GlobalComponents\\Button.js";



const Button = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], props => props.grid ? "grid" : "flex", props => props.row ? "row" : "column", props => props.nopadding ? "0" : "32px 48px 0", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm, props => props.nopadding ? "0" : "16px 16px 0");
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient(121.57deg,#FFFFFF 18.77%,rgba(255,255,255,0.66) 60.15%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], props => props.main ? '65px' : '56px', props => props.main ? '72px' : '56px', props => props.main ? '58px 0 16px' : '0', props => props.theme.breakpoints.md, props => props.main ? '56px' : '48px', props => props.main ? '56px' : '48px', props => props.main ? '40px 0 12px' : '0', props => props.theme.breakpoints.sm, props => props.main ? '28px' : '32px', props => props.main ? '32px' : '40px', props => props.main ? '16px 0 8px' : '0');
const SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', props => props.divider ? "4rem 0" : "", props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#FFF;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], props => props.theme.breakpoints.md, props => props.theme.breakpoints.sm);
const ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], ({
  alt
}) => alt ? '150px' : '262px', ({
  alt
}) => alt ? '52px' : '64px', ({
  alt
}) => alt ? '20px' : '24px', ({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px', ({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)', ({
  disabled
}) => disabled ? '.5' : '1', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '150px' : '184px', ({
  alt
}) => alt ? '52px' : '48px', ({
  alt
}) => alt ? '20px' : '16px', ({
  alt
}) => alt ? '0' : '64px', props => props.theme.breakpoints.sm, ({
  alt
}) => alt ? '0' : '32px');
const ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00DBD8 0%,#B133FF 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], ({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)', ({
  disabled
}) => disabled ? '.5' : '1', ({
  alt
}) => alt ? '20px' : '24px', ({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none', props => props.theme.breakpoints.md, ({
  alt
}) => alt ? '20px' : '16px', props => props.theme.breakpoints.sm);
const LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], ({
  large
}) => large ? '24px' : '16px', props => props.theme.breakpoints.md, ({
  large
}) => large ? '16px' : '8px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '0' : '8px');
const LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], ({
  large
}) => large ? '32px' : '24px', props => props.theme.breakpoints.md, ({
  nav
}) => nav ? '16px' : '24px', props => props.theme.breakpoints.sm, ({
  large
}) => large ? '32px' : '16px');

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-92d9c1"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9pZ25vcmVkfEM6XFxVc2Vyc1xcVXRrYXJzaFxcRG9jdW1lbnRzXFxHaXRIdWJcXFRlc3QxMjFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJkYXRhIiwibnVtYmVyIiwidGV4dCIsIkFjb21wbGlzaG1lbnRzIiwibWFwIiwiY2FyZCIsImluZGV4IiwiQm94ZXMiLCJzdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwiYnJlYWtwb2ludHMiLCJtZCIsInNtIiwiQm94IiwibGciLCJCb3hOdW0iLCJCb3hUZXh0IiwiSm9pbiIsIkpvaW5UZXh0IiwiSWNvbkNvbnRhaW5lciIsIkJhY2tncm91bmRBbmltYXRpb24iLCJGb290ZXIiLCJGb290ZXJXcmFwcGVyIiwiTGlua0l0ZW0iLCJTb2NpYWxJY29uc0NvbnRhaW5lciIsIkNvbXBhbnlDb250YWluZXIiLCJTbG9nYW4iLCJTb2NpYWxDb250YWluZXIiLCJMaW5rTGlzdCIsIkxpbmtDb2x1bW4iLCJMaW5rVGl0bGUiLCJIZWFkZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwiQ29udGFpbmVyIiwiU3BhbiIsIkRpdjEiLCJEaXYyIiwiRGl2MyIsIk5hdkxpbmsiLCJDb250YWN0RHJvcERvd24iLCJOYXZQcm9kdWN0c0ljb24iLCJJb0lvc0Fycm93RHJvcGRvd24iLCJpc09wZW4iLCJTb2NpYWxJY29ucyIsIkhlcm8iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIkxlZnRTZWN0aW9uIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFncyIsInNvdXJjZSIsInZpc2l0IiwidGFnIiwiaSIsIkltZyIsIkdyaWRDb250YWluZXIiLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyIsIlRlY2hub2xvZ2llcyIsIkltYWdlQ29udGFpbmVyIiwiTWFpbkltYWdlIiwiTGlzdCIsIkxpc3RDb250YWluZXIiLCJMaXN0VGl0bGUiLCJMaXN0UGFyYWdyYXBoIiwiTGlzdEl0ZW0iLCJMaXN0SWNvbiIsIlRPVEFMX0NBUk9VU0VMX0NPVU5UIiwiVGltZUxpbmVEYXRhIiwiVGltZWxpbmUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsInVzZVN0YXRlIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJzY3JvbGwiLCJub2RlIiwibGVmdCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJyb3VuZCIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpdGVtIiwieWVhciIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiZmluYWwiLCJDYXJvdXNlbEl0ZW0iLCJhY3RpdmUiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbEJ1dHRvbiIsIkNhcm91c2VsQnV0dG9uRG90IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJIb21lIiwiQnV0dG9uIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwib25DbGljayIsIlNlY3Rpb24iLCJncmlkIiwicm93Iiwibm9wYWRkaW5nIiwiU2VjdGlvblRpdGxlIiwibWFpbiIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvbkRpdmlkZXIiLCJjb2xvckFsdCIsImRpdmlkZXIiLCJTZWN0aW9uU3ViVGV4dCIsIlNlY29uZGFyeUJ0biIsIkJ1dHRvbkJhY2siLCJCdXR0b25Gcm9udCIsIkxpbmtDb250YWluZXIiLCJsYXJnZSIsIkxpbmtJY29uSW1nIiwibmF2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUtBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBRUMsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRFcsRUFFWDtBQUFFRCxRQUFNLEVBQUUsRUFBVjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FGVyxFQUdYO0FBQUVELFFBQU0sRUFBRSxHQUFWO0FBQWVDLE1BQUksRUFBRTtBQUFyQixDQUhXLEVBSVg7QUFBRUQsUUFBTSxFQUFFLEVBQVY7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSlcsQ0FBYjs7QUFPQSxNQUFNQyxjQUFjLEdBQUcsbUJBQ3JCLDhEQUFDLDZEQUFEO0FBQUEsMEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsY0FDR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLGtCQUNSLDhEQUFDLHNEQUFEO0FBQUEsOEJBQ0UsOERBQUMseURBQUQ7QUFBQSxrQkFBVSxHQUFFRCxJQUFJLENBQUNKLE1BQU87QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDBEQUFEO0FBQUEsa0JBQVVJLElBQUksQ0FBQ0g7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUEsT0FBVUksS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBVUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQWVBLCtEQUFlSCxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBRU8sTUFBTUksS0FBSyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSwyU0FPUEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFQMUIsRUFhUEgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFiMUIsQ0FBWDtBQXNCQSxNQUFNQyxHQUFHLEdBQUdOLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZNQUtMQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQUw1QixFQVVMTixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVY1QixFQWVMSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWY1QixDQUFUO0FBd0JBLE1BQU1HLE1BQU0sR0FBR1Isc0VBQUg7QUFBQTtBQUFBO0FBQUEsMk5BU1JDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBVHpCLEVBYVJILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBYnpCLENBQVo7QUFtQkEsTUFBTUksT0FBTyxHQUFHVCxxRUFBSDtBQUFBO0FBQUE7QUFBQSw0TkFRVEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFSeEIsRUFhVEgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFieEIsQ0FBYjtBQW1CQSxNQUFNSyxJQUFJLEdBQUdWLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGlRQU9OQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVAzQixFQWFOSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWIzQixDQUFWO0FBcUJBLE1BQU1NLFFBQVEsR0FBR1gsc0VBQUg7QUFBQTtBQUFBO0FBQUEsbU5BT1pDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBUHJCLEVBWVpILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBWnJCLENBQWQ7QUFtQkEsTUFBTU8sYUFBYSxHQUFHWix1RUFBSDtBQUFBO0FBQUE7QUFBQSw2RUFHZkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFIbEIsQ0FBbkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhQOztBQUVBLE1BQU1RLG1CQUFtQixHQUFHLG1CQUMxQjtBQUFBLHlCQUNFO0FBQ0UsYUFBUyxFQUFDLGtCQURaO0FBRUUsV0FBTyxFQUFDLGFBRlY7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLFNBQUssRUFBQyw0QkFKUjtBQUFBLDRCQU1FO0FBQUcsYUFBTyxFQUFDLE1BQVg7QUFBQSw4QkFDRTtBQUNFLGdCQUFRLEVBQUMsU0FEWDtBQUVFLGdCQUFRLEVBQUMsU0FGWDtBQUdFLFNBQUMsRUFBQyxtaUJBSEo7QUFJRSxjQUFNLEVBQUMscUJBSlQ7QUFLRSxVQUFFLEVBQUM7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFDRSxTQUFDLEVBQUMsbVZBREo7QUFFRSxjQUFNLEVBQUMscUJBRlQ7QUFHRSxVQUFFLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBYUU7QUFDRSxTQUFDLEVBQUMsbVZBREo7QUFFRSxjQUFNLEVBQUMscUJBRlQ7QUFHRSxVQUFFLEVBQUM7QUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQXlCRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxlQUFTLEVBQUMsOEJBSFo7QUFJRSxRQUFFLEVBQUMsU0FKTDtBQUtFLFFBQUUsRUFBQyxTQUxMO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUFlLFdBQUcsRUFBQyxLQUFuQjtBQUF5QixtQkFBVyxFQUFDLFlBQXJDO0FBQWtELGNBQU0sRUFBQyxNQUF6RDtBQUFBLCtCQUNFO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGLGVBcUNFO0FBQ0UsT0FBQyxFQUFDLGtDQURKO0FBRUUsZUFBUyxFQUFDLHlEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFBZSxXQUFHLEVBQUMsS0FBbkI7QUFBeUIsbUJBQVcsRUFBQyxZQUFyQztBQUFrRCxjQUFNLEVBQUMsTUFBekQ7QUFBQSwrQkFDRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJDRixlQThDRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxlQUFTLEVBQUMsOEJBSFo7QUFJRSxRQUFFLEVBQUMsU0FKTDtBQUtFLFFBQUUsRUFBQyxTQUxMO0FBTUUsVUFBSSxFQUFDLFFBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxJQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUNGLGVBK0RFO0FBQ0UsT0FBQyxFQUFDLGtDQURKO0FBRUUsZUFBUyxFQUFDLHlEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsSUFETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9ERixlQTZFRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLHlEQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUFlLFdBQUcsRUFBQyxLQUFuQjtBQUF5QixtQkFBVyxFQUFDLFlBQXJDO0FBQWtELGNBQU0sRUFBQyxNQUF6RDtBQUFBLCtCQUNFO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0VGLGVBeUZFO0FBQ0UsT0FBQyxFQUFDLGtDQURKO0FBRUUsZUFBUyxFQUFDLDBEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFBZSxXQUFHLEVBQUMsS0FBbkI7QUFBeUIsbUJBQVcsRUFBQyxZQUFyQztBQUFrRCxjQUFNLEVBQUMsTUFBekQ7QUFBQSwrQkFDRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpGRixlQWtHRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLHlEQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEdGLGVBbUhFO0FBQ0UsT0FBQyxFQUFDLGlDQURKO0FBRUUsZUFBUyxFQUFDLHdEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsS0FETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5IRixlQWlJRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLDJEQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxJQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaklGLGVBa0pFO0FBQ0UsT0FBQyxFQUFDLGlDQURKO0FBRUUsZUFBUyxFQUFDLHFFQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsSUFETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxKRixlQWdLRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLDhCQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEtGLGVBaUxFO0FBQ0UsT0FBQyxFQUFDLGdDQURKO0FBRUUsZUFBUyxFQUFDLHlEQUZaO0FBR0UsWUFBTSxFQUFDLHFCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsS0FETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpMRixlQStMRTtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsUUFBRSxFQUFDLFNBRkw7QUFHRSxRQUFFLEVBQUMsU0FITDtBQUlFLFFBQUUsRUFBQyxTQUpMO0FBS0UsZUFBUyxFQUFDLHlEQUxaO0FBTUUsVUFBSSxFQUFDLFNBTlA7QUFBQSw2QkFRRTtBQUNFLFdBQUcsRUFBQyxLQUROO0FBRUUsYUFBSyxFQUFDLEdBRlI7QUFHRSxtQkFBVyxFQUFDLFlBSGQ7QUFJRSxjQUFNLEVBQUMsTUFKVDtBQUFBLCtCQU1FO0FBQU8sbUJBQVMsRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0xGLGVBZ05FO0FBQ0UsT0FBQyxFQUFDLGtDQURKO0FBRUUsZUFBUyxFQUFDLDBEQUZaO0FBR0UsWUFBTSxFQUFDLHNCQUhUO0FBQUEsNkJBS0U7QUFDRSxXQUFHLEVBQUMsS0FETjtBQUVFLGFBQUssRUFBQyxHQUZSO0FBR0UsbUJBQVcsRUFBQyxZQUhkO0FBSUUsY0FBTSxFQUFDLE1BSlQ7QUFBQSwrQkFNRTtBQUFPLG1CQUFTLEVBQUM7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhORixlQThORTtBQUFBLDhCQUNFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsR0FGTDtBQUdFLFVBQUUsRUFBQyxHQUhMO0FBSUUsU0FBQyxFQUFDLEdBSko7QUFLRSxxQkFBYSxFQUFDLGdCQUxoQjtBQU1FLHlCQUFpQixFQUFDLDBDQU5wQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBQyxVQUFiO0FBQXdCLG1CQUFTLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLG1CQUFTLEVBQUMsT0FBM0I7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVlFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsR0FGTDtBQUdFLFVBQUUsRUFBQyxHQUhMO0FBSUUsU0FBQyxFQUFDLEdBSko7QUFLRSxxQkFBYSxFQUFDLGdCQUxoQjtBQU1FLHlCQUFpQixFQUFDLDBDQU5wQjtBQUFBLGdDQVFFO0FBQU0sZ0JBQU0sRUFBQyxVQUFiO0FBQXdCLG1CQUFTLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLG1CQUFTLEVBQUMsT0FBM0I7QUFBbUMscUJBQVcsRUFBQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixlQXVCRTtBQUNFLFVBQUUsRUFBQyxlQURMO0FBRUUsVUFBRSxFQUFDLEdBRkw7QUFHRSxVQUFFLEVBQUMsR0FITDtBQUlFLFNBQUMsRUFBQyxHQUpKO0FBS0UscUJBQWEsRUFBQyxnQkFMaEI7QUFNRSx5QkFBaUIsRUFBQywwQ0FOcEI7QUFBQSxnQ0FRRTtBQUFNLGdCQUFNLEVBQUMsVUFBYjtBQUF3QixtQkFBUyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLE9BQTNCO0FBQW1DLHFCQUFXLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGLGVBa0NFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbENGLGVBNkNFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxRQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN0NGLGVBd0RFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLE9BSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeERGLGVBbUVFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkVGLGVBOEVFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsUUFGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUVGLGVBeUZFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekZGLGVBb0dFO0FBQ0UsVUFBRSxFQUFDLGVBREw7QUFFRSxVQUFFLEVBQUMsU0FGTDtBQUdFLFVBQUUsRUFBQyxTQUhMO0FBSUUsVUFBRSxFQUFDLFNBSkw7QUFLRSxVQUFFLEVBQUMsU0FMTDtBQU1FLHFCQUFhLEVBQUMsZ0JBTmhCO0FBQUEsZ0NBUUU7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRTtBQUFNLGdCQUFNLEVBQUMsR0FBYjtBQUFpQixtQkFBUyxFQUFDLFNBQTNCO0FBQXFDLHFCQUFXLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEdGLGVBK0dFO0FBQ0UsVUFBRSxFQUFDLGdCQURMO0FBRUUsVUFBRSxFQUFDLFNBRkw7QUFHRSxVQUFFLEVBQUMsU0FITDtBQUlFLFVBQUUsRUFBQyxRQUpMO0FBS0UsVUFBRSxFQUFDLFNBTEw7QUFNRSxxQkFBYSxFQUFDLGdCQU5oQjtBQUFBLGdDQVFFO0FBQU0sbUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBTSxnQkFBTSxFQUFDLEdBQWI7QUFBaUIsbUJBQVMsRUFBQyxTQUEzQjtBQUFxQyxxQkFBVyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9HRixlQTBIRTtBQUNFLFVBQUUsRUFBQyxnQkFETDtBQUVFLFVBQUUsRUFBQyxTQUZMO0FBR0UsVUFBRSxFQUFDLFFBSEw7QUFJRSxVQUFFLEVBQUMsU0FKTDtBQUtFLFVBQUUsRUFBQyxTQUxMO0FBTUUscUJBQWEsRUFBQyxnQkFOaEI7QUFBQSxnQ0FRRTtBQUFNLG1CQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFO0FBQU0sZ0JBQU0sRUFBQyxHQUFiO0FBQWlCLG1CQUFTLEVBQUMsU0FBM0I7QUFBcUMscUJBQVcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkExSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBMFdBLCtEQUFlQSxtQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1V0E7QUFDQTtBQU9BO0FBQ0E7O0FBWUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDbkIsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFBLDhCQUNFLDhEQUFDLHFEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyxtREFBRDtBQUFVLGNBQUksRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRSw4REFBQyxxREFBRDtBQUFBLGdDQUNFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBVSxjQUFJLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWFFLDhEQUFDLCtEQUFEO0FBQUEsOEJBQ0UsOERBQUMsMkRBQUQ7QUFBQSwrQkFDRSw4REFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRSw4REFBQywwREFBRDtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQWEsY0FBSSxFQUFDLG9DQUFsQjtBQUFBLGlDQUNFLDhEQUFDLHdEQUFEO0FBQWMsZ0JBQUksRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLDhEQUFDLDZEQUFEO0FBQWEsY0FBSSxFQUFDLDJDQUFsQjtBQUFBLGlDQUNFLDhEQUFDLDBEQUFEO0FBQWdCLGdCQUFJLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkYsZUFPRSw4REFBQyw2REFBRDtBQUFhLGNBQUksRUFBQywyQ0FBbEI7QUFBQSxpQ0FDRSw4REFBQywyREFBRDtBQUFpQixnQkFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBVUUsOERBQUMsNkRBQUQ7QUFBYSxjQUFJLEVBQUMsdUNBQWxCO0FBQUEsaUNBQ0UsOERBQUMsK0RBQUQ7QUFBcUIsZ0JBQUksRUFBQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBbUNELENBcENEOztBQXNDQSwrREFBZUEsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBRU8sTUFBTUMsYUFBYSxHQUFHZiwyRUFBSDtBQUFBO0FBQUE7QUFBQSw0S0FRZkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFSbEIsQ0FBbkI7QUFjQSxNQUFNVyxRQUFRLEdBQUdoQixxRUFBSDtBQUFBO0FBQUE7QUFBQSwyVEFjWEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFkdEIsRUFvQlhILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBcEJ0QixDQUFkO0FBNkJBLE1BQU1ZLG9CQUFvQixHQUFHakIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsd0xBS3hCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUxULEVBVXhCSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVZULENBQTFCO0FBaUJBLE1BQU1hLGdCQUFnQixHQUFHbEIsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdU5BT25CQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVBkLEVBWW5CSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVpkLENBQXRCO0FBcUJBLE1BQU1jLE1BQU0sR0FBR25CLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtPQVFUQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVJ4QixFQWFUSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWJ4QixDQUFaO0FBb0JBLE1BQU1lLGVBQWUsR0FBR3BCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtHQUlsQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFKZixDQUFyQjtBQVlBLE1BQU1pQixRQUFRLEdBQUdyQixzRUFBSDtBQUFBO0FBQUE7QUFBQSw2UkFPWEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkksRUFQdEIsRUFXWE4sS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFYdEIsRUFnQlhILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBaEJ0QixDQUFkO0FBdUJBLE1BQU1pQixVQUFVLEdBQUd0Qix1RUFBSDtBQUFBO0FBQUE7QUFBQSxzRUFBaEI7QUFNQSxNQUFNdUIsU0FBUyxHQUFHdkIsc0VBQUg7QUFBQTtBQUFBO0FBQUEsa05BU1pDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBVHJCLENBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSlA7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNbUIsTUFBTSxHQUFHLG1CQUNiLDhEQUFDLG9EQUFEO0FBQUEsMEJBQ0UsOERBQUMsK0NBQUQ7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUEsNkJBQ0U7QUFDRSxhQUFLLEVBQUU7QUFDTEMsaUJBQU8sRUFBRSxNQURKO0FBRUxDLG9CQUFVLEVBQUUsUUFGUDtBQUdMQyxlQUFLLEVBQUUsT0FIRjtBQUlMQyxzQkFBWSxFQUFFO0FBSlQsU0FEVDtBQUFBLGdDQVFFLDhEQUFDLHFEQUFEO0FBQVcsY0FBSSxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFTRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBZ0JFLDhEQUFDLCtDQUFEO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUEsK0JBQ0UsOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFXRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhCRixlQWlDRSw4REFBQywrQ0FBRDtBQUFBLDRCQUNFLDhEQUFDLHNEQUFEO0FBQWEsVUFBSSxFQUFDLG9DQUFsQjtBQUFBLDZCQUNFLDhEQUFDLHdEQUFEO0FBQWMsWUFBSSxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsc0RBQUQ7QUFBYSxVQUFJLEVBQUMsMkNBQWxCO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFBZ0IsWUFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBT0UsOERBQUMsc0RBQUQ7QUFBYSxVQUFJLEVBQUMsMkNBQWxCO0FBQUEsNkJBQ0UsOERBQUMsMkRBQUQ7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBVUUsOERBQUMsc0RBQUQ7QUFBYSxVQUFJLEVBQUMsdUNBQWxCO0FBQUEsNkJBQ0UsOERBQUMsK0RBQUQ7QUFBcUIsWUFBSSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFtREEsK0RBQWVKLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUVPLE1BQU1LLFNBQVMsR0FBRzdCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtRQVFWQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVJ4QixDQUFmO0FBZ0JBLE1BQU15QixJQUFJLEdBQUc5Qix3RUFBSDtBQUFBO0FBQUE7QUFBQSx3QkFBVjtBQUtBLE1BQU0rQixJQUFJLEdBQUcvQix1RUFBSDtBQUFBO0FBQUE7QUFBQSwySEFLTEMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFMN0IsQ0FBVjtBQVNBLE1BQU0yQixJQUFJLEdBQUdoQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxnSEFJTEMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFKN0IsQ0FBVjtBQVFBLE1BQU00QixJQUFJLEdBQUdqQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxzSkFLTEMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFMN0IsQ0FBVixDLENBV1A7O0FBQ08sTUFBTTZCLE9BQU8sR0FBR2xDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9LQVVSQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVYxQixDQUFiLEMsQ0FlUDs7QUFDTyxNQUFNOEIsZUFBZSxHQUFHbkMsMEVBQUg7QUFBQTtBQUFBO0FBQUEsc1FBbUJoQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFuQmxCLEVBc0JoQkosS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUF0QmxCLENBQXJCO0FBMkJBLE1BQU1nQyxlQUFlLEdBQUdwQyx3REFBTSxDQUFDcUMsOERBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx1S0FLZixDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFpQkEsTUFBTSxHQUFHLEdBQUgsR0FBUyxLQUxqQixFQU1iLENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWlCQSxNQUFNLEdBQUcsWUFBSCxHQUFrQixXQU41QixFQVloQnJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBWmxCLENBQXJCLEMsQ0FtQlA7O0FBRU8sTUFBTWtDLFdBQVcsR0FBR3ZDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySFA7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXdDLElBQUksR0FBSXZDLEtBQUQsaUJBQ1gsOERBQUMsNkRBQUQ7QUFBUyxLQUFHLE1BQVo7QUFBYSxXQUFTLE1BQXRCO0FBQUEseUJBQ0UsOERBQUMsb0RBQUQ7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFjLFVBQUksTUFBbEI7QUFBbUIsWUFBTSxNQUF6QjtBQUFBLCtDQUNlO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0UsOERBQUMsaUVBQUQ7QUFBQSw4S0FFSSw4REFBQyxvRUFBRDtBQUFRLGVBQU8sRUFBRyxNQUFLd0MsTUFBTSxDQUFDQyxRQUFQLEdBQWtCLG9CQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQWVBLCtEQUFlRixJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBRU8sTUFBTUcsV0FBVyxHQUFHM0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEscUtBRVpDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBRnRCLEVBU1pKLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBVHRCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQO0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU13QyxRQUFRLEdBQUcsbUJBQ2YsOERBQUMsNkRBQUQ7QUFBUyxXQUFTLE1BQWxCO0FBQW1CLElBQUUsRUFBQyxVQUF0QjtBQUFBLDBCQUNFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLGtFQUFEO0FBQWMsUUFBSSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UsOERBQUMsMERBQUQ7QUFBQSxjQUNHQyw4REFBQSxDQUNDLENBQUM7QUFBRUMsUUFBRjtBQUFNQyxXQUFOO0FBQWFDLFdBQWI7QUFBb0JDLGlCQUFwQjtBQUFpQ0MsVUFBakM7QUFBdUNDLFlBQXZDO0FBQStDQztBQUEvQyxLQUFELGtCQUNFLDhEQUFDLHFEQUFEO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBSyxXQUFHLEVBQUVMO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLHlEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsd0RBQUQ7QUFBYSxlQUFLLE1BQWxCO0FBQUEsb0JBQW9CQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFNRSw4REFBQyxxREFBRDtBQUFBLGtCQUFXQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRTtBQUFBLGdDQUNFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFBQSxvQkFDR0MsSUFBSSxDQUFDdEQsR0FBTCxDQUFTLENBQUN5RCxHQUFELEVBQU1DLENBQU4sa0JBQ1IsOERBQUMsZ0RBQUQ7QUFBQSxzQkFBY0Q7QUFBZCxhQUFVQyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQWVFLDhEQUFDLHdEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsMERBQUQ7QUFBZSxjQUFJLEVBQUVGLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMsMERBQUQ7QUFBZSxjQUFJLEVBQUVELE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRjtBQUFBLE9BQWVMLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFpQ0EsK0RBQWVGLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUVPLE1BQU1XLEdBQUcsR0FBR3ZELHVFQUFIO0FBQUE7QUFBQTtBQUFBLGdFQUFUO0FBT0EsTUFBTXdELGFBQWEsR0FBR3hELDJFQUFIO0FBQUE7QUFBQTtBQUFBLDJOQU9oQkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFQbEIsQ0FBbkI7QUFlQSxNQUFNb0QsUUFBUSxHQUFHekQsdUVBQUg7QUFBQTtBQUFBO0FBQUEsNkhBS1RDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBTHpCLENBQWQ7QUFTQSxNQUFNcUQsWUFBWSxHQUFHMUQsdUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0RBQWxCO0FBUUEsTUFBTTJELFdBQVcsR0FBRzNELHNFQUFIO0FBQUE7QUFBQTtBQUFBLHlGQUtSQyxLQUFELElBQVdBLEtBQUssQ0FBQytDLEtBQU4sR0FBYyxNQUFkLEdBQXVCLE1BTHpCLENBQWpCO0FBUUEsTUFBTVksRUFBRSxHQUFHNUQsc0VBQUg7QUFBQTtBQUFBO0FBQUEsMkVBQVI7QUFRQSxNQUFNNkQsS0FBSyxHQUFHN0QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsa0lBQVg7QUFXQSxNQUFNOEQsUUFBUSxHQUFHOUQscUVBQUg7QUFBQTtBQUFBO0FBQUEsK0hBT1RDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBUHpCLENBQWQ7QUFjQSxNQUFNMEQsV0FBVyxHQUFHL0Qsc0VBQUg7QUFBQTtBQUFBO0FBQUEsaUdBQWpCO0FBUUEsTUFBTWdFLGFBQWEsR0FBR2hFLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZJQUFuQjtBQWFBLE1BQU1pRSxPQUFPLEdBQUdqRSxzRUFBSDtBQUFBO0FBQUE7QUFBQSwrREFBYjtBQUtBLE1BQU1rRSxHQUFHLEdBQUdsRSxzRUFBSDtBQUFBO0FBQUE7QUFBQSx1Q0FBVCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTW1FLFlBQVksR0FBRyxtQkFDbkIsOERBQUMsNkRBQUQ7QUFBUyxJQUFFLEVBQUMsTUFBWjtBQUFBLDBCQUVFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBU0UsOERBQUMscURBQUQ7QUFBQSw0QkFDRSw4REFBQyx5REFBRDtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQVMsWUFBSSxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsZ0NBQ0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSw4REFBQyw4REFBRDtBQUFBLHNEQUNrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURsQiwyQkFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBYUUsOERBQUMseURBQUQ7QUFBQSw4QkFDRSw4REFBQyxzREFBRDtBQUFZLFlBQUksRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsc0RBQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGxCLDBCQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUF5QkUsOERBQUMseURBQUQ7QUFBQSw4QkFDRSw4REFBQyxxREFBRDtBQUFXLFlBQUksRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLDhEQUFEO0FBQUEsc0RBQ2tCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGxCLGdDQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEYsc0JBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRiw2QkFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUF1REEsK0RBQWVBLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBRU8sTUFBTUMsY0FBYyxHQUFHcEUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsbVhBV2hCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCSSxFQVhqQixFQWdCaEJOLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBaEJqQixDQUFwQjtBQXVCQSxNQUFNaUUsU0FBUyxHQUFHckUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsbUJBQWY7QUFJQSxNQUFNc0UsSUFBSSxHQUFHdEUsc0VBQUg7QUFBQTtBQUFBO0FBQUEsa09BT05DLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JJLEVBUDNCLEVBV05OLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBWDNCLEVBZ0JOSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWhCM0IsQ0FBVjtBQXVCQSxNQUFNa0UsYUFBYSxHQUFHdkUsdUVBQUg7QUFBQTtBQUFBO0FBQUEsdUZBSWZDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBSmxCLENBQW5CO0FBVUEsTUFBTW1FLFNBQVMsR0FBR3hFLHNFQUFIO0FBQUE7QUFBQTtBQUFBLGlQQVFiQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVJwQixFQWFiSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWJwQixDQUFmO0FBcUJBLE1BQU1vRSxhQUFhLEdBQUd6RSxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnS0FLZkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFMbEIsRUFVZkgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFWbEIsQ0FBbkI7QUFnQkEsTUFBTXFFLFFBQVEsR0FBRzFFLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDRKQUtaQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUxyQixFQVNaSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQVRyQixDQUFkO0FBZ0JBLE1BQU1zRSxRQUFRLEdBQUczRSx1RUFBSDtBQUFBO0FBQUE7QUFBQSw2S0FNVkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFOdkIsRUFZVkgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFadkIsQ0FBZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhQO0FBRUE7QUFXQTtBQU1BO0FBRUEsTUFBTXVFLG9CQUFvQixHQUFHQyxxRUFBN0I7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDLENBQUQsQ0FBNUM7QUFDQSxRQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVBLFFBQU1DLE1BQU0sR0FBRyxDQUFDQyxJQUFELEVBQU9DLElBQVAsS0FBZ0I7QUFDN0IsV0FBT0QsSUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBRUQsVUFBRjtBQUFRRSxjQUFRLEVBQUU7QUFBbEIsS0FBZCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJcEMsQ0FBSixLQUFVO0FBQzVCb0MsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUlULFdBQVcsQ0FBQ1UsT0FBaEIsRUFBeUI7QUFDdkIsWUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FDakJiLFdBQVcsQ0FBQ1UsT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FBbEMsSUFBeUMxQyxDQUFDLEdBQUd1QixxRUFBN0MsQ0FEaUIsQ0FBbkI7QUFJQU8sWUFBTSxDQUFDRixXQUFXLENBQUNVLE9BQWIsRUFBc0JDLFVBQXRCLENBQU47QUFDRDtBQUNGLEdBVkQ7O0FBWUEsUUFBTUksWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBSWYsV0FBVyxDQUFDVSxPQUFoQixFQUF5QjtBQUN2QixZQUFNOUYsS0FBSyxHQUFHZ0csSUFBSSxDQUFDSSxLQUFMLENBQ1hoQixXQUFXLENBQUNVLE9BQVosQ0FBb0JDLFVBQXBCLElBQ0VYLFdBQVcsQ0FBQ1UsT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FEcEMsQ0FBRCxHQUVFbkIscUVBSFUsQ0FBZDtBQU1BRyxtQkFBYSxDQUFDbEYsS0FBRCxDQUFiO0FBQ0Q7QUFDRixHQVZEOztBQWFBcUcsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsWUFBWSxHQUFHLE1BQU07QUFDekJoQixZQUFNLENBQUNGLFdBQVcsQ0FBQ1UsT0FBYixFQUFzQixDQUF0QixDQUFOO0FBQ0QsS0FGRDs7QUFJQW5ELFVBQU0sQ0FBQzRELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDRSw4REFBQyw2REFBRDtBQUFTLE1BQUUsRUFBQyxPQUFaO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQVFFLDhEQUFDLDhEQUFEO0FBQW1CLFNBQUcsRUFBRWxCLFdBQXhCO0FBQXFDLGNBQVEsRUFBRWUsWUFBL0M7QUFBQSw2QkFDRTtBQUFBLGtCQUNHcEIsa0VBQUEsQ0FBaUIsQ0FBQ3lCLElBQUQsRUFBT3hHLEtBQVAsa0JBQ2hCLDhEQUFDLHFFQUFEO0FBRUUsZUFBSyxFQUFFQSxLQUFLLEtBQUs4RSxvQkFBb0IsR0FBRyxDQUYxQztBQUFBLGlDQUlFLDhEQUFDLHlEQUFEO0FBQ0UsaUJBQUssRUFBRTlFLEtBRFQ7QUFFRSxjQUFFLEVBQUcsa0JBQWlCQSxLQUFNLEVBRjlCO0FBR0Usa0JBQU0sRUFBRWlGLFVBSFY7QUFJRSxtQkFBTyxFQUFHVyxDQUFELElBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJNUYsS0FBSixDQUo3QjtBQUFBLG9DQU1FLDhEQUFDLDhEQUFEO0FBQUEseUJBQ0ksR0FBRXdHLElBQUksQ0FBQ0MsSUFBSyxFQURoQixlQUVFLDhEQUFDLDREQUFEO0FBQ0UscUJBQUssRUFBQyxLQURSO0FBRUUsc0JBQU0sRUFBQyxHQUZUO0FBR0UsdUJBQU8sRUFBQyxXQUhWO0FBSUUsb0JBQUksRUFBQyxNQUpQO0FBS0UscUJBQUssRUFBQyw0QkFMUjtBQUFBLHdDQU9FO0FBQ0UsK0JBQVUsU0FEWjtBQUVFLCtCQUFVLFNBRlo7QUFHRSxtQkFBQyxFQUFDLDJKQUhKO0FBSUUsc0JBQUksRUFBQyxxQkFKUDtBQUtFLGtDQUFhO0FBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQRixlQWNFO0FBQUEseUNBQ0U7QUFDRSxzQkFBRSxFQUFDLGVBREw7QUFFRSxzQkFBRSxFQUFDLGNBRkw7QUFHRSxzQkFBRSxFQUFDLEtBSEw7QUFJRSxzQkFBRSxFQUFDLEtBSkw7QUFLRSxzQkFBRSxFQUFDLFVBTEw7QUFNRSxpQ0FBYSxFQUFDLGdCQU5oQjtBQUFBLDRDQVFFO0FBQU0sb0NBQVc7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FSRixlQVNFO0FBQ0UsNEJBQU0sRUFBQyxTQURUO0FBRUUsb0NBQVcsT0FGYjtBQUdFLHNDQUFhO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTkYsZUF5Q0UsOERBQUMsNkRBQUQ7QUFBQSx3QkFBbUJELElBQUksQ0FBQzVHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGLFdBQ09JLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRixlQThERSw4REFBQyw0REFBRDtBQUFBLGdCQUNHK0Usa0VBQUEsQ0FBaUIsQ0FBQ3lCLElBQUQsRUFBT3hHLEtBQVAsS0FBaUI7QUFDakMsNEJBQ0UsOERBQUMsMkRBQUQ7QUFFRSxlQUFLLEVBQUVBLEtBRlQ7QUFHRSxnQkFBTSxFQUFFaUYsVUFIVjtBQUlFLGlCQUFPLEVBQUdXLENBQUQsSUFBT0QsV0FBVyxDQUFDQyxDQUFELEVBQUk1RixLQUFKLENBSjdCO0FBS0UsY0FBSSxFQUFDLFFBTFA7QUFBQSxpQ0FPRSw4REFBQyw4REFBRDtBQUFtQixrQkFBTSxFQUFFaUY7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLFdBQ09qRixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFXRCxPQVpBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5REYsZUE2RUUsOERBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpRkQsQ0ExSEQ7O0FBNEhBLCtEQUFlZ0YsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEpBO0FBRU8sTUFBTTBCLGlCQUFpQixHQUFHeEcsc0VBQUg7QUFBQTtBQUFBO0FBQUEsNFlBc0JuQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUF0QmQsQ0FBdkI7QUErQkEsTUFBTW9HLHdCQUF3QixHQUFHekcsdUVBQUg7QUFBQTtBQUFBO0FBQUEsaURBQzFCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQURQLEVBR3BCLENBQUM7QUFBRXFHO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLEdBQUksT0FBSixHQUFjLGFBSGQsQ0FBOUI7QUFPQSxNQUFNQyxZQUFZLEdBQUczRyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxpU0FLZEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFMbkIsRUFTZEgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFUbkIsRUFxQmxCSixLQUFELElBQVdBLEtBQUssQ0FBQzJHLE1BQU4sS0FBaUIzRyxLQUFLLENBQUNILEtBQXZCLEdBQWdDLFlBQWhDLEdBQStDLGNBckJ2QyxDQUFsQjtBQXlCQSxNQUFNK0csaUJBQWlCLEdBQUc3RyxzRUFBSDtBQUFBO0FBQUE7QUFBQSw0V0FZbkJDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBWmQsRUFrQm5CSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWxCZCxDQUF2QjtBQXVCQSxNQUFNeUcsZUFBZSxHQUFHOUcsdUVBQUg7QUFBQTtBQUFBO0FBQUEscUxBS2pCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUxoQixDQUFyQjtBQVlBLE1BQU0wRyxnQkFBZ0IsR0FBRy9HLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRPQU9sQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFQZixFQVlsQkgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFaZixDQUF0QjtBQWtCQSxNQUFNMkcsZUFBZSxHQUFHaEgsdUVBQUg7QUFBQTtBQUFBO0FBQUEsb0hBTWpCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQU5oQixDQUFyQjtBQWFBLE1BQU00RyxjQUFjLEdBQUdqSCwwRUFBSDtBQUFBO0FBQUE7QUFBQSx5SkFPYkMsS0FBRCxJQUFXQSxLQUFLLENBQUMyRyxNQUFOLEtBQWlCM0csS0FBSyxDQUFDSCxLQUF2QixHQUFnQyxHQUFoQyxHQUFzQyxLQVBuQyxFQVFYRyxLQUFELElBQVdBLEtBQUssQ0FBQzJHLE1BQU4sS0FBaUIzRyxLQUFLLENBQUNILEtBQXZCLEdBQWdDLFlBQWhDLEdBQStDLFVBUjlDLENBQXBCO0FBZUEsTUFBTW9ILGlCQUFpQixHQUFHbEgsdUVBQUg7QUFBQTtBQUFBO0FBQUEsbUZBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSkEsTUFBTTZDLFFBQVEsR0FBRyxDQUN0QjtBQUNFRyxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUNULGdMQUhKO0FBSUVGLE9BQUssRUFBRSxnQkFKVDtBQUtFRyxNQUFJLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixZQUFwQixFQUFrQyxnQkFBbEMsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0JBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVOLElBQUUsRUFBRTtBQVJOLENBRHNCLEVBV3RCO0FBQ0VFLE9BQUssRUFBRSxxQkFEVDtBQUVFQyxhQUFXLEVBQ1Qsa0hBSEo7QUFJRUYsT0FBSyxFQUFFLGdCQUpUO0FBS0VHLE1BQUksRUFBRSxDQUFDLGVBQUQsRUFBa0IsWUFBbEIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0JBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVOLElBQUUsRUFBRTtBQVJOLENBWHNCLEVBcUJ0QjtBQUNFRSxPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsOERBRmY7QUFHRUYsT0FBSyxFQUFFLGdCQUhUO0FBSUVHLE1BQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxVQUFaLENBSlI7QUFLRUMsUUFBTSxFQUFFLDBEQUxWO0FBTUVDLE9BQUssRUFBRSxrREFOVDtBQU9FTixJQUFFLEVBQUU7QUFQTixDQXJCc0IsRUE4QnRCO0FBQ0VFLE9BQUssRUFBRSxTQURUO0FBRUVDLGFBQVcsRUFDVCxvSEFISjtBQUlFRixPQUFLLEVBQUUsZUFKVDtBQUtFRyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixVQUF4QixDQUxSO0FBTUVDLFFBQU0sRUFBRSxvQkFOVjtBQU9FQyxPQUFLLEVBQUUscURBUFQ7QUFRRU4sSUFBRSxFQUFFO0FBUk4sQ0E5QnNCLEVBd0N0QjtBQUNFRSxPQUFLLEVBQUUsZ0JBRFQ7QUFFRUMsYUFBVyxFQUNULDBHQUhKO0FBSUVGLE9BQUssRUFBRSxnQkFKVDtBQUtFRyxNQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksZUFBWixFQUE2QixZQUE3QixDQUxSO0FBTUVDLFFBQU0sRUFBRSxvQkFOVjtBQU9FQyxPQUFLLEVBQUUsR0FQVDtBQVFFTixJQUFFLEVBQUU7QUFSTixDQXhDc0IsQ0FBakI7QUFvREEsTUFBTStCLFlBQVksR0FBRyxDQUMxQjtBQUFFMEIsTUFBSSxFQUFFLElBQVI7QUFBYzdHLE1BQUksRUFBRTtBQUFwQixDQUQwQixFQUUxQjtBQUFFNkcsTUFBSSxFQUFFLElBQVI7QUFBYzdHLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFNkcsTUFBSSxFQUFFLElBQVI7QUFBYzdHLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFNkcsTUFBSSxFQUFFLElBQVI7QUFBYzdHLE1BQUksRUFBRTtBQUFwQixDQUowQixFQUsxQjtBQUFFNkcsTUFBSSxFQUFFLElBQVI7QUFBYzdHLE1BQUksRUFBRTtBQUFwQixDQUwwQixFQU0xQjtBQUFFNkcsTUFBSSxFQUFFLElBQVI7QUFBYzdHLE1BQUksRUFBRTtBQUFwQixDQU4wQixDQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRFA7QUFFQTtBQUNBO0FBQ0E7QUFFTyxNQUFNeUgsTUFBTSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQ3BDLHNCQUNFLDhEQUFDLG9EQUFEO0FBQUEsNEJBQ0MsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUEsZ0JBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQUdDLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQVJNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFFTyxNQUFNdkYsU0FBUyxHQUFHN0IsdUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0RBQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNcUgsSUFBSSxHQUFHLE1BQU07QUFDakIsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDRyw4REFBQyw2REFBRDtBQUFTLFVBQUksTUFBYjtBQUFBLDhCQUNDLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFFRSw4REFBQyx5RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESCxlQUtHLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEgsZUFNQSw4REFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5BLGVBT0QsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQQyxlQVFGLDhEQUFDLDhFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQWJEOztBQWVBLCtEQUFlQSxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTs7QUFFQSxNQUFNQyxNQUFNLEdBQUlySCxLQUFELGlCQUNiLDhEQUFDLDhDQUFEO0FBQVksS0FBRyxFQUFFQSxLQUFLLENBQUNzSCxHQUF2QjtBQUE0QixNQUFJLEVBQUV0SCxLQUFLLENBQUN1SCxJQUF4QztBQUE4QyxVQUFRLEVBQUV2SCxLQUFLLENBQUN3SCxRQUE5RDtBQUFBLGFBQXlFeEgsS0FBSyxDQUFDbUgsUUFBL0UsZUFDRSw4REFBQywrQ0FBRDtBQUFhLE9BQUcsRUFBRW5ILEtBQUssQ0FBQ3NILEdBQXhCO0FBQTZCLFdBQU8sRUFBRXRILEtBQUssQ0FBQ3lILE9BQTVDO0FBQXFELFlBQVEsRUFBRXpILEtBQUssQ0FBQ3dILFFBQXJFO0FBQUEsY0FBZ0Z4SCxLQUFLLENBQUNtSDtBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBTUEsK0RBQWVFLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUVPLE1BQU1LLE9BQU8sR0FBRzNILDJFQUFIO0FBQUE7QUFBQTtBQUFBLDZTQUNOQyxLQUFELElBQVdBLEtBQUssQ0FBQzJILElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BRDFCLEVBRUMzSCxLQUFELElBQVdBLEtBQUssQ0FBQzRILEdBQU4sR0FBWSxLQUFaLEdBQW9CLFFBRi9CLEVBR041SCxLQUFELElBQVdBLEtBQUssQ0FBQzZILFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFINUIsRUFXUjdILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBWDFCLEVBZ0JSSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWhCMUIsRUFpQkpKLEtBQUQsSUFBV0EsS0FBSyxDQUFDNkgsU0FBTixHQUFrQixHQUFsQixHQUF3QixhQWpCOUIsQ0FBYjtBQXdCQSxNQUFNQyxZQUFZLEdBQUcvSCxzRUFBSDtBQUFBO0FBQUE7QUFBQSxzZEFFVEMsS0FBRCxJQUFXQSxLQUFLLENBQUMrSCxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUZ2QixFQUdQL0gsS0FBRCxJQUFXQSxLQUFLLENBQUMrSCxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUh6QixFQVVYL0gsS0FBRCxJQUFXQSxLQUFLLENBQUMrSCxJQUFOLEdBQWEsYUFBYixHQUE2QixHQVY1QixFQVlkL0gsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFabkIsRUFhUEgsS0FBRCxJQUFXQSxLQUFLLENBQUMrSCxJQUFOLEdBQWEsTUFBYixHQUFzQixNQWJ6QixFQWNML0gsS0FBRCxJQUFXQSxLQUFLLENBQUMrSCxJQUFOLEdBQWEsTUFBYixHQUFzQixNQWQzQixFQWdCVC9ILEtBQUQsSUFBV0EsS0FBSyxDQUFDK0gsSUFBTixHQUFhLGFBQWIsR0FBNkIsR0FoQjlCLEVBbUJkL0gsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFuQm5CLEVBc0JQSixLQUFELElBQVdBLEtBQUssQ0FBQytILElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BdEJ6QixFQXVCTC9ILEtBQUQsSUFBV0EsS0FBSyxDQUFDK0gsSUFBTixHQUFhLE1BQWIsR0FBc0IsTUF2QjNCLEVBeUJUL0gsS0FBRCxJQUFXQSxLQUFLLENBQUMrSCxJQUFOLEdBQWEsWUFBYixHQUE0QixHQXpCN0IsQ0FBbEI7QUE4QkEsTUFBTUMsV0FBVyxHQUFHakkscUVBQUg7QUFBQTtBQUFBO0FBQUEsNlFBUVpDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBUnRCLEVBZVpILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBZnRCLENBQWpCO0FBc0JBLE1BQU02SCxjQUFjLEdBQUdsSSx1RUFBSDtBQUFBO0FBQUE7QUFBQSwwS0FNVkMsS0FBRCxJQUFXQSxLQUFLLENBQUNrSSxRQUFOLEdBQ3ZCLG1EQUR1QixHQUV2QixtREFSdUIsRUFVWmxJLEtBQUQsSUFBV0EsS0FBSyxDQUFDbUksT0FBTixHQUFnQixRQUFoQixHQUEyQixFQVZ6QixFQVlmbkksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFabkIsRUFpQmZILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBakJuQixDQUFwQjtBQXNCQSxNQUFNZ0ksY0FBYyxHQUFHckkscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ05BT2pCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQVBqQixFQWFmSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQWJuQixDQUFwQjtBQWtCQSxNQUFNaUksWUFBWSxHQUFHdEksMEVBQUg7QUFBQTtBQUFBO0FBQUEsZ3RCQStCYkMsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUEvQnJCLEVBd0NiSCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQXhDckIsQ0FBbEI7QUFrREEsTUFBTWtJLFVBQVUsR0FBR3ZJLHVFQUFIO0FBQUE7QUFBQTtBQUFBLCtZQUNaLENBQUM7QUFBRXVIO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsT0FBSCxHQUFhLE9BRGpCLEVBRVgsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQUZqQixFQUlSLENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFKcEIsRUFTWCxDQUFDO0FBQUVBLEtBQUY7QUFBT0M7QUFBUCxDQUFELEtBQW9CRCxHQUFHLElBQUlDLElBQVIsR0FBZ0IsR0FBaEIsR0FBc0IsVUFUOUIsRUFXUCxDQUFDO0FBQUVEO0FBQUYsQ0FBRCxLQUFhQSxHQUFHLEdBQUcsbURBQUgsR0FBeUQsbURBWGxFLEVBZ0JWLENBQUM7QUFBRUU7QUFBRixDQUFELEtBQWtCQSxRQUFRLEdBQUcsSUFBSCxHQUFVLEdBaEIxQixFQWtCWHhILEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBbEJ2QixFQW1CVixDQUFDO0FBQUVtSDtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLE9BQUgsR0FBYSxPQW5CbkIsRUFvQlQsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQXBCbkIsRUFxQk4sQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLE1BQUgsR0FBWSxNQXJCdEIsRUFzQkYsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBYUEsR0FBRyxHQUFHLEdBQUgsR0FBUyxNQXRCdkIsRUF5Qlh0SCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQXpCdkIsRUE2QkYsQ0FBQztBQUFFa0g7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxHQUFILEdBQVMsTUE3QnZCLENBQWhCO0FBaUNBLE1BQU1pQixXQUFXLEdBQUd4SSwwRUFBSDtBQUFBO0FBQUE7QUFBQSxtb0JBVVIsQ0FBQztBQUFFdUg7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxtREFBSCxHQUF5RCxtREFWakUsRUFXWCxDQUFDO0FBQUVFO0FBQUYsQ0FBRCxLQUFrQkEsUUFBUSxHQUFHLElBQUgsR0FBVSxHQVh6QixFQWFULENBQUM7QUFBRUY7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFibkIsRUFrQlIsQ0FBQztBQUFFRTtBQUFGLENBQUQsS0FBa0JBLFFBQVEsR0FBRyxtRkFBSCxHQUF5RixNQWxCM0csRUFxQ1p4SCxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQXJDdEIsRUFzQ1AsQ0FBQztBQUFFbUg7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxNQUFILEdBQVksTUF0Q3JCLEVBeUNadEgsS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUF6Q3RCLENBQWpCO0FBOENBLE1BQU1vSSxhQUFhLEdBQUd6SSx1RUFBSDtBQUFBO0FBQUE7QUFBQSx1T0FDVCxDQUFDO0FBQUUwSTtBQUFGLENBQUQsS0FBZUEsS0FBSyxHQUFHLE1BQUgsR0FBWSxNQUR2QixFQWFkekksS0FBRCxJQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFicEIsRUFjUCxDQUFDO0FBQUVzSTtBQUFGLENBQUQsS0FBZUEsS0FBSyxHQUFHLE1BQUgsR0FBWSxLQWR6QixFQWlCZHpJLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBakJwQixFQWtCUCxDQUFDO0FBQUVxSTtBQUFGLENBQUQsS0FBZUEsS0FBSyxHQUFHLEdBQUgsR0FBUyxLQWxCdEIsQ0FBbkI7QUFzQkEsTUFBTUMsV0FBVyxHQUFHM0ksdUVBQUg7QUFBQTtBQUFBO0FBQUEsb0ZBRVosQ0FBQztBQUFFMEk7QUFBRixDQUFELEtBQWVBLEtBQUssR0FBRyxNQUFILEdBQVksTUFGcEIsRUFJWnpJLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBSnRCLEVBS1YsQ0FBQztBQUFFd0k7QUFBRixDQUFELEtBQWFBLEdBQUcsR0FBRyxNQUFILEdBQVksTUFMbEIsRUFRWjNJLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBUnRCLEVBU1YsQ0FBQztBQUFFcUk7QUFBRixDQUFELEtBQWVBLEtBQUssR0FBRyxNQUFILEdBQVksTUFUdEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUM3UVAseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRpdGxlLFxufSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcbmltcG9ydCB7IEJveCwgQm94ZXMsIEJveE51bSwgQm94VGV4dCB9IGZyb20gXCIuL0Fjb21wbGlzaG1lbnRzU3R5bGVzXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgbnVtYmVyOiAyMCwgdGV4dDogXCJEZXZlbG9wZWQgdmFyaW91cyBHYW1lIFByb2plY3RzIGFuZCBXZWJzaXRlc1wiIH0sXG4gIHsgbnVtYmVyOiAzMCwgdGV4dDogXCJSZXBvc2l0b3JpZXMgb24gR2l0SHViXCIgfSxcbiAgeyBudW1iZXI6IDE4MCwgdGV4dDogXCJQcm9ibGVtcyBzb2x2ZWQgYXQgQ29kZUNoZWZcIiB9LFxuICB7IG51bWJlcjogMTAsIHRleHQ6IFwiQ291cnNlIENlcnRpZmljYXRlc1wiIH0sXG5dO1xuXG5jb25zdCBBY29tcGxpc2htZW50cyA9ICgpID0+IChcbiAgPFNlY3Rpb24+XG4gICAgPFNlY3Rpb25UaXRsZT5QZXJzb25hbCBBY2hpZXZlbWVudHM8L1NlY3Rpb25UaXRsZT5cbiAgICA8Qm94ZXM+XG4gICAgICB7ZGF0YS5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxCb3gga2V5PXtpbmRleH0+XG4gICAgICAgICAgPEJveE51bT57YCR7Y2FyZC5udW1iZXJ9K2B9PC9Cb3hOdW0+XG4gICAgICAgICAgPEJveFRleHQ+e2NhcmQudGV4dH08L0JveFRleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgKSl9XG4gICAgPC9Cb3hlcz5cbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWNvbXBsaXNobWVudHM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmV4cG9ydCBjb25zdCBCb3hlcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDI0cHg7XG4gIG1hcmdpbjogMjRweCAwIDQwcHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGdhcDogMTZweDtcbiAgICBtYXJnaW46IDIwcHggMCAzMnB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xuICB9XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDI0cHggYXV0bztcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzIxMkQ0NTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgaGVpZ2h0OiAxNDRweDtcbiAgcGFkZGluZzogMjRweDtcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcbiAgICBoZWlnaHQ6IDIxMHB4O1xuXG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGhlaWdodDogMTM1cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIFxuICAgICY6bnRoLWNoaWxkKDJuKXtcbiAgICAgIGdyaWQtcm93OjI7XG4gICAgfVxuICB9XG5gXG5leHBvcnQgY29uc3QgQm94TnVtID0gc3R5bGVkLmg1YFxuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIH1cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5gXG5cbmV4cG9ydCBjb25zdCBCb3hUZXh0ID0gc3R5bGVkLnBgXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfTtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSm9pbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XG4gIH1cblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEpvaW5UZXh0ID0gc3R5bGVkLmg1YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG59O1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5gXG5cbmV4cG9ydCBjb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQmFja2dyb3VuZEFuaW1hdGlvbiA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9XCJCZ0FuaW1hdGlvbl9fc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjAyIDYwMlwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8ZyBvcGFjaXR5PVwiMC4xNVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTIwMS4zMzcgODcuNDM3QzE5My40NzQgNzkuNTczOCAxODAuNzI1IDc5LjU3MzggMTcyLjg2MiA4Ny40MzdMODcuNDM3IDE3Mi44NjJDNzkuNTczOSAxODAuNzI1IDc5LjU3MzkgMTkzLjQ3NCA4Ny40MzcgMjAxLjMzN0w0MDAuNjYzIDUxNC41NjNDNDA4LjUyNiA1MjIuNDI2IDQyMS4yNzUgNTIyLjQyNiA0MjkuMTM4IDUxNC41NjNMNTE0LjU2MyA0MjkuMTM4QzUyMi40MjYgNDIxLjI3NSA1MjIuNDI2IDQwOC41MjYgNTE0LjU2MyA0MDAuNjYzTDIwMS4zMzcgODcuNDM3Wk0zMC40ODY5IDExNS45MTJDLTguODI4OTcgMTU1LjIyOCAtOC44Mjg5NyAyMTguOTcyIDMwLjQ4NjkgMjU4LjI4N0wzNDMuNzEzIDU3MS41MTNDMzgzLjAyOCA2MTAuODI5IDQ0Ni43NzIgNjEwLjgyOSA0ODYuMDg4IDU3MS41MTNMNTcxLjUxMyA0ODYuMDg4QzYxMC44MjkgNDQ2Ljc3MiA2MTAuODI5IDM4My4wMjggNTcxLjUxMyAzNDMuNzEzTDI1OC4yODcgMzAuNDg2OUMyMTguOTcyIC04LjgyODk2IDE1NS4yMjggLTguODI4OTYgMTE1LjkxMiAzMC40ODY5TDMwLjQ4NjkgMTE1LjkxMlpcIlxuICAgICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQwX3JhZGlhbClcIlxuICAgICAgICAgIGlkPVwicGF0aF8wXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTUxNC41NjMgMjAxLjMzN0M1MjIuNDI2IDE5My40NzQgNTIyLjQyNiAxODAuNzI1IDUxNC41NjMgMTcyLjg2Mkw0MjkuMTM4IDg3LjQzN0M0MjEuMjc1IDc5LjU3MzggNDA4LjUyNiA3OS41NzM5IDQwMC42NjMgODcuNDM3TDM1OC4wOTggMTMwLjAwMkwzMDEuMTQ4IDczLjA1MTZMMzQzLjcxMyAzMC40ODY5QzM4My4wMjggLTguODI4OTYgNDQ2Ljc3MiAtOC44Mjg5NiA0ODYuMDg4IDMwLjQ4NjlMNTcxLjUxMyAxMTUuOTEyQzYxMC44MjkgMTU1LjIyOCA2MTAuODI5IDIxOC45NzIgNTcxLjUxMyAyNTguMjg3TDM1Ny44MDIgNDcxLjk5OUwzMDAuODUyIDQxNS4wNDlMNTE0LjU2MyAyMDEuMzM3WlwiXG4gICAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDFfcmFkaWFsKVwiXG4gICAgICAgICAgaWQ9XCJwYXRoXzFcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNMjQzLjkwMSA0NzEuOTk5TDIwMS4zMzcgNTE0LjU2M0MxOTMuNDc0IDUyMi40MjYgMTgwLjcyNSA1MjIuNDI2IDE3Mi44NjIgNTE0LjU2M0w4Ny40MzcgNDI5LjEzOEM3OS41NzM5IDQyMS4yNzUgNzkuNTczOSA0MDguNTI2IDg3LjQzNyA0MDAuNjYzTDMwMS4xNDggMTg2Ljk1MkwyNDQuMTk4IDEzMC4wMDJMMzAuNDg2OSAzNDMuNzEzQy04LjgyODk3IDM4My4wMjggLTguODI4OTcgNDQ2Ljc3MiAzMC40ODY5IDQ4Ni4wODhMMTE1LjkxMiA1NzEuNTEzQzE1NS4yMjggNjEwLjgyOSAyMTguOTcyIDYxMC44MjkgMjU4LjI4NyA1NzEuNTEzTDMwMC44NTIgNTI4Ljk0OUwyNDMuOTAxIDQ3MS45OTlaXCJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Ml9yYWRpYWwpXCJcbiAgICAgICAgICBpZD1cInBhdGhfMlwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8ZWxsaXBzZVxuICAgICAgICBjeD1cIjI5NS4wMjdcIlxuICAgICAgICBjeT1cIjE5My4xMThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NS4wMjcgLTE5My4xMTgpXCJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcbiAgICAgICAgZmlsbD1cIiM5NDVERDZcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5NC42ODUgMTkzLjQ3NEwyNjguOTMyIDIxOS4yNThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDNfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjEwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHJvdGF0ZT1cImF1dG9cIj5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiMjk1LjAyN1wiXG4gICAgICAgIGN5PVwiMTkzLjExOFwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk1LjAyNyAtMTkzLjExOClcIlxuICAgICAgICByeD1cIjEuMDczMDZcIlxuICAgICAgICByeT1cIjEuMDc0MzNcIlxuICAgICAgICBmaWxsPVwiIzQ2NzM3XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCI1c1wiXG4gICAgICAgICAgYmVnaW49XCIxXCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L2VsbGlwc2U+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTI5NC42ODUgMTkzLjQ3NEwyNjguOTMyIDIxOS4yNThcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiNXNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCI0NzYuNTI1XCJcbiAgICAgICAgY3k9XCIzNjMuMzEzXCJcbiAgICAgICAgcng9XCIxLjA3NDMzXCJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoOTAgNDc2LjUyNSAzNjMuMzEzKVwiXG4gICAgICAgIGZpbGw9XCIjOTQ1REQ2XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9lbGxpcHNlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk00NzYuMTcxIDM2Mi45NTJMNDUwLjQxNyAzMzcuMTY4XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoLTQ1IDQ3Ni4xNzEgMzYyLjk1MilcIlxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50NF9saW5lYXIpXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb24gZHVyPVwiMTBzXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIgcm90YXRlPVwiYXV0b1wiPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCIzODIuMTY0XCJcbiAgICAgICAgY3k9XCIxNTUuMDI5XCJcbiAgICAgICAgcng9XCIxLjA3NDMzXCJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zODIuMTY0IC0xNTUuMDI5KSByb3RhdGUoOTAgMzgyLjE2NCAxNTUuMDI5KVwiXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCIxMHNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9lbGxpcHNlPlxuICAgICAgPHBhdGhcbiAgICAgICAgZD1cIk0zODEuODEgMTU0LjY2OUwzNTYuMDU3IDEyOC44ODVcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4MS44MSAtMTU0LjY2OSkgcm90YXRlKC00NSAzODEuODEgMTU0LjY2OSlcIlxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50NV9saW5lYXIpXCJcbiAgICAgID5cbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cbiAgICAgICAgICBkdXI9XCIxMHNcIlxuICAgICAgICAgIGJlZ2luPVwiMVwiXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxuICAgICAgPC9wYXRoPlxuICAgICAgPGVsbGlwc2VcbiAgICAgICAgY3g9XCIzMzMuMzI0XCJcbiAgICAgICAgY3k9XCIzODIuNjkxXCJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMzMuMzI0IC0zODIuNjkxKSByb3RhdGUoLTE4MCAzMzMuMzI0IDM4Mi42OTEpXCJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjVzXCJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMVwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMzMzLjY2NyAzODIuMzM1TDM1OS40MiAzNTYuNTUxXCJcbiAgICAgICAgdHJhbnNmb3JtPVwic2NhbGUoLTEgMSkgdHJhbnNsYXRlKC0zMzMuNjY3IC0zODIuMzM1KSByb3RhdGUoNDUgMzMzLjY2NyAzODIuMzM1KVwiXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ2X2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjVzXCJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMVwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiMTY1LjUyNFwiXG4gICAgICAgIGN5PVwiOTMuOTU5NlwiXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXG4gICAgICAgIHJ5PVwiMS4wNzQzM1wiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY1LjUyNCAtOTMuOTU5NilcIlxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTBzXCJcbiAgICAgICAgICBiZWdpbj1cIjNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNMTY1LjE4MiA5NC4zMTU5TDEzOS40MjkgMTIwLjFcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTE2NS4xODIgLTk0LjMxNTkpIHJvdGF0ZSg0NSAxNjUuMTgyIDk0LjMxNTkpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTBzXCJcbiAgICAgICAgICBiZWdpbj1cIjNcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvcGF0aD5cbiAgICAgIDxlbGxpcHNlXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXG4gICAgICAgIGN5PVwiMzYzLjMxM1wiXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKDkwIDQ3Ni41MjUgMzYzLjMxMylcIlxuICAgICAgICBmaWxsPVwiIzEzQURDN1wiXG4gICAgICA+XG4gICAgICAgIDxhbmltYXRlTW90aW9uXG4gICAgICAgICAgZHVyPVwiMTJzXCJcbiAgICAgICAgICBiZWdpbj1cIjRcIlxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cbiAgICAgIDwvZWxsaXBzZT5cbiAgICAgIDxwYXRoXG4gICAgICAgIGQ9XCJNNDc2LjE3MSAzNjIuOTUyTDQ1MC40MTcgMzM3LjE2OFwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKC00NSA0NzYuMTcxIDM2Mi45NTIpXCJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDExX2xpbmVhcilcIlxuICAgICAgPlxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxuICAgICAgICAgIGR1cj1cIjEyc1wiXG4gICAgICAgICAgYmVnaW49XCI0XCJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XG4gICAgICA8L3BhdGg+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDBfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDFfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDJfcmFkaWFsXCJcbiAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgIGN5PVwiMFwiXG4gICAgICAgICAgcj1cIjFcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDNfbGluZWFyXCJcbiAgICAgICAgICB4MT1cIjI5NS4wNDNcIlxuICAgICAgICAgIHkxPVwiMTkzLjExNlwiXG4gICAgICAgICAgeDI9XCIyNjkuOTc1XCJcbiAgICAgICAgICB5Mj1cIjIxOC4xNTRcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ0X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCI0NzYuNTI5XCJcbiAgICAgICAgICB5MT1cIjM2My4zMVwiXG4gICAgICAgICAgeDI9XCI0NTEuNDYxXCJcbiAgICAgICAgICB5Mj1cIjMzOC4yNzJcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ1X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIzODIuMTY4XCJcbiAgICAgICAgICB5MT1cIjE1NS4wMjdcIlxuICAgICAgICAgIHgyPVwiMzU3LjFcIlxuICAgICAgICAgIHkyPVwiMTI5Ljk4OVwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiNGNDY3MzdcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDZfbGluZWFyXCJcbiAgICAgICAgICB4MT1cIjMzMy4zMDlcIlxuICAgICAgICAgIHkxPVwiMzgyLjY5M1wiXG4gICAgICAgICAgeDI9XCIzNTguMzc2XCJcbiAgICAgICAgICB5Mj1cIjM1Ny42NTVcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ3X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIxNjUuNTRcIlxuICAgICAgICAgIHkxPVwiOTMuOTU3OFwiXG4gICAgICAgICAgeDI9XCIxNDAuNDcyXCJcbiAgICAgICAgICB5Mj1cIjExOC45OTZcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQ4X2xpbmVhclwiXG4gICAgICAgICAgeDE9XCI0MTQuMzY3XCJcbiAgICAgICAgICB5MT1cIjMwMS4xNTZcIlxuICAgICAgICAgIHgyPVwiNDM5LjQzNVwiXG4gICAgICAgICAgeTI9XCIyNzYuMTE4XCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8bGluZWFyR3JhZGllbnRcbiAgICAgICAgICBpZD1cInBhaW50OV9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiNTE1Ljk0M1wiXG4gICAgICAgICAgeTE9XCIyODguMjM4XCJcbiAgICAgICAgICB4Mj1cIjU0MS4zMzlcIlxuICAgICAgICAgIHkyPVwiMjkxLjQ1NFwiXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiAvPlxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgaWQ9XCJwYWludDEwX2xpbmVhclwiXG4gICAgICAgICAgeDE9XCIxMTcuMDAxXCJcbiAgICAgICAgICB5MT1cIjIzMC42MTlcIlxuICAgICAgICAgIHgyPVwiMTE3LjM2XCJcbiAgICAgICAgICB5Mj1cIjI1OC4xOTNcIlxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgIGlkPVwicGFpbnQxMV9saW5lYXJcIlxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXG4gICAgICAgICAgeTE9XCIzNjMuMzFcIlxuICAgICAgICAgIHgyPVwiNDUxLjQ2MVwiXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzEzQURDN1wiIC8+XG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRBbmltYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQWlGaWxsQmVoYW5jZUNpcmNsZSxcbiAgQWlGaWxsR2l0aHViLFxuICBBaUZpbGxJbnN0YWdyYW0sXG4gIEFpRmlsbExpbmtlZGluLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcblxuaW1wb3J0IHsgU29jaWFsSWNvbnMgfSBmcm9tIFwiLi4vSGVhZGVyL0hlYWRlclN0eWxlc1wiO1xuaW1wb3J0IHtcbiAgQ29tcGFueUNvbnRhaW5lcixcbiAgRm9vdGVyV3JhcHBlcixcbiAgTGlua0NvbHVtbixcbiAgTGlua0l0ZW0sXG4gIExpbmtMaXN0LFxuICBMaW5rVGl0bGUsXG4gIFNsb2dhbixcbiAgU29jaWFsQ29udGFpbmVyLFxuICBTb2NpYWxJY29uc0NvbnRhaW5lcixcbn0gZnJvbSBcIi4vRm9vdGVyU3R5bGVzXCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9vdGVyV3JhcHBlcj5cbiAgICAgIDxMaW5rTGlzdD5cbiAgICAgICAgPExpbmtDb2x1bW4+XG4gICAgICAgICAgPExpbmtUaXRsZT5DYWxsPC9MaW5rVGl0bGU+XG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCJ0ZWw6OTU2LTU4Ni05NzU1XCI+KCs5MSkgOTU2LTU4Ni05NzU1PC9MaW5rSXRlbT5cbiAgICAgICAgPC9MaW5rQ29sdW1uPlxuICAgICAgICA8TGlua0NvbHVtbj5cbiAgICAgICAgICA8TGlua1RpdGxlPkVtYWlsPC9MaW5rVGl0bGU+XG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCJtYWlsdG86aWFtdXRrYXJzaHlhZGF2MUBnbWFpbC5jb21cIj5cbiAgICAgICAgICAgIGlhbXV0a2Fyc2h5YWRhdjFAZ21haWwuY29tXG4gICAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgICAgPC9MaW5rQ29sdW1uPlxuICAgICAgPC9MaW5rTGlzdD5cbiAgICAgIDxTb2NpYWxJY29uc0NvbnRhaW5lcj5cbiAgICAgICAgPENvbXBhbnlDb250YWluZXI+XG4gICAgICAgICAgPFNsb2dhbj5Jbm5vdmF0aW5nIG9uZSBwcm9qZWN0IGF0IGEgdGltZTwvU2xvZ2FuPlxuICAgICAgICA8L0NvbXBhbnlDb250YWluZXI+XG4gICAgICAgIDxTb2NpYWxDb250YWluZXI+XG4gICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaWFtdXRrYXJzaHlhZGF2XCI+XG4gICAgICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoYWRvd3N0b3JtZS9cIj5cbiAgICAgICAgICAgIDxBaUZpbGxMaW5rZWRpbiBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2hhZG93Xy5zdG9ybWUvXCI+XG4gICAgICAgICAgICA8QWlGaWxsSW5zdGFncmFtIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvdXRrYXJzaHlhZGF2M1wiPlxuICAgICAgICAgICAgPEFpRmlsbEJlaGFuY2VDaXJjbGUgc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgICAgIDwvU29jaWFsQ29udGFpbmVyPlxuICAgICAgPC9Tb2NpYWxJY29uc0NvbnRhaW5lcj5cbiAgICA8L0Zvb3RlcldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5cbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG5cdHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTZweCk7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBwYWRkaW5nOiAycmVtIDQ4cHggNDBweDtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuXG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAwIDE2cHggNDhweDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rSXRlbSA9IHN0eWxlZC5hYFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGVmdDogMDtcblxuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRsZWZ0OiA2cHg7XG5cdH1cblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHR9XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcblx0XHRmb250LXNpemU6IDhweDtcblx0XHRsaW5lLWhlaWdodDogMTRweDtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5tYXgtd2lkdGg6IDEwNDBweDtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYFxuXG5leHBvcnQgY29uc3QgQ29tcGFueUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuXHR9XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRtYXJnaW46IDAgMCAzMnB4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cbmBcblxuXG5leHBvcnQgY29uc3QgU2xvZ2FuID0gc3R5bGVkLnBgXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdG1pbi13aWR0aDogMjgwcHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdHBhZGRpbmc6IDFyZW07XG5cblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0fVxuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcblx0XHRsaW5lLWhlaWdodDogMjJweDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bWluLXdpZHRoOiAxMDBweDtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgU29jaWFsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZy1yaWdodDogMTZweDtcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdH1cbmBcblxuXG5leHBvcnQgY29uc3QgTGlua0xpc3QgPSBzdHlsZWQudWxgXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg4NXB4LCAyMjBweCkpO1xuXHRnYXA6IDQwcHg7XG4gIHBhZGRpbmc6IDQwcHggMCAyOHB4O1xuXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XG5cdH1cblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDMycHggMCAxNnB4O1xuXHRcdGdhcDogMTZweDtcblx0fVxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBhZGRpbmc6IDMycHggNHB4IDE2cHg7XG5cdFx0Z2FwOiA1cHg7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtDb2x1bW4gPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXgtd2lkdGg6IDIyMHB4O1xuXHR3aWR0aDogMTAwJTtcbmBcbmV4cG9ydCBjb25zdCBMaW5rVGl0bGUgPSBzdHlsZWQuaDRgXG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zaXplOiAxMnB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuXHRcdGZvbnQtc2l6ZTogMTBweDtcblx0XHRsaW5lLWhlaWdodDogMTJweDtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG5cdH1cbmBcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlGaWxsQmVoYW5jZUNpcmNsZSwgQWlGaWxsQ2FtZXJhLCBBaUZpbGxHaXRodWIsIEFpRmlsbEluc3RhZ3JhbSwgQWlGaWxsTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5pbXBvcnQgeyBEaUNzc2RlY2sgfSBmcm9tICdyZWFjdC1pY29ucy9kaSc7XG5cbmltcG9ydCB7IENvbnRhaW5lciwgRGl2MSwgRGl2MiwgRGl2MywgTmF2TGluaywgU29jaWFsSWNvbnMsIFNwYW4gfSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8RGl2MT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjBcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPERpQ3NzZGVjayBzaXplPVwiM3JlbVwiIC8+XG4gICAgICAgICAgPFNwYW4+IFBvcnRmb2xpbzwvU3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvRGl2MT5cbiAgICA8RGl2Mj5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgaHJlZj1cIiNwcm9qZWN0c1wiPlxuICAgICAgICAgIDxOYXZMaW5rPlByb2plY3RzPC9OYXZMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8TGluayBocmVmPVwiI3RlY2hcIj5cbiAgICAgICAgICA8TmF2TGluaz5UZWNobm9sb2dpZXM8L05hdkxpbms+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIjYWJvdXRcIj5cbiAgICAgICAgICA8TmF2TGluaz5BYm91dDwvTmF2TGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICA8L0RpdjI+XG4gICAgPERpdjM+XG4gICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pYW11dGthcnNoeWFkYXZcIj5cbiAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPVwiM3JlbVwiIC8+XG4gICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2hhZG93c3Rvcm1lL1wiPlxuICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgPC9Tb2NpYWxJY29ucz5cbiAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zaGFkb3dfLnN0b3JtZS9cIj5cbiAgICAgICAgPEFpRmlsbEluc3RhZ3JhbSBzaXplPVwiM3JlbVwiIC8+XG4gICAgICA8L1NvY2lhbEljb25zPlxuICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5iZWhhbmNlLm5ldC91dGthcnNoeWFkYXYzXCI+XG4gICAgICAgIDxBaUZpbGxCZWhhbmNlQ2lyY2xlIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgIDwvU29jaWFsSWNvbnM+XG4gICAgPC9EaXYzPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCB7IElvSW9zQXJyb3dEcm9wZG93biB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcbiAgICBncmlkLWNvbHVtbi1nYXA6IDAuNXJlbTtcbiAgICBncmlkLXJvdy1nYXA6IDAuNXJlbTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG5mb250LXNpemU6IDJyZW07XG47YFxuXG5cbmV4cG9ydCBjb25zdCBEaXYxID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MiA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgRGl2MyA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogMSAvIDUgLyAyIC8gNjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNjtcbiAgfVxuYDtcblxuLy8gTmF2aWdhdGlvbiBMaW5rc1xuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgfVxuYDtcblxuLy8vIERyb3BEb3duIENvbnRhY3RcbmV4cG9ydCBjb25zdCBDb250YWN0RHJvcERvd24gPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG5cbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcblxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2UHJvZHVjdHNJY29uID0gc3R5bGVkKElvSW9zQXJyb3dEcm9wZG93bilgXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJzEnIDogJy43NScpfTtcbiAgdHJhbnNmb3JtOiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJ3NjYWxlWSgtMSknIDogJ3NjYWxlWSgxKScpfTtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbjogMnB4IDAgMCAycHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gIH1cbmA7XG5cblxuLy8gU29jaWFsIEljb25zIFxuXG5leHBvcnQgY29uc3QgU29jaWFsSWNvbnMgPSBzdHlsZWQuYWBcbnRyYW5zaXRpb246IDAuM3MgZWFzZTtcbmNvbG9yOiB3aGl0ZTtcbmJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgfVxuYCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XG5cbmNvbnN0IEhlcm8gPSAocHJvcHMpID0+IChcbiAgPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cbiAgICA8TGVmdFNlY3Rpb24+XG4gICAgICA8U2VjdGlvblRpdGxlIG1haW4gY2VudGVyPlxuICAgICAgICBIZWxsbyB0aGVyZSEgPGJyLz5cbiAgICAgICAgICBJIGFtIFV0a2Fyc2hcbiAgICAgIDwvU2VjdGlvblRpdGxlPlxuICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICBJIGFtIGEgQ29tcHV0ZXIgU2NpZW5jZSBzdHVkZW50IGF0IEdyYXBoaWMgRXJhIERlZW1lZCB0byBiZSBVbml2ZXJzaXR5IGFuZCBJIG1ha2UgV2Vic2l0ZXMgYW5kIEdhbWVzIG9uIFVucmVhbCBFbmdpbmUgNCBhbmQgVW5yZWFsIEVuZ2luZSA1LlxuICAgICAgICAgIDxCdXR0b24gb25DbGljayA9eygpPT4gd2luZG93LmxvY2F0aW9uID0gJ2h0dHBzOi8vZ29vZ2xlLmNvbSd9ID4gTGVhcm4gTW9yZTwvQnV0dG9uPlxuICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICA8L0xlZnRTZWN0aW9uPlxuICAgIDwvU2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBMZWZ0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCbG9nQ2FyZCwgQ2FyZEluZm8sIEV4dGVybmFsTGlua3MsIEdyaWRDb250YWluZXIsIEhlYWRlclRocmVlLCBIciwgVGFnLCBUYWdMaXN0LCBUaXRsZUNvbnRlbnQsIFV0aWxpdHlMaXN0LCBJbWcgfSBmcm9tICcuL1Byb2plY3RzU3R5bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuICBcbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8U2VjdGlvbiBub3BhZGRpbmcgaWQ9XCJwcm9qZWN0c1wiPlxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxuICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAge3Byb2plY3RzLm1hcChcbiAgICAgICAgKHsgaWQsIGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRhZ3MsIHNvdXJjZSwgdmlzaXQgfSkgPT4gKFxuICAgICAgICAgIDxCbG9nQ2FyZCBrZXk9e2lkfT5cbiAgICAgICAgICAgIDxJbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT57dGl0bGV9PC9IZWFkZXJUaHJlZT5cbiAgICAgICAgICAgICAgPEhyIC8+XG4gICAgICAgICAgICA8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkSW5mbz57ZGVzY3JpcHRpb259PC9DYXJkSW5mbz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+U3RhY2s8L1RpdGxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWcga2V5PXtpfT57dGFnfTwvVGFnPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1RhZ0xpc3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxVdGlsaXR5TGlzdD5cbiAgICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17dmlzaXR9PkNvZGU8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3NvdXJjZX0+VmlzaXQ8L0V4dGVybmFsTGlua3M+XG4gICAgICAgICAgICA8L1V0aWxpdHlMaXN0PlxuICAgICAgICAgIDwvQmxvZ0NhcmQ+XG4gICAgICAgIClcbiAgICAgICl9XG4gICAgPC9HcmlkQ29udGFpbmVyPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmBcblxuZXhwb3J0IGNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XG5wYWRkaW5nOiAzcmVtO1xucGxhY2UtaXRlbXM6IGNlbnRlcjtcbmNvbHVtbi1nYXA6IDJyZW07XG5yb3ctZ2FwOiAzcmVtO1xuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuYFxuZXhwb3J0IGNvbnN0IEJsb2dDYXJkID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAyMHB4IHJnYmEoODAsIDc4LCA3OCwgMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDAwcHg7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwO1xuICB3aWR0aDogMTAwJTtcblxuYDtcblxuXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjOWNjOWUzO1xuICBwYWRkaW5nOiAuNXJlbSAwO1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICczcmVtJyA6ICcycmVtJ307XG5gO1xuXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI2QwYmI1NztcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxNzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGNvbG9yOiAjZGNlM2U3O1xuICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsaW5lLWhlaWdodDogMThweDtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGNvbG9yOiAjZTRlNmU3O1xuICBmb250LXN0eWxlOiAycmVtO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6LjNyZW1cbiAgXG59XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBVdGlsaXR5TGlzdCA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luOiAyLjVyZW0gMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBFeHRlcm5hbExpbmtzID0gc3R5bGVkLmFgXG5jb2xvcjojZDRjMGMwO1xuZm9udC1zaXplOiAxLjZyZW07XG5wYWRkaW5nOjFyZW0gMS41cmVtO1xuYmFja2dyb3VuZDogIzZiMzAzMDtcbmJvcmRlci1yYWRpdXM6IDE1cHg7XG50cmFuc2l0aW9uOiAwLjVzO1xuJjpob3ZlcntcbiAgYmFja2dyb3VuZDogIzgwMTQxNDtcblxufVxuYDtcblxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5wYWRkaW5nOiAycmVtO1xuYFxuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5saWBcbmNvbG9yOiAjZDhiZmJmO1xuZm9udC1zaXplOiAxLjVyZW07XG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERpQW5kcm9pZCwgRGlBcHBjZWxlcmF0b3IsIERpQXBwc3RvcmUsIERpRmlyZWJhc2UsIERpUmVhY3QsIERpWmVuZCB9IGZyb20gJ3JlYWN0LWljb25zL2RpJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuaW1wb3J0IHsgTGlzdCwgTGlzdENvbnRhaW5lciwgTGlzdEl0ZW0sIExpc3RQYXJhZ3JhcGgsIExpc3RUaXRsZSB9IGZyb20gJy4vVGVjaG5vbG9naWVzU3R5bGVzJztcblxuY29uc3QgVGVjaG5vbG9naWVzID0gKCkgPT4gKFxuICA8U2VjdGlvbiBpZD1cInRlY2hcIj5cbiAgIFxuICAgIDxTZWN0aW9uRGl2aWRlciAvPlxuICAgIDxici8+XG4gICAgPFNlY3Rpb25UaXRsZT5UZWNobm9sb2dpZXM8L1NlY3Rpb25UaXRsZT5cbiAgICA8U2VjdGlvblRleHQ+XG4gICAgICBJJ3ZlIHdvcmtlZCB3aXRoIGEgcmFuZ2Ugb2YgdGVjaG5vbG9naWVzIGluIHRoZSB3ZWIgZGV2ZWxvcG1lbnQgd29ybGQuXG4gICAgICBGcm9tIEJhY2stZW5kIFRvIERlc2lnbiwgZnJvbSBhYnNvbHV0ZWx5IG5vdGhpbmcgdG8gZnVsbC1mZXRjaGVkIGdhbWVzLlxuICAgIDwvU2VjdGlvblRleHQ+XG4gICAgPExpc3Q+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxEaVJlYWN0IHNpemU9XCIzcmVtXCIgLz5cbiAgICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICAgPExpc3RUaXRsZT5Gcm9udC1FbmQ8L0xpc3RUaXRsZT5cbiAgICAgICAgICA8TGlzdFBhcmFncmFwaD5cbiAgICAgICAgICAgIEV4cGVyaWVuY2Ugd2l0aCA8YnIgLz5cbiAgICAgICAgICAgIFJlYWN0LmpzXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIE5vZGUuSnNcbiAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxEaUZpcmViYXNlIHNpemU9XCIzcmVtXCIgLz5cbiAgICAgICAgPExpc3RDb250YWluZXI+XG4gICAgICAgICAgPExpc3RUaXRsZT5CYWNrLUVuZDwvTGlzdFRpdGxlPlxuICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxuICAgICAgICAgICAgRXhwZXJpZW5jZSB3aXRoIDxiciAvPlxuICAgICAgICAgICAgTm9kZS5qc1xuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxEaUFuZHJvaWQgc2l6ZT1cIjNyZW1cIiAvPlxuICAgICAgICA8TGlzdENvbnRhaW5lcj5cbiAgICAgICAgICA8TGlzdFRpdGxlPkdhbWUgRGV2ZWxvcG1lbnQ8L0xpc3RUaXRsZT5cbiAgICAgICAgICA8TGlzdFBhcmFncmFwaD5cbiAgICAgICAgICAgIEV4cGVyaWVuY2Ugd2l0aCA8YnIgLz5cbiAgICAgICAgICAgIFVucmVhbCBFbmdpbmVcbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICBDKytcbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICBCbHVlcHJpbnRzXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEJsZW5kZXJcbiAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgPC9MaXN0PlxuICA8L1NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZWNobm9sb2dpZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCg1MCUgNTAlIGF0IDUwJSA1MCUsIHJnYmEoNzksIDEwOCwgMTc2LCAwLjI1KSA1My44JSwgcmdiYSg3OSwgMTA4LCAxNzYsIDApIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNjBweDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubGd9IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNYWluSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IExpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiA0MHB4O1xuICBtYXJnaW46IDNyZW0gMDtcbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcbiAgICBtYXJnaW46IDY0cHggMDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBtYXJnaW46IDY0cHggMDtcbiAgICBnYXA6IDI0cHhcbiAgfVxuICBcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDMycHggMDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlzdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RUaXRsZSA9IHN0eWxlZC5oNGBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gIG1heC13aWR0aDogMjAzcHg7XG59XG5cbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmBcblxuZXhwb3J0IGNvbnN0IExpc3RJY29uID0gc3R5bGVkLmltZ2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIENhcm91c2VsQnV0dG9uLFxuICBDYXJvdXNlbEJ1dHRvbkRvdCxcbiAgQ2Fyb3VzZWxCdXR0b25zLFxuICBDYXJvdXNlbENvbnRhaW5lcixcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbEl0ZW1JbWcsXG4gIENhcm91c2VsSXRlbVRleHQsXG4gIENhcm91c2VsSXRlbVRpdGxlLFxuICBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUsXG59IGZyb20gXCIuL1RpbWVMaW5lU3R5bGVzXCI7XG5pbXBvcnQge1xuICBTZWN0aW9uLFxuICBTZWN0aW9uRGl2aWRlcixcbiAgU2VjdGlvblRleHQsXG4gIFNlY3Rpb25UaXRsZSxcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XG5cbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xuICAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihcbiAgICAgICAgY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aClcbiAgICAgICk7XG5cbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoXG4gICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbExlZnQgL1xuICAgICAgICAgIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKlxuICAgICAgICAgIFRpbWVMaW5lRGF0YS5sZW5ndGhcbiAgICAgICk7XG5cbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xuICAgIH1cbiAgfTtcblxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cbiAgICAgIDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cbiAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgR2FtZSBhbmQgV2ViIERldmVsb3BlciB3aXRoIDUgeWVhcnMgb2YgZm9jdXNlZCAgZXhwZXJpZW5jZSBhbmQgdGhlXG4gICAgICAgIHByb3BlciBmb3VuZGF0aW9uIHdpdGggZWR1Y2F0aW9uIGluIENvbXB1dGVyIFNjaWVuY2VzLiBNeSBwcm9mZXNzaW9uYWwgc2tpbGxzXG4gICAgICAgIHN1Y2ggYXMgSmF2YVNjcmlwdCwgUmVhY3QuanMsIE5leHQuanMsSFRNTDUsQ1NTVGFpbHdhaW5kLCBDKyssVW5yZWFsIEVuZ2luZSwgQmx1ZXByaW50cyBhcmUgYmFja2VkIGJ5IHNvbGlkIGludGVycGVyc29uYWwgc2tpbGxzIHRvXG4gICAgICAgIGVuc3VyZSBteSBmYXN0IGFkYXB0YXRpb24gaW4gYW55IGVudmlyb25tZW50LlxuICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cbiAgICAgICAgPD5cbiAgICAgICAgICB7VGltZUxpbmVEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgZmluYWw9e2luZGV4ID09PSBUT1RBTF9DQVJPVVNFTF9DT1VOVCAtIDF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgICB7YCR7aXRlbS55ZWFyfWB9XG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDUuNUMzLjg4MDcxIDUuNSA1IDQuMzgwNzEgNSAzVjMuNUwyMDggMy41MDAwMlYyLjUwMDAyTDUgMi41VjNDNSAxLjYxOTI5IDMuODgwNzEgMC41IDIuNSAwLjVDMS4xMTkyOSAwLjUgMCAxLjYxOTI5IDAgM0MwIDQuMzgwNzEgMS4xMTkyOSA1LjUgMi41IDUuNVpcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhaW50MF9saW5lYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeDI9XCIyMDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ9XCIwLjc5NDc4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtSW1nPlxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgPC9DYXJvdXNlbENvbnRhaW5lcj5cbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XG4gICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25Eb3QgYWN0aXZlPXthY3RpdmVJdGVtfSAvPlxuICAgICAgICAgICAgPC9DYXJvdXNlbEJ1dHRvbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ2Fyb3VzZWxCdXR0b25zPlxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG4iLCJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC51bGBcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XG4gIHBhZGRpbmc6IDByZW07XG4gIGxpc3Qtc3R5bGU6bm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcbiAgLyogb3ZlcmZsb3cteDogaGlkZGVuOyAqL1xuXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAmOmZpcnN0LW9mLXR5cGV7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG5cbiAgLy9yZW1vdmUgc2Nyb2xsYmFyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIFxuICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICBkaXNwbGF5OiBub25lO1xuICAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14O1xuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUgPSBzdHlsZWQuZGl2YFxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAkeyh7IGZpbmFsIH0pID0+IGZpbmFsID8gYDEyMCU7YCA6IGBtaW4tY29udGVudGB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWF4LXdpZHRoOiAxOTZweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogMTI0cHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMEUxMzFGO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBhbGlnbi1jb250ZW50OiBzdGFydDtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIFxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYG9wYWNpdHk6IDFgIDogYG9wYWNpdHk6IDAuNWB9OyBcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGl0bGUgPSBzdHlsZWQuaDRgXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBUaGlzIGdyYWRpZW50IGlzIGRpZmZlcmVudCBkdWUgdG8gdGhlIHNpemUgb2YgdGhlIFRpdGxlIGNvbnRhaW5lciwgaXQgbXVzdCB0cmFuc2l0aW9uIHNvb25lciB0byBiZSB2aXNpYmxlIG9uIHRoZSB0ZXh0ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNGRkZGRkYgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDMwLjE1JSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIH1cbiAgXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG5gXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtSW1nID0gc3R5bGVkLnN2Z2BcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XG4gIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsMCwwLDEpLCByZ2JhKDAsMCwwLDApKTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbVRleHQgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5cbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgfVxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5gXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxCdXR0b25zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDI4OHB4O1xuXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBvcGFjaXR5OiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGAxYCA6IGAuMzNgfTtcbiAgdHJhbnNmb3JtOiAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBzY2FsZSgxLjYpYCA6IGBzY2FsZSgxKWB9O1xuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uRG90ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAzcHg7XG5gXG4iLCJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJFbmRsZXNzIFJ1bm5lclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJVc2luZyBVbnJlYWwgRW5naW5lIDUgYW5kIHZpc3VhbCBTY3JpcHRpbmcgdG9vbCAtIEJ1bGVwcmludHMsIHRoaXMgaXMgU3Vid2F5IFN1cmZlcnMgdGhlbWVkIGdhbWUuIFdoaWxlIGRldmVsb3BpbmcgSSBjb21wbGV0ZWx5IHVzZWQgZnJvbSBFcGljIEdhbWVzIFVucmVhbCBFbmdpbmUgTWFya2V0UGxhY2VcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL1AxLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIlVucmVhbCBFbmdpbmUgNVwiLCBcIkJsdWVwcmludHNcIiwgXCJFbmRsZXNzIFJ1bm5lclwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJIZWF2eS1DYXIgU2ltdWxhdG9yXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgaXMgTW9uc3RlciBDYXIgU2ltdWxhdG9yIGdhbWVzIHdoaWNoIEkgbWFkZSB1c2luZyBVbnJlYWwgRW5naW5lIDQgYW5kIGFzc2V0cyBmcm9tIFVucmVhbCBFbmdpbmUgTWFya2V0cGxhY2VcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL1AyLnBuZ1wiLFxuICAgIHRhZ3M6IFtcIlVucmVhbCBFbmdpbmVcIiwgXCJCbHVlcHJpbnRzXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICB2aXNpdDogXCJodHRwczovL2dvb2dsZS5jb21cIixcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1ldGF2ZXJzZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIiBUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IG9mIGF3ZXNvbWUgd2Vic2l0ZSB1c2luZyBOZXh0LmpzLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvUDMucG5nXCIsXG4gICAgdGFnczogW1wiTmV4dC5qc1wiLCBcIkZyb250ZW5kXCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL21ldGF2ZXJzZS1naXQtbWFzdGVyLWlhbXV0a2Fyc2h5YWRhdi52ZXJjZWwuYXBwL1wiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pYW11dGthcnNoeWFkYXYvbWV0YXZlcnNlLmdpdFwiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiVW5pY2hhdFwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyBSZWFsIFRpbWUgQ2hhdChSVEMpIGFwcGxpY2F0aW9uIHVzaW5nIENoYXQgRW5naW5lIEFQSSBhbmQgUmVhY3QuanNcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzLzQuanBnXCIsXG4gICAgdGFnczogW1wiUmVhY3RcIiwgXCJDaGF0RW5naW5lXCIsIFwiRmlyZWJhc2VcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pYW11dGthcnNoeWFkYXYvR3JhY2VDaGF0QXBwLmdpdFwiLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiWm9tYmllIFNob290ZXJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgWm9tYmllIFNob290ZXIgZ2FtZSB1c2luZyBVbnJlYWwgRW5naW5lIDUgYW5kIEJsdWVwcmludHNcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3A1LnBuZ1wiLFxuICAgIHRhZ3M6IFtcIlNob290ZXJcIiwgXCJVbnJlYWwgRW5naW5lXCIsIFwiQmx1ZXByaW50c1wiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9nb29nbGUuY29tXCIsXG4gICAgdmlzaXQ6IFwiIFwiLFxuICAgIGlkOiA0LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiBcIlN0YXJ0ZWQgbXkgam91cm5leSBhcyBsZWFybmluZyBDKysgYW5kIEphdmFTY3JpcHRcIiB9LFxuICB7IHllYXI6IDIwMTgsIHRleHQ6IFwiU3RhcnRlZCBsZWFybmluZyBHYW1lIERldmVsb3BtZW50IG9uIFVucmVhbCBFbmdpbmUgNFwiIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogXCJXb3JrZWQgb24gdmFyaW91cyBHYW1lIERldiBob2JieSBwcm9qZWN0c1wiIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogXCJTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGRcIiB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6IFwiU3RhcnRlZCBteSBDb2xsZWdlXCIgfSxcbiAgeyB5ZWFyOiAyMDIyLCB0ZXh0OiBcIldvcmtlZCBhcyBHYW1lIERldmxvcGVyIGludGVybiBhdCBFcGljIEdhbWVzIEluYy5cIiB9LFxuXTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vTGF5b3V0U3R5bGVzJ1xuXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICA8SGVhZGVyLz5cbiAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj4gXG4gICAgIDxGb290ZXIvPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5tYXgtd2lkdGg6IDEyODBweDtcbndpZHRoOiAxMDAlO1xubWFyZ2luOiBhdXRvO1xuYDtcbiIsImltcG9ydCBBY29tcGxpc2htZW50cyBmcm9tICcuLi9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzJztcbmltcG9ydCBCZ0FuaW1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tncm9vdW5kQW5pbWF0aW9uL0JhY2tncm91bmRBbmltYXRpb24nO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvL0hlcm8nO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMnO1xuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tICcuLi9jb21wb25lbnRzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXMnO1xuaW1wb3J0IFRpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICAgPFNlY3Rpb24gZ3JpZD4gXG4gICAgICAgIDxIZXJvIC8+XG4gICAgICAgICA8QmdBbmltYXRpb24gLz4gXG4gICAgICAgICA8L1NlY3Rpb24+IFxuICAgICAgIDxQcm9qZWN0cyAvPlxuICAgIDxUZWNobm9sb2dpZXMgLz5cbiAgIDxUaW1lbGluZSAvPlxuICA8QWNvbXBsaXNobWVudHMgLz5cbiA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEJ1dHRvbkJhY2ssIEJ1dHRvbkZyb250IH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiAoXG4gIDxCdXR0b25CYWNrIGFsdD17cHJvcHMuYWx0fSBmb3JtPXtwcm9wcy5mb3JtfSBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9Pntwcm9wcy5jaGlsZHJlbn1cbiAgICA8QnV0dG9uRnJvbnQgYWx0PXtwcm9wcy5hbHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0+e3Byb3BzLmNoaWxkcmVufTwvQnV0dG9uRnJvbnQ+XG4gIDwvQnV0dG9uQmFjaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IHByb3BzLmdyaWQgPyBcImdyaWRcIiA6IFwiZmxleFwiIH07XG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gcHJvcHMucm93ID8gXCJyb3dcIiA6IFwiY29sdW1uXCIgfTtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIzMnB4IDQ4cHggMFwiIH0gO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgcGFkZGluZzogMjRweCA0OHB4IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweCAwXCIgfSA7XG5cbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc2NXB4JyA6ICc1NnB4J307XG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc3MnB4JyA6ICc1NnB4J307XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIxLjU3ZGVnLCAjRkZGRkZGIDE4Ljc3JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSA2MC4xNSUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1OHB4IDAgMTZweCcgOiAnMCd9O1xuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzU2cHgnIDogJzQ4cHgnfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNDBweCAwIDEycHgnIDogJzAnfTtcbiAgfVxuXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICcyOHB4JyA6ICczMnB4J307XG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzMycHgnIDogJzQwcHgnfTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMTZweCAwIDhweCcgOiAnMCd9O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1ib3R0b206IDMuNnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA2NzBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXG5cbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3JBbHQgPyBcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOlxuICAgICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XG5cbiAgICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5kaXZpZGVyID8gXCI0cmVtIDBcIiA6IFwiXCIgfTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogNjcycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxuYFxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICMwZjE2MjQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlMGU0ZWI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcbiAgICBtYXJnaW4tdG9wOiAyNHB4OyBcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkJhY2sgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcyNjJweCd9O1xuICBoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICc1MnB4JyA6ICc2NHB4J307XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogJHsoeyBhbHQsIGZvcm0gfSkgPT4gKGFsdCB8fCBmb3JtKSA/ICcwJyA6ICcwIDAgODBweCd9O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjYyMmUgMCUsICNCMTMzRkYgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSknfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcxODRweCd9O1xuICAgIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzUycHgnIDogJzQ4cHgnfTtcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcxNnB4J307XG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzAnIDogJzY0cHgnfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcwJyA6ICczMnB4J307XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XG4gIG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnLjUnIDogJzEnfTtcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICdpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyknIDogJ25vbmUnfTtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgJjpkaXNhYmxlZHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IGxhcmdlID8gJzI0cHgnIDogJzE2cHgnfTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcxNnB4JyA6ICc4cHgnfTtcblxuICB9XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcwJyA6ICc4cHgnfTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlua0ljb25JbWcgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4OyAgXG4gIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcyNHB4J307XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGhlaWdodDogJHsoeyBuYXYgfSkgPT4gbmF2ID8gJzE2cHgnIDogJzI0cHgnfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMzJweCcgOiAnMTZweCd9O1xuICB9XG5gXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=