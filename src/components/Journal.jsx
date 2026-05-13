export default function Journal({ trades }) {

  return (
    <div>

      <h1 style={{
        color: '#d4af37',
        fontSize: '40px'
      }}>
        Trade Journal
      </h1>

      <div style={{
        display: 'grid',
        gap: '20px',
        marginTop: '30px'
      }}>

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
  )
}
