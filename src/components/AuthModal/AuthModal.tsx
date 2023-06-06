import { FC } from 'react';
import { SignInForm } from './components/SignInForm/SignInForm';
import { SignUpForm } from './components/SignUpForm/SignUpForm';
import CloseIcon from '@mui/icons-material/Close';
import styles from './AuthModal.module.scss';

interface IAuthModalProps {
    navigateToSignInModalHandler: () => void;
    navigateToSignUpModalHandler: () => void;
    closeModalHandler: () => void;
    isSignInModalOpen: boolean;
    isSignUpModalOpen: boolean;
}

export const AuthModal: FC<IAuthModalProps> = (props) => {
    const {
        navigateToSignInModalHandler,
        navigateToSignUpModalHandler,
        closeModalHandler,
        isSignInModalOpen,
        isSignUpModalOpen
    } = props;

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.subWrapper}>
                    <div className={styles.panel}>
                        <button className={styles.close} onClick={closeModalHandler}>
                            <CloseIcon className={styles.closeIcon} />
                        </button>
                        {isSignInModalOpen && (
                            <SignInForm navigateToSignUpModalHandler={navigateToSignUpModalHandler} />
                        )}
                        {isSignUpModalOpen && (
                            <SignUpForm navigateToSignInModalHandler={navigateToSignInModalHandler} />
                        )}
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};
