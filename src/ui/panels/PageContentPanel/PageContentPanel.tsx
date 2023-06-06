import { FC } from 'react';
import styles from './PageContentPanel.module.scss';

interface IPageContentPanelProps {
    content: JSX.Element;
}

export const PageContentPanel: FC<IPageContentPanelProps> = (props) => {
    const { content } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.panel}>{content}</div>
        </div>
    );
};
