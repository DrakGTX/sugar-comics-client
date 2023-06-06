import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICardData } from '../../../../configs/interfaces/CardDataInterface';
import { LightTransparentNoBorderButton } from '../../../../ui/buttons/LightTransparentNoBorderButton/LightTransparentNoBorderButton';
import styles from './CardBack.module.scss';

interface ICardBackProps {
    cardData: ICardData;
    cardStatus: 'funded' | 'live' | 'coming';
}

export const CardBack: FC<ICardBackProps> = (props) => {
    const { cardData, cardStatus } = props;
    const navigate = useNavigate();

    const progressPercentage = cardStatus !== 'coming' ? (cardData.accumulated / cardData.estimated) * 100 : 0;
    const percentageWidth = progressPercentage <= 100 ? `${progressPercentage}%` : '100%';
    const percentageVisibility = progressPercentage < 10 ? 'hidden' : 'visible';

    const navigateToItem = () => {
        navigate(`/explore/${cardData.id}`);
    };

    return (
        <div className={styles.link} onClick={navigateToItem}>
            <div className={styles.wrapper}>
                <h1 className={styles.name}>{cardData.name}</h1>
                <h2 className={styles.author}>BY {cardData.author.toUpperCase()}</h2>
                <p className={styles.description}>{cardData.description}</p>
                {cardStatus !== 'coming' && (
                    <div className={styles.progressBar}>
                        <div className={styles.percentage} style={{ width: percentageWidth }}>
                            <div style={{ visibility: percentageVisibility }}>{progressPercentage.toFixed()}%</div>
                        </div>
                    </div>
                )}
                <div className={styles.btnWrapper}>
                    <LightTransparentNoBorderButton />
                </div>
            </div>
        </div>
    );
};
