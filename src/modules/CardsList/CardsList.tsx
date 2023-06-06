import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICardData } from '../../configs/interfaces/CardDataInterface';
import { ItemCard } from './components/ItemCard/ItemCard';
import styles from './CardList.module.scss';
import { BlankCard } from './components/BlankCard/BlankCard';

export const CardsList = () => {
    const [cardDataArray, setCardDataArray] = useState<ICardData[]>([]);

    const getData = async () => {
        const apiUrl = 'http://localhost:5001/items/all';

        try {
            const response = await axios.get(apiUrl);
            setCardDataArray(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const currentDate = new Date();

    const itemArray: JSX.Element[] = cardDataArray.map((item, index) => {
        return <ItemCard cardData={item} key={index} currentDate={currentDate} />;
    });

    const blankCardsArray: JSX.Element[] = Array(10).fill(<BlankCard />);

    return (
        <div className={styles.wrapper}>{cardDataArray.length !== 0 ? <>{itemArray}</> : <>{blankCardsArray}</>}</div>
    );
};
