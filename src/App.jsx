import { useState } from 'react'

export default function App() {

  const [page, setPage] = useState('dashboard')

  const [trades, setTrades] = useState([])

  const [form, setForm] = useState({
    pair: '',
    entry: '',
    exit: '',
    profit: ''
  })

  function addTrade() {

    if (!form.pair) return

    setTrades([...trades, form])

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
      minHeight: '100vh',
      background: '#050505',
      color: 'white',
      display: 'flex',
      fontFamily: 'Arial'
    }}>

      {/* Sidebar */}
      <div style={{
        width: '250px',
        background: '#111',
        padding: '20px'
      }}>

        <h1 style={{
          color: '#d4af37',
          fontSize: '28px'
        }}>
          Trading Journal Guru
        </h1>

        <div style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>

          <button onClick={() => setPage('dashboard')}>
            Dashboard
          </button>

          <button onClick={() => setPage('add')}>
            Add Trade
          </button>

          <button onClick={() => setPage('journal')}>
            Trade Journal
          </button>

          <button onClick={() => setPage('analytics')}>
            Analytics
          </button>

        </div>

      </div>

      {/* Main */}
      <div style={{
        flex: 1,
        padding: '40px'
      }}>

        {/* Dashboard */}
        {page === 'dashboard' && (

          <div>

            <h1 style={{
              color: '#d4af37',
              fontSize: '40px'
            }}>
              Dashboard
            </h1>

            <div style={{
              marginTop: '30px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: '20px'
            }}>

              <Card
                title="Total Trades"
                value={trades.length}
                color="skyblue"
              />

              <Card
                title="Win Rate"
                value="72%"
                color="#d4af37"
              />

              <Card
                title="Discipline"
                value="88/100"
                color="lime"
              />

            </div>

          </div>

        )}

        {/* Add Trade */}
        {page === 'add' && (

          <div>

            <h1 style={{
              color: '#d4af37',
              fontSize: '40px'
            }}>
              Add Trade
            </h1>

            <div style={{
              marginTop: '30px',
              background: '#111',
              padding: '30px',
              borderRadius: '20px',
              maxWidth: '500px'
            }}>

              <input
                placeholder="Pair"
                value={form.pair}
                onChange={(e) =>
                  setForm({
                    ...form,
                    pair: e.target.value
                  })
                }
                style={inputStyle}
              />

              <input
                placeholder="Entry Price"
                value={form.entry}
                onChange={(e) =>
                  setForm({
                    ...form,
                    entry: e.target.value
                  })
                }
                style={{
                  ...inputStyle,
                  marginTop: '15px'
                }}
              />

              <input
                placeholder="Exit Price"
                value={form.exit}
                onChange={(e) =>
                  setForm({
                    ...form,
                    exit: e.target.value
                  })
                }
                style={{
                  ...inputStyle,
                  marginTop: '15px'
                }}
              />

              <input
                placeholder="Profit/Loss"
                value={form.profit}
                onChange={(e) =>
                  setForm({
                    ...form,
                    profit: e.target.value
                  })
                }
                style={{
                  ...inputStyle,
                  marginTop: '15px'
                }}
              />

              <button
                onClick={addTrade}
                style={{
                  marginTop: '20px',
                  width: '100%',
                  padding: '15px',
                  borderRadius: '12px',
                  border: 'none',
                  background: '#d4af37',
                  fontWeight: 'bold'
                }}
              >
                Save Trade
              </button>

            </div>

          </div>

        )}

        {/* Journal */}
        {page === 'journal' && (

          <div>

            <h1 style={{
              color: '#d4af37',
              fontSize: '40px'
            }}>
              Trade Journal
            </h1>

            <div style={{
              marginTop: '30px',
              display: 'grid',
              gap: '20px'
            }}>

              {trades.length === 0 && (

                <div style={{
                  background: '#111',
                  padding: '20px',
                  borderRadius: '20px'
                }}>
                  No trades added yet.
                </div>

              )}

              {trades.map((trade, index) => (

                <div
                  key={index}
                  style={{
                    background: '#111',
                    padding: '25px',
                    borderRadius: '20px'
                  }}
                >

                  <h2 style={{
                    color: '#d4af37'
                  }}>
                    {trade.pair}
                  </h2>

                  <p>
                    Entry: {trade.entry}
                  </p>

                  <p>
                    Exit: {trade.exit}
                  </p>

                  <h3 style={{
                    color:
                      trade.profit.includes('-')
                        ? 'red'
                        : 'lime'
                  }}>
                    {trade.profit}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        )}

        {/* Analytics */}
        {page === 'analytics' && (

          <div>

            <h1 style={{
              color: '#d4af37',
              fontSize: '40px'
            }}>
              Analytics
            </h1>

            <div style={{
              marginTop: '30px',
              background: '#111',
              padding: '30px',
              borderRadius: '20px'
            }}>

              <h2>Total Trades: {trades.length}</h2>

              <p style={{
                color: '#999'
              }}>
                More analytics coming soon.
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

function Card({ title, value, color }) {
  return (
    <div style={{
      background: '#111',
      padding: '25px',
      borderRadius: '20px'
    }}>
      <h3 style={{
        color: '#999'
      }}>
        {title}
      </h3>

      <h1 style={{
        color,
        fontSize: '36px'
      }}>
        {value}
      </h1>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '12px',
  border: '1px solid #333',
  background: '#000',
  color: 'white'
}
