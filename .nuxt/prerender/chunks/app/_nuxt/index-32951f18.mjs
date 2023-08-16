import { E as Ee } from '../server.mjs';
import { withAsyncContext, resolveComponent, unref, mergeProps, useSSRContext } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/ofetch/dist/node.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/hookable/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/unctx/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/h3/dist/index.mjs';
import 'file:///home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/ufo/dist/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const story = ([__temp, __restore] = withAsyncContext(() => Ee("home", {
      version: "draft",
      resolve_relations: "featuredProjects.project"
    }, {
      resolveRelations: "featuredProjects.project"
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_StoryblokComponent = resolveComponent("StoryblokComponent");
      if (unref(story)) {
        _push(ssrRenderComponent(_component_StoryblokComponent, mergeProps({
          blok: unref(story).content
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-32951f18.mjs.map
