import { FC, ChangeEvent } from 'react';
import styles from './CommonTextArea.module.scss';

interface ICommonTextAreaProps {
    textAreaPlaceholder: string;
    textAreaLabel: string;
    textAreaSize: { rows?: number; cols?: number };
    textAreaValue: string | undefined;
    textAreaOnChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const CommonTextArea: FC<ICommonTextAreaProps> = (props) => {
    const { textAreaPlaceholder, textAreaLabel, textAreaSize, textAreaValue, textAreaOnChange } = props;

    return (
        <div className={styles.wrapper}>
            <label className={styles.label}>{textAreaLabel}</label>
            <textarea
                placeholder={textAreaPlaceholder}
                className={styles.textarea}
                rows={textAreaSize.cols}
                cols={textAreaSize.cols}
                value={textAreaValue}
                onChange={textAreaOnChange}
            />
        </div>
    );
};
