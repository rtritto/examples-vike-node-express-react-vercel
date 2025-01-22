export { Layout }

import React from 'react'
import './Layout.css'

function Layout({ children }) {
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

function PageLayout({ children }) {
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

function Sidebar({ children }) {
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

function Content({ children }) {
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
