import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/natalia/VS-nauczny/jamstack/jamstack-course/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}