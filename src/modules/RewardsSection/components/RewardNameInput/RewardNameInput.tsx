import { FC, ChangeEvent } from 'react';
import { CommonInput } from '../../../../ui/inputs/CommonInput/CommonInput';

interface IRewardNameInputProps {
    inputValue: string;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RewardNameInput: FC<IRewardNameInputProps> = (props) => {
    const { inputValue, inputOnChangeHandler } = props;

    return (
        <div>
            <CommonInput
                inputLabel="Reward name:"
                inputValue={inputValue}
                inputPlaceholder="Enter reward name..."
                inputOnChangeHandler={inputOnChangeHandler}
            />
        </div>
    );
};
