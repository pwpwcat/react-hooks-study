import styles from './Footer.module.sass'

const Footer = () => {
    const getYear = () => new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <small className={styles.footer__copyright}>
                    © {getYear()} react hooks study. All rights reserved.
                </small>
            </div>
        </footer>
    )
}

export default Footer
