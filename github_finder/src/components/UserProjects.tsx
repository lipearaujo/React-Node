import { Link } from "react-router-dom";

import classes from "./UserProjects.module.css";

const UserProjects = () => {
  return (
    <div className={classes.user_projects}>
        <Link to={`/`}>Back</Link>
        <h1>projetos</h1>
    </div>
  )
}

export default UserProjects