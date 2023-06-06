import { FC, useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../services/hooks/useTypedSelector';
import { CHANGE_PROJECT_INFO_DATA } from '../../services/store/reducers/submitReducer';
import { IProjectInfo } from '../../configs/interfaces/SubmitProjectInterface';
import { NameInput } from './components/NameInput/NameInput';
import { AuthorInput } from './components/AuthorInput/AuthorInput';
import { DescriptionTextArea } from './components/DescriptionTextArea/DescriptionTextArea';
import { EstimatedInput } from './components/EstimatedInput/EstimatedInput';
import { VideoInput } from './components/VideoInput/VideoInput';
import { StoryTextArea } from './components/StoryTextArea/StoryTextArea';
import { ImageUploadInput } from './components/ImageUploadInput/ImageUploadInput';
import styles from './ProjectInfoSection.module.scss';

interface IProjectInfoSectionProps {
    itemId: number | undefined;
}

export const ProjectInfoSection: FC<IProjectInfoSectionProps> = (props) => {
    const { itemId } = props;
    const dispatch = useAppDispatch();

    const [projectInfoData, setProjectInfoData] = useState<IProjectInfo>({
        name: '',
        image: null,
        author: '',
        description: '',
        story: '',
        video: '',
        estimated: 0
    });

    const sendImage = async (itemId: number) => {
        if (projectInfoData.image) {
            const apiUrl = 'http://localhost:5004/images/create';

            const formData = new FormData();
            formData.append('itemId', itemId.toString());
            formData.append('image', projectInfoData.image);

            try {
                const response = await axios.post(apiUrl, formData);

                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (itemId) {
            sendImage(itemId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId]);

    useEffect(() => {
        const data = { ...projectInfoData };
        delete data.image;
        dispatch({ type: CHANGE_PROJECT_INFO_DATA, payload: data });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectInfoData]);

    const nameInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setProjectInfoData({ ...projectInfoData, name: event.target.value });
    };

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setProjectInfoData({ ...projectInfoData, image: event.target.files[0] });
        }
    };

    const authorInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setProjectInfoData({ ...projectInfoData, author: event.target.value });
    };

    const descriptionTextAreaOnChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setProjectInfoData({ ...projectInfoData, description: event.target.value });
    };

    const estimatedInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setProjectInfoData({
            ...projectInfoData,
            estimated: event.target.validity.valid ? Number(event.target.value) : projectInfoData.estimated
        });
    };

    const videoInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setProjectInfoData({ ...projectInfoData, video: event.target.value });
    };

    const storyTextAreaOnChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setProjectInfoData({ ...projectInfoData, story: event.target.value });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <NameInput inputValue={projectInfoData.name} inputOnChangeHandler={nameInputOnChangeHandler} />
            </div>
            <div className={styles.item}>
                <ImageUploadInput handleImageUpload={handleImageUpload} />
            </div>
            <div className={styles.item}>
                <AuthorInput inputValue={projectInfoData.author} inputOnChangeHandler={authorInputOnChangeHandler} />
            </div>
            <div className={styles.item}>
                <DescriptionTextArea
                    textAreaValue={projectInfoData.description}
                    textAreaOnChange={descriptionTextAreaOnChangeHandler}
                />
            </div>
            <div className={styles.item}>
                <StoryTextArea textAreaValue={projectInfoData.story} textAreaOnChange={storyTextAreaOnChangeHandler} />
            </div>
            <div className={styles.item}>
                <VideoInput inputValue={projectInfoData.video} inputOnChangeHandler={videoInputOnChangeHandler} />
            </div>
            <div className={styles.item}>
                <EstimatedInput
                    inputValue={projectInfoData.estimated}
                    inputOnChangeHandler={estimatedInputOnChangeHandler}
                />
            </div>
        </div>
    );
};
