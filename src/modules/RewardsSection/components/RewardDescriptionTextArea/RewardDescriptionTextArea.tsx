import { FC, ChangeEvent } from 'react';
import { CommonTextArea } from '../../../../ui/inputs/CommonTextArea/CommonTextArea';

interface IRewardDescriptionTextAreaProps {
    textAreaValue: string | undefined;
    textAreaOnChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const RewardDescriptionTextArea: FC<IRewardDescriptionTextAreaProps> = (props) => {
    const { textAreaValue, textAreaOnChange } = props;

    return (
        <div>
            <CommonTextArea
                textAreaPlaceholder="Enter reward description..."
                textAreaLabel="Description:"
                textAreaSize={{ cols: 5 }}
                textAreaValue={textAreaValue}
                textAreaOnChange={textAreaOnChange}
            />
        </div>
    );
};
