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
        />

        <input
          placeholder="Entry"
          value={form.entry}
          onChange={(e) =>
            setForm({
              ...form,
              entry: e.target.value
            })
          }
        />

        <input
          placeholder="Exit"
          value={form.exit}
          onChange={(e) =>
            setForm({
              ...form,
              exit: e.target.value
            })
          }
        />

        <input
          placeholder="Profit"
          value={form.profit}
          onChange={(e) =>
            setForm({
              ...form,
              profit: e.target.value
            })
          }
        />

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
