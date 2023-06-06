import { useNavigate } from 'react-router-dom';
import { TransparentNoBorderButton } from '../../../../ui/buttons/TransparentNoBorderButton/TransparentNoBorderButton';
import styles from './NavBar.module.scss';

export const NavBar = () => {
    const navigate = useNavigate();

    const navigateToExplore = () => {
        navigate('/explore');
    };

    const navigateToSubmit = () => {
        navigate('/submit');
    };

    return (
        <div className={styles.wrapper}>
            <TransparentNoBorderButton btnText="Explore" btnClickHandler={navigateToExplore} />
            <hr className={styles.verticalLine} />
            <TransparentNoBorderButton btnText="Submit" btnClickHandler={navigateToSubmit} />
        </div>
    );
};
