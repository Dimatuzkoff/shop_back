import { _ as __nuxt_component_0$3 } from "./nuxt-link-P6SDANQl.js";
import { ref, mergeProps, unref, isRef, withCtx, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, useSSRContext, defineComponent, toDisplayString, createTextVNode, createCommentVNode, toRef, shallowRef, computed, watch, watchEffect, Suspense, onScopeDispose, nextTick, Transition, renderSlot } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { aI as createSimpleFunctional, _ as _export_sfc, y as productMenu, aR as replaceSpace, m as useAppStore, l as useProductStore, q as VIcon, a as useRuntimeConfig, V as VBtn, p as propsFactory, z as makeComponentProps, A as makeTagProps, g as genericComponent, e as useRender, ah as makeBorderProps, ai as makeElevationProps, R as makeRoundedProps, O as makeThemeProps, W as useBackgroundColor, an as useBorder, ap as useElevation, U as useRounded, S as provideTheme, B as useRtl, ag as provideDefaults, o as VImg, a1 as VDefaultsProvider, Z as convertToUnit, aE as clamp, aX as makeLayoutItemProps, d as useProxiedModel, a7 as useToggleScope, aY as useLayoutItem, aM as makeVBtnProps, aa as makeDimensionProps, aZ as makeLayoutProps, a_ as createLayout, ac as useDimension, a$ as useLayout, b0 as makeDelayProps, D as makeDisplayProps, F as useDisplay, b1 as useRouter$1, ay as useScopeId, b2 as toPhysical, b3 as useDelay, v as VCard, b4 as VCardText } from "../server.mjs";
import { useRouter } from "vue-router";
import { V as VList, a as VListItem, b as VListGroup } from "./VList-CqKp8YrM.js";
import { u as useCartStore } from "./CartStore-BmChGnw3.js";
import { a as VCol, V as VRow } from "./VRow-DF0L_SZn.js";
import { c as VExpandTransition } from "./index-5c5MQmXM.js";
import { u as useSsrBoot } from "./ssrBoot-BtvJZs44.js";
const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
const _sfc_main$3 = {
  __name: "ProductCatalog",
  __ssrInlineRender: true,
  emits: ["closeMenu"],
  setup(__props, { emit: __emit }) {
    const router = useRouter();
    const emits = __emit;
    let open = ref([]);
    const items = ref(productMenu);
    const goToCategory = (category, index) => {
      if (open.value.length != 0) {
        open.value[0] = category.name.ru;
      }
      router.push(`/category/${replaceSpace(category.name.en)}`);
    };
    function closeMenu() {
      emits("closeMenu");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(ssrRenderComponent(VList, mergeProps({
        opened: unref(open),
        "onUpdate:opened": ($event) => isRef(open) ? open.value = $event : open = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/",
              class: "icon-link-aside"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-home",
                    title: "Home"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-home",
                      title: "Home"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<!--[-->`);
            ssrRenderList(items.value, (category, index) => {
              _push2(ssrRenderComponent(VListGroup, {
                onClick: ($event) => goToCategory(category),
                key: index,
                "prepend-icon": category.icon,
                title: category.name.ru,
                value: category.name.ru
              }, {
                activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItem, mergeProps({ ref_for: true }, props), null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VListItem, mergeProps({ ref_for: true }, props), null, 16)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(category.items, (item, subIndex) => {
                      _push3(ssrRenderComponent(_component_NuxtLink, {
                        key: subIndex,
                        to: `/category/${unref(replaceSpace)(category.name.en)}/${unref(replaceSpace)(
                          item.name.en
                        )}`,
                        onClick: () => {
                        },
                        class: "icon-link-aside"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VListItem, {
                              onClick: closeMenu,
                              class: "chosen",
                              "prepend-icon": item.icon,
                              title: item.name.ru
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VListItem, {
                                onClick: withModifiers(closeMenu, ["stop"]),
                                class: "chosen",
                                "prepend-icon": item.icon,
                                title: item.name.ru
                              }, null, 8, ["prepend-icon", "title"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(category.items, (item, subIndex) => {
                        return openBlock(), createBlock(_component_NuxtLink, {
                          key: subIndex,
                          to: `/category/${unref(replaceSpace)(category.name.en)}/${unref(replaceSpace)(
                            item.name.en
                          )}`,
                          onClick: withModifiers(() => {
                          }, ["stop"]),
                          class: "icon-link-aside"
                        }, {
                          default: withCtx(() => [
                            createVNode(VListItem, {
                              onClick: withModifiers(closeMenu, ["stop"]),
                              class: "chosen",
                              "prepend-icon": item.icon,
                              title: item.name.ru
                            }, null, 8, ["prepend-icon", "title"])
                          ]),
                          _: 2
                        }, 1032, ["to", "onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/",
                class: "icon-link-aside"
              }, {
                default: withCtx(() => [
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-home",
                    title: "Home"
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(items.value, (category, index) => {
                return openBlock(), createBlock(VListGroup, {
                  onClick: ($event) => goToCategory(category),
                  key: index,
                  "prepend-icon": category.icon,
                  title: category.name.ru,
                  value: category.name.ru
                }, {
                  activator: withCtx(({ props }) => [
                    createVNode(VListItem, mergeProps({ ref_for: true }, props), null, 16)
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(category.items, (item, subIndex) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: subIndex,
                        to: `/category/${unref(replaceSpace)(category.name.en)}/${unref(replaceSpace)(
                          item.name.en
                        )}`,
                        onClick: withModifiers(() => {
                        }, ["stop"]),
                        class: "icon-link-aside"
                      }, {
                        default: withCtx(() => [
                          createVNode(VListItem, {
                            onClick: withModifiers(closeMenu, ["stop"]),
                            class: "chosen",
                            "prepend-icon": item.icon,
                            title: item.name.ru
                          }, null, 8, ["prepend-icon", "title"])
                        ]),
                        _: 2
                      }, 1032, ["to", "onClick"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["onClick", "prepend-icon", "title", "value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecule/ProductCatalog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d295c2a8"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CartItem",
  __ssrInlineRender: true,
  props: {
    indProduct: {}
  },
  setup(__props) {
    const cartStore = useCartStore();
    useAppStore();
    useProductStore();
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const props = __props;
    let product = ref({});
    product = cartStore.currentCart[props.indProduct];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-wrapper" }, _attrs))} data-v-f152044d><div class="cart_items" data-v-f152044d><div class="cart_items-img" data-v-f152044d><img${ssrRenderAttr("src", unref(apiUrl) + "/" + unref(product).product.image[0])} data-v-f152044d></div><div class="cart_items-property" data-v-f152044d><div data-v-f152044d>${ssrInterpolate(unref(product).product.name)}</div><div data-v-f152044d>В наличии: ${ssrInterpolate(unref(product).product.quantitiesInStore)} шт.</div><div style="${ssrRenderStyle({ "font-size": "16px" })}" data-v-f152044d>${ssrInterpolate(unref(product).product.price)} грн/шт.</div></div>`);
      _push(ssrRenderComponent(VIcon, {
        class: "btn-del",
        icon: "mdi-delete",
        onClick: ($event) => unref(cartStore).deleteProduct(unref(product).product._id)
      }, null, _parent));
      _push(`</div><div class="items_amount" data-v-f152044d><div class="items_amount-price" data-v-f152044d><div data-v-f152044d><button class="change_amount-btn" data-v-f152044d>-</button><span data-v-f152044d>${ssrInterpolate(unref(product).quantity)}</span><button class="change_amount-btn" data-v-f152044d>+</button></div><span data-v-f152044d>${ssrInterpolate(unref(product).product.price * unref(product).quantity)} грн.</span></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/CartItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f152044d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const appStore = useAppStore();
    useProductStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_CartItem = __nuxt_component_0$1;
      const _component_Nuxt_Link = __nuxt_component_0$3;
      _push(ssrRenderComponent(VCol, mergeProps({ class: "cart" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="cart__header" data-v-3a85f11a${_scopeId}><h1 class="cart__title" data-v-3a85f11a${_scopeId}>Корзина</h1>`);
            _push2(ssrRenderComponent(VIcon, {
              class: "cart__close-btn",
              icon: "mdi-close",
              onClick: ($event) => unref(appStore).drawerCart = false
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(cartStore).currentCart.length > 0) {
              _push2(ssrRenderComponent(VCol, { class: "cart__items" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(cartStore).currentCart, (item, ind) => {
                      _push3(ssrRenderComponent(_component_organism_CartItem, {
                        key: item.product._id,
                        indProduct: ind
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    _push3(ssrRenderComponent(VRow, { class: "cart__total pa-4 justify-end" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<strong class="cart__total-price" data-v-3a85f11a${_scopeId3}>ИТОГО: ${ssrInterpolate(unref(cartStore).totalPrice)} грн.</strong>`);
                        } else {
                          return [
                            createVNode("strong", { class: "cart__total-price" }, "ИТОГО: " + toDisplayString(unref(cartStore).totalPrice) + " грн.", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(cartStore).currentCart, (item, ind) => {
                        return openBlock(), createBlock(_component_organism_CartItem, {
                          key: item.product._id,
                          indProduct: ind
                        }, null, 8, ["indProduct"]);
                      }), 128)),
                      createVNode(VRow, { class: "cart__total pa-4 justify-end" }, {
                        default: withCtx(() => [
                          createVNode("strong", { class: "cart__total-price" }, "ИТОГО: " + toDisplayString(unref(cartStore).totalPrice) + " грн.", 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(VCol, { class: "cart__empty" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-3a85f11a${_scopeId2}>Корзина пока пуста... ((</span>`);
                  } else {
                    return [
                      createVNode("span", null, "Корзина пока пуста... ((")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_Nuxt_Link, { to: "/order" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(cartStore).currentCart.length > 0) {
                    _push3(ssrRenderComponent(VBtn, {
                      class: "cart__checkout-btn mt-4",
                      color: "primary"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`Перейти к оформлению`);
                        } else {
                          return [
                            createTextVNode("Перейти к оформлению")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(cartStore).currentCart.length > 0 ? (openBlock(), createBlock(VBtn, {
                      key: 0,
                      class: "cart__checkout-btn mt-4",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Перейти к оформлению")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "cart__header" }, [
                createVNode("h1", { class: "cart__title" }, "Корзина"),
                createVNode(VIcon, {
                  class: "cart__close-btn",
                  icon: "mdi-close",
                  onClick: ($event) => unref(appStore).drawerCart = false
                }, null, 8, ["onClick"])
              ]),
              unref(cartStore).currentCart.length > 0 ? (openBlock(), createBlock(VCol, {
                key: 0,
                class: "cart__items"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(cartStore).currentCart, (item, ind) => {
                    return openBlock(), createBlock(_component_organism_CartItem, {
                      key: item.product._id,
                      indProduct: ind
                    }, null, 8, ["indProduct"]);
                  }), 128)),
                  createVNode(VRow, { class: "cart__total pa-4 justify-end" }, {
                    default: withCtx(() => [
                      createVNode("strong", { class: "cart__total-price" }, "ИТОГО: " + toDisplayString(unref(cartStore).totalPrice) + " грн.", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : (openBlock(), createBlock(VCol, {
                key: 1,
                class: "cart__empty"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, "Корзина пока пуста... ((")
                ]),
                _: 1
              })),
              createVNode(_component_Nuxt_Link, { to: "/order" }, {
                default: withCtx(() => [
                  unref(cartStore).currentCart.length > 0 ? (openBlock(), createBlock(VBtn, {
                    key: 0,
                    class: "cart__checkout-btn mt-4",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Перейти к оформлению")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/Cart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3a85f11a"]]);
const makeVToolbarTitleProps = propsFactory({
  text: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VToolbarTitle");
const VToolbarTitle = genericComponent()({
  name: "VToolbarTitle",
  props: makeVToolbarTitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const hasText = !!(slots.default || slots.text || props.text);
      return createVNode(props.tag, {
        "class": ["v-toolbar-title", props.class],
        "style": props.style
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-toolbar-title__placeholder"
          }, [slots.text ? slots.text() : props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)])];
        }
      });
    });
    return {};
  }
});
const allowedDensities = [null, "prominent", "default", "comfortable", "compact"];
const makeVToolbarProps = propsFactory({
  absolute: Boolean,
  collapse: Boolean,
  color: String,
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  },
  extended: Boolean,
  extensionHeight: {
    type: [Number, String],
    default: 48
  },
  flat: Boolean,
  floating: Boolean,
  height: {
    type: [Number, String],
    default: 64
  },
  image: String,
  title: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeThemeProps()
}, "VToolbar");
const VToolbar = genericComponent()({
  name: "VToolbar",
  props: makeVToolbarProps(),
  setup(props, _ref) {
    var _a;
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const isExtended = shallowRef(!!(props.extended || ((_a = slots.extension) == null ? void 0 : _a.call(slots))));
    const contentHeight = computed(() => parseInt(Number(props.height) + (props.density === "prominent" ? Number(props.height) : 0) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0), 10));
    const extensionHeight = computed(() => isExtended.value ? parseInt(Number(props.extensionHeight) + (props.density === "prominent" ? Number(props.extensionHeight) : 0) - (props.density === "comfortable" ? 4 : 0) - (props.density === "compact" ? 8 : 0), 10) : 0);
    provideDefaults({
      VBtn: {
        variant: "text"
      }
    });
    useRender(() => {
      var _a2;
      const hasTitle = !!(props.title || slots.title);
      const hasImage = !!(slots.image || props.image);
      const extension = (_a2 = slots.extension) == null ? void 0 : _a2.call(slots);
      isExtended.value = !!(props.extended || extension);
      return createVNode(props.tag, {
        "class": ["v-toolbar", {
          "v-toolbar--absolute": props.absolute,
          "v-toolbar--collapse": props.collapse,
          "v-toolbar--flat": props.flat,
          "v-toolbar--floating": props.floating,
          [`v-toolbar--density-${props.density}`]: true
        }, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => [hasImage && createVNode("div", {
          "key": "image",
          "class": "v-toolbar__image"
        }, [!slots.image ? createVNode(VImg, {
          "key": "image-img",
          "cover": true,
          "src": props.image
        }, null) : createVNode(VDefaultsProvider, {
          "key": "image-defaults",
          "disabled": !props.image,
          "defaults": {
            VImg: {
              cover: true,
              src: props.image
            }
          }
        }, slots.image)]), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(contentHeight.value)
            }
          }
        }, {
          default: () => {
            var _a3, _b, _c;
            return [createVNode("div", {
              "class": "v-toolbar__content",
              "style": {
                height: convertToUnit(contentHeight.value)
              }
            }, [slots.prepend && createVNode("div", {
              "class": "v-toolbar__prepend"
            }, [(_a3 = slots.prepend) == null ? void 0 : _a3.call(slots)]), hasTitle && createVNode(VToolbarTitle, {
              "key": "title",
              "text": props.title
            }, {
              text: slots.title
            }), (_b = slots.default) == null ? void 0 : _b.call(slots), slots.append && createVNode("div", {
              "class": "v-toolbar__append"
            }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])])];
          }
        }), createVNode(VDefaultsProvider, {
          "defaults": {
            VTabs: {
              height: convertToUnit(extensionHeight.value)
            }
          }
        }, {
          default: () => [createVNode(VExpandTransition, null, {
            default: () => [isExtended.value && createVNode("div", {
              "class": "v-toolbar__extension",
              "style": {
                height: convertToUnit(extensionHeight.value)
              }
            }, [extension])]
          })]
        })]
      });
    });
    return {
      contentHeight,
      extensionHeight
    };
  }
});
const makeScrollProps = propsFactory({
  scrollTarget: {
    type: String
  },
  scrollThreshold: {
    type: [String, Number],
    default: 300
  }
}, "scroll");
function useScroll(props) {
  let args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    canScroll
  } = args;
  let previousScroll = 0;
  const target = ref(null);
  const currentScroll = shallowRef(0);
  const savedScroll = shallowRef(0);
  const currentThreshold = shallowRef(0);
  const isScrollActive = shallowRef(false);
  const isScrollingUp = shallowRef(false);
  const scrollThreshold = computed(() => {
    return Number(props.scrollThreshold);
  });
  const scrollRatio = computed(() => {
    return clamp((scrollThreshold.value - currentScroll.value) / scrollThreshold.value || 0);
  });
  const onScroll = () => {
    const targetEl = target.value;
    if (!targetEl || canScroll && !canScroll.value)
      return;
    previousScroll = currentScroll.value;
    currentScroll.value = "window" in targetEl ? targetEl.pageYOffset : targetEl.scrollTop;
    isScrollingUp.value = currentScroll.value < previousScroll;
    currentThreshold.value = Math.abs(currentScroll.value - scrollThreshold.value);
  };
  watch(isScrollingUp, () => {
    savedScroll.value = savedScroll.value || currentScroll.value;
  });
  watch(isScrollActive, () => {
    savedScroll.value = 0;
  });
  canScroll && watch(canScroll, onScroll, {
    immediate: true
  });
  return {
    scrollThreshold,
    currentScroll,
    currentThreshold,
    isScrollActive,
    scrollRatio,
    // required only for testing
    // probably can be removed
    // later (2 chars chlng)
    isScrollingUp,
    savedScroll
  };
}
const makeVAppBarProps = propsFactory({
  scrollBehavior: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  location: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom"].includes(value)
  },
  ...makeVToolbarProps(),
  ...makeLayoutItemProps(),
  ...makeScrollProps(),
  height: {
    type: [Number, String],
    default: 64
  }
}, "VAppBar");
const VAppBar = genericComponent()({
  name: "VAppBar",
  props: makeVAppBarProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vToolbarRef = ref();
    const isActive = useProxiedModel(props, "modelValue");
    const scrollBehavior = computed(() => {
      var _a;
      const behavior = new Set(((_a = props.scrollBehavior) == null ? void 0 : _a.split(" ")) ?? []);
      return {
        hide: behavior.has("hide"),
        fullyHide: behavior.has("fully-hide"),
        inverted: behavior.has("inverted"),
        collapse: behavior.has("collapse"),
        elevate: behavior.has("elevate"),
        fadeImage: behavior.has("fade-image")
        // shrink: behavior.has('shrink'),
      };
    });
    const canScroll = computed(() => {
      const behavior = scrollBehavior.value;
      return behavior.hide || behavior.fullyHide || behavior.inverted || behavior.collapse || behavior.elevate || behavior.fadeImage || // behavior.shrink ||
      !isActive.value;
    });
    const {
      currentScroll,
      scrollThreshold,
      isScrollingUp,
      scrollRatio
    } = useScroll(props, {
      canScroll
    });
    const canHide = computed(() => scrollBehavior.value.hide || scrollBehavior.value.fullyHide);
    const isCollapsed = computed(() => props.collapse || scrollBehavior.value.collapse && (scrollBehavior.value.inverted ? scrollRatio.value > 0 : scrollRatio.value === 0));
    const isFlat = computed(() => props.flat || scrollBehavior.value.fullyHide && !isActive.value || scrollBehavior.value.elevate && (scrollBehavior.value.inverted ? currentScroll.value > 0 : currentScroll.value === 0));
    const opacity = computed(() => scrollBehavior.value.fadeImage ? scrollBehavior.value.inverted ? 1 - scrollRatio.value : scrollRatio.value : void 0);
    const height = computed(() => {
      var _a, _b;
      const height2 = Number(((_a = vToolbarRef.value) == null ? void 0 : _a.contentHeight) ?? props.height);
      const extensionHeight = Number(((_b = vToolbarRef.value) == null ? void 0 : _b.extensionHeight) ?? 0);
      if (!canHide.value)
        return height2 + extensionHeight;
      return currentScroll.value < scrollThreshold.value || scrollBehavior.value.fullyHide ? height2 + extensionHeight : height2;
    });
    useToggleScope(computed(() => !!props.scrollBehavior), () => {
      watchEffect(() => {
        if (canHide.value) {
          if (scrollBehavior.value.inverted) {
            isActive.value = currentScroll.value > scrollThreshold.value;
          } else {
            isActive.value = isScrollingUp.value || currentScroll.value < scrollThreshold.value;
          }
        } else {
          isActive.value = true;
        }
      });
    });
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      layoutItemStyles,
      layoutIsReady
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: toRef(props, "location"),
      layoutSize: height,
      elementSize: shallowRef(void 0),
      active: isActive,
      absolute: toRef(props, "absolute")
    });
    useRender(() => {
      const toolbarProps = VToolbar.filterProps(props);
      return createVNode(VToolbar, mergeProps({
        "ref": vToolbarRef,
        "class": ["v-app-bar", {
          "v-app-bar--bottom": props.location === "bottom"
        }, props.class],
        "style": [{
          ...layoutItemStyles.value,
          "--v-toolbar-image-opacity": opacity.value,
          height: void 0,
          ...ssrBootStyles.value
        }, props.style]
      }, toolbarProps, {
        "collapse": isCollapsed.value,
        "flat": isFlat.value
      }), slots);
    });
    return layoutIsReady;
  }
});
const makeVAppBarNavIconProps = propsFactory({
  ...makeVBtnProps({
    icon: "$menu",
    variant: "text"
  })
}, "VAppBarNavIcon");
const VAppBarNavIcon = genericComponent()({
  name: "VAppBarNavIcon",
  props: makeVAppBarNavIconProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VBtn, mergeProps(props, {
      "class": ["v-app-bar-nav-icon"]
    }), slots));
    return {};
  }
});
const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLayoutProps()
}, "VLayout");
const VLayout = genericComponent()({
  name: "VLayout",
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => createVNode("div", {
      "ref": layoutRef,
      "class": [layoutClasses.value, props.class],
      "style": [dimensionStyles.value, layoutStyles.value, props.style]
    }, [createVNode(Suspense, null, {
      default: () => {
        var _a;
        return [createVNode(Fragment, null, [(_a = slots.default) == null ? void 0 : _a.call(slots)])];
      }
    })]));
    return {
      getLayoutItem,
      items
    };
  }
});
const makeVMainProps = propsFactory({
  scrollable: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeTagProps({
    tag: "main"
  })
}, "VMain");
const VMain = genericComponent()({
  name: "VMain",
  props: makeVMainProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      mainStyles,
      layoutIsReady
    } = useLayout();
    const {
      ssrBootStyles
    } = useSsrBoot();
    useRender(() => createVNode(props.tag, {
      "class": ["v-main", {
        "v-main--scrollable": props.scrollable
      }, props.class],
      "style": [mainStyles.value, ssrBootStyles.value, dimensionStyles.value, props.style]
    }, {
      default: () => {
        var _a, _b;
        return [props.scrollable ? createVNode("div", {
          "class": "v-main__scroller"
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]) : (_b = slots.default) == null ? void 0 : _b.call(slots)];
      }
    }));
    return layoutIsReady;
  }
});
function useSticky(_ref) {
  let {
    rootEl,
    isSticky,
    layoutItemStyles
  } = _ref;
  const isStuck = shallowRef(false);
  const stuckPosition = shallowRef(0);
  const stickyStyles = computed(() => {
    const side = typeof isStuck.value === "boolean" ? "top" : isStuck.value;
    return [isSticky.value ? {
      top: "auto",
      bottom: "auto",
      height: void 0
    } : void 0, isStuck.value ? {
      [side]: convertToUnit(stuckPosition.value)
    } : {
      top: layoutItemStyles.value.top
    }];
  });
  return {
    isStuck,
    stickyStyles
  };
}
function useTouch(_ref) {
  let {
    el,
    isActive,
    isTemporary,
    width,
    touchless,
    position
  } = _ref;
  computed(() => ["left", "right"].includes(position.value));
  const isDragging = shallowRef(false);
  const dragProgress = shallowRef(0);
  shallowRef(0);
  const dragStyles = computed(() => {
    return isDragging.value ? {
      transform: position.value === "left" ? `translateX(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "right" ? `translateX(calc(100% - ${dragProgress.value * width.value}px))` : position.value === "top" ? `translateY(calc(-100% + ${dragProgress.value * width.value}px))` : position.value === "bottom" ? `translateY(calc(100% - ${dragProgress.value * width.value}px))` : oops(),
      transition: "none"
    } : void 0;
  });
  useToggleScope(isDragging, () => {
    var _a, _b;
    const transform = ((_a = el.value) == null ? void 0 : _a.style.transform) ?? null;
    const transition = ((_b = el.value) == null ? void 0 : _b.style.transition) ?? null;
    watchEffect(() => {
      var _a2, _b2, _c, _d;
      (_b2 = el.value) == null ? void 0 : _b2.style.setProperty("transform", ((_a2 = dragStyles.value) == null ? void 0 : _a2.transform) || "none");
      (_d = el.value) == null ? void 0 : _d.style.setProperty("transition", ((_c = dragStyles.value) == null ? void 0 : _c.transition) || null);
    });
    onScopeDispose(() => {
      var _a2, _b2;
      (_a2 = el.value) == null ? void 0 : _a2.style.setProperty("transform", transform);
      (_b2 = el.value) == null ? void 0 : _b2.style.setProperty("transition", transition);
    });
  });
  return {
    isDragging,
    dragProgress,
    dragStyles
  };
}
function oops() {
  throw new Error();
}
const locations = ["start", "end", "left", "right", "top", "bottom"];
const makeVNavigationDrawerProps = propsFactory({
  color: String,
  disableResizeWatcher: Boolean,
  disableRouteWatcher: Boolean,
  expandOnHover: Boolean,
  floating: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  permanent: Boolean,
  rail: {
    type: Boolean,
    default: null
  },
  railWidth: {
    type: [Number, String],
    default: 56
  },
  scrim: {
    type: [Boolean, String],
    default: true
  },
  image: String,
  temporary: Boolean,
  persistent: Boolean,
  touchless: Boolean,
  width: {
    type: [Number, String],
    default: 256
  },
  location: {
    type: String,
    default: "start",
    validator: (value) => locations.includes(value)
  },
  sticky: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDelayProps(),
  ...makeDisplayProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "nav"
  }),
  ...makeThemeProps()
}, "VNavigationDrawer");
const VNavigationDrawer = genericComponent()({
  name: "VNavigationDrawer",
  props: makeVNavigationDrawerProps(),
  emits: {
    "update:modelValue": (val) => true,
    "update:rail": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      elevationClasses
    } = useElevation(props);
    const {
      displayClasses,
      mobile
    } = useDisplay(props);
    const {
      roundedClasses
    } = useRounded(props);
    const router = useRouter$1();
    const isActive = useProxiedModel(props, "modelValue", null, (v) => !!v);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const {
      scopeId
    } = useScopeId();
    const rootEl = ref();
    const isHovering = shallowRef(false);
    const {
      runOpenDelay,
      runCloseDelay
    } = useDelay(props, (value) => {
      isHovering.value = value;
    });
    const width = computed(() => {
      return props.rail && props.expandOnHover && isHovering.value ? Number(props.width) : Number(props.rail ? props.railWidth : props.width);
    });
    const location = computed(() => {
      return toPhysical(props.location, isRtl.value);
    });
    const isPersistent = computed(() => props.persistent);
    const isTemporary = computed(() => !props.permanent && (mobile.value || props.temporary));
    const isSticky = computed(() => props.sticky && !isTemporary.value && location.value !== "bottom");
    useToggleScope(() => props.expandOnHover && props.rail != null, () => {
      watch(isHovering, (val) => emit("update:rail", !val));
    });
    useToggleScope(() => !props.disableResizeWatcher, () => {
      watch(isTemporary, (val) => !props.permanent && nextTick(() => isActive.value = !val));
    });
    useToggleScope(() => !props.disableRouteWatcher && !!router, () => {
      watch(router.currentRoute, () => isTemporary.value && (isActive.value = false));
    });
    watch(() => props.permanent, (val) => {
      if (val)
        isActive.value = true;
    });
    if (props.modelValue == null && !isTemporary.value) {
      isActive.value = props.permanent || !mobile.value;
    }
    const {
      isDragging,
      dragProgress
    } = useTouch({
      el: rootEl,
      isActive,
      isTemporary,
      width,
      touchless: toRef(props, "touchless"),
      position: location
    });
    const layoutSize = computed(() => {
      const size = isTemporary.value ? 0 : props.rail && props.expandOnHover ? Number(props.railWidth) : width.value;
      return isDragging.value ? size * dragProgress.value : size;
    });
    const elementSize = computed(() => ["top", "bottom"].includes(props.location) ? 0 : width.value);
    const {
      layoutItemStyles,
      layoutItemScrimStyles,
      layoutIsReady
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: location,
      layoutSize,
      elementSize,
      active: computed(() => isActive.value || isDragging.value),
      disableTransitions: computed(() => isDragging.value),
      absolute: computed(() => (
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        props.absolute || isSticky.value && typeof isStuck.value !== "string"
      ))
    });
    const {
      isStuck,
      stickyStyles
    } = useSticky({
      rootEl,
      isSticky,
      layoutItemStyles
    });
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const scrimStyles = computed(() => ({
      ...isDragging.value ? {
        opacity: dragProgress.value * 0.2,
        transition: "none"
      } : void 0,
      ...layoutItemScrimStyles.value
    }));
    provideDefaults({
      VList: {
        bgColor: "transparent"
      }
    });
    useRender(() => {
      const hasImage = slots.image || props.image;
      return createVNode(Fragment, null, [createVNode(props.tag, mergeProps({
        "ref": rootEl,
        "onMouseenter": runOpenDelay,
        "onMouseleave": runCloseDelay,
        "class": ["v-navigation-drawer", `v-navigation-drawer--${location.value}`, {
          "v-navigation-drawer--expand-on-hover": props.expandOnHover,
          "v-navigation-drawer--floating": props.floating,
          "v-navigation-drawer--is-hovering": isHovering.value,
          "v-navigation-drawer--rail": props.rail,
          "v-navigation-drawer--temporary": isTemporary.value,
          "v-navigation-drawer--persistent": isPersistent.value,
          "v-navigation-drawer--active": isActive.value,
          "v-navigation-drawer--sticky": isSticky.value
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, displayClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, ssrBootStyles.value, stickyStyles.value, props.style, ["top", "bottom"].includes(location.value) ? {
          height: "auto"
        } : {}]
      }, scopeId, attrs), {
        default: () => {
          var _a, _b, _c;
          return [hasImage && createVNode("div", {
            "key": "image",
            "class": "v-navigation-drawer__img"
          }, [!slots.image ? createVNode(VImg, {
            "key": "image-img",
            "alt": "",
            "cover": true,
            "height": "inherit",
            "src": props.image
          }, null) : createVNode(VDefaultsProvider, {
            "key": "image-defaults",
            "disabled": !props.image,
            "defaults": {
              VImg: {
                alt: "",
                cover: true,
                height: "inherit",
                src: props.image
              }
            }
          }, slots.image)]), slots.prepend && createVNode("div", {
            "class": "v-navigation-drawer__prepend"
          }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots)]), createVNode("div", {
            "class": "v-navigation-drawer__content"
          }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]), slots.append && createVNode("div", {
            "class": "v-navigation-drawer__append"
          }, [(_c = slots.append) == null ? void 0 : _c.call(slots)])];
        }
      }), createVNode(Transition, {
        "name": "fade-transition"
      }, {
        default: () => [isTemporary.value && (isDragging.value || isActive.value) && !!props.scrim && createVNode("div", mergeProps({
          "class": ["v-navigation-drawer__scrim", scrimColor.backgroundColorClasses.value],
          "style": [scrimStyles.value, scrimColor.backgroundColorStyles.value],
          "onClick": () => {
            if (isPersistent.value)
              return;
            isActive.value = false;
          }
        }, scopeId), null)]
      })]);
    });
    return layoutIsReady.then(() => ({
      isStuck
    }));
  }
});
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const appStore = useAppStore();
    const drawer = ref(false);
    const router = useRouter();
    function closeMenu() {
      drawer.value = false;
    }
    const logout = async () => {
      await appStore.logout();
      await router.push("/");
      (void 0).reload();
    };
    if (!appStore.profile)
      appStore.getProfileInfo();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Nuxt_Link = __nuxt_component_0$3;
      const _component_molecule_ProductCatalog = __nuxt_component_0$2;
      const _component_organism_cart = __nuxt_component_2;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VLayout, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VAppBar, {
                    color: "primary",
                    prominent: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VAppBarNavIcon, {
                          class: "d-xs-block d-sm-none",
                          variant: "text",
                          onClick: ($event) => drawer.value = !drawer.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Nuxt_Link, {
                          to: "/",
                          class: "icon-link"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VToolbarTitle, { class: "logo" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`SHOP`);
                                  } else {
                                    return [
                                      createTextVNode("SHOP")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VToolbarTitle, { class: "logo" }, {
                                  default: withCtx(() => [
                                    createTextVNode("SHOP")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "mdi-magnify",
                          variant: "text",
                          class: "d-none d-md-flex"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "mdi-heart-outline",
                          variant: "text",
                          class: "d-none d-md-flex"
                        }, null, _parent4, _scopeId3));
                        if (unref(appStore).profile) {
                          _push4(`<span data-v-2c6d1d5f${_scopeId3}>${ssrInterpolate(unref(appStore).profile.name)}</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (!unref(appStore).profile) {
                          _push4(ssrRenderComponent(_component_Nuxt_Link, {
                            to: "/auth",
                            class: "icon-link"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "mdi-account-outline",
                                  variant: "text"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    icon: "mdi-account-outline",
                                    variant: "text"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(_component_Nuxt_Link, {
                            to: "/profile",
                            class: "icon-link"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VBtn, {
                                  icon: "mdi-account-outline",
                                  variant: "text"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    icon: "mdi-account-outline",
                                    variant: "text"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            icon: "mdi-logout",
                            variant: "text",
                            onClick: logout
                          }, null, _parent4, _scopeId3));
                          _push4(`<!--]-->`);
                        }
                        _push4(`<div style="${ssrRenderStyle({ "position": "relative" })}" data-v-2c6d1d5f${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          onClick: ($event) => unref(appStore).drawerCart = !unref(appStore).drawerCart,
                          icon: "mdi-cart-outline",
                          variant: "text"
                        }, null, _parent4, _scopeId3));
                        if (unref(cartStore).currentCart.length > 0) {
                          _push4(`<div class="amount_product" data-v-2c6d1d5f${_scopeId3}>${ssrInterpolate(unref(cartStore).currentCart.length)}</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(VBtn, {
                          icon: "mdi-dots-vertical",
                          variant: "text"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VAppBarNavIcon, {
                            class: "d-xs-block d-sm-none",
                            variant: "text",
                            onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                          }, null, 8, ["onClick"]),
                          createVNode(_component_Nuxt_Link, {
                            to: "/",
                            class: "icon-link"
                          }, {
                            default: withCtx(() => [
                              createVNode(VToolbarTitle, { class: "logo" }, {
                                default: withCtx(() => [
                                  createTextVNode("SHOP")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VSpacer),
                          createVNode(VBtn, {
                            icon: "mdi-magnify",
                            variant: "text",
                            class: "d-none d-md-flex"
                          }),
                          createVNode(VBtn, {
                            icon: "mdi-heart-outline",
                            variant: "text",
                            class: "d-none d-md-flex"
                          }),
                          unref(appStore).profile ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(appStore).profile.name), 1)) : createCommentVNode("", true),
                          !unref(appStore).profile ? (openBlock(), createBlock(_component_Nuxt_Link, {
                            key: 1,
                            to: "/auth",
                            class: "icon-link"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-account-outline",
                                variant: "text"
                              })
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                            createVNode(_component_Nuxt_Link, {
                              to: "/profile",
                              class: "icon-link"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  icon: "mdi-account-outline",
                                  variant: "text"
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              icon: "mdi-logout",
                              variant: "text",
                              onClick: logout
                            })
                          ], 64)),
                          createVNode("div", { style: { "position": "relative" } }, [
                            createVNode(VBtn, {
                              onClick: withModifiers(($event) => unref(appStore).drawerCart = !unref(appStore).drawerCart, ["stop"]),
                              icon: "mdi-cart-outline",
                              variant: "text"
                            }, null, 8, ["onClick"]),
                            unref(cartStore).currentCart.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "amount_product"
                            }, toDisplayString(unref(cartStore).currentCart.length), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode(VBtn, {
                            icon: "mdi-dots-vertical",
                            variant: "text"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VNavigationDrawer, {
                    modelValue: drawer.value,
                    "onUpdate:modelValue": ($event) => drawer.value = $event,
                    location: "left",
                    width: "310"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_molecule_ProductCatalog, { onCloseMenu: closeMenu }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_molecule_ProductCatalog, { onCloseMenu: closeMenu })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VNavigationDrawer, {
                    modelValue: unref(appStore).drawerCart,
                    "onUpdate:modelValue": ($event) => unref(appStore).drawerCart = $event,
                    location: "right",
                    temporary: "",
                    width: "330"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_organism_cart, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_organism_cart)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VMain, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "default", {}, void 0, true)
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "default", {}, void 0, true)
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VAppBar, {
                      color: "primary",
                      prominent: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VAppBarNavIcon, {
                          class: "d-xs-block d-sm-none",
                          variant: "text",
                          onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                        }, null, 8, ["onClick"]),
                        createVNode(_component_Nuxt_Link, {
                          to: "/",
                          class: "icon-link"
                        }, {
                          default: withCtx(() => [
                            createVNode(VToolbarTitle, { class: "logo" }, {
                              default: withCtx(() => [
                                createTextVNode("SHOP")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VSpacer),
                        createVNode(VBtn, {
                          icon: "mdi-magnify",
                          variant: "text",
                          class: "d-none d-md-flex"
                        }),
                        createVNode(VBtn, {
                          icon: "mdi-heart-outline",
                          variant: "text",
                          class: "d-none d-md-flex"
                        }),
                        unref(appStore).profile ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(appStore).profile.name), 1)) : createCommentVNode("", true),
                        !unref(appStore).profile ? (openBlock(), createBlock(_component_Nuxt_Link, {
                          key: 1,
                          to: "/auth",
                          class: "icon-link"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              icon: "mdi-account-outline",
                              variant: "text"
                            })
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createVNode(_component_Nuxt_Link, {
                            to: "/profile",
                            class: "icon-link"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                icon: "mdi-account-outline",
                                variant: "text"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            icon: "mdi-logout",
                            variant: "text",
                            onClick: logout
                          })
                        ], 64)),
                        createVNode("div", { style: { "position": "relative" } }, [
                          createVNode(VBtn, {
                            onClick: withModifiers(($event) => unref(appStore).drawerCart = !unref(appStore).drawerCart, ["stop"]),
                            icon: "mdi-cart-outline",
                            variant: "text"
                          }, null, 8, ["onClick"]),
                          unref(cartStore).currentCart.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "amount_product"
                          }, toDisplayString(unref(cartStore).currentCart.length), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(VBtn, {
                          icon: "mdi-dots-vertical",
                          variant: "text"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VNavigationDrawer, {
                      modelValue: drawer.value,
                      "onUpdate:modelValue": ($event) => drawer.value = $event,
                      location: "left",
                      width: "310"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_molecule_ProductCatalog, { onCloseMenu: closeMenu })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VNavigationDrawer, {
                      modelValue: unref(appStore).drawerCart,
                      "onUpdate:modelValue": ($event) => unref(appStore).drawerCart = $event,
                      location: "right",
                      temporary: "",
                      width: "330"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_organism_cart)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VMain, null, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VLayout, null, {
                default: withCtx(() => [
                  createVNode(VAppBar, {
                    color: "primary",
                    prominent: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VAppBarNavIcon, {
                        class: "d-xs-block d-sm-none",
                        variant: "text",
                        onClick: withModifiers(($event) => drawer.value = !drawer.value, ["stop"])
                      }, null, 8, ["onClick"]),
                      createVNode(_component_Nuxt_Link, {
                        to: "/",
                        class: "icon-link"
                      }, {
                        default: withCtx(() => [
                          createVNode(VToolbarTitle, { class: "logo" }, {
                            default: withCtx(() => [
                              createTextVNode("SHOP")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VSpacer),
                      createVNode(VBtn, {
                        icon: "mdi-magnify",
                        variant: "text",
                        class: "d-none d-md-flex"
                      }),
                      createVNode(VBtn, {
                        icon: "mdi-heart-outline",
                        variant: "text",
                        class: "d-none d-md-flex"
                      }),
                      unref(appStore).profile ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(appStore).profile.name), 1)) : createCommentVNode("", true),
                      !unref(appStore).profile ? (openBlock(), createBlock(_component_Nuxt_Link, {
                        key: 1,
                        to: "/auth",
                        class: "icon-link"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            icon: "mdi-account-outline",
                            variant: "text"
                          })
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createVNode(_component_Nuxt_Link, {
                          to: "/profile",
                          class: "icon-link"
                        }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              icon: "mdi-account-outline",
                              variant: "text"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          icon: "mdi-logout",
                          variant: "text",
                          onClick: logout
                        })
                      ], 64)),
                      createVNode("div", { style: { "position": "relative" } }, [
                        createVNode(VBtn, {
                          onClick: withModifiers(($event) => unref(appStore).drawerCart = !unref(appStore).drawerCart, ["stop"]),
                          icon: "mdi-cart-outline",
                          variant: "text"
                        }, null, 8, ["onClick"]),
                        unref(cartStore).currentCart.length > 0 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "amount_product"
                        }, toDisplayString(unref(cartStore).currentCart.length), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(VBtn, {
                        icon: "mdi-dots-vertical",
                        variant: "text"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VNavigationDrawer, {
                    modelValue: drawer.value,
                    "onUpdate:modelValue": ($event) => drawer.value = $event,
                    location: "left",
                    width: "310"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_molecule_ProductCatalog, { onCloseMenu: closeMenu })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VNavigationDrawer, {
                    modelValue: unref(appStore).drawerCart,
                    "onUpdate:modelValue": ($event) => unref(appStore).drawerCart = $event,
                    location: "right",
                    temporary: "",
                    width: "330"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_organism_cart)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VMain, null, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2c6d1d5f"]]);
export {
  VNavigationDrawer as V,
  __nuxt_component_0$2 as _,
  __nuxt_component_0 as a
};
//# sourceMappingURL=Header-CT6yzFm8.js.map
