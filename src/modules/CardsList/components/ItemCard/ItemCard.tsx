import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { ICardData, ICardImage } from '../../../../configs/interfaces/CardDataInterface';
import { CardBack } from '../CardBack/CardBack';
import askIcon from '../../../../assets/images/ask.png';
import styles from './ItemCard.module.scss';

interface IItemCardProps {
    cardData: ICardData;
    currentDate: Date;
}

export const ItemCard: FC<IItemCardProps> = (props) => {
    const { cardData, currentDate } = props;

    const [image, setImage] = useState<ICardImage>();

    useEffect(() => {
        if (cardData) {
            getImageByItemId();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardData]);

    const getImageByItemId = async () => {
        const apiUrl = `http://localhost:5004/images/get-by-item-id/${cardData.id}`;

        try {
            const response = await axios.get(apiUrl);
            setImage(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getCardStatus = () => {
        const startDate = new Date(cardData.startDate);
        const endDate = new Date(cardData.endDate);

        if (currentDate >= endDate) {
            return 'funded';
        }

        if (currentDate <= startDate) {
            return 'coming';
        }

        return 'live';
    };

    return (
        <div className={styles.wrapper}>
            {image ? (
                <img src={`http://localhost:5004/images/${image.image}`} alt="poster" className={styles.poster} />
            ) : (
                <div className={styles.poster}>
                    <img src={askIcon} alt="poster" className={styles.askIcon} />
                </div>
            )}

            <div className={styles.back}>
                <CardBack cardData={cardData} cardStatus={getCardStatus()} />
            </div>
        </div>
    );
};
