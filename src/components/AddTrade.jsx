export default function AddTrade({
  form,
  setForm,
  addTrade
}) {

  return (
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
        maxWidth: '700px'
      }}>

        {/* Pair */}
        <input
          placeholder="Trade Pair (EUR/USD)"
          value={form.pair}
          onChange={(e) =>
            setForm({
              ...form,
              pair: e.target.value
            })
          }
        />

        {/* Buy Sell */}
        <select
          value={form.direction}
          onChange={(e) =>
            setForm({
              ...form,
              direction: e.target.value
            })
          }
          style={selectStyle}
        >
          <option>Buy</option>
          <option>Sell</option>
        </select>

        {/* Lot Size */}
        <input
          placeholder="Lot Size"
          value={form.lot}
          onChange={(e) =>
            setForm({
              ...form,
              lot: e.target.value
            })
          }
        />

        {/* Entry */}
        <input
          placeholder="Entry Price"
          value={form.entry}
          onChange={(e) =>
            setForm({
              ...form,
              entry: e.target.value
            })
          }
        />

        {/* Stop Loss */}
        <input
          placeholder="Stop Loss"
          value={form.sl}
          onChange={(e) =>
            setForm({
              ...form,
              sl: e.target.value
            })
          }
        />

        {/* Take Profit */}
        <input
          placeholder="Take Profit"
          value={form.tp}
          onChange={(e) =>
            setForm({
              ...form,
              tp: e.target.value
            })
          }
        />

        {/* Exit */}
        <input
          placeholder="Exit Price"
          value={form.exit}
          onChange={(e) =>
            setForm({
              ...form,
              exit: e.target.value
            })
          }
        />

        {/* Profit */}
        <input
          placeholder="Profit / Loss"
          value={form.profit}
          onChange={(e) =>
            setForm({
              ...form,
              profit: e.target.value
            })
          }
        />

        {/* Risk Reward */}
        <input
          placeholder="Risk Reward Ratio"
          value={form.rr}
          onChange={(e) =>
            setForm({
              ...form,
              rr: e.target.value
            })
          }
        />

        {/* Strategy */}
        <input
          placeholder="Strategy Used"
          value={form.strategy}
          onChange={(e) =>
            setForm({
              ...form,
              strategy: e.target.value
            })
          }
        />

        {/* Session */}
        <select
          value={form.session}
          onChange={(e) =>
            setForm({
              ...form,
              session: e.target.value
            })
          }
          style={selectStyle}
        >
          <option>London Session</option>
          <option>New York Session</option>
          <option>Asian Session</option>
        </select>

        {/* Emotion */}
        <input
          placeholder="Trader Emotion"
          value={form.emotion}
          onChange={(e) =>
            setForm({
              ...form,
              emotion: e.target.value
            })
          }
        />

        {/* Discipline */}
        <input
          placeholder="Discipline Score"
          value={form.discipline}
          onChange={(e) =>
            setForm({
              ...form,
              discipline: e.target.value
            })
          }
        />

        {/* Broker */}
        <input
          placeholder="Broker Name"
          value={form.broker}
          onChange={(e) =>
            setForm({
              ...form,
              broker: e.target.value
            })
          }
        />

        {/* Screenshot */}
        <input
          type="file"
          style={{
            marginTop: '15px'
          }}
        />

        {/* Notes */}
        <textarea
          placeholder="Trade Notes"
          value={form.notes}
          onChange={(e) =>
            setForm({
              ...form,
              notes: e.target.value
            })
          }
          style={{
            width: '100%',
            marginTop: '15px',
            minHeight: '120px',
            background: 'black',
            color: 'white',
            border: '1px solid #333',
            borderRadius: '12px',
            padding: '15px'
          }}
        />

        {/* AI */}
        <div style={{
          marginTop: '20px',
          background: '#1a1a1a',
          padding: '20px',
          borderRadius: '15px',
          color: '#d4af37'
        }}>
          AI Analysis will appear here.
        </div>

        {/* Save */}
        <button
          onClick={addTrade}
          style={{
            marginTop: '20px',
            width: '100%',
            background: '#d4af37',
            color: 'black',
            fontWeight: 'bold'
          }}
        >
          Save Trade
        </button>

      </div>

    </div>
  )
}

const selectStyle = {
  width: '100%',
  padding: '14px',
  marginTop: '15px',
  borderRadius: '12px',
  background: 'black',
  color: 'white',
  border: '1px solid #333'
  }
