import { FC, ChangeEvent } from 'react';
import { MoneyInput } from '../../../../ui/inputs/MoneyInput/MoneyInput';

interface IRewardPriceInputProps {
    inputValue: number;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RewardPriceInput: FC<IRewardPriceInputProps> = (props) => {
    const { inputValue, inputOnChangeHandler } = props;

    return (
        <div>
            <MoneyInput
                inputLabel="Price:"
                inputValue={inputValue}
                inputPlaceholder="How much money must be funded to receive this award..."
                inputOnChangeHandler={inputOnChangeHandler}
            />
        </div>
    );
};
