import { V as VNavigationDrawer, _ as __nuxt_component_0, a as __nuxt_component_0$1 } from "./Header-CT6yzFm8.js";
import { mergeProps, withCtx, createVNode, useSSRContext, renderSlot } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { V as VRow } from "./VRow-DF0L_SZn.js";
import "./nuxt-link-P6SDANQl.js";
import "ufo";
import "vue-router";
import "./VList-CqKp8YrM.js";
import "./index-5c5MQmXM.js";
import "./ssrBoot-BtvJZs44.js";
import "./CartStore-BmChGnw3.js";
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
import "@vue/devtools-api";
import "destr";
import "devalue";
import "axios";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_molecule_ProductCatalog = __nuxt_component_0;
  _push(ssrRenderComponent(VNavigationDrawer, mergeProps({
    location: "left",
    "expand-on-hover": "",
    rail: "",
    width: "330"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_molecule_ProductCatalog, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_molecule_ProductCatalog)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/Aside.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_Header = __nuxt_component_0$1;
      const _component_organism_Aside = __nuxt_component_1;
      _push(ssrRenderComponent(_component_organism_Header, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, {
              cols: "12",
              class: "d-flex justify-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_organism_Aside, { class: "d-none d-sm-block" }, null, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    createVNode(_component_organism_Aside, { class: "d-none d-sm-block" }),
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, {
                cols: "12",
                class: "d-flex justify-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_organism_Aside, { class: "d-none d-sm-block" }),
                  renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-BXe9-h4r.js.map
