import { FC, ChangeEvent } from 'react';
import { MoneyInput } from '../../../../ui/inputs/MoneyInput/MoneyInput';

interface IEstimatedInputProps {
    inputValue: number;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const EstimatedInput: FC<IEstimatedInputProps> = (props) => {
    const { inputValue, inputOnChangeHandler } = props;

    return (
        <div>
            <MoneyInput
                inputLabel="Desired amount of funding:"
                inputValue={inputValue}
                inputPlaceholder="Desired amount of funding..."
                inputOnChangeHandler={inputOnChangeHandler}
            />
        </div>
    );
};
