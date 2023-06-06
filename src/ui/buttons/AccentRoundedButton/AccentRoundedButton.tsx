import { FC } from 'react';
import styles from './AccentRoundedButton.module.scss';

interface IAccentRoundedButtonProps {
    bntText: string;
    onClickHandler: () => void;
}

export const AccentRoundedButton: FC<IAccentRoundedButtonProps> = (props) => {
    const { bntText, onClickHandler } = props;

    return (
        <button className={styles.btn} onClick={onClickHandler}>
            {bntText}
        </button>
    );
};
