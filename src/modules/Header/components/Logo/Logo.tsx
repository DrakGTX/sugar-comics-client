import { useNavigate } from 'react-router-dom';
import styles from './Logo.module.scss';

export const Logo = () => {
    const navigate = useNavigate();

    const navigateToExplore = () => {
        navigate('/explore');
    };

    return (
        <div className={styles.wrapper} onClick={navigateToExplore}>
            <div className={styles.top}>SugarComics</div>
            <div className={styles.bottom}>crowdfunding</div>
        </div>
    );
};
