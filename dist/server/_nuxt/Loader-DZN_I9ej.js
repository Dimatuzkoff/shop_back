import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "Loader",
  __ssrInlineRender: true,
  props: {
    isFixed: {
      type: Boolean,
      default: false
    },
    isBlock: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["loader-mask", {
          "loader-mask-fixed": __props.isFixed,
          "loader-mask-block": __props.isBlock
        }]
      }, _attrs))} data-v-1767c7c6><div class="loader" data-v-1767c7c6><div class="circle box-1" data-v-1767c7c6>S</div><div class="circle box-2" data-v-1767c7c6>H</div><div class="circle box-3" data-v-1767c7c6>O</div><div class="circle box-4" data-v-1767c7c6>P</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/organism/Loader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1767c7c6"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Loader-DZN_I9ej.js.map
