import { FC } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './ContinueWithGoogleButton.module.scss';

interface IContinueWithGoogleButtonProps {
    onClickHandler: () => void;
}

export const ContinueWithGoogleButton: FC<IContinueWithGoogleButtonProps> = (props) => {
    const { onClickHandler } = props;

    return (
        <button className={styles.google} onClick={onClickHandler}>
            <div className={styles.googleIcon}>
                <GoogleIcon className={styles.googleIcon2} />
            </div>
            <div>CONTINUE WITH GOOGLE</div>
        </button>
    );
};
