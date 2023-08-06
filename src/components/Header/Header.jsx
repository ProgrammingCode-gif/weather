import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
        <header className={styles.header}>
            <div className="container">
                <h1 className={styles.title}>App<span className={styles.span}>weather</span></h1>
            </div>
        </header>
    </div>
  )
}

export default Header