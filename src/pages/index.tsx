import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import { SideBar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { Todo } from '@/components/todo/Todo'

const Container = styled.div`
  max-width: calc(100% - (var(--sidebar)));
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta name="description" content="Create by ChinhLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="tw-flex">
        <SideBar />
        <Container>
          <Header />
          <Todo />
        </Container>
      </main>
    </>
  )
}
