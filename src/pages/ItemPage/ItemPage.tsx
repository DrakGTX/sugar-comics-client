import { useState, useEffect } from 'react';
import { IProjectData } from '../../configs/interfaces/ProjectDataInterface';
import axios from 'axios';
import { PageContentPanel } from '../../ui/panels/PageContentPanel/PageContentPanel';

export const ItemPage = () => {
    const [itemData, setItemData] = useState<IProjectData>();

    useEffect(() => {
        getData();
    }, [itemData]);

    const getData = async () => {
        const path = window.location.pathname;
        const idFromPath = path.substring(path.lastIndexOf('/') + 1);
        const apiUrl = `http://localhost:5001/items/${idFromPath}`;

        try {
            const response = await axios.get(apiUrl);
            setItemData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const itemPageContent = (
        <div>
            <div>Name: {itemData?.name}</div>
            <div>Author: {itemData?.author}</div>
            <div>Description: {itemData?.description}</div>
            <div>Story: {itemData?.story}</div>
        </div>
    );

    return <PageContentPanel content={itemPageContent} />;
};
