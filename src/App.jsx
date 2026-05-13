import { supabase } from './supabase'
import { useState } from 'react'

import Dashboard from './components/Dashboard'
import AddTrade from './components/AddTrade'
import Journal from './components/Journal'
import Analytics from './components/Analytics'

export default function App() {

  const [page, setPage] = useState('dashboard')

  const [trades, setTrades] = useState([])

  const [form, setForm] = useState({
    pair: '',
    profit: ''
  })
  async function addTrade() {

  if (!form.pair) return

  await supabase
    .from('trades')
    .insert([form])

  setTrades([
    ...trades,
    form
  ])

  setForm({
    pair: '',
    profit: ''
  })

  setPage('journal')
}
  return (
    <div className="app">

      {/* Header */}
      <div style={{
        padding: '20px'
      }}>

        <h1 className="gold">
          Trading Journal Guru
        </h1>

        <p style={{
          color: '#777',
          marginTop: '5px'
        }}>
          Mobile Trading Journal
        </p>

      </div>

      {/* Pages */}
      <div className="page">

        {page === 'dashboard' &&
          <Dashboard trades={trades} />
        }

        {page === 'add' &&
          <AddTrade
            form={form}
            setForm={setForm}
            addTrade={addTrade}
          />
        }

        {page === 'journal' &&
          <Journal trades={trades} />
        }

        {page === 'analytics' &&
          <Analytics trades={trades} />
        }

      </div>

      {/* Floating Button */}
      <button
        className="floating-btn"
        onClick={() => setPage('add')}
      >
        +
      </button>

      {/* Bottom Navigation */}
      <div className="bottom-nav">

        <button
          className="nav-btn"
          onClick={() => setPage('dashboard')}
        >
          Home
        </button>

        <button
          className="nav-btn"
          onClick={() => setPage('journal')}
        >
          Journal
        </button>

        <button
          className="nav-btn"
          onClick={() => setPage('analytics')}
        >
          Analytics
        </button>

      </div>

    </div>
  )
}
