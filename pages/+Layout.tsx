export { Layout }

import type { JSX } from 'react'

import './Layout.css'

type Props = { children: JSX.Element | JSX.Element[] }

function Layout({ children }: Props) {
  return (
    <PageLayout>
      <Sidebar>
        <a className="navitem" href="/">
          Pre-rendered
        </a>
        <a className="navitem" href="/dynamic">
          Dynamic
        </a>
        <a className="navitem" href="/static">
          Static
        </a>
      </Sidebar>
      <Content>{children}</Content>
    </PageLayout>
  )
}

function PageLayout({ children }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: Props) {
  return (
    <div
      style={{
        padding: 20,
        paddingTop: 42,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: Props) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}
