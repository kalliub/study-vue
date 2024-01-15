import { Practical } from "@/components/Tutorial";
import type { RouteRecordRaw } from "vue-router";

const prefix = 'practical'

export default [
  {
    path: 'markdown-editor',
    component: Practical.MarkdownEditor,
    name: 'Markdown Editor'
  },
  {
    path: 'fetching-data',
    component: Practical.FetchingData,
    name: 'Fetching Data'
  },
  {
    path: 'grid-sort-filter',
    component: Practical.GridSortFilter,
    name: 'Grid and Sort Filter'
  }
].map(route => ({
  ...route,
  path: `/${prefix}/${route.path}`
})) satisfies RouteRecordRaw[]