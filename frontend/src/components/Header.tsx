import logo from "../assets/logo.png"

export function Header() {
  return (
    <header className="page-header">
      <img src={logo} className="page-header-icon" />
      <h1 className="page-header-title">Twitter Clone</h1>
    </header>
  )
}
