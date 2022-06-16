import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'


interface IHeaderProps {

}

export function Header(props: IHeaderProps) {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logotipo do ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}