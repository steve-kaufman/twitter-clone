import hero from "../assets/hero.jpg"

export function Banner() {
  return (
    <section className="landing-page-banner">
      {/* <img className="landing-page-banner-hero" src={hero} /> */}
      <header className="landing-page-banner-header">
        <h1 className="landing-page-banner-hook">Welcome</h1>
      </header>
      <main className="landing-page-banner-main">
        <p>
          Join us and start sending random crap to a following of strangers!
        </p>
        <p>Or heck, just follow everybody!</p>
        <div className="buttons">
          <button className="sign-up-btn btn">Sign Up</button>
          <p className="little">Already a user?</p>
          <button className="sign-in-btn btn">Sign In</button>
        </div>
      </main>
    </section>
  )
}
