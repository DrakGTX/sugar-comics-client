import { FC, ChangeEvent } from 'react';
import styles from './CounterInput.module.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ICounterInputProps {
    inputValue: number;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    incrementLimit: () => void;
    decrementLimit: () => void;
}

export const CounterInput: FC<ICounterInputProps> = (props) => {
    const { inputValue, inputOnChangeHandler, incrementLimit, decrementLimit } = props;

    return (
        <div className={styles.wrapper}>
            <button className={styles.counterBtn} onClick={decrementLimit}>
                <RemoveIcon className={styles.icon} />
            </button>
            <input
                type="text"
                pattern="[0-9]*"
                value={inputValue}
                onChange={inputOnChangeHandler}
                className={styles.counterInput}
            />
            <button className={styles.counterBtn} onClick={incrementLimit}>
                <AddIcon className={styles.icon} />
            </button>
        </div>
    );
};
