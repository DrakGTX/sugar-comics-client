import { FC, ChangeEvent } from 'react';
import styles from './CommonInput.module.scss';

interface ICommonInputProps {
    inputLabel: string;
    inputValue: string;
    inputPlaceholder: string;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CommonInput: FC<ICommonInputProps> = (props) => {
    const { inputLabel, inputValue, inputPlaceholder, inputOnChangeHandler } = props;

    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>{inputLabel}</label>
            <input
                className={styles.commonInput}
                onChange={inputOnChangeHandler}
                placeholder={inputPlaceholder}
                value={inputValue}
            />
        </div>
    );
};
