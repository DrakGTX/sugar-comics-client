import { FC } from 'react';
import { RemoveItemButton } from '../../../../ui/buttons/RemoveItemButton/RemoveItemButton';

interface IRemoveRewardButtonProps {
    onButtonClick: () => void;
}

export const RemoveRewardButton: FC<IRemoveRewardButtonProps> = (props) => {
    const { onButtonClick } = props;

    return <RemoveItemButton buttonText="Remove Reward" onButtonClick={onButtonClick} />;
};
