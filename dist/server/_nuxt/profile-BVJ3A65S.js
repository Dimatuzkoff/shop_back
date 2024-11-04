import { m as useAppStore, aW as useNuxtApp, V as VBtn, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createVNode, unref, withDirectives, vModelText, useSSRContext, ref, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { u as useCartStore } from "./CartStore-BmChGnw3.js";
import axios from "axios";
import { V as VRow, a as VCol } from "./VRow-DF0L_SZn.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-P6SDANQl.js";
import { V as VTable } from "./VTable-DJB5vH4n.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "@vue/devtools-api";
import "destr";
import "devalue";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "UserProfile",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    useCartStore();
    const envConfig = useNuxtApp().$envConfig;
    const sendUserInfo = async () => {
      await axios.put(
        `${envConfig.apiUrl}/api/user`,
        appStore.profile
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile" }, _attrs))} data-v-82783dd3>`);
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-82783dd3${_scopeId2}>Телефон</span>`);
                } else {
                  return [
                    createVNode("span", null, "Телефон")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input variant="solo"${ssrRenderAttr("value", unref(appStore).profile.phone)} placeholder="phone" disabled data-v-82783dd3${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("input", {
                      variant: "solo",
                      "onUpdate:modelValue": ($event) => unref(appStore).profile.phone = $event,
                      placeholder: "phone",
                      disabled: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(appStore).profile.phone]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "5" }, {
                default: withCtx(() => [
                  createVNode("span", null, "Телефон")
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "6" }, {
                default: withCtx(() => [
                  withDirectives(createVNode("input", {
                    variant: "solo",
                    "onUpdate:modelValue": ($event) => unref(appStore).profile.phone = $event,
                    placeholder: "phone",
                    disabled: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(appStore).profile.phone]
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-82783dd3${_scopeId2}>Email</span>`);
                } else {
                  return [
                    createVNode("span", null, "Email")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input variant="solo"${ssrRenderAttr("value", unref(appStore).profile.email)} placeholder="email" data-v-82783dd3${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("input", {
                      variant: "solo",
                      "onUpdate:modelValue": ($event) => unref(appStore).profile.email = $event,
                      placeholder: "email"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(appStore).profile.email]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "5" }, {
                default: withCtx(() => [
                  createVNode("span", null, "Email")
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "6" }, {
                default: withCtx(() => [
                  withDirectives(createVNode("input", {
                    variant: "solo",
                    "onUpdate:modelValue": ($event) => unref(appStore).profile.email = $event,
                    placeholder: "email"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(appStore).profile.email]
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-82783dd3${_scopeId2}>Имя</span>`);
                } else {
                  return [
                    createVNode("span", null, "Имя")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input variant="solo"${ssrRenderAttr("value", unref(appStore).profile.name)} placeholder="Имя" data-v-82783dd3${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("input", {
                      variant: "solo",
                      "onUpdate:modelValue": ($event) => unref(appStore).profile.name = $event,
                      placeholder: "Имя"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(appStore).profile.name]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "5" }, {
                default: withCtx(() => [
                  createVNode("span", null, "Имя")
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "6" }, {
                default: withCtx(() => [
                  withDirectives(createVNode("input", {
                    variant: "solo",
                    "onUpdate:modelValue": ($event) => unref(appStore).profile.name = $event,
                    placeholder: "Имя"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(appStore).profile.name]
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VRow, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span data-v-82783dd3${_scopeId2}>Фамилия</span>`);
                } else {
                  return [
                    createVNode("span", null, "Фамилия")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "6" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input variant="solo"${ssrRenderAttr("value", unref(appStore).profile.surname)} placeholder="Фамилия" data-v-82783dd3${_scopeId2}>`);
                } else {
                  return [
                    withDirectives(createVNode("input", {
                      variant: "solo",
                      "onUpdate:modelValue": ($event) => unref(appStore).profile.surname = $event,
                      placeholder: "Фамилия"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(appStore).profile.surname]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "5" }, {
                default: withCtx(() => [
                  createVNode("span", null, "Фамилия")
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "6" }, {
                default: withCtx(() => [
                  withDirectives(createVNode("input", {
                    variant: "solo",
                    "onUpdate:modelValue": ($event) => unref(appStore).profile.surname = $event,
                    placeholder: "Фамилия"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(appStore).profile.surname]
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(VCol, { cols: "12" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VBtn, {
              class: "mt-4",
              style: { "width": "200px" },
              text: "Сохранить",
              type: "button",
              onClick: sendUserInfo
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(VBtn, {
                class: "mt-4",
                style: { "width": "200px" },
                text: "Сохранить",
                type: "button",
                onClick: sendUserInfo
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/UserProfile.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-82783dd3"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OrderAdmin",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    const orders = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "orders-admin" }, _attrs))} data-v-260fcb6a><h1 class="title" data-v-260fcb6a>Заказы админ</h1>`);
      _push(ssrRenderComponent(VTable, {
        class: "order-table",
        height: "300px",
        "fixed-header": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead data-v-260fcb6a${_scopeId}><tr data-v-260fcb6a${_scopeId}><th class="text-left" data-v-260fcb6a${_scopeId}>Номер заказа</th><th class="text-left" data-v-260fcb6a${_scopeId}>Имя Клиента</th><th class="text-left" data-v-260fcb6a${_scopeId}>Телефон</th><th class="text-left" data-v-260fcb6a${_scopeId}>E-mail</th><th class="text-left" data-v-260fcb6a${_scopeId}>Итоговая сумма</th></tr></thead><tbody data-v-260fcb6a${_scopeId}><!--[-->`);
            ssrRenderList(orders.value, (item) => {
              _push2(`<tr class="order-row" data-v-260fcb6a${_scopeId}><td data-v-260fcb6a${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/admin/order/${item._id}`,
                class: "order-link"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.number)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.number), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td data-v-260fcb6a${_scopeId}>${ssrInterpolate(item.guestContact.name)}</td><td data-v-260fcb6a${_scopeId}>${ssrInterpolate(item.guestContact.phone)}</td><td data-v-260fcb6a${_scopeId}>${ssrInterpolate(item.guestContact.email)}</td><td data-v-260fcb6a${_scopeId}>${ssrInterpolate(item.totalPrice)}₴</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left" }, "Номер заказа"),
                  createVNode("th", { class: "text-left" }, "Имя Клиента"),
                  createVNode("th", { class: "text-left" }, "Телефон"),
                  createVNode("th", { class: "text-left" }, "E-mail"),
                  createVNode("th", { class: "text-left" }, "Итоговая сумма")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(orders.value, (item) => {
                  return openBlock(), createBlock("tr", {
                    key: item._id,
                    class: "order-row"
                  }, [
                    createVNode("td", null, [
                      createVNode(_component_NuxtLink, {
                        to: `/admin/order/${item._id}`,
                        class: "order-link"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.number), 1)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    createVNode("td", null, toDisplayString(item.guestContact.name), 1),
                    createVNode("td", null, toDisplayString(item.guestContact.phone), 1),
                    createVNode("td", null, toDisplayString(item.guestContact.email), 1),
                    createVNode("td", null, toDisplayString(item.totalPrice) + "₴", 1)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/OrderAdmin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-260fcb6a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderUser",
  __ssrInlineRender: true,
  setup(__props) {
    useAppStore();
    useCartStore();
    const envConfig = useNuxtApp().$envConfig;
    const orders = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-899428f1><!--[-->`);
      ssrRenderList(orders.value, (order) => {
        _push(ssrRenderComponent(VRow, {
          key: order.number,
          class: "order"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VCol, {
                cols: "12",
                class: "mb-6"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VRow, {
                      justify: "space-between",
                      align: "center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="font-weight-bold" data-v-899428f1${_scopeId3}>Заказ №${ssrInterpolate(order.number)}</span><span class="font-weight-bold text-success" data-v-899428f1${_scopeId3}>Оформлен</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "font-weight-bold" }, "Заказ №" + toDisplayString(order.number), 1),
                            createVNode("span", { class: "font-weight-bold text-success" }, "Оформлен")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VRow, {
                        justify: "space-between",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-weight-bold" }, "Заказ №" + toDisplayString(order.number), 1),
                          createVNode("span", { class: "font-weight-bold text-success" }, "Оформлен")
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<!--[-->`);
              ssrRenderList(order.products, (prod) => {
                _push2(ssrRenderComponent(VCol, {
                  key: prod.productName,
                  cols: "12"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(VRow, { align: "center" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(VCol, {
                              cols: "2",
                              class: "pa-0"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<img class="w-100"${ssrRenderAttr("src", `${unref(envConfig).apiUrl}/${prod.productImg}`)} alt="product" data-v-899428f1${_scopeId4}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      class: "w-100",
                                      src: `${unref(envConfig).apiUrl}/${prod.productImg}`,
                                      alt: "product"
                                    }, null, 8, ["src"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(VCol, { cols: "6" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div data-v-899428f1${_scopeId4}>${ssrInterpolate(prod.productName)}</div><div style="${ssrRenderStyle({ "color": "grey" })}" data-v-899428f1${_scopeId4}>${ssrInterpolate(prod.quantity)} шт.</div><div data-v-899428f1${_scopeId4}>${ssrInterpolate(prod.price)} грн/шт.</div>`);
                                } else {
                                  return [
                                    createVNode("div", null, toDisplayString(prod.productName), 1),
                                    createVNode("div", { style: { "color": "grey" } }, toDisplayString(prod.quantity) + " шт.", 1),
                                    createVNode("div", null, toDisplayString(prod.price) + " грн/шт.", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(VCol, {
                                cols: "2",
                                class: "pa-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    class: "w-100",
                                    src: `${unref(envConfig).apiUrl}/${prod.productImg}`,
                                    alt: "product"
                                  }, null, 8, ["src"])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCol, { cols: "6" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, toDisplayString(prod.productName), 1),
                                  createVNode("div", { style: { "color": "grey" } }, toDisplayString(prod.quantity) + " шт.", 1),
                                  createVNode("div", null, toDisplayString(prod.price) + " грн/шт.", 1)
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(VRow, { align: "center" }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "2",
                              class: "pa-0"
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  class: "w-100",
                                  src: `${unref(envConfig).apiUrl}/${prod.productImg}`,
                                  alt: "product"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCol, { cols: "6" }, {
                              default: withCtx(() => [
                                createVNode("div", null, toDisplayString(prod.productName), 1),
                                createVNode("div", { style: { "color": "grey" } }, toDisplayString(prod.quantity) + " шт.", 1),
                                createVNode("div", null, toDisplayString(prod.price) + " грн/шт.", 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(VCol, { cols: "12" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VRow, {
                      justify: "space-between",
                      align: "center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="font-weight-bold" data-v-899428f1${_scopeId3}>К оплате:</span><span class="font-weight-bold" data-v-899428f1${_scopeId3}>${ssrInterpolate(order.totalPrice)} грн.</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "font-weight-bold" }, "К оплате:"),
                            createVNode("span", { class: "font-weight-bold" }, toDisplayString(order.totalPrice) + " грн.", 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VRow, {
                        justify: "space-between",
                        align: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "font-weight-bold" }, "К оплате:"),
                          createVNode("span", { class: "font-weight-bold" }, toDisplayString(order.totalPrice) + " грн.", 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(VCol, {
                  cols: "12",
                  class: "mb-6"
                }, {
                  default: withCtx(() => [
                    createVNode(VRow, {
                      justify: "space-between",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "font-weight-bold" }, "Заказ №" + toDisplayString(order.number), 1),
                        createVNode("span", { class: "font-weight-bold text-success" }, "Оформлен")
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024),
                (openBlock(true), createBlock(Fragment, null, renderList(order.products, (prod) => {
                  return openBlock(), createBlock(VCol, {
                    key: prod.productName,
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode(VRow, { align: "center" }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "2",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "w-100",
                                src: `${unref(envConfig).apiUrl}/${prod.productImg}`,
                                alt: "product"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(VCol, { cols: "6" }, {
                            default: withCtx(() => [
                              createVNode("div", null, toDisplayString(prod.productName), 1),
                              createVNode("div", { style: { "color": "grey" } }, toDisplayString(prod.quantity) + " шт.", 1),
                              createVNode("div", null, toDisplayString(prod.price) + " грн/шт.", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode(VCol, { cols: "12" }, {
                  default: withCtx(() => [
                    createVNode(VRow, {
                      justify: "space-between",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "font-weight-bold" }, "К оплате:"),
                        createVNode("span", { class: "font-weight-bold" }, toDisplayString(order.totalPrice) + " грн.", 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/OrderUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-899428f1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "profile",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_UserProfile = __nuxt_component_0;
      const _component_organism_OrderAdmin = __nuxt_component_1;
      const _component_organism_OrderUser = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile pa-2" }, _attrs))}><h1 class="d-flex justify-center ma-3">Профиль</h1>`);
      if (unref(appStore).profile) {
        _push(ssrRenderComponent(_component_organism_UserProfile, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(appStore).profile) {
        _push(`<!--[-->`);
        if (unref(appStore).profile.role === "admin") {
          _push(ssrRenderComponent(_component_organism_OrderAdmin, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(appStore).profile.role === "customer") {
          _push(ssrRenderComponent(_component_organism_OrderUser, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=profile-BVJ3A65S.js.map
