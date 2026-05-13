export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{
        color: '#d4af37',
        fontSize: '48px'
      }}>
        Trading Journal Guru
      </h1>

      <p style={{
        color: '#999',
        marginTop: '10px'
      }}>
        AI Powered Trading Journal
      </p>

      <div style={{
        marginTop: '40px',
        background: '#111',
        padding: '30px',
        borderRadius: '20px'
      }}>
        <h2>Total P&L</h2>

        <h1 style={{
          color: 'lime',
          fontSize: '40px'
        }}>
          +$4,250
        </h1>
      </div>
    </div>
  )
}
