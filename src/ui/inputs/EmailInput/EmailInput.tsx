import { FC, ChangeEvent } from 'react';
import styles from './EmailInput.module.scss';

interface IEmailInputProps {
    inputValue: string;
    emailInputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EmailInput: FC<IEmailInputProps> = (props) => {
    const { inputValue, emailInputOnChangeHandler } = props;

    return (
        <input
            className={`${styles.emailInput}`}
            onChange={emailInputOnChangeHandler}
            placeholder="Enter your email"
            type="email"
            id="username"
            name="username"
            autoComplete="username"
            value={inputValue}
            required
        />
    );
};
