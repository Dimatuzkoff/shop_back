import { ref, computed, createVNode, mergeProps, Fragment, inject, toRef, defineComponent, withCtx, createTextVNode, unref, withModifiers, openBlock, createBlock, toDisplayString, renderList, useSSRContext } from "vue";
import { useRouter } from "vue-router";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { p as propsFactory, s as omit, aM as makeVBtnProps, g as genericComponent, X as useTextColor, e as useRender, j as forwardRefs, V as VBtn, $ as animate, a2 as standardEasing, d as useProxiedModel, a8 as makeDensityProps, A as makeTagProps, ab as useDensity, W as useBackgroundColor, ag as provideDefaults, aN as isObject, Z as convertToUnit, m as useAppStore, v as VCard, x as VCardTitle, _ as _export_sfc } from "../server.mjs";
import { useForm, useField } from "vee-validate";
import { V as VContainer } from "./VContainer-CuwDK_b8.js";
import { m as makeVWindowProps, V as VWindow, a as makeVWindowItemProps, b as VWindowItem } from "./VWindowItem-coJOn4_f.js";
import { h as makeVSlideGroupProps, i as VSlideGroup, e as VForm, g as VTextField } from "./VTextField-DXFakm37.js";
import { V as VRow, a as VCol } from "./VRow-DF0L_SZn.js";
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
import "./index-5c5MQmXM.js";
const VTabsSymbol = Symbol.for("vuetify:v-tabs");
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...omit(makeVBtnProps({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab");
const VTab = genericComponent()({
  name: "VTab",
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(props, "sliderColor");
    const rootEl = ref();
    const sliderEl = ref();
    const isHorizontal = computed(() => props.direction === "horizontal");
    const isSelected = computed(() => {
      var _a, _b;
      return ((_b = (_a = rootEl.value) == null ? void 0 : _a.group) == null ? void 0 : _b.isSelected.value) ?? false;
    });
    function updateSlider(_ref2) {
      var _a, _b;
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = (_b = (_a = rootEl.value) == null ? void 0 : _a.$el.parentElement) == null ? void 0 : _b.querySelector(".v-tab--selected .v-tab__slider");
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl)
          return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? "x" : "y";
        const XY = isHorizontal.value ? "X" : "Y";
        const rightBottom = isHorizontal.value ? "right" : "bottom";
        const widthHeight = isHorizontal.value ? "width" : "height";
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? "right" : "bottom" : Math.sign(delta) < 0 ? isHorizontal.value ? "left" : "top" : "center";
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, "currentcolor"],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, "none"],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return createVNode(VBtn, mergeProps({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ["v-tab", props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : void 0,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => {
          var _a;
          return createVNode(Fragment, null, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.text, !props.hideSlider && createVNode("div", {
            "ref": sliderEl,
            "class": ["v-tab__slider", sliderColorClasses.value],
            "style": sliderColorStyles.value
          }, null)]);
        }
      });
    });
    return forwardRefs({}, rootEl);
  }
});
const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow");
const VTabsWindow = genericComponent()({
  name: "VTabsWindow",
  props: makeVTabsWindowProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject(VTabsSymbol, null);
    const _model = useProxiedModel(props, "modelValue");
    const model = computed({
      get() {
        var _a;
        if (_model.value != null || !group)
          return _model.value;
        return (_a = group.items.value.find((item) => group.selected.value.includes(item.id))) == null ? void 0 : _a.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": "v-tabs-window",
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});
const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, "VTabsWindowItem");
const VTabsWindowItem = genericComponent()({
  name: "VTabsWindowItem",
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ["v-tabs-window-item", props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});
function parseItems(items) {
  if (!items)
    return [];
  return items.map((item) => {
    if (!isObject(item))
      return {
        text: item,
        value: item
      };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, "VTabs");
const VTabs = genericComponent()({
  name: "VTabs",
  props: makeVTabsProps(),
  emits: {
    "update:modelValue": (v) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    provideDefaults({
      VTab: {
        color: toRef(props, "color"),
        direction: toRef(props, "direction"),
        stacked: toRef(props, "stacked"),
        fixed: toRef(props, "fixedTabs"),
        sliderColor: toRef(props, "sliderColor"),
        hideSlider: toRef(props, "hideSlider")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return createVNode(Fragment, null, [createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-tabs", `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          "v-tabs--fixed-tabs": props.fixedTabs,
          "v-tabs--grow": props.grow,
          "v-tabs--stacked": props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          "--v-tabs-height": convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }), {
        default: () => {
          var _a;
          return [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? items.value.map((item) => {
            var _a2;
            return ((_a2 = slots.tab) == null ? void 0 : _a2.call(slots, {
              item
            })) ?? createVNode(VTab, mergeProps(item, {
              "key": item.text,
              "value": item.value
            }), {
              default: () => {
                var _a3;
                return (_a3 = slots[`tab.${item.value}`]) == null ? void 0 : _a3.call(slots, {
                  item
                });
              }
            });
          })];
        }
      }), hasWindow && createVNode(VTabsWindow, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "key": "tabs-window"
      }, {
        default: () => {
          var _a;
          return [items.value.map((item) => {
            var _a2;
            return ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item
            })) ?? createVNode(VTabsWindowItem, {
              "value": item.value
            }, {
              default: () => {
                var _a3;
                return (_a3 = slots[`item.${item.value}`]) == null ? void 0 : _a3.call(slots, {
                  item
                });
              }
            });
          }), (_a = slots.window) == null ? void 0 : _a.call(slots)];
        }
      })]);
    });
    return {};
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const appStore = useAppStore();
    const tab = ref(null);
    const errorResponseRegister = ref("");
    const errorResponseLogin = ref("");
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        phone(value) {
          if (!(value == null ? void 0 : value.length))
            return "Введите имя";
          else if ((value == null ? void 0 : value.length) >= 2)
            return true;
          else
            return "Имя содержит минимум 2 символа";
        },
        password(value) {
          if (!(value == null ? void 0 : value.length))
            return "Введите парооль";
          else if ((value == null ? void 0 : value.length) >= 4)
            return true;
          else
            return "Пароль содержит минимум 4 символа";
        }
      }
    });
    const phone = useField("phone");
    const password = useField("password");
    const submitRegister = handleSubmit(async (values) => {
      const { phone: phone2, password: password2 } = values;
      const result = await appStore.register({ phone: phone2, password: password2 });
      if (result == null ? void 0 : result.data.ok) {
        appStore.snackbarText = result == null ? void 0 : result.data.message;
        appStore.snackbarColor = "success";
        appStore.isOpenSnackbar = true;
        tab.value = 1;
      } else {
        appStore.snackbarText = result == null ? void 0 : result.data.message;
        appStore.snackbarColor = "error";
        appStore.snackbarTimeout = 4e3;
        appStore.isOpenSnackbar = true;
        errorResponseRegister.value = result == null ? void 0 : result.data.message;
      }
      handleReset();
      appStore.getUsers();
    });
    const submitLogin = handleSubmit(async (values) => {
      const { phone: phone2, password: password2 } = values;
      const result = await appStore.login({
        phone: phone2,
        password: password2
      });
      if (result == null ? void 0 : result.ok) {
        appStore.snackbarText = result == null ? void 0 : result.message;
        appStore.snackbarColor = "success";
        appStore.isOpenSnackbar = true;
        router.push("/");
      } else if (typeof result == "string") {
        appStore.snackbarText = result;
        appStore.snackbarColor = "error";
        appStore.isOpenSnackbar = true;
        errorResponseLogin.value = result;
      }
      handleReset();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VTabs, {
              modelValue: tab.value,
              "onUpdate:modelValue": ($event) => tab.value = $event,
              "align-tabs": "center",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTab, { value: 1 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Login`);
                      } else {
                        return [
                          createTextVNode("Login")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTab, { value: 2 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Registration`);
                      } else {
                        return [
                          createTextVNode("Registration")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VTab, { value: 1 }, {
                      default: withCtx(() => [
                        createTextVNode("Login")
                      ]),
                      _: 1
                    }),
                    createVNode(VTab, { value: 2 }, {
                      default: withCtx(() => [
                        createTextVNode("Registration")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VTabsWindow, {
              modelValue: tab.value,
              "onUpdate:modelValue": ($event) => tab.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VTabsWindowItem, {
                    key: 2,
                    value: 2
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, { fluid: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { onSubmit: unref(submitRegister) }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, { justify: "center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  variant: "solo",
                                                  modelValue: unref(phone).value.value,
                                                  "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                                  "error-messages": unref(phone).errorMessage.value || errorResponseRegister.value,
                                                  label: "User Name",
                                                  onInput: ($event) => errorResponseRegister.value = ""
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  variant: "solo",
                                                  modelValue: unref(password).value.value,
                                                  "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                                  "error-messages": unref(password).errorMessage.value,
                                                  label: "password",
                                                  type: "password",
                                                  min: "0"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  class: "mt-2",
                                                  text: "Submit",
                                                  type: "submit",
                                                  block: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    variant: "solo",
                                                    modelValue: unref(phone).value.value,
                                                    "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                                    "error-messages": unref(phone).errorMessage.value || errorResponseRegister.value,
                                                    label: "User Name",
                                                    onInput: ($event) => errorResponseRegister.value = ""
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                                  createVNode(VTextField, {
                                                    variant: "solo",
                                                    modelValue: unref(password).value.value,
                                                    "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                                    "error-messages": unref(password).errorMessage.value,
                                                    label: "password",
                                                    type: "password",
                                                    min: "0"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                                  createVNode(VBtn, {
                                                    class: "mt-2",
                                                    text: "Submit",
                                                    type: "submit",
                                                    block: ""
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  variant: "solo",
                                                  modelValue: unref(phone).value.value,
                                                  "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                                  "error-messages": unref(phone).errorMessage.value || errorResponseRegister.value,
                                                  label: "User Name",
                                                  onInput: ($event) => errorResponseRegister.value = ""
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                                createVNode(VTextField, {
                                                  variant: "solo",
                                                  modelValue: unref(password).value.value,
                                                  "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                                  "error-messages": unref(password).errorMessage.value,
                                                  label: "password",
                                                  type: "password",
                                                  min: "0"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                                createVNode(VBtn, {
                                                  class: "mt-2",
                                                  text: "Submit",
                                                  type: "submit",
                                                  block: ""
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, { justify: "center" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                variant: "solo",
                                                modelValue: unref(phone).value.value,
                                                "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                                "error-messages": unref(phone).errorMessage.value || errorResponseRegister.value,
                                                label: "User Name",
                                                onInput: ($event) => errorResponseRegister.value = ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                              createVNode(VTextField, {
                                                variant: "solo",
                                                modelValue: unref(password).value.value,
                                                "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                                "error-messages": unref(password).errorMessage.value,
                                                label: "password",
                                                type: "password",
                                                min: "0"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                              createVNode(VBtn, {
                                                class: "mt-2",
                                                text: "Submit",
                                                type: "submit",
                                                block: ""
                                              })
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  onSubmit: withModifiers(unref(submitRegister), ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { justify: "center" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              variant: "solo",
                                              modelValue: unref(phone).value.value,
                                              "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                              "error-messages": unref(phone).errorMessage.value || errorResponseRegister.value,
                                              label: "User Name",
                                              onInput: ($event) => errorResponseRegister.value = ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                            createVNode(VTextField, {
                                              variant: "solo",
                                              modelValue: unref(password).value.value,
                                              "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                              "error-messages": unref(password).errorMessage.value,
                                              label: "password",
                                              type: "password",
                                              min: "0"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                            createVNode(VBtn, {
                                              class: "mt-2",
                                              text: "Submit",
                                              type: "submit",
                                              block: ""
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, { fluid: "" }, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(unref(submitRegister), ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, { justify: "center" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            variant: "solo",
                                            modelValue: unref(phone).value.value,
                                            "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                            "error-messages": unref(phone).errorMessage.value || errorResponseRegister.value,
                                            label: "User Name",
                                            onInput: ($event) => errorResponseRegister.value = ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                          createVNode(VTextField, {
                                            variant: "solo",
                                            modelValue: unref(password).value.value,
                                            "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                            "error-messages": unref(password).errorMessage.value,
                                            label: "password",
                                            type: "password",
                                            min: "0"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                          createVNode(VBtn, {
                                            class: "mt-2",
                                            text: "Submit",
                                            type: "submit",
                                            block: ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VTabsWindowItem, {
                    key: 1,
                    value: 1
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VContainer, { fluid: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, { onSubmit: unref(submitLogin) }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, { justify: "center" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  variant: "solo",
                                                  modelValue: unref(phone).value.value,
                                                  "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                                  "error-messages": unref(phone).errorMessage.value || errorResponseLogin.value,
                                                  onInput: ($event) => errorResponseLogin.value = "",
                                                  label: "User Name"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VTextField, {
                                                  variant: "solo",
                                                  modelValue: unref(password).value.value,
                                                  "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                                  "error-messages": unref(password).errorMessage.value,
                                                  label: "password",
                                                  type: "password",
                                                  min: "0"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  class: "mt-2",
                                                  text: "Submit",
                                                  type: "submit",
                                                  block: ""
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    variant: "solo",
                                                    modelValue: unref(phone).value.value,
                                                    "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                                    "error-messages": unref(phone).errorMessage.value || errorResponseLogin.value,
                                                    onInput: ($event) => errorResponseLogin.value = "",
                                                    label: "User Name"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                                  createVNode(VTextField, {
                                                    variant: "solo",
                                                    modelValue: unref(password).value.value,
                                                    "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                                    "error-messages": unref(password).errorMessage.value,
                                                    label: "password",
                                                    type: "password",
                                                    min: "0"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                                  createVNode(VBtn, {
                                                    class: "mt-2",
                                                    text: "Submit",
                                                    type: "submit",
                                                    block: ""
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  variant: "solo",
                                                  modelValue: unref(phone).value.value,
                                                  "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                                  "error-messages": unref(phone).errorMessage.value || errorResponseLogin.value,
                                                  onInput: ($event) => errorResponseLogin.value = "",
                                                  label: "User Name"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                                createVNode(VTextField, {
                                                  variant: "solo",
                                                  modelValue: unref(password).value.value,
                                                  "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                                  "error-messages": unref(password).errorMessage.value,
                                                  label: "password",
                                                  type: "password",
                                                  min: "0"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                                createVNode(VBtn, {
                                                  class: "mt-2",
                                                  text: "Submit",
                                                  type: "submit",
                                                  block: ""
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, { justify: "center" }, {
                                        default: withCtx(() => [
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                variant: "solo",
                                                modelValue: unref(phone).value.value,
                                                "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                                "error-messages": unref(phone).errorMessage.value || errorResponseLogin.value,
                                                onInput: ($event) => errorResponseLogin.value = "",
                                                label: "User Name"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                              createVNode(VTextField, {
                                                variant: "solo",
                                                modelValue: unref(password).value.value,
                                                "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                                "error-messages": unref(password).errorMessage.value,
                                                label: "password",
                                                type: "password",
                                                min: "0"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                              createVNode(VBtn, {
                                                class: "mt-2",
                                                text: "Submit",
                                                type: "submit",
                                                block: ""
                                              })
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
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, {
                                  onSubmit: withModifiers(unref(submitLogin), ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, { justify: "center" }, {
                                      default: withCtx(() => [
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              variant: "solo",
                                              modelValue: unref(phone).value.value,
                                              "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                              "error-messages": unref(phone).errorMessage.value || errorResponseLogin.value,
                                              onInput: ($event) => errorResponseLogin.value = "",
                                              label: "User Name"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                            createVNode(VTextField, {
                                              variant: "solo",
                                              modelValue: unref(password).value.value,
                                              "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                              "error-messages": unref(password).errorMessage.value,
                                              label: "password",
                                              type: "password",
                                              min: "0"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                            createVNode(VBtn, {
                                              class: "mt-2",
                                              text: "Submit",
                                              type: "submit",
                                              block: ""
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onSubmit"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VContainer, { fluid: "" }, {
                            default: withCtx(() => [
                              createVNode(VForm, {
                                onSubmit: withModifiers(unref(submitLogin), ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, { justify: "center" }, {
                                    default: withCtx(() => [
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            variant: "solo",
                                            modelValue: unref(phone).value.value,
                                            "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                            "error-messages": unref(phone).errorMessage.value || errorResponseLogin.value,
                                            onInput: ($event) => errorResponseLogin.value = "",
                                            label: "User Name"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                          createVNode(VTextField, {
                                            variant: "solo",
                                            modelValue: unref(password).value.value,
                                            "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                            "error-messages": unref(password).errorMessage.value,
                                            label: "password",
                                            type: "password",
                                            min: "0"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                          createVNode(VBtn, {
                                            class: "mt-2",
                                            text: "Submit",
                                            type: "submit",
                                            block: ""
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["onSubmit"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    (openBlock(), createBlock(VTabsWindowItem, {
                      key: 2,
                      value: 2
                    }, {
                      default: withCtx(() => [
                        createVNode(VContainer, { fluid: "" }, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers(unref(submitRegister), ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, { justify: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          variant: "solo",
                                          modelValue: unref(phone).value.value,
                                          "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                          "error-messages": unref(phone).errorMessage.value || errorResponseRegister.value,
                                          label: "User Name",
                                          onInput: ($event) => errorResponseRegister.value = ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                        createVNode(VTextField, {
                                          variant: "solo",
                                          modelValue: unref(password).value.value,
                                          "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                          "error-messages": unref(password).errorMessage.value,
                                          label: "password",
                                          type: "password",
                                          min: "0"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                        createVNode(VBtn, {
                                          class: "mt-2",
                                          text: "Submit",
                                          type: "submit",
                                          block: ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })),
                    (openBlock(), createBlock(VTabsWindowItem, {
                      key: 1,
                      value: 1
                    }, {
                      default: withCtx(() => [
                        createVNode(VContainer, { fluid: "" }, {
                          default: withCtx(() => [
                            createVNode(VForm, {
                              onSubmit: withModifiers(unref(submitLogin), ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, { justify: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          variant: "solo",
                                          modelValue: unref(phone).value.value,
                                          "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                          "error-messages": unref(phone).errorMessage.value || errorResponseLogin.value,
                                          onInput: ($event) => errorResponseLogin.value = "",
                                          label: "User Name"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                        createVNode(VTextField, {
                                          variant: "solo",
                                          modelValue: unref(password).value.value,
                                          "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                          "error-messages": unref(password).errorMessage.value,
                                          label: "password",
                                          type: "password",
                                          min: "0"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                        createVNode(VBtn, {
                                          class: "mt-2",
                                          text: "Submit",
                                          type: "submit",
                                          block: ""
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["onSubmit"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<h2 data-v-06f4d3b4${_scopeId}>Все пользователи</h2>`);
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(appStore).users, (user) => {
                    _push3(ssrRenderComponent(VCol, {
                      key: user._id,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(VCard, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCardTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(user.phone)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(user.phone), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(user.phone), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(VCard, null, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(user.phone), 1)
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
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(appStore).users, (user) => {
                      return openBlock(), createBlock(VCol, {
                        key: user._id,
                        cols: "12",
                        md: "4"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user.phone), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VTabs, {
                modelValue: tab.value,
                "onUpdate:modelValue": ($event) => tab.value = $event,
                "align-tabs": "center",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createVNode(VTab, { value: 1 }, {
                    default: withCtx(() => [
                      createTextVNode("Login")
                    ]),
                    _: 1
                  }),
                  createVNode(VTab, { value: 2 }, {
                    default: withCtx(() => [
                      createTextVNode("Registration")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(VTabsWindow, {
                modelValue: tab.value,
                "onUpdate:modelValue": ($event) => tab.value = $event
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(VTabsWindowItem, {
                    key: 2,
                    value: 2
                  }, {
                    default: withCtx(() => [
                      createVNode(VContainer, { fluid: "" }, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            onSubmit: withModifiers(unref(submitRegister), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, { justify: "center" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        variant: "solo",
                                        modelValue: unref(phone).value.value,
                                        "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                        "error-messages": unref(phone).errorMessage.value || errorResponseRegister.value,
                                        label: "User Name",
                                        onInput: ($event) => errorResponseRegister.value = ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                      createVNode(VTextField, {
                                        variant: "solo",
                                        modelValue: unref(password).value.value,
                                        "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                        "error-messages": unref(password).errorMessage.value,
                                        label: "password",
                                        type: "password",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                      createVNode(VBtn, {
                                        class: "mt-2",
                                        text: "Submit",
                                        type: "submit",
                                        block: ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })),
                  (openBlock(), createBlock(VTabsWindowItem, {
                    key: 1,
                    value: 1
                  }, {
                    default: withCtx(() => [
                      createVNode(VContainer, { fluid: "" }, {
                        default: withCtx(() => [
                          createVNode(VForm, {
                            onSubmit: withModifiers(unref(submitLogin), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, { justify: "center" }, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        variant: "solo",
                                        modelValue: unref(phone).value.value,
                                        "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                        "error-messages": unref(phone).errorMessage.value || errorResponseLogin.value,
                                        onInput: ($event) => errorResponseLogin.value = "",
                                        label: "User Name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages", "onInput"]),
                                      createVNode(VTextField, {
                                        variant: "solo",
                                        modelValue: unref(password).value.value,
                                        "onUpdate:modelValue": ($event) => unref(password).value.value = $event,
                                        "error-messages": unref(password).errorMessage.value,
                                        label: "password",
                                        type: "password",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                                      createVNode(VBtn, {
                                        class: "mt-2",
                                        text: "Submit",
                                        type: "submit",
                                        block: ""
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onSubmit"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("h2", null, "Все пользователи"),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(appStore).users, (user) => {
                    return openBlock(), createBlock(VCol, {
                      key: user._id,
                      cols: "12",
                      md: "4"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(user.phone), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06f4d3b4"]]);
export {
  auth as default
};
//# sourceMappingURL=auth-COQXCwkk.js.map
