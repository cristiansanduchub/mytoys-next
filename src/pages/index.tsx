import React from 'react';
import { NextPage } from 'next';
import { Landing } from '@app/home';

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
    return <Landing />;
};

export default IndexPage;
