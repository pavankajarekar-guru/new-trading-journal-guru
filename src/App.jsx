import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import AddTrade from './components/AddTrade'
import Journal from './components/Journal'
import Analytics from './components/Analytics'

import { supabase } from './supabase'

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
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: '#050505'
    }}>

      <Sidebar setPage={setPage} />

      <div style={{
        flex: 1,
        padding: '30px'
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

        {page === 'analytics' &&
          <Analytics trades={trades} />
        }

      </div>

    </div>
  )
}
