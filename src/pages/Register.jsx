export default function Register() {
  return (
    <section className="login-section">
      <h2>Enter your credentials</h2>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" placeholder="Peter" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="p@p.com" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
        />
        <button>Create account</button>
      </form>
    </section>
  );
}
