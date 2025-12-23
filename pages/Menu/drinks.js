import Drinks from '../../components/Drinks';
import React from 'react';
import Head from 'next/head'

export default function DrinksPage() {
  return (
    <>
      <Head>
        <title>The drinks</title>
      </Head>
      <Drinks />
    </>
  )
}
