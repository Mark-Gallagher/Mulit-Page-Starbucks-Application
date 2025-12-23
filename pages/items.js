import Items from '../components/Items';
import Head from 'next/head'
import React from 'react';

export default function ItemsPage() {
    return (
        <>
            <Head>
                <title>Items</title>
            </Head>
            <Items />
        </>
    )
}