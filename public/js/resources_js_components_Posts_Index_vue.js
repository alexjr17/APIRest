"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Posts_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "posts",
  data: function data() {
    return {
      posts: []
    };
  },
  mounted: function mounted() {
    this.mostrarPost();
  },
  methods: {
    mostrarPost: function mostrarPost() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.axios.get("/api/posts").then(function (response) {
                  console.log(response.data);
                  _this.posts = response.data;
                })["catch"](function (err) {
                  _this.posts = [];
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    borrarPost: function borrarPost(id, titulo) {
      var _this2 = this;

      if (confirm("eliminar a ".concat(titulo))) {
        this.axios["delete"]("api/posts/".concat(id)).then(function (response) {
          alert("registro eliminado");

          _this2.mostrarPost();
        })["catch"](function (err) {
          _this2.posts = [];
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Posts/Index.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Posts/Index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_62b1414a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=62b1414a& */ "./resources/js/components/Posts/Index.vue?vue&type=template&id=62b1414a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Posts/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_62b1414a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_62b1414a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Posts/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Posts/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Posts/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Posts/Index.vue?vue&type=template&id=62b1414a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Posts/Index.vue?vue&type=template&id=62b1414a& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_62b1414a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_62b1414a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_62b1414a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=62b1414a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/Index.vue?vue&type=template&id=62b1414a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/Index.vue?vue&type=template&id=62b1414a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Posts/Index.vue?vue&type=template&id=62b1414a& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "grid grid-cols-1 gap-4" }, [
      _c("div", [
        _c(
          "button",
          { staticClass: "btn-primary bg-blue-600" },
          [
            _c(
              "router-link",
              {
                staticClass: "text-white font-bold py-2 px-4 rounded text-5xl",
                attrs: { to: { name: "crearPost" } },
              },
              [_vm._v("+")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "table",
          {
            staticClass: "table table-striped table-bordered",
            staticStyle: { width: "100%" },
            attrs: { id: "" },
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              { staticClass: "bg-white divide-y divide-gray-200" },
              _vm._l(_vm.posts, function (post) {
                return _c("tr", { key: post.id }, [
                  _c("td", [_vm._v(_vm._s(post.titulo))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(post.contenido))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    post.categoria
                      ? _c("p", [_vm._v(_vm._s("" + post.categoria.nombre))])
                      : _c(
                          "p",
                          {
                            staticClass:
                              "text-red-700 text-sm bg-red-500 flex-none rounded-xl p-auto",
                          },
                          [
                            _vm._v(
                              "\n                  No asinada\n              "
                            ),
                          ]
                        ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn-primary",
                          attrs: {
                            to: { name: "editarPost", params: { id: post.id } },
                          },
                          on: {
                            click: function ($event) {
                              return _vm.editar(post.id, post.titulo)
                            },
                          },
                        },
                        [_vm._v("\n                editar\n              ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn-primary",
                        on: {
                          click: function ($event) {
                            return _vm.borrarPost(post.id, post.titulo)
                          },
                        },
                      },
                      [_vm._v("\n                Eliminar\n              ")]
                    ),
                  ]),
                ])
              }),
              0
            ),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-gray-400" }, [
      _c("tr", [
        _c("th", [_vm._v("Titulo")]),
        _vm._v(" "),
        _c("th", [_vm._v("contenido")]),
        _vm._v(" "),
        _c("th", [_vm._v("categoria")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);