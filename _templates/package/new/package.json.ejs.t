---
to: src/<%= namespace %>/<%= h.changeCase.param(slug) %>/package.json
---
{
    "name": "@<%= namespace %>/<%= h.changeCase.param(slug) %>",
    "version": "1.0.0",
    "description": "<%= title %>",
    "main": "./src/index.ts",
    "license": "MIT",
    "sideEffects": false
}
