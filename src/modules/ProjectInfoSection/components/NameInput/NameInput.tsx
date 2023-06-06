import { FC, ChangeEvent } from 'react';
import { CommonInput } from '../../../../ui/inputs/CommonInput/CommonInput';

interface INameInputProps {
    inputValue: string;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const NameInput: FC<INameInputProps> = (props) => {
    const { inputValue, inputOnChangeHandler } = props;

    return (
        <div>
            <CommonInput
                inputLabel="Name:"
                inputValue={inputValue}
                inputPlaceholder="Enter your project name..."
                inputOnChangeHandler={inputOnChangeHandler}
            />
        </div>
    );
};
