import { Link } from "react-router-dom"
import styles from '../../estilo/style.module.css';

function Menu(){
    return(
       <header>
            <nav>
                <ul className={styles.containerMenu}>
                    <li className={styles.itemMenu}><Link className={styles.textoMenu} to="../../paginas/home">Home</Link></li>
                    <li className={styles.itemMenu}><Link className={styles.textoMenu} to="../../paginas/muralVagas">Vagas</Link></li>
                    <li className={styles.itemMenu}><Link className={styles.textoMenu} to="../../paginas/MuralOportunidades">Oportunidades</Link></li>
                    <li className={styles.itemMenu}><Link className={styles.textoMenu} to="../../paginas/curriculo">Currículos</Link></li>
                    <li className={styles.itemMenu}><Link className={styles.textoMenu} to="../../paginas/muralOngs">Mural de ONGs</Link></li>
                    <li className={styles.itemMenu}><Link className={styles.textoMenu} to="../../paginas/forum">Forum</Link></li>
                    <li className={styles.itemMenu}><Link className={styles.textoMenu} to="../../paginas/cadastro">Cadastro</Link></li>
                    <li className={styles.itemMenu}><Link className={styles.textoMenu} to="../../paginas/meusCurriculos">Meus currículos</Link></li>
                </ul>
            </nav>
       </header>
    )
} 
export default Menu;