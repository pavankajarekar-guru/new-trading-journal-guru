import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('dashboard')

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
        width: '260px',
        background: '#111',
        padding: '20px',
        borderRight: '1px solid #222'
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
          gap: '12px'
        }}>

          <button onClick={() => setPage('dashboard')}>
            Dashboard
          </button>

          <button onClick={() => setPage('journal')}>
            Trade Journal
          </button>

          <button onClick={() => setPage('analytics')}>
            Analytics
          </button>

          <button onClick={() => setPage('ai')}>
            AI Assistant
          </button>

          <button onClick={() => setPage('calendar')}>
            Economic Calendar
          </button>

          <button onClick={() => setPage('login')}>
            Login
          </button>

        </div>

      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: '40px'
      }}>

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
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
              gap: '20px'
            }}>

              <Card title="Total P&L" value="+$4,250" color="lime" />
              <Card title="Win Rate" value="72%" color="#d4af37" />
              <Card title="Discipline Score" value="88/100" color="skyblue" />
              <Card title="Trading Streak" value="14 Days" color="orange" />

            </div>

          </div>
        )}

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
              background: '#111',
              padding: '20px',
              borderRadius: '20px'
            }}>

              <h2>EUR/USD Buy</h2>

              <p style={{ color: '#999' }}>
                Entry: 1.0840
              </p>

              <p style={{ color: '#999' }}>
                Exit: 1.0890
              </p>

              <p style={{ color: 'lime' }}>
                Profit: +$250
              </p>

            </div>

          </div>
        )}

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

              <h2>Weekly Performance</h2>

              <div style={{
                marginTop: '20px',
                height: '250px',
                background: '#000',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666'
              }}>
                Charts Coming Soon
              </div>

            </div>

          </div>
        )}

        {page === 'ai' && (
          <div>

            <h1 style={{
              color: '#d4af37',
              fontSize: '40px'
            }}>
              AI Assistant
            </h1>

            <div style={{
              marginTop: '30px',
              display: 'grid',
              gap: '20px'
            }}>

              <AIBox text="EUR/USD bullish during London session." />
              <AIBox text="Avoid overtrading during NY session." />
              <AIBox text="Gold volatility expected after CPI news." />

            </div>

          </div>
        )}

        {page === 'calendar' && (
          <div>

            <h1 style={{
              color: '#d4af37',
              fontSize: '40px'
            }}>
              Economic Calendar
            </h1>

            <div style={{
              marginTop: '30px',
              display: 'grid',
              gap: '20px'
            }}>

              <Event
                title="USD CPI News"
                impact="High Impact"
              />

              <Event
                title="FOMC Meeting"
                impact="High Impact"
              />

              <Event
                title="NFP Release"
                impact="Extreme Impact"
              />

            </div>

          </div>
        )}

        {page === 'login' && (
          <div>

            <h1 style={{
              color: '#d4af37',
              fontSize: '40px'
            }}>
              Login
            </h1>

            <div style={{
              marginTop: '30px',
              background: '#111',
              padding: '30px',
              borderRadius: '20px',
              maxWidth: '400px'
            }}>

              <input
                placeholder="Email"
                style={inputStyle}
              />

              <input
                placeholder="Password"
                type="password"
                style={{
                  ...inputStyle,
                  marginTop: '15px'
                }}
              />

              <button style={{
                marginTop: '20px',
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                border: 'none',
                background: '#d4af37',
                fontWeight: 'bold'
              }}>
                Login
              </button>

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

function AIBox({ text }) {
  return (
    <div style={{
      background: '#111',
      padding: '20px',
      borderRadius: '20px'
    }}>
      {text}
    </div>
  )
}

function Event({ title, impact }) {
  return (
    <div style={{
      background: '#111',
      padding: '20px',
      borderRadius: '20px'
    }}>
      <h2>{title}</h2>

      <p style={{
        color: '#d4af37'
      }}>
        {impact}
      </p>
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
