import { FC, ChangeEvent } from 'react';
import { CommonTextArea } from '../../../../ui/inputs/CommonTextArea/CommonTextArea';

interface IStoryTextAreaProps {
    textAreaValue: string | undefined;
    textAreaOnChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const StoryTextArea: FC<IStoryTextAreaProps> = (props) => {
    const { textAreaValue, textAreaOnChange } = props;

    return (
        <div>
            <CommonTextArea
                textAreaPlaceholder="Tell something about storyline in your project..."
                textAreaLabel="Storyline:"
                textAreaSize={{ cols: 10 }}
                textAreaValue={textAreaValue}
                textAreaOnChange={textAreaOnChange}
            />
        </div>
    );
};
