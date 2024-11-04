import { _ as __nuxt_component_0$1 } from "./nuxt-link-P6SDANQl.js";
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, unref, openBlock, createBlock, withModifiers, createCommentVNode, useSSRContext, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { u as useCartStore } from "./CartStore-BmChGnw3.js";
import { m as useAppStore, v as VCard, o as VImg, x as VCardTitle, V as VBtn, q as VIcon, _ as _export_sfc, l as useProductStore } from "../server.mjs";
import { V as VRow, a as VCol } from "./VRow-DF0L_SZn.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    const appStore = useAppStore();
    const cartStore = useCartStore();
    const props = __props;
    const mainImagePointer = ref(0);
    if (props.product.mainImagePointer !== void 0) {
      mainImagePointer.value = props.product.mainImagePointer;
    }
    const isFavorite = ref(false);
    const toggleFavorite = () => {
      isFavorite.value = !isFavorite.value;
    };
    const isProductInCart = computed(() => {
      return cartStore.currentCart.some(
        (elem) => elem.product._id === props.product._id
      );
    });
    const handleAddToCart = () => {
      cartStore.addProductToCart(props.product);
      appStore.snackbarText = `${props.product.name} добавлен в корзину!`;
      appStore.snackbarColor = "green";
      appStore.isOpenSnackbar = true;
      appStore.snackbarTimeout = 4e3;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Nuxt_Link = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_Nuxt_Link, mergeProps({
        to: "/product/" + _ctx.product._id
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCard, { class: "product-card pa-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VImg, {
                    src: _ctx.product.image[mainImagePointer.value] ? "https://shop-back-mh7t.onrender.com/" + _ctx.product.image[mainImagePointer.value] : ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<b data-v-16828a1e${_scopeId3}>${ssrInterpolate(_ctx.product.name)}</b>`);
                      } else {
                        return [
                          createVNode("b", null, toDisplayString(_ctx.product.name), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="card-content" data-v-16828a1e${_scopeId2}><p data-v-16828a1e${_scopeId2}><b data-v-16828a1e${_scopeId2}>Price:</b> ${ssrInterpolate(_ctx.product.price)} грн</p><p data-v-16828a1e${_scopeId2}><b data-v-16828a1e${_scopeId2}>Category:</b> ${ssrInterpolate(_ctx.product.category)}</p><p data-v-16828a1e${_scopeId2}><b data-v-16828a1e${_scopeId2}>Subcategory:</b> ${ssrInterpolate(_ctx.product.subcategory)}</p></div>`);
                  if (_ctx.product.quantitiesInStore && !isProductInCart.value) {
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      onClick: handleAddToCart
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Купить`);
                        } else {
                          return [
                            createTextVNode("Купить")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!_ctx.product.quantitiesInStore) {
                    _push3(ssrRenderComponent(VBtn, {
                      disabled: "",
                      color: "primary",
                      onClick: () => {
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Товар закончился`);
                        } else {
                          return [
                            createTextVNode("Товар закончился")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.product.quantitiesInStore && isProductInCart.value) {
                    _push3(ssrRenderComponent(VBtn, {
                      color: "primary",
                      onClick: ($event) => unref(appStore).drawerCart = true
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Товар в корзине`);
                        } else {
                          return [
                            createTextVNode("Товар в корзине")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(VIcon, {
                    class: "favorite-icon",
                    color: isFavorite.value ? "primary" : "grey",
                    onClick: toggleFavorite
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(isFavorite.value ? "mdi-heart" : "mdi-heart-outline")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(isFavorite.value ? "mdi-heart" : "mdi-heart-outline"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VImg, {
                      src: _ctx.product.image[mainImagePointer.value] ? "https://shop-back-mh7t.onrender.com/" + _ctx.product.image[mainImagePointer.value] : ""
                    }, null, 8, ["src"]),
                    createVNode(VCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("b", null, toDisplayString(_ctx.product.name), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "card-content" }, [
                      createVNode("p", null, [
                        createVNode("b", null, "Price:"),
                        createTextVNode(" " + toDisplayString(_ctx.product.price) + " грн", 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Category:"),
                        createTextVNode(" " + toDisplayString(_ctx.product.category), 1)
                      ]),
                      createVNode("p", null, [
                        createVNode("b", null, "Subcategory:"),
                        createTextVNode(" " + toDisplayString(_ctx.product.subcategory), 1)
                      ])
                    ]),
                    _ctx.product.quantitiesInStore && !isProductInCart.value ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      color: "primary",
                      onClick: withModifiers(handleAddToCart, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Купить")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    !_ctx.product.quantitiesInStore ? (openBlock(), createBlock(VBtn, {
                      key: 1,
                      disabled: "",
                      color: "primary",
                      onClick: withModifiers(() => {
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Товар закончился")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    _ctx.product.quantitiesInStore && isProductInCart.value ? (openBlock(), createBlock(VBtn, {
                      key: 2,
                      color: "primary",
                      onClick: withModifiers(($event) => unref(appStore).drawerCart = true, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Товар в корзине")
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    createVNode(VIcon, {
                      class: "favorite-icon",
                      color: isFavorite.value ? "primary" : "grey",
                      onClick: withModifiers(toggleFavorite, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(isFavorite.value ? "mdi-heart" : "mdi-heart-outline"), 1)
                      ]),
                      _: 1
                    }, 8, ["color"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCard, { class: "product-card pa-3" }, {
                default: withCtx(() => [
                  createVNode(VImg, {
                    src: _ctx.product.image[mainImagePointer.value] ? "https://shop-back-mh7t.onrender.com/" + _ctx.product.image[mainImagePointer.value] : ""
                  }, null, 8, ["src"]),
                  createVNode(VCardTitle, null, {
                    default: withCtx(() => [
                      createVNode("b", null, toDisplayString(_ctx.product.name), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "card-content" }, [
                    createVNode("p", null, [
                      createVNode("b", null, "Price:"),
                      createTextVNode(" " + toDisplayString(_ctx.product.price) + " грн", 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("b", null, "Category:"),
                      createTextVNode(" " + toDisplayString(_ctx.product.category), 1)
                    ]),
                    createVNode("p", null, [
                      createVNode("b", null, "Subcategory:"),
                      createTextVNode(" " + toDisplayString(_ctx.product.subcategory), 1)
                    ])
                  ]),
                  _ctx.product.quantitiesInStore && !isProductInCart.value ? (openBlock(), createBlock(VBtn, {
                    key: 0,
                    color: "primary",
                    onClick: withModifiers(handleAddToCart, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Купить")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  !_ctx.product.quantitiesInStore ? (openBlock(), createBlock(VBtn, {
                    key: 1,
                    disabled: "",
                    color: "primary",
                    onClick: withModifiers(() => {
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Товар закончился")
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true),
                  _ctx.product.quantitiesInStore && isProductInCart.value ? (openBlock(), createBlock(VBtn, {
                    key: 2,
                    color: "primary",
                    onClick: withModifiers(($event) => unref(appStore).drawerCart = true, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Товар в корзине")
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : createCommentVNode("", true),
                  createVNode(VIcon, {
                    class: "favorite-icon",
                    color: isFavorite.value ? "primary" : "grey",
                    onClick: withModifiers(toggleFavorite, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(isFavorite.value ? "mdi-heart" : "mdi-heart-outline"), 1)
                    ]),
                    _: 1
                  }, 8, ["color"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-16828a1e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductList",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_ProductCard = __nuxt_component_0;
      if (unref(productStore).products.length > 0) {
        _push(ssrRenderComponent(VRow, mergeProps({ class: "pa-2" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(productStore).products, (product) => {
                _push2(ssrRenderComponent(VCol, {
                  key: product._id,
                  cols: "12",
                  xs: "12",
                  sm: "6",
                  md: "4",
                  lg: "3",
                  xl: "2"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_organism_ProductCard, { product }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_organism_ProductCard, { product }, null, 8, ["product"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).products, (product) => {
                  return openBlock(), createBlock(VCol, {
                    key: product._id,
                    cols: "12",
                    xs: "12",
                    sm: "6",
                    md: "4",
                    lg: "3",
                    xl: "2"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_organism_ProductCard, { product }, null, 8, ["product"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<h1${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}>Товаров не найдено</h1>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/ProductList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=ProductList-pHlecZ5D.js.map
