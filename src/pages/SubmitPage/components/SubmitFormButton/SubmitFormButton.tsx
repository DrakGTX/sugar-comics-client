import { FC } from 'react';
import { ISubmitProject } from '../../../../configs/interfaces/SubmitProjectInterface';
import { useAppSelector } from '../../../../services/hooks/useTypedSelector';
import { AccentRoundedButton } from '../../../../ui/buttons/AccentRoundedButton/AccentRoundedButton';
import axios from 'axios';
import styles from './SubmitFormButton.module.scss';

interface ISubmitFormButtonProps {
    itemIdSetter: (itemId: number) => void;
}

export const SubmitFormButton: FC<ISubmitFormButtonProps> = (props) => {
    const { itemIdSetter } = props;

    const submitProjectData: ISubmitProject = useAppSelector((state) => state.submitData);

    const sendData = async () => {
        const apiUrl = `http://localhost:5001/items/create`;

        try {
            const response = await axios.post(apiUrl, submitProjectData);
            if (response) {
                itemIdSetter(response.data.id);
            }
            console.log(response.data.id);
        } catch (err) {
            console.log(err);
        }
    };

    const onSubmitHandler = () => {
        sendData();
    };

    return (
        <div className={styles.wrapper}>
            <AccentRoundedButton bntText="Submit" onClickHandler={onSubmitHandler} />
        </div>
    );
};
