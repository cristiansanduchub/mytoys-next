---
to: src/<%= package %>/src/components/<%= h.changeCase.pascal(name) %>/index.tsx
---
<% ComponentName = h.changeCase.pascal(name) -%>
export * from './<%= ComponentName %>';
export { default } from './<%= ComponentName %>';
