import { FC } from 'react';
import styles from './RemoveItemButton.module.scss';
import ClearIcon from '@mui/icons-material/Clear';

interface RemoveItemButtonProps {
    buttonText: string;
    onButtonClick: () => void;
}

export const RemoveItemButton: FC<RemoveItemButtonProps> = (props) => {
    const { buttonText, onButtonClick } = props;

    return (
        <button className={styles.button} onClick={onButtonClick}>
            <ClearIcon className={styles.icon} />
            {buttonText}
        </button>
    );
};
