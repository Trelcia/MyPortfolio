import { _ as __nuxt_component_0 } from "./nuxt-link-563b35af.js";
import { resolveDirective, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "FeaturedProjects",
  __ssrInlineRender: true,
  props: {
    blok: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_editable = resolveDirective("editable");
      _push(`<div${ssrRenderAttrs(mergeProps({ clas: "container" }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}><h1 style="${ssrRenderStyle({ "margin-left": "10px" })}">${ssrInterpolate(__props.blok.title)}</h1><div class="featured-projects"><!--[-->`);
      ssrRenderList(__props.blok.project, (project) => {
        _push(`<div class="project">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: { name: "projects-slug", params: { slug: project.slug } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", (_a = project.content.image) == null ? void 0 : _a.filename)}${ssrRenderAttr("alt", (_b = project.content.image) == null ? void 0 : _b.alt)} style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId}><h3${_scopeId}>${ssrInterpolate(project.content.name)}</h3>`);
            } else {
              return [
                createVNode("img", {
                  src: (_c = project.content.image) == null ? void 0 : _c.filename,
                  alt: (_d = project.content.image) == null ? void 0 : _d.alt,
                  style: { "width": "100%" }
                }, null, 8, ["src", "alt"]),
                createVNode("h3", null, toDisplayString(project.content.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/FeaturedProjects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=FeaturedProjects-3060082c.js.map
