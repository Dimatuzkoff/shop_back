import { defineComponent, unref, mergeProps, useSSRContext, ref, watch, withCtx, isRef, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { u as useCartStore } from "./CartStore-BmChGnw3.js";
import { _ as _export_sfc, a as useRuntimeConfig, m as useAppStore, V as VBtn } from "../server.mjs";
import axios from "axios";
import { V as VContainer } from "./VContainer-CuwDK_b8.js";
import { V as VRow, a as VCol } from "./VRow-DF0L_SZn.js";
import { g as VTextField, e as VForm } from "./VTextField-DXFakm37.js";
import { d as VSelect } from "./VSelect-B3_ZEPSh.js";
import { useForm, useField } from "vee-validate";
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
import "./index-5c5MQmXM.js";
import "./VList-CqKp8YrM.js";
import "./ssrBoot-BtvJZs44.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "OrderedProducts",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(cartStore).currentCart.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "order-info-description" }, _attrs))} data-v-c6ed96e1><h2 data-v-c6ed96e1>Вы заказали:</h2><table class="table" data-v-c6ed96e1><tbody data-v-c6ed96e1><!--[-->`);
        ssrRenderList(unref(cartStore).currentCart, (item) => {
          _push(`<tr data-v-c6ed96e1><td data-v-c6ed96e1>${ssrInterpolate(item.product.name)}</td><td data-v-c6ed96e1>x ${ssrInterpolate(item.quantity)}</td><td data-v-c6ed96e1>${ssrInterpolate(item.product.price)} грн/шт</td><td data-v-c6ed96e1>${ssrInterpolate(item.product.price * item.quantity)} грн</td></tr>`);
        });
        _push(`<!--]--></tbody></table><div class="d-flex pa-2 justify-end" data-v-c6ed96e1><span data-v-c6ed96e1>Общая сумма заказа ${ssrInterpolate(unref(cartStore).totalPrice)} грн</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/molecule/OrderedProducts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c6ed96e1"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Delivery",
  __ssrInlineRender: true,
  props: {
    cityError: String,
    departmentError: String
  },
  emits: ["updateCity"],
  setup(__props, { emit: __emit }) {
    const cities = ref([]);
    const departments = ref([]);
    const selectedCity = ref(null);
    const selectedDepartment = ref("");
    let citySearchTerm = ref("");
    const isInputActive = ref(false);
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const emits = __emit;
    function emitCity(city) {
      emits("updateCity", city);
    }
    function emitDepartment() {
      emits("updateDepartment", selectedDepartment.value);
    }
    async function searchDepartment(ref2) {
      try {
        const response = await axios.get(
          `${apiUrl}/api/search-departments?CityRef=${ref2}`
        );
        departments.value = response.data.departments.map(
          (elem) => elem.DescriptionRu
        );
      } catch (error) {
        console.log(error);
      }
    }
    async function searchCity(city) {
      try {
        let response = await axios.get(`${apiUrl}/api/search-cities?q=${city}`);
        cities.value = response.data.cities[0].Addresses;
        selectedDepartment.value = "";
        emitDepartment("");
      } catch (error) {
        console.log(error);
      }
    }
    function selectCity(city) {
      selectedCity.value = city;
      isInputActive.value = false;
      citySearchTerm.value = city.MainDescription;
      emitCity(city.Present);
    }
    watch(
      () => citySearchTerm.value,
      (newValue, _oldValue) => {
        cities.value = [];
        if (newValue) {
          searchCity(newValue);
        }
      }
    );
    watch(
      () => selectedCity.value,
      (newValue, _oldValue) => {
        if (newValue) {
          searchDepartment(newValue.DeliveryCity);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VContainer, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { class: "city-select" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    class: "pa-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VTextField, {
                          variant: "solo",
                          label: "Введите город",
                          onFocus: ($event) => isInputActive.value = true,
                          modelValue: unref(citySearchTerm),
                          "onUpdate:modelValue": ($event) => isRef(citySearchTerm) ? citySearchTerm.value = $event : citySearchTerm = $event,
                          "error-messages": __props.cityError
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="${ssrRenderClass([isInputActive.value ? "all-cities" : "d-none", "overflow-y-auto"])}" id="scroll-target" style="${ssrRenderStyle({ "max-height": "150px" })}" data-v-fe58f695${_scopeId3}><!--[-->`);
                        ssrRenderList(cities.value, (city) => {
                          _push4(`<div class="city" data-v-fe58f695${_scopeId3}><span data-v-fe58f695${_scopeId3}>${ssrInterpolate(city.Present)}</span></div>`);
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode(VTextField, {
                            variant: "solo",
                            label: "Введите город",
                            onFocus: ($event) => isInputActive.value = true,
                            modelValue: unref(citySearchTerm),
                            "onUpdate:modelValue": ($event) => isRef(citySearchTerm) ? citySearchTerm.value = $event : citySearchTerm = $event,
                            "error-messages": __props.cityError
                          }, null, 8, ["onFocus", "modelValue", "onUpdate:modelValue", "error-messages"]),
                          createVNode("div", {
                            class: [isInputActive.value ? "all-cities" : "d-none", "overflow-y-auto"],
                            id: "scroll-target",
                            style: { "max-height": "150px" }
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(cities.value, (city) => {
                              return openBlock(), createBlock("div", {
                                key: city.Present,
                                class: "city",
                                onClick: ($event) => selectCity(city)
                              }, [
                                createVNode("span", null, toDisplayString(city.Present), 1)
                              ], 8, ["onClick"]);
                            }), 128))
                          ], 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      class: "pa-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(VTextField, {
                          variant: "solo",
                          label: "Введите город",
                          onFocus: ($event) => isInputActive.value = true,
                          modelValue: unref(citySearchTerm),
                          "onUpdate:modelValue": ($event) => isRef(citySearchTerm) ? citySearchTerm.value = $event : citySearchTerm = $event,
                          "error-messages": __props.cityError
                        }, null, 8, ["onFocus", "modelValue", "onUpdate:modelValue", "error-messages"]),
                        createVNode("div", {
                          class: [isInputActive.value ? "all-cities" : "d-none", "overflow-y-auto"],
                          id: "scroll-target",
                          style: { "max-height": "150px" }
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(cities.value, (city) => {
                            return openBlock(), createBlock("div", {
                              key: city.Present,
                              class: "city",
                              onClick: ($event) => selectCity(city)
                            }, [
                              createVNode("span", null, toDisplayString(city.Present), 1)
                            ], 8, ["onClick"]);
                          }), 128))
                        ], 2)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    align: "start"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VSelect, {
                          variant: "solo",
                          modelValue: selectedDepartment.value,
                          "onUpdate:modelValue": [($event) => selectedDepartment.value = $event, emitDepartment],
                          items: departments.value,
                          label: "Выберите отделение",
                          "item-text": "DescriptionRu",
                          "item-value": "Ref",
                          disabled: !selectedCity.value,
                          "error-messages": __props.departmentError
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VSelect, {
                            variant: "solo",
                            modelValue: selectedDepartment.value,
                            "onUpdate:modelValue": [($event) => selectedDepartment.value = $event, emitDepartment],
                            items: departments.value,
                            label: "Выберите отделение",
                            "item-text": "DescriptionRu",
                            "item-value": "Ref",
                            disabled: !selectedCity.value,
                            "error-messages": __props.departmentError
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "error-messages"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      align: "start"
                    }, {
                      default: withCtx(() => [
                        createVNode(VSelect, {
                          variant: "solo",
                          modelValue: selectedDepartment.value,
                          "onUpdate:modelValue": [($event) => selectedDepartment.value = $event, emitDepartment],
                          items: departments.value,
                          label: "Выберите отделение",
                          "item-text": "DescriptionRu",
                          "item-value": "Ref",
                          disabled: !selectedCity.value,
                          "error-messages": __props.departmentError
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "error-messages"])
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
              createVNode(VRow, { class: "city-select" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    class: "pa-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(VTextField, {
                        variant: "solo",
                        label: "Введите город",
                        onFocus: ($event) => isInputActive.value = true,
                        modelValue: unref(citySearchTerm),
                        "onUpdate:modelValue": ($event) => isRef(citySearchTerm) ? citySearchTerm.value = $event : citySearchTerm = $event,
                        "error-messages": __props.cityError
                      }, null, 8, ["onFocus", "modelValue", "onUpdate:modelValue", "error-messages"]),
                      createVNode("div", {
                        class: [isInputActive.value ? "all-cities" : "d-none", "overflow-y-auto"],
                        id: "scroll-target",
                        style: { "max-height": "150px" }
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(cities.value, (city) => {
                          return openBlock(), createBlock("div", {
                            key: city.Present,
                            class: "city",
                            onClick: ($event) => selectCity(city)
                          }, [
                            createVNode("span", null, toDisplayString(city.Present), 1)
                          ], 8, ["onClick"]);
                        }), 128))
                      ], 2)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    align: "start"
                  }, {
                    default: withCtx(() => [
                      createVNode(VSelect, {
                        variant: "solo",
                        modelValue: selectedDepartment.value,
                        "onUpdate:modelValue": [($event) => selectedDepartment.value = $event, emitDepartment],
                        items: departments.value,
                        label: "Выберите отделение",
                        "item-text": "DescriptionRu",
                        "item-value": "Ref",
                        disabled: !selectedCity.value,
                        "error-messages": __props.departmentError
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "disabled", "error-messages"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/Delivery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fe58f695"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "order",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b;
    const appStore = useAppStore();
    const cartStore = useCartStore();
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        username(value) {
          if (!(value == null ? void 0 : value.length))
            return "Введите имя";
          else if ((value == null ? void 0 : value.length) >= 2)
            return true;
          else
            return "Имя содержит минимум 2 символа";
        },
        surname(value) {
          if (!(value == null ? void 0 : value.length))
            return "Введите фамилию";
          else if ((value == null ? void 0 : value.length) >= 2)
            return true;
          else
            return "Фамилия содержит минимум 2 символа";
        },
        phone(value) {
          if (!(value == null ? void 0 : value.length))
            return "Введите номер телефона";
          return true;
        },
        email(value) {
          if (!(value == null ? void 0 : value.length))
            return "Введите Email";
          if (!regEmail.test(value))
            return "Неверный формат Email";
          return true;
        },
        city(value) {
          if (!(value == null ? void 0 : value.length))
            return "Введите город";
          return true;
        },
        department(value) {
          if (!(value == null ? void 0 : value.length) && city.value.value)
            return "Выберите отделение";
          return true;
        }
      }
    });
    const username = useField("username");
    const surname = useField("surname");
    const phone = useField("phone");
    const email = useField("email");
    const city = useField("city");
    const department = useField("department");
    const submitOrder = handleSubmit(async (values) => {
      const contacts = {
        name: username.value.value,
        surname: surname.value.value,
        phone: phone.value.value,
        email: email.value.value
      };
      const delivery = {
        city: city.value.value,
        department: department.value.value
      };
      const result = await cartStore.addOrder(contacts, delivery);
      if (result == null ? void 0 : result.data.ok) {
        cartStore.currentCart = [];
        alert("Ваш заказ принят. Спасибо за покупку!");
        handleReset();
        city.value.value = "";
      } else {
        alert("Произошла ошибка при оформлении заказа. Попробуйте еще раз.");
      }
    });
    if (appStore.profile)
      username.value.value = appStore.profile.name || "";
    if (appStore.profile)
      surname.value.value = appStore.profile.surname || "";
    if ((_a = appStore.profile) == null ? void 0 : _a.phone)
      phone.value.value = appStore.profile.phone || "";
    if ((_b = appStore.profile) == null ? void 0 : _b.email)
      email.value.value = appStore.profile.email || "";
    function updateCity(selectedCity) {
      city.value.value = selectedCity;
    }
    function updateDepartment(selectedDepartment) {
      department.value.value = selectedDepartment;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_molecule_OrderedProducts = __nuxt_component_0;
      const _component_organism_Delivery = __nuxt_component_1;
      _push(ssrRenderComponent(VForm, mergeProps({
        class: "order",
        onSubmit: unref(submitOrder)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, { align: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "6",
                    class: "contact-info"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="action" data-v-4311d507${_scopeId3}>1 Контактная информация</div>`);
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "pa-0 pt-2"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                variant: "solo",
                                modelValue: unref(username).value.value,
                                "onUpdate:modelValue": ($event) => unref(username).value.value = $event,
                                "error-messages": unref(username).errorMessage.value,
                                label: "Имя"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  variant: "solo",
                                  modelValue: unref(username).value.value,
                                  "onUpdate:modelValue": ($event) => unref(username).value.value = $event,
                                  "error-messages": unref(username).errorMessage.value,
                                  label: "Имя"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "pa-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                variant: "solo",
                                modelValue: unref(surname).value.value,
                                "onUpdate:modelValue": ($event) => unref(surname).value.value = $event,
                                "error-messages": unref(surname).errorMessage.value,
                                label: "Фамилия"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  variant: "solo",
                                  modelValue: unref(surname).value.value,
                                  "onUpdate:modelValue": ($event) => unref(surname).value.value = $event,
                                  "error-messages": unref(surname).errorMessage.value,
                                  label: "Фамилия"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "pa-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                variant: "solo",
                                modelValue: unref(phone).value.value,
                                "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                label: "Телефон",
                                "error-messages": unref(phone).errorMessage.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  variant: "solo",
                                  modelValue: unref(phone).value.value,
                                  "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                  label: "Телефон",
                                  "error-messages": unref(phone).errorMessage.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCol, {
                          cols: "12",
                          class: "pa-0"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VTextField, {
                                variant: "solo",
                                modelValue: unref(email).value.value,
                                "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                                label: "E-mail",
                                "error-messages": unref(email).errorMessage.value
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VTextField, {
                                  variant: "solo",
                                  modelValue: unref(email).value.value,
                                  "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                                  label: "E-mail",
                                  "error-messages": unref(email).errorMessage.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "action" }, "1 Контактная информация"),
                          createVNode(VCol, {
                            cols: "12",
                            class: "pa-0 pt-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                variant: "solo",
                                modelValue: unref(username).value.value,
                                "onUpdate:modelValue": ($event) => unref(username).value.value = $event,
                                "error-messages": unref(username).errorMessage.value,
                                label: "Имя"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                variant: "solo",
                                modelValue: unref(surname).value.value,
                                "onUpdate:modelValue": ($event) => unref(surname).value.value = $event,
                                "error-messages": unref(surname).errorMessage.value,
                                label: "Фамилия"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                variant: "solo",
                                modelValue: unref(phone).value.value,
                                "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                                label: "Телефон",
                                "error-messages": unref(phone).errorMessage.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCol, {
                            cols: "12",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [
                              createVNode(VTextField, {
                                variant: "solo",
                                modelValue: unref(email).value.value,
                                "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                                label: "E-mail",
                                "error-messages": unref(email).errorMessage.value
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                            ]),
                            _: 1
                          })
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
                        _push4(ssrRenderComponent(_component_molecule_OrderedProducts, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_molecule_OrderedProducts)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    align: "center",
                    cols: "12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="delivery" data-v-4311d507${_scopeId3}><div class="action" data-v-4311d507${_scopeId3}>2 Доставка</div>`);
                        _push4(ssrRenderComponent(_component_organism_Delivery, {
                          onUpdateCity: updateCity,
                          onUpdateDepartment: updateDepartment,
                          cityError: unref(city).errorMessage.value,
                          departmentError: unref(department).errorMessage.value
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "delivery" }, [
                            createVNode("div", { class: "action" }, "2 Доставка"),
                            createVNode(_component_organism_Delivery, {
                              onUpdateCity: updateCity,
                              onUpdateDepartment: updateDepartment,
                              cityError: unref(city).errorMessage.value,
                              departmentError: unref(department).errorMessage.value
                            }, null, 8, ["cityError", "departmentError"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "6",
                      class: "contact-info"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "action" }, "1 Контактная информация"),
                        createVNode(VCol, {
                          cols: "12",
                          class: "pa-0 pt-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              variant: "solo",
                              modelValue: unref(username).value.value,
                              "onUpdate:modelValue": ($event) => unref(username).value.value = $event,
                              "error-messages": unref(username).errorMessage.value,
                              label: "Имя"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "pa-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              variant: "solo",
                              modelValue: unref(surname).value.value,
                              "onUpdate:modelValue": ($event) => unref(surname).value.value = $event,
                              "error-messages": unref(surname).errorMessage.value,
                              label: "Фамилия"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "pa-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              variant: "solo",
                              modelValue: unref(phone).value.value,
                              "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                              label: "Телефон",
                              "error-messages": unref(phone).errorMessage.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCol, {
                          cols: "12",
                          class: "pa-0"
                        }, {
                          default: withCtx(() => [
                            createVNode(VTextField, {
                              variant: "solo",
                              modelValue: unref(email).value.value,
                              "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                              label: "E-mail",
                              "error-messages": unref(email).errorMessage.value
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_molecule_OrderedProducts)
                      ]),
                      _: 1
                    }),
                    createVNode(VCol, {
                      align: "center",
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "delivery" }, [
                          createVNode("div", { class: "action" }, "2 Доставка"),
                          createVNode(_component_organism_Delivery, {
                            onUpdateCity: updateCity,
                            onUpdateDepartment: updateDepartment,
                            cityError: unref(city).errorMessage.value,
                            departmentError: unref(department).errorMessage.value
                          }, null, 8, ["cityError", "departmentError"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VBtn, {
                    class: "mt-4",
                    style: { "width": "200px" },
                    text: "Сделать заказ",
                    type: "submit"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VBtn, {
                      class: "mt-4",
                      style: { "width": "200px" },
                      text: "Сделать заказ",
                      type: "submit"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, { align: "center" }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "6",
                    class: "contact-info"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "action" }, "1 Контактная информация"),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pa-0 pt-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            variant: "solo",
                            modelValue: unref(username).value.value,
                            "onUpdate:modelValue": ($event) => unref(username).value.value = $event,
                            "error-messages": unref(username).errorMessage.value,
                            label: "Имя"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pa-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            variant: "solo",
                            modelValue: unref(surname).value.value,
                            "onUpdate:modelValue": ($event) => unref(surname).value.value = $event,
                            "error-messages": unref(surname).errorMessage.value,
                            label: "Фамилия"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pa-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            variant: "solo",
                            modelValue: unref(phone).value.value,
                            "onUpdate:modelValue": ($event) => unref(phone).value.value = $event,
                            label: "Телефон",
                            "error-messages": unref(phone).errorMessage.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      }),
                      createVNode(VCol, {
                        cols: "12",
                        class: "pa-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(VTextField, {
                            variant: "solo",
                            modelValue: unref(email).value.value,
                            "onUpdate:modelValue": ($event) => unref(email).value.value = $event,
                            label: "E-mail",
                            "error-messages": unref(email).errorMessage.value
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_molecule_OrderedProducts)
                    ]),
                    _: 1
                  }),
                  createVNode(VCol, {
                    align: "center",
                    cols: "12"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "delivery" }, [
                        createVNode("div", { class: "action" }, "2 Доставка"),
                        createVNode(_component_organism_Delivery, {
                          onUpdateCity: updateCity,
                          onUpdateDepartment: updateDepartment,
                          cityError: unref(city).errorMessage.value,
                          departmentError: unref(department).errorMessage.value
                        }, null, 8, ["cityError", "departmentError"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VBtn, {
                    class: "mt-4",
                    style: { "width": "200px" },
                    text: "Сделать заказ",
                    type: "submit"
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const order = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4311d507"]]);
export {
  order as default
};
//# sourceMappingURL=order-DwTJOxBb.js.map
