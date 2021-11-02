---
to: src/<%= package %>/src/hooks/<%= h.changeCase.camel(name) %>.ts
---
<% utilName = h.changeCase.camel(name) -%>
export const <%= utilName %> = () => {
    // do some nice things!
};
