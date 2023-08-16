import { resolveDirective, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    blok: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><div class="container"><div class="col"><img${ssrRenderAttr("src", __props.blok.image.filename)}${ssrRenderAttr("alt", __props.blok.image.alt)}></div><div class="col"><h1>${ssrInterpolate(__props.blok.title)}</h1><h2>${ssrInterpolate(__props.blok.subtitle)}</h2></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/Hero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Hero-451cff2b.js.map
