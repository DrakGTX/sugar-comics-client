import { FC } from 'react';
import { TransparentNoBorderButton } from '../../../../ui/buttons/TransparentNoBorderButton/TransparentNoBorderButton';
import styles from './AuthBar.module.scss';

interface IAuthBarProps {
    openSignInModalHandler: () => void;
    openSignUpModalHandler: () => void;
}

export const AuthBar: FC<IAuthBarProps> = (props) => {
    const { openSignInModalHandler, openSignUpModalHandler } = props;

    return (
        <div className={styles.wrapper}>
            <TransparentNoBorderButton btnText="Sign In" btnClickHandler={openSignInModalHandler} />
            <TransparentNoBorderButton btnText="Sign Up" btnClickHandler={openSignUpModalHandler} />
        </div>
    );
};
