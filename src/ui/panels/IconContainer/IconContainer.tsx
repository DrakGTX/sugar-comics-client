import { FC } from 'react';
import styles from './IconContainer.module.scss';

interface IconContainerProps {
    icon: JSX.Element;
}

export const IconContainer: FC<IconContainerProps> = (props) => {
    const { icon } = props;

    return <div className={styles.wrapper}>{icon}</div>;
};
