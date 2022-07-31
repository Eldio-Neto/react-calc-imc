import { level } from "../../helpers/imc"
import styles from './griditem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type props = {
    item: level;
}

export const GridItem = ({ item }: props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc&&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                Entre <strong>{item.imc[0]}</strong>  e <strong>{item.imc[1]}</strong>
                </>
                
            </div>
        </div>
    )
}