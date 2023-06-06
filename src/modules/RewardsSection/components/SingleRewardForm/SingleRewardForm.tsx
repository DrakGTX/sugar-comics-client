import { FC, ChangeEvent } from 'react';
import { RewardNameInput } from '../RewardNameInput/RewardNameInput';
import { RewardPriceInput } from '../RewardPriceInput/RewardPriceInput';
import styles from './SingleRewardForm.module.scss';
import { RemoveRewardButton } from '../RemoveRewardButton/RemoveRewardButton';
import { LimitedRadioButtons } from '../LimitedRadioButtons/LimitedRadioButtons';
import { RewardDescriptionTextArea } from '../RewardDescriptionTextArea/RewardDescriptionTextArea';
import { LimitCountInput } from '../LimitCounterInput/LimitCounterInput';

interface ISingleRewardFormProps {
    removeRewardOnClickHandler: () => void;
    rewardNameInputValue: string;
    rewardNameInputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    rewardPriceInputValue: number;
    rewardPriceInputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    isLimited: boolean;
    limitOptionOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    index: number;
    rewardDescriptionTextAreaValue: string | undefined;
    rewardDescriptionTextAreaOnChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    limitCounterInputValue: number;
    limitCounterInputOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    incrementLimit: () => void;
    decrementLimit: () => void;
}

export const SingleRewardForm: FC<ISingleRewardFormProps> = (props) => {
    const {
        removeRewardOnClickHandler,
        rewardNameInputValue,
        rewardNameInputOnChangeHandler,
        rewardPriceInputValue,
        rewardPriceInputOnChangeHandler,
        isLimited,
        limitOptionOnChangeHandler,
        index,
        rewardDescriptionTextAreaValue,
        rewardDescriptionTextAreaOnChange,
        limitCounterInputValue,
        limitCounterInputOnChangeHandler,
        incrementLimit,
        decrementLimit
    } = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <RewardNameInput
                    inputValue={rewardNameInputValue}
                    inputOnChangeHandler={rewardNameInputOnChangeHandler}
                />
            </div>
            <div className={styles.item}>
                <RewardDescriptionTextArea
                    textAreaValue={rewardDescriptionTextAreaValue}
                    textAreaOnChange={rewardDescriptionTextAreaOnChange}
                />
            </div>
            <div className={styles.item}>
                <RewardPriceInput
                    inputValue={rewardPriceInputValue}
                    inputOnChangeHandler={rewardPriceInputOnChangeHandler}
                />
            </div>
            <div className={styles.item}>
                <LimitedRadioButtons
                    isLimited={isLimited}
                    limitOptionOnChangeHandler={limitOptionOnChangeHandler}
                    index={index}
                />
            </div>
            {isLimited && (
                <div className={styles.item}>
                    <LimitCountInput
                        limitCounterInputValue={limitCounterInputValue}
                        limitCounterInputOnChangeHandler={limitCounterInputOnChangeHandler}
                        incrementLimit={incrementLimit}
                        decrementLimit={decrementLimit}
                    />
                </div>
            )}
            <div className={styles.remove}>
                <RemoveRewardButton onButtonClick={removeRewardOnClickHandler} />
            </div>
        </div>
    );
};
