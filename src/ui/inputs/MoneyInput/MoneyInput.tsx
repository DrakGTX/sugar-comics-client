import { FC, ChangeEvent } from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import styles from './MoneyInput.module.scss';

interface IMoneyInputProps {
    inputLabel: string;
    inputValue: number;
    inputPlaceholder: string;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const MoneyInput: FC<IMoneyInputProps> = (props) => {
    const { inputLabel, inputValue, inputPlaceholder, inputOnChangeHandler } = props;

    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>{inputLabel}</label>
            <div className={styles.inputWrapper}>
                <span className={styles.iconSpan}>
                    <i className="fas fa-lock">
                        <AttachMoneyIcon />
                    </i>
                </span>
                <input
                    type="text"
                    pattern="[0-9]*"
                    placeholder={inputPlaceholder}
                    value={inputValue}
                    onChange={inputOnChangeHandler}
                    className={styles.moneyInput}
                />
            </div>
        </div>
    );
};
