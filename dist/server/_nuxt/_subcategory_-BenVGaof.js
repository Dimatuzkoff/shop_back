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
  __name: "[subcategory]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const productStore = useProductStore();
    const appStore = useAppStore();
    function findCategoryId(productMenu2, category) {
      var _a;
      return ((_a = productMenu2.find((elem) => replaceSpace(elem.name.en) === category)) == null ? void 0 : _a.id) || null;
    }
    function subCategoryToId({
      category,
      subcategory,
      productMenu: productMenu2
    }) {
      var _a;
      const categoryId = findCategoryId(productMenu2, category);
      const subcategoryId = ((_a = productMenu2.filter((elem) => elem.id === categoryId).flatMap((elem) => elem.items).find((item) => replaceSpace(item.name.en) === subcategory)) == null ? void 0 : _a.id) || null;
      return { category: categoryId, subcategory: subcategoryId };
    }
    async function fetchProducts() {
      try {
        const category = route.params.category;
        const subcategory = route.params.subcategory;
        if (typeof category !== "string" || typeof subcategory !== "string") {
          throw new Error("Invalid route parameters");
        }
        const objId = subCategoryToId({
          category,
          subcategory,
          productMenu
        });
        await productStore.getProducts(objId);
      } catch (e) {
        console.error(e);
        router.push("/");
      }
    }
    fetchProducts();
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[category]/[subcategory].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_subcategory_-BenVGaof.js.map
