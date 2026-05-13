import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

export default function Analytics({ trades }) {

  const data = trades.map((trade, index) => ({
    name: `Trade ${index + 1}`,
    profit: Number(
      trade.profit.replace('+', '')
    ) || 0
  }))

  return (
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
        borderRadius: '20px',
        height: '400px'
      }}>

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="profit"
              stroke="#d4af37"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}
