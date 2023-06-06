import styles from './OrContainer.module.scss';

export const OrContainer = () => {
    return (
        <div className={styles.orSection}>
            <hr className={styles.hrHorizontal} />
            <div className={styles.or}>OR</div>
            <hr className={styles.hrHorizontal} />
        </div>
    );
};
