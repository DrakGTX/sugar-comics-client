import { FC, ChangeEvent } from 'react';
import { FileInput } from '../../../../ui/inputs/FileInput/FileInput';

interface IImageUploadInputProps {
    handleImageUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUploadInput: FC<IImageUploadInputProps> = (props) => {
    const { handleImageUpload } = props;

    return (
        <FileInput
            fileInputInfo="JPG"
            fileInputLabel="Upload project cover image:"
            fileInputAcceptableFileTypes="image/jpeg"
            handleFileUpload={handleImageUpload}
        />
    );
};
