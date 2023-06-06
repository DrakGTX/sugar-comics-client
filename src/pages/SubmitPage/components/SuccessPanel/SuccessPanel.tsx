import { FC } from 'react';
import styles from './SuccessPanel.module.scss';

export const SuccessPanel: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>Information about your project was successfully submitted</div>
        </div>
    );
};
