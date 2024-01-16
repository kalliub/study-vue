import type { RouteRecordRaw } from "vue-router";

const prefix = 'practical'
const LazyImport = (file: string) => () => import(`@/components/Tutorial/Practical/${file}.vue`)

export default [
  {
    path: 'markdown-editor',
    component: LazyImport('MarkdownEditor'),
    name: 'Markdown Editor'
  },
  {
    path: 'fetching-data',
    component: LazyImport('FetchingData'),
    name: 'Fetching Data'
  },
  {
    path: 'grid-sort-filter',
    component: () => import('@/components/Tutorial/Practical/GridSortFilter/GridSortFilter.vue'),
    name: 'Grid and Sort Filter'
  }
].map(route => ({
  ...route,
  path: `/${prefix}/${route.path}`
})) satisfies RouteRecordRaw[]