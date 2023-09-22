import styles from './header.module.css'
const Header = () =>  {
   return(
      <div className={styles.header}>
         <h2 className={styles.title}>Hangry Panda</h2>
      </div>
   )
}

export default Header;