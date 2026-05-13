export default function Sidebar({ setPage }) {

  return (
    <div style={{
      width: '260px',
      background: '#111',
      padding: '25px',
      borderRight: '1px solid #222'
    }}>

      <h1 style={{
        color: '#d4af37',
        fontSize: '28px'
      }}>
        Trading Journal Guru
      </h1>

      <p style={{
        color: '#777',
        marginTop: '5px'
      }}>
        Professional Trading App
      </p>

      <div style={{
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>

        <NavButton
          text="Dashboard"
          onClick={() => setPage('dashboard')}
        />

        <NavButton
          text="Add Trade"
          onClick={() => setPage('add')}
        />

        <NavButton
          text="Journal"
          onClick={() => setPage('journal')}
        />

        <NavButton
          text="Analytics"
          onClick={() => setPage('analytics')}
        />

      </div>

    </div>
  )
}

function NavButton({ text, onClick }) {

  return (
    <button
      onClick={onClick}
      style={{
        background: '#1a1a1a',
        color: 'white',
        padding: '16px',
        border: 'none',
        borderRadius: '14px',
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: '16px'
      }}
    >
      {text}
    </button>
  )
}
