import { _ as __nuxt_component_0 } from "./Loader-DZN_I9ej.js";
import { m as useAppStore, l as useProductStore, a as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { useRoute } from "vue-router";
import axios from "axios";
import { V as VTable } from "./VTable-DJB5vH4n.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const appStore = useAppStore();
    const productStore = useProductStore();
    const route = useRoute();
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiUrl;
    const order = ref(null);
    const products = ref([]);
    appStore.isLoading = true;
    async function getOrder() {
      var _a;
      try {
        const response = await axios.get(`${apiUrl}/api/order/${route.params.id}`);
        order.value = response.data;
        appStore.isLoading = false;
        (_a = order.value) == null ? void 0 : _a.products.forEach(async (elem) => {
          const product = await productStore.getProduct(elem.product);
          products.value.push({ product, quantity: elem.quantity });
        });
        console.log(products.value);
      } catch (error) {
        console.log(error);
      }
    }
    getOrder();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_Loader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pa-2" }, _attrs))} data-v-10ed98b0>`);
      if (unref(appStore).isLoading) {
        _push(ssrRenderComponent(_component_organism_Loader, { isBlock: true }, null, _parent));
      } else {
        _push(`<div data-v-10ed98b0>`);
        if (order.value) {
          _push(`<h1 data-v-10ed98b0>Заказ №${ssrInterpolate(order.value.number)}</h1>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-10ed98b0>`);
        _push(ssrRenderComponent(VTable, {
          style: { "border": "1px solid", "max-width": "800px" },
          class: "mt-4 pa-1 center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<strong data-v-10ed98b0${_scopeId}>Контактная информация</strong><tbody data-v-10ed98b0${_scopeId}><tr data-v-10ed98b0${_scopeId}><th class="text-left" data-v-10ed98b0${_scopeId}>Имя</th><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(order.value.guestContact.name || "Отсутствует")}</td></tr><tr data-v-10ed98b0${_scopeId}><th class="text-left" data-v-10ed98b0${_scopeId}>Фамилия</th><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(order.value.guestContact.surname || "Отсутствует")}</td></tr><tr data-v-10ed98b0${_scopeId}><th class="text-left" data-v-10ed98b0${_scopeId}>Email</th><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(order.value.guestContact.email || "Отсутствует")}</td></tr><tr data-v-10ed98b0${_scopeId}><th class="text-left" data-v-10ed98b0${_scopeId}>Телефон</th><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(order.value.guestContact.phone || "Отсутствует")}</td></tr></tbody>`);
            } else {
              return [
                createVNode("strong", null, "Контактная информация"),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, "Имя"),
                    createVNode("td", null, toDisplayString(order.value.guestContact.name || "Отсутствует"), 1)
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, "Фамилия"),
                    createVNode("td", null, toDisplayString(order.value.guestContact.surname || "Отсутствует"), 1)
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, "Email"),
                    createVNode("td", null, toDisplayString(order.value.guestContact.email || "Отсутствует"), 1)
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, "Телефон"),
                    createVNode("td", null, toDisplayString(order.value.guestContact.phone || "Отсутствует"), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div style="${ssrRenderStyle({ "border": "1px solid", "max-width": "800px" })}" class="mt-4 pa-1 center" data-v-10ed98b0><strong data-v-10ed98b0>Заказ</strong>`);
        _push(ssrRenderComponent(VTable, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<thead data-v-10ed98b0${_scopeId}><tr data-v-10ed98b0${_scopeId}><th class="text-left" data-v-10ed98b0${_scopeId}>Товар</th><th class="text-left" data-v-10ed98b0${_scopeId}>Количество</th><th class="text-left" data-v-10ed98b0${_scopeId}>Цена</th></tr></thead><tbody data-v-10ed98b0${_scopeId}><!--[-->`);
              ssrRenderList(products.value, (item) => {
                _push2(`<tr data-v-10ed98b0${_scopeId}><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(item.product.name)}</td><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(item.quantity)}</td><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(item.product.price)} грн</td></tr>`);
              });
              _push2(`<!--]--><tr data-v-10ed98b0${_scopeId}><td data-v-10ed98b0${_scopeId}>Сумма заказа</td><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(order.value.totalPrice)} грн</td></tr></tbody>`);
            } else {
              return [
                createVNode("thead", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, "Товар"),
                    createVNode("th", { class: "text-left" }, "Количество"),
                    createVNode("th", { class: "text-left" }, "Цена")
                  ])
                ]),
                createVNode("tbody", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(products.value, (item) => {
                    return openBlock(), createBlock("tr", {
                      key: item.product._id
                    }, [
                      createVNode("td", null, toDisplayString(item.product.name), 1),
                      createVNode("td", null, toDisplayString(item.quantity), 1),
                      createVNode("td", null, toDisplayString(item.product.price) + " грн", 1)
                    ]);
                  }), 128)),
                  createVNode("tr", null, [
                    createVNode("td", null, "Сумма заказа"),
                    createVNode("td", null, toDisplayString(order.value.totalPrice) + " грн", 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(VTable, {
          style: { "border": "1px solid", "max-width": "800px" },
          class: "mt-4 pa-1 center"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<strong data-v-10ed98b0${_scopeId}>Доставка</strong><tbody data-v-10ed98b0${_scopeId}><tr data-v-10ed98b0${_scopeId}><th class="text-left" data-v-10ed98b0${_scopeId}>Город</th><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(order.value.delivery.city || "Отсутствует")}</td></tr><tr data-v-10ed98b0${_scopeId}><th class="text-left" data-v-10ed98b0${_scopeId}>Отделение</th><td data-v-10ed98b0${_scopeId}>${ssrInterpolate(order.value.delivery.department || "Отсутствует")}</td></tr></tbody>`);
            } else {
              return [
                createVNode("strong", null, "Доставка"),
                createVNode("tbody", null, [
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, "Город"),
                    createVNode("td", null, toDisplayString(order.value.delivery.city || "Отсутствует"), 1)
                  ]),
                  createVNode("tr", null, [
                    createVNode("th", { class: "text-left" }, "Отделение"),
                    createVNode("td", null, toDisplayString(order.value.delivery.department || "Отсутствует"), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/order/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10ed98b0"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-C0i5IUHH.js.map
