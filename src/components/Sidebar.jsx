export default function Sidebar({ setPage }) {

  return (
    <div style={{
      width: '250px',
      background: '#111',
      padding: '20px'
    }}>

      <h1 style={{
        color: '#d4af37'
      }}>
        Trading Journal Guru
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '30px'
      }}>

        <button onClick={() => setPage('dashboard')}>
          Dashboard
        </button>

        <button onClick={() => setPage('add')}>
          Add Trade
        </button>

        <button onClick={() => setPage('journal')}>
          Journal
        </button>

        <button onClick={() => setPage('login')}>
          Login
        </button>

        <button onClick={() => setPage('analytics')}>
  Analytics
</button>

      </div>

    </div>
  )
}
