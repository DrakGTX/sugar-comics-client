import { FC, ChangeEvent } from 'react';
import { CommonTextArea } from '../../../../ui/inputs/CommonTextArea/CommonTextArea';

interface IDescriptionTextAreaProps {
    textAreaValue: string | undefined;
    textAreaOnChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const DescriptionTextArea: FC<IDescriptionTextAreaProps> = (props) => {
    const { textAreaValue, textAreaOnChange } = props;

    return (
        <div>
            <CommonTextArea
                textAreaPlaceholder="Enter your project description..."
                textAreaLabel="Description:"
                textAreaSize={{ cols: 5 }}
                textAreaValue={textAreaValue}
                textAreaOnChange={textAreaOnChange}
            />
        </div>
    );
};
