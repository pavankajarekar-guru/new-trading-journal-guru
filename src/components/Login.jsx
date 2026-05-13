export default function Login() {

  return (
    <div>

      <h1 style={{
        color: '#d4af37',
        fontSize: '40px'
      }}>
        Login
      </h1>

      <div style={{
        marginTop: '30px',
        maxWidth: '400px',
        background: '#111',
        padding: '30px',
        borderRadius: '20px'
      }}>

        <input placeholder="Email" />

        <input
          type="password"
          placeholder="Password"
        />

        <button style={{
          width: '100%',
          marginTop: '20px',
          background: '#d4af37',
          color: 'black',
          fontWeight: 'bold'
        }}>
          Login
        </button>

      </div>

    </div>
  )
}
