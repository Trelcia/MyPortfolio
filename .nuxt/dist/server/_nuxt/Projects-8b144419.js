import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "devalue";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "destr";
import "klona";
import "defu";
const _sfc_main = {
  __name: "Projects",
  __ssrInlineRender: true,
  props: {
    blok: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container project-page" }, _attrs))}><div class="project-title"><h1>${ssrInterpolate(__props.blok.name || "New Project")}</h1>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: { name: "index" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Go back`);
          } else {
            return [
              createTextVNode("Go back")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="project-description"><img${ssrRenderAttr("src", ((_a = __props.blok.image) == null ? void 0 : _a.filename) || "https://picsum.photos/300/175")}${ssrRenderAttr("alt", (_b = __props.blok.image) == null ? void 0 : _b.alt)}><p>${ssrInterpolate(__props.blok.description || "description")}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Projects-8b144419.js.map
