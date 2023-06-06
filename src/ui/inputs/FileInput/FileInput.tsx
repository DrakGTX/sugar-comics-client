import { FC, ChangeEvent } from 'react';
import styles from './FileInput.module.scss';

interface IFileInputProps {
    fileInputLabel: string;
    fileInputInfo: string;
    fileInputAcceptableFileTypes: string;
    handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput: FC<IFileInputProps> = (props) => {
    const { fileInputLabel, fileInputInfo, fileInputAcceptableFileTypes, handleFileUpload } = props;

    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor="file_input">
                {fileInputLabel}
            </label>
            <input
                className={styles.fileInput}
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                accept={fileInputAcceptableFileTypes}
                onChange={handleFileUpload}
            />
            <div className={styles.info} id="file_input_help">
                {fileInputInfo}
            </div>
        </div>
    );
};
