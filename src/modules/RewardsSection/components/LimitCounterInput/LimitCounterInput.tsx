import { FC, ChangeEvent } from 'react';
import { CounterInput } from '../../../../ui/inputs/CounterInput/CounterInput';
import styles from './LimitCounterInput.module.scss';

interface ILimitCountInputProps {
    limitCounterInputValue: number;
    limitCounterInputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    incrementLimit: () => void;
    decrementLimit: () => void;
}

export const LimitCountInput: FC<ILimitCountInputProps> = (props) => {
    const { limitCounterInputValue, limitCounterInputOnChangeHandler, incrementLimit, decrementLimit } = props;

    return (
        <div className={styles.wrapper}>
            <div>Limit:</div>
            <CounterInput
                inputValue={limitCounterInputValue}
                inputOnChangeHandler={limitCounterInputOnChangeHandler}
                incrementLimit={incrementLimit}
                decrementLimit={decrementLimit}
            />
        </div>
    );
};
