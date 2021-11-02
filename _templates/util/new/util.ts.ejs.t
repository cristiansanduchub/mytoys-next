---
to: src/<%= package %>/src/util/<%= h.changeCase.camel(name) %>.ts
---
<% utilName = h.changeCase.camel(name) -%>
export const <%= utilName %> = () => {
    // do some nice things!
};
