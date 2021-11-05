import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

import styles from './Page.module.scss';

interface PageProps {
    children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
    return (
        <main className={styles.container}>
            <Head>
                <title>mytoys</title>
                <meta name="description" content={'content'} />
            </Head>
            {/* HEADER */}
            {children}
            {/* FOOTER */}
        </main>
    );
};
export default Page;
