import React from 'react'
import styles from "../styles/Home.module.css";

const Skill = ({icon, name, id, proficiency}) => {
  return (
    <>
      <div className={styles.skill__card}>
          <span className={styles.skill_icon} id={id}>{icon}</span> 
      </div>
      <div className={styles.skill__prof}>
        <span>{proficiency}</span>
      </div>
    </>
  )
}

export default Skill