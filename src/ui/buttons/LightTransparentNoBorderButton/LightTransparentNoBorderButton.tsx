import styles from './LightTransparentNoBorderButton.module.scss';

export const LightTransparentNoBorderButton = () => {
    return (
        <button className={`${styles.wrapper} group`}>
            EXPLORE
            <span className={`${styles.underline} group-hover:max-w-full`} />
        </button>
    );
};
