import { defineComponent, computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, withDirectives, createVNode, vModelText, openBlock, createBlock, withModifiers, createCommentVNode, useSSRContext, ref, watch, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { m as useAppStore, l as useProductStore, V as VBtn, _ as _export_sfc, p as propsFactory, I as IconValue, g as genericComponent, d as useProxiedModel, c as useLocale, e as useRender, Z as convertToUnit, a1 as VDefaultsProvider, aU as VProgressLinear, aV as makeVImgProps, o as VImg, q as VIcon, a as useRuntimeConfig } from "../server.mjs";
import { u as useCartStore } from "./CartStore-BmChGnw3.js";
import { V as VRow, a as VCol } from "./VRow-DF0L_SZn.js";
import { useRoute, useRouter } from "vue-router";
import { c as characteristicsSchemaKeys } from "./productCharacteristics-sAaRc816.js";
import { V as VContainer } from "./VContainer-CuwDK_b8.js";
import { m as makeVWindowProps, V as VWindow, a as makeVWindowItemProps, b as VWindowItem } from "./VWindowItem-coJOn4_f.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "axios";
import "./ssrBoot-BtvJZs44.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DiscountedPrice",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const appStore = useAppStore();
    const productStore = useProductStore();
    const oldPrice = computed(() => {
      return Math.floor(
        productStore.currentProduct.price + (productStore.currentProduct.price * Math.random() * 0.3 + 0.1)
      );
    });
    const isProductInCart = computed(() => {
      return cartStore.currentCart.some(
        (elem) => elem.product._id === productStore.currentProduct._id
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VRow, mergeProps({
        class: "product__price",
        justify: "end"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(productStore).currentProduct.quantitiesInStore && !isProductInCart.value) {
              _push2(ssrRenderComponent(VBtn, {
                class: "product__btn",
                color: "primary",
                onClick: ($event) => unref(cartStore).addProductToCart(unref(productStore).currentProduct)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Купить`);
                  } else {
                    return [
                      createTextVNode("Купить")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!unref(productStore).currentProduct.quantitiesInStore) {
              _push2(ssrRenderComponent(VBtn, {
                class: "product__btn",
                disabled: "",
                color: "primary",
                onClick: () => {
                }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Товар закончился`);
                  } else {
                    return [
                      createTextVNode("Товар закончился")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(productStore).currentProduct.quantitiesInStore && isProductInCart.value) {
              _push2(ssrRenderComponent(VBtn, {
                class: "product__btn",
                color: "primary",
                onClick: ($event) => unref(appStore).drawerCart = true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Товар в корзине`);
                  } else {
                    return [
                      createTextVNode("Товар в корзине")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(VCol, { cols: "3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VRow, { class: "product__price-old" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(oldPrice.value)} грн`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(oldPrice.value) + " грн", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, { class: "product__price-current" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<input class="product__price-current-input"${ssrIncludeBooleanAttr(!unref(appStore).isEditMode) ? " disabled" : ""} type="text"${ssrRenderAttr("value", unref(productStore).currentProduct.price)} data-v-6d4d040e${_scopeId3}>`);
                      } else {
                        return [
                          withDirectives(createVNode("input", {
                            class: "product__price-current-input",
                            disabled: !unref(appStore).isEditMode,
                            type: "text",
                            "onUpdate:modelValue": ($event) => unref(productStore).currentProduct.price = $event
                          }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                            [vModelText, unref(productStore).currentProduct.price]
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VRow, { class: "product__price-old" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(oldPrice.value) + " грн", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(VRow, { class: "product__price-current" }, {
                      default: withCtx(() => [
                        withDirectives(createVNode("input", {
                          class: "product__price-current-input",
                          disabled: !unref(appStore).isEditMode,
                          type: "text",
                          "onUpdate:modelValue": ($event) => unref(productStore).currentProduct.price = $event
                        }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                          [vModelText, unref(productStore).currentProduct.price]
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(productStore).currentProduct.quantitiesInStore && !isProductInCart.value ? (openBlock(), createBlock(VBtn, {
                key: 0,
                class: "product__btn",
                color: "primary",
                onClick: withModifiers(($event) => unref(cartStore).addProductToCart(unref(productStore).currentProduct), ["prevent"])
              }, {
                default: withCtx(() => [
                  createTextVNode("Купить")
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              !unref(productStore).currentProduct.quantitiesInStore ? (openBlock(), createBlock(VBtn, {
                key: 1,
                class: "product__btn",
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
              unref(productStore).currentProduct.quantitiesInStore && isProductInCart.value ? (openBlock(), createBlock(VBtn, {
                key: 2,
                class: "product__btn",
                color: "primary",
                onClick: withModifiers(($event) => unref(appStore).drawerCart = true, ["prevent"])
              }, {
                default: withCtx(() => [
                  createTextVNode("Товар в корзине")
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              createVNode(VCol, { cols: "3" }, {
                default: withCtx(() => [
                  createVNode(VRow, { class: "product__price-old" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(oldPrice.value) + " грн", 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VRow, { class: "product__price-current" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode("input", {
                        class: "product__price-current-input",
                        disabled: !unref(appStore).isEditMode,
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(productStore).currentProduct.price = $event
                      }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                        [vModelText, unref(productStore).currentProduct.price]
                      ])
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/atom/DiscountedPrice.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6d4d040e"]]);
const makeVCarouselProps = propsFactory({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: IconValue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (value) => Number(value) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...makeVWindowProps({
    continuous: true,
    mandatory: "force",
    showArrows: true
  })
}, "VCarousel");
const VCarousel = genericComponent()({
  name: "VCarousel",
  props: makeVCarouselProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      t
    } = useLocale();
    const windowRef = ref();
    let slideTimeout = -1;
    watch(model, restartTimeout);
    watch(() => props.interval, restartTimeout);
    watch(() => props.cycle, (val) => {
      if (val)
        restartTimeout();
      else
        (void 0).clearTimeout(slideTimeout);
    });
    function startTimeout() {
      if (!props.cycle || !windowRef.value)
        return;
      slideTimeout = (void 0).setTimeout(windowRef.value.group.next, +props.interval > 0 ? +props.interval : 6e3);
    }
    function restartTimeout() {
      (void 0).clearTimeout(slideTimeout);
      (void 0).requestAnimationFrame(startTimeout);
    }
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "ref": windowRef
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-carousel", {
          "v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": props.verticalDelimiters
        }, props.class],
        "style": [{
          height: convertToUnit(props.height)
        }, props.style]
      }), {
        default: slots.default,
        additional: (_ref2) => {
          let {
            group
          } = _ref2;
          return createVNode(Fragment, null, [!props.hideDelimiters && createVNode("div", {
            "class": "v-carousel__controls",
            "style": {
              left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
              right: props.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [group.items.value.length > 0 && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                color: props.color,
                icon: props.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            "scoped": true
          }, {
            default: () => [group.items.value.map((item, index) => {
              const props2 = {
                id: `carousel-item-${item.id}`,
                "aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index + 1, group.items.value.length),
                class: ["v-carousel__controls__item", group.isSelected(item.id) && "v-btn--active"],
                onClick: () => group.select(item.id, true)
              };
              return slots.item ? slots.item({
                props: props2,
                item
              }) : createVNode(VBtn, mergeProps(item, props2), null);
            })]
          })]), props.progress && createVNode(VProgressLinear, {
            "class": "v-carousel__progress",
            "color": typeof props.progress === "string" ? props.progress : void 0,
            "modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
          }, null)]);
        },
        prev: slots.prev,
        next: slots.next
      });
    });
    return {};
  }
});
const makeVCarouselItemProps = propsFactory({
  ...makeVImgProps(),
  ...makeVWindowItemProps()
}, "VCarouselItem");
const VCarouselItem = genericComponent()({
  name: "VCarouselItem",
  inheritAttrs: false,
  props: makeVCarouselItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => {
      const imgProps = VImg.filterProps(props);
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "class": ["v-carousel-item", props.class]
      }, windowItemProps), {
        default: () => [createVNode(VImg, mergeProps(attrs, imgProps), slots)]
      });
    });
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const productStore = useProductStore();
    const appStore = useAppStore();
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    async function fetchProduct() {
      try {
        const id = route.params.id;
        await productStore.getProduct(id);
      } catch (e) {
        console.error(e);
      }
    }
    const allCharacteristicsProduct = computed(() => {
      let allCharacteristics = JSON.parse(
        JSON.stringify(characteristicsSchemaKeys)
      );
      for (let key in productStore.currentProduct.characteristics) {
        allCharacteristics.forEach((elem) => {
          if (elem.key == key) {
            elem.value = productStore.currentProduct.characteristics[key];
          }
        });
      }
      return allCharacteristics;
    });
    const currentProductCharacteristics = computed(() => {
      let currentCharacteristics = [];
      allCharacteristicsProduct.value.forEach((elem) => {
        if (elem.value) {
          currentCharacteristics.push(elem);
        }
      });
      return currentCharacteristics;
    });
    fetchProduct();
    function updateProduct() {
      let arrayProdCharact = [];
      arrayProdCharact = allCharacteristicsProduct.value;
      let objCharacteristics = {};
      arrayProdCharact.forEach((elem) => {
        if (elem.value) {
          objCharacteristics[elem.key] = elem.value;
        }
      });
      productStore.currentProduct.characteristics = objCharacteristics;
      productStore.editProduct(productStore.currentProduct);
      appStore.isEditMode = false;
    }
    function cancelChanges() {
      appStore.isEditMode = false;
      fetchProduct();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_atom_DiscountedPrice = __nuxt_component_0;
      _push(ssrRenderComponent(VContainer, mergeProps({ fluid: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { justify: "space-around" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="product__title text-center mb-4" data-v-2aafa8f1${_scopeId3}><input type="text"${ssrIncludeBooleanAttr(!unref(appStore).isEditMode) ? " disabled" : ""}${ssrRenderAttr("value", unref(productStore).currentProduct.name)} class="product__title-input" data-v-2aafa8f1${_scopeId3}></div>`);
                        if (unref(productStore).currentProduct.image) {
                          _push4(ssrRenderComponent(VCarousel, {
                            class: "product__carousel",
                            height: "400",
                            "show-arrows": "hover",
                            cycle: "",
                            "hide-delimiter-background": ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(productStore).currentProduct.image, (img) => {
                                  _push5(ssrRenderComponent(VCarouselItem, {
                                    class: "product__carousel-item",
                                    key: img,
                                    src: unref(apiUrl) + "/" + img
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).currentProduct.image, (img) => {
                                    return openBlock(), createBlock(VCarouselItem, {
                                      class: "product__carousel-item",
                                      key: img,
                                      src: unref(apiUrl) + "/" + img
                                    }, null, 8, ["src"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_atom_DiscountedPrice, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "product__title text-center mb-4" }, [
                            withDirectives(createVNode("input", {
                              type: "text",
                              disabled: !unref(appStore).isEditMode,
                              "onUpdate:modelValue": ($event) => unref(productStore).currentProduct.name = $event,
                              class: "product__title-input"
                            }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                              [vModelText, unref(productStore).currentProduct.name]
                            ])
                          ]),
                          unref(productStore).currentProduct.image ? (openBlock(), createBlock(VCarousel, {
                            key: 0,
                            class: "product__carousel",
                            height: "400",
                            "show-arrows": "hover",
                            cycle: "",
                            "hide-delimiter-background": ""
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).currentProduct.image, (img) => {
                                return openBlock(), createBlock(VCarouselItem, {
                                  class: "product__carousel-item",
                                  key: img,
                                  src: unref(apiUrl) + "/" + img
                                }, null, 8, ["src"]);
                              }), 128))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_atom_DiscountedPrice)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 style="${ssrRenderStyle({ "text-align": "center" })}" data-v-2aafa8f1${_scopeId3}>Характеристики</h2>`);
                        if (unref(appStore).isEditMode) {
                          _push4(`<div id="scroll-target" class="overflow-y-auto" style="${ssrRenderStyle({ "max-height": "500px" })}" data-v-2aafa8f1${_scopeId3}><!--[-->`);
                          ssrRenderList(allCharacteristicsProduct.value, (ch) => {
                            _push4(ssrRenderComponent(VRow, {
                              class: "product__characteristic d-flex align-center",
                              key: ch.key
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span class="product__characteristic-title" data-v-2aafa8f1${_scopeId5}>${ssrInterpolate(ch.title)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VCol, {
                                    class: { "product__characteristic-input--active": ch.active },
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<input class="product__characteristic-input" type="text" placeholder="Enter value"${ssrRenderAttr("value", ch.value)} data-v-2aafa8f1${_scopeId5}>`);
                                        if (ch.active) {
                                          _push6(ssrRenderComponent(VIcon, {
                                            onClick: ($event) => ch.active = false,
                                            class: "product__characteristic-close",
                                            icon: "mdi-close"
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      } else {
                                        return [
                                          withDirectives(createVNode("input", {
                                            class: "product__characteristic-input",
                                            type: "text",
                                            placeholder: "Enter value",
                                            "onUpdate:modelValue": ($event) => ch.value = $event
                                          }, null, 8, ["onUpdate:modelValue"]), [
                                            [vModelText, ch.value]
                                          ]),
                                          ch.active ? (openBlock(), createBlock(VIcon, {
                                            key: 0,
                                            onClick: ($event) => ch.active = false,
                                            class: "product__characteristic-close",
                                            icon: "mdi-close"
                                          }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, {
                                      class: { "product__characteristic-input--active": ch.active },
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        withDirectives(createVNode("input", {
                                          class: "product__characteristic-input",
                                          type: "text",
                                          placeholder: "Enter value",
                                          "onUpdate:modelValue": ($event) => ch.value = $event
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelText, ch.value]
                                        ]),
                                        ch.active ? (openBlock(), createBlock(VIcon, {
                                          key: 0,
                                          onClick: ($event) => ch.active = false,
                                          class: "product__characteristic-close",
                                          icon: "mdi-close"
                                        }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          _push4(`<div id="scroll-target" class="overflow-y-auto" style="${ssrRenderStyle({ "max-height": "500px" })}" data-v-2aafa8f1${_scopeId3}><!--[-->`);
                          ssrRenderList(currentProductCharacteristics.value, (ch) => {
                            _push4(ssrRenderComponent(VRow, {
                              class: "product__characteristic d-flex align-center",
                              key: ch
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span class="product__characteristic-title" data-v-2aafa8f1${_scopeId5}>${ssrInterpolate(ch.title)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(VCol, {
                                    class: { "product__characteristic-input--active": ch.active },
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span data-v-2aafa8f1${_scopeId5}>${ssrInterpolate(ch.value)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", null, toDisplayString(ch.value), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCol, {
                                      class: { "product__characteristic-input--active": ch.active },
                                      cols: "12",
                                      sm: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", null, toDisplayString(ch.value), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></div>`);
                        }
                      } else {
                        return [
                          createVNode("h2", { style: { "text-align": "center" } }, "Характеристики"),
                          unref(appStore).isEditMode ? (openBlock(), createBlock("div", {
                            key: 0,
                            id: "scroll-target",
                            class: "overflow-y-auto",
                            style: { "max-height": "500px" }
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(allCharacteristicsProduct.value, (ch) => {
                              return openBlock(), createBlock(VRow, {
                                class: "product__characteristic d-flex align-center",
                                key: ch.key
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, {
                                    class: { "product__characteristic-input--active": ch.active },
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      withDirectives(createVNode("input", {
                                        class: "product__characteristic-input",
                                        type: "text",
                                        placeholder: "Enter value",
                                        "onUpdate:modelValue": ($event) => ch.value = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, ch.value]
                                      ]),
                                      ch.active ? (openBlock(), createBlock(VIcon, {
                                        key: 0,
                                        onClick: ($event) => ch.active = false,
                                        class: "product__characteristic-close",
                                        icon: "mdi-close"
                                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            id: "scroll-target",
                            class: "overflow-y-auto",
                            style: { "max-height": "500px" }
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(currentProductCharacteristics.value, (ch) => {
                              return openBlock(), createBlock(VRow, {
                                class: "product__characteristic d-flex align-center",
                                key: ch
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCol, {
                                    class: { "product__characteristic-input--active": ch.active },
                                    cols: "12",
                                    sm: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", null, toDisplayString(ch.value), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "product__title text-center mb-4" }, [
                          withDirectives(createVNode("input", {
                            type: "text",
                            disabled: !unref(appStore).isEditMode,
                            "onUpdate:modelValue": ($event) => unref(productStore).currentProduct.name = $event,
                            class: "product__title-input"
                          }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                            [vModelText, unref(productStore).currentProduct.name]
                          ])
                        ]),
                        unref(productStore).currentProduct.image ? (openBlock(), createBlock(VCarousel, {
                          key: 0,
                          class: "product__carousel",
                          height: "400",
                          "show-arrows": "hover",
                          cycle: "",
                          "hide-delimiter-background": ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).currentProduct.image, (img) => {
                              return openBlock(), createBlock(VCarouselItem, {
                                class: "product__carousel-item",
                                key: img,
                                src: unref(apiUrl) + "/" + img
                              }, null, 8, ["src"]);
                            }), 128))
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_atom_DiscountedPrice)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { style: { "text-align": "center" } }, "Характеристики"),
                        unref(appStore).isEditMode ? (openBlock(), createBlock("div", {
                          key: 0,
                          id: "scroll-target",
                          class: "overflow-y-auto",
                          style: { "max-height": "500px" }
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(allCharacteristicsProduct.value, (ch) => {
                            return openBlock(), createBlock(VRow, {
                              class: "product__characteristic d-flex align-center",
                              key: ch.key
                            }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, {
                                  class: { "product__characteristic-input--active": ch.active },
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    withDirectives(createVNode("input", {
                                      class: "product__characteristic-input",
                                      type: "text",
                                      placeholder: "Enter value",
                                      "onUpdate:modelValue": ($event) => ch.value = $event
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, ch.value]
                                    ]),
                                    ch.active ? (openBlock(), createBlock(VIcon, {
                                      key: 0,
                                      onClick: ($event) => ch.active = false,
                                      class: "product__characteristic-close",
                                      icon: "mdi-close"
                                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          id: "scroll-target",
                          class: "overflow-y-auto",
                          style: { "max-height": "500px" }
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(currentProductCharacteristics.value, (ch) => {
                            return openBlock(), createBlock(VRow, {
                              class: "product__characteristic d-flex align-center",
                              key: ch
                            }, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCol, {
                                  class: { "product__characteristic-input--active": ch.active },
                                  cols: "12",
                                  sm: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", null, toDisplayString(ch.value), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { justify: "space-around" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(appStore).role === "admin" && !unref(appStore).isEditMode) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6",
                      class: "d-flex justify-center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: ($event) => unref(appStore).isEditMode = true,
                            color: "success"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Редактировать`);
                              } else {
                                return [
                                  createTextVNode("Редактировать")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VBtn, {
                              onClick: ($event) => unref(appStore).isEditMode = true,
                              color: "success"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Редактировать")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(appStore).role === "admin" && unref(appStore).isEditMode) {
                    _push3(ssrRenderComponent(VCol, {
                      cols: "12",
                      md: "6",
                      class: "d-flex flex-column flex-sm-row justify-space-around"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VBtn, {
                            class: "mb-4 mb-sm-0",
                            onClick: updateProduct,
                            color: "success"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Сохранить`);
                              } else {
                                return [
                                  createTextVNode("Сохранить")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: cancelChanges,
                            color: "error"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Отменить изменения`);
                              } else {
                                return [
                                  createTextVNode("Отменить изменения")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VBtn, {
                              class: "mb-4 mb-sm-0",
                              onClick: updateProduct,
                              color: "success"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Сохранить")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              onClick: cancelChanges,
                              color: "error"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Отменить изменения")
                              ]),
                              _: 1
                            })
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
                    unref(appStore).role === "admin" && !unref(appStore).isEditMode ? (openBlock(), createBlock(VCol, {
                      key: 0,
                      cols: "12",
                      md: "6",
                      class: "d-flex justify-center"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          onClick: ($event) => unref(appStore).isEditMode = true,
                          color: "success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Редактировать")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(appStore).role === "admin" && unref(appStore).isEditMode ? (openBlock(), createBlock(VCol, {
                      key: 1,
                      cols: "12",
                      md: "6",
                      class: "d-flex flex-column flex-sm-row justify-space-around"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          class: "mb-4 mb-sm-0",
                          onClick: updateProduct,
                          color: "success"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Сохранить")
                          ]),
                          _: 1
                        }),
                        createVNode(VBtn, {
                          onClick: cancelChanges,
                          color: "error"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Отменить изменения")
                          ]),
                          _: 1
                        })
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
              createVNode(VRow, { justify: "space-around" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "product__title text-center mb-4" }, [
                        withDirectives(createVNode("input", {
                          type: "text",
                          disabled: !unref(appStore).isEditMode,
                          "onUpdate:modelValue": ($event) => unref(productStore).currentProduct.name = $event,
                          class: "product__title-input"
                        }, null, 8, ["disabled", "onUpdate:modelValue"]), [
                          [vModelText, unref(productStore).currentProduct.name]
                        ])
                      ]),
                      unref(productStore).currentProduct.image ? (openBlock(), createBlock(VCarousel, {
                        key: 0,
                        class: "product__carousel",
                        height: "400",
                        "show-arrows": "hover",
                        cycle: "",
                        "hide-delimiter-background": ""
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(productStore).currentProduct.image, (img) => {
                            return openBlock(), createBlock(VCarouselItem, {
                              class: "product__carousel-item",
                              key: img,
                              src: unref(apiUrl) + "/" + img
                            }, null, 8, ["src"]);
                          }), 128))
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_atom_DiscountedPrice)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { style: { "text-align": "center" } }, "Характеристики"),
                      unref(appStore).isEditMode ? (openBlock(), createBlock("div", {
                        key: 0,
                        id: "scroll-target",
                        class: "overflow-y-auto",
                        style: { "max-height": "500px" }
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(allCharacteristicsProduct.value, (ch) => {
                          return openBlock(), createBlock(VRow, {
                            class: "product__characteristic d-flex align-center",
                            key: ch.key
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                class: { "product__characteristic-input--active": ch.active },
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  withDirectives(createVNode("input", {
                                    class: "product__characteristic-input",
                                    type: "text",
                                    placeholder: "Enter value",
                                    "onUpdate:modelValue": ($event) => ch.value = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, ch.value]
                                  ]),
                                  ch.active ? (openBlock(), createBlock(VIcon, {
                                    key: 0,
                                    onClick: ($event) => ch.active = false,
                                    class: "product__characteristic-close",
                                    icon: "mdi-close"
                                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        id: "scroll-target",
                        class: "overflow-y-auto",
                        style: { "max-height": "500px" }
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(currentProductCharacteristics.value, (ch) => {
                          return openBlock(), createBlock(VRow, {
                            class: "product__characteristic d-flex align-center",
                            key: ch
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "product__characteristic-title" }, toDisplayString(ch.title), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, {
                                class: { "product__characteristic-input--active": ch.active },
                                cols: "12",
                                sm: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", null, toDisplayString(ch.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { justify: "space-around" }, {
                default: withCtx(() => [
                  unref(appStore).role === "admin" && !unref(appStore).isEditMode ? (openBlock(), createBlock(VCol, {
                    key: 0,
                    cols: "12",
                    md: "6",
                    class: "d-flex justify-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        onClick: ($event) => unref(appStore).isEditMode = true,
                        color: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Редактировать")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  unref(appStore).role === "admin" && unref(appStore).isEditMode ? (openBlock(), createBlock(VCol, {
                    key: 1,
                    cols: "12",
                    md: "6",
                    class: "d-flex flex-column flex-sm-row justify-space-around"
                  }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        class: "mb-4 mb-sm-0",
                        onClick: updateProduct,
                        color: "success"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Сохранить")
                        ]),
                        _: 1
                      }),
                      createVNode(VBtn, {
                        onClick: cancelChanges,
                        color: "error"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Отменить изменения")
                        ]),
                        _: 1
                      })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2aafa8f1"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-U3AScEuJ.js.map
