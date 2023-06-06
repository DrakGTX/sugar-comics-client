import { FC, ChangeEvent } from 'react';
import { CommonInput } from '../../../../ui/inputs/CommonInput/CommonInput';

interface IAuthorInputProps {
    inputValue: string;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AuthorInput: FC<IAuthorInputProps> = (props) => {
    const { inputValue, inputOnChangeHandler } = props;

    return (
        <div>
            <CommonInput
                inputLabel="Author:"
                inputValue={inputValue}
                inputPlaceholder="Enter author name..."
                inputOnChangeHandler={inputOnChangeHandler}
            />
        </div>
    );
};
