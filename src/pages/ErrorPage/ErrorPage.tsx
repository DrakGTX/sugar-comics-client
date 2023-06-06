import { useNavigate } from 'react-router-dom';
import { PageContentPanel } from '../../ui/panels/PageContentPanel/PageContentPanel';
import errorImage from '../../assets/images/disconnect.png';
import styles from './ErrorPage.module.scss';

export const ErrorPage = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/explore');
    };

    const errorPageContent = (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h1 className={styles.infoNumber}>404</h1>
                <h2 className={styles.infoErrorText}>Sorry we couldn`t find this page.</h2>
                <div className={styles.infoHome}>
                    But dont worry, you can find plently of other things on our homepage.
                </div>
                <button className={styles.btnHome} onClick={navigateToHome}>
                    back to homepage
                </button>
            </div>
            <div>
                <img src={errorImage} alt="error" />
            </div>
        </div>
    );

    return <PageContentPanel content={errorPageContent} />;
};
