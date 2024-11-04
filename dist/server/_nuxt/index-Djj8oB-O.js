import { _ as __nuxt_component_0 } from "./Loader-DZN_I9ej.js";
import { _ as _sfc_main$1 } from "./ProductList-pHlecZ5D.js";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { F as useDisplay, m as useAppStore, l as useProductStore, _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-P6SDANQl.js";
import "ufo";
import "./CartStore-BmChGnw3.js";
import "./VRow-DF0L_SZn.js";
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
import "@vue/devtools-api";
import "destr";
import "devalue";
import "axios";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDisplay();
    const appStore = useAppStore();
    useProductStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_Loader = __nuxt_component_0;
      const _component_organism_ProductList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5dd5271c>`);
      if (unref(appStore).isLoading) {
        _push(ssrRenderComponent(_component_organism_Loader, { isFixed: true }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_organism_ProductList, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5dd5271c"]]);
export {
  index as default
};
//# sourceMappingURL=index-Djj8oB-O.js.map
