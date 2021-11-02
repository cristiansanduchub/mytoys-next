---
inject: true
to: "<%= shouldExport ? 'src/' + package + '/src/index.ts' : null %>"
append: true
---
<% ComponentName = h.changeCase.pascal(name) -%>
export { default as <%= ComponentName %> } from './components/<%= ComponentName %>';