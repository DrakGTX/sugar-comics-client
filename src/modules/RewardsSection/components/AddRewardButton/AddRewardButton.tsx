import { FC } from 'react';
import { AddItemButton } from '../../../../ui/buttons/AddItemButton/AddItemButton';

interface IAddRewardButtonProps {
    onButtonClick: () => void;
}

export const AddRewardButton: FC<IAddRewardButtonProps> = (props) => {
    const { onButtonClick } = props;

    return <AddItemButton buttonText="Add Reward" onButtonClick={onButtonClick} />;
};
