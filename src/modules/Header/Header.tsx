import { FC } from 'react';
import { Logo } from './components/Logo/Logo';
import { NavBar } from './components/NavBar/NavBar';
import { AuthBar } from './components/AuthBar/AuthBar';
import styles from './Header.module.scss';

interface IHeaderProps {
    openSignInModalHandler: () => void;
    openSignUpModalHandler: () => void;
}

export const Header: FC<IHeaderProps> = (props) => {
    const { openSignInModalHandler, openSignUpModalHandler } = props;

    return (
        <header className={styles.wrapper}>
            <div className={styles.thirdPart}>
                <div className={styles.leftItem}>
                    <Logo />
                </div>
            </div>
            <div className={styles.thirdPart}>
                <div className={styles.centralItem}>
                    <NavBar />
                </div>
            </div>
            <div className={styles.thirdPart}>
                <div className={styles.rightItem}>
                    <AuthBar
                        openSignInModalHandler={openSignInModalHandler}
                        openSignUpModalHandler={openSignUpModalHandler}
                    />
                </div>
            </div>
        </header>
    );
};
