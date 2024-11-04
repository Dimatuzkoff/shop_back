import { _ as __nuxt_component_0 } from "./Loader-DZN_I9ej.js";
import { _ as _sfc_main$1 } from "./ProductList-pHlecZ5D.js";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useRoute, useRouter } from "vue-router";
import { l as useProductStore, m as useAppStore, y as productMenu, aR as replaceSpace } from "../server.mjs";
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
    const route = useRoute();
    const router = useRouter();
    const productStore = useProductStore();
    const appStore = useAppStore();
    function categoryToId(category, productMenu2) {
      return productMenu2.find((elem) => replaceSpace(elem.name.en) == category).id;
    }
    try {
      const categoryId = categoryToId(route.params.category, productMenu);
      productStore.getProducts({ category: categoryId });
    } catch (e) {
      router.push("/");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_organism_Loader = __nuxt_component_0;
      const _component_organism_ProductList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(appStore).isLoading) {
        _push(ssrRenderComponent(_component_organism_Loader, { isBlock: true }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_organism_ProductList, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[category]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D8EG7S8J.js.map
