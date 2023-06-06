import { FC } from 'react';
import styles from './AddItemButton.module.scss';
import AddIcon from '@mui/icons-material/Add';

interface AddItemButtonProps {
    buttonText: string;
    onButtonClick: () => void;
}

export const AddItemButton: FC<AddItemButtonProps> = (props) => {
    const { buttonText, onButtonClick } = props;

    return (
        <button className={styles.button} onClick={onButtonClick}>
            <AddIcon className={styles.icon} />
            {buttonText}
        </button>
    );
};
