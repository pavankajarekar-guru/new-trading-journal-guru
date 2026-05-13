import { useEffect } from 'react'
import { supabase } from './supabase'
import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import AddTrade from './components/AddTrade'
import Journal from './components/Journal'
import Login from './components/Login'

import { sampleTrades } from './data/trades'

export default function App() {

  const [page, setPage] = useState('dashboard')

  const [trades, setTrades] = useState(sampleTrades)

  const [form, setForm] = useState({
    pair: '',
    entry: '',
    exit: '',
    profit: ''
  })

  function addTrade() {

    if (!form.pair) return

    setTrades([
      ...trades,
      form
    ])

    setForm({
      pair: '',
      entry: '',
      exit: '',
      profit: ''
    })

    setPage('journal')
  }

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh'
    }}>

      <Sidebar setPage={setPage} />

      <div style={{
        flex: 1,
        padding: '40px'
      }}>

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

        {page === 'login' &&
          <Login />
        }

      </div>

    </div>
  )
}
