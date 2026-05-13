export default function Dashboard({ trades }) {

  return (
    <div>

      <h1 style={{
        color: '#d4af37',
        fontSize: '40px'
      }}>
        Dashboard
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: '20px',
        marginTop: '30px'
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
