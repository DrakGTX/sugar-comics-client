import { FC, ChangeEvent } from 'react';
import { CommonInput } from '../../../../ui/inputs/CommonInput/CommonInput';

interface IVideoInputProps {
    inputValue: string;
    inputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const VideoInput: FC<IVideoInputProps> = (props) => {
    const { inputValue, inputOnChangeHandler } = props;

    return (
        <div>
            <CommonInput
                inputLabel="Video:"
                inputValue={inputValue}
                inputPlaceholder="Provide link to video on youtube if you have it..."
                inputOnChangeHandler={inputOnChangeHandler}
            />
        </div>
    );
};
