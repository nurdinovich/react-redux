import { Link, Outlet, useNavigate } from "react-router-dom"
import classes from "./Main.module.css"

const Main = () => {
  const navigate = useNavigate();
  const onNextClick = () => navigate(+1)
  const onBackClick = () => navigate(-1)
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/Users'>Users</Link>
            </li>
            <li>
              <Link to='/Posts'>Posts</Link>
            </li>
            <li>
              <button onClick={onBackClick}>back</button>
              <button onClick={onNextClick}>Next</button>
            </li>
          </ul>
        </nav>

      </header>
      <Outlet />
    </>
  )
}

export default Main