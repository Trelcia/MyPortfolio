import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/ufo/dist/index.mjs';
import '../server.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/ofetch/dist/node.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/hookable/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unctx/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/h3/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unhead/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/destr/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/scule/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/klona/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/ohash/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unstorage/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/pathe/dist/index.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=Projects-8b144419.mjs.map
