---
to: src/<%= package %>/src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
<% ComponentName = h.changeCase.pascal(name) -%>
import React, { FC } from 'react';
import styles from './<%= ComponentName %>.module.scss';

interface <%= ComponentName %>Props {}

const <%= ComponentName %>: FC<<%= ComponentName %>Props> = () => (
    <div className={styles.container}><%= ComponentName %></div>
);

export default <%= ComponentName %>;
