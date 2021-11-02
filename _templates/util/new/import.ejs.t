---
inject: true
to: "<%= shouldExport ? 'src/' + package + '/src/index.ts' : null %>"
append: true
---
<% utilName = h.changeCase.camel(name) -%>
export { <%= utilName %> } from './util/<%= utilName %>';