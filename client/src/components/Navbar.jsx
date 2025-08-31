import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
      <nav className="py-4 px-10">
        <Link to={"/"} className="text-3xl font-bold">
          Car Rental Service
        </Link>
      </nav>
    </header>
  )
}
