import { useState, useEffect, ChangeEvent } from 'react';
import { useAppDispatch } from '../../services/hooks/useTypedSelector';
import { CHANGE_REWARDS_DATA } from '../../services/store/reducers/submitReducer';
import { IReward } from '../../configs/interfaces/SubmitProjectInterface';
import { AddRewardButton } from './components/AddRewardButton/AddRewardButton';
import { SingleRewardForm } from './components/SingleRewardForm/SingleRewardForm';
import styles from './RewardsSection.module.scss';

export const RewardsSection = () => {
    const dispatch = useAppDispatch();

    const [rewardsState, setRewardsState] = useState<IReward[]>([
        { name: '', price: 0, description: '', limited: false, limit: 0 }
    ]);

    useEffect(() => {
        const rewardsData = rewardsState.map((reward, index) => {
            return { ...reward, limit: reward.limit !== 0 ? reward.limit : null };
        });

        dispatch({ type: CHANGE_REWARDS_DATA, payload: rewardsData });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rewardsState]);

    const addRewardOnClickHandler = () => {
        setRewardsState([...rewardsState, { name: '', price: 0, description: '', limited: false, limit: 0 }]);
    };

    const generateRewardsSection = (index: number) => {
        const removeRewardOnClickHandler = () => {
            setRewardsState([...rewardsState.slice(0, index), ...rewardsState.slice(index + 1)]);
        };

        const rewardNameInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const updatedReward = { ...rewardsState[index], name: event.target.value };
            const newRewards = [...rewardsState.slice(0, index), updatedReward, ...rewardsState.slice(index + 1)];
            setRewardsState(newRewards);
        };

        const rewardPriceInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const updatedReward = {
                ...rewardsState[index],
                price: event.target.validity.valid ? Number(event.target.value) : rewardsState[index].price
            };
            const newRewards = [...rewardsState.slice(0, index), updatedReward, ...rewardsState.slice(index + 1)];
            setRewardsState(newRewards);
        };

        const rewardDescriptionTextAreaOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
            const updatedReward = { ...rewardsState[index], description: event.target.value };
            const newRewards = [...rewardsState.slice(0, index), updatedReward, ...rewardsState.slice(index + 1)];
            setRewardsState(newRewards);
        };

        const limitOptionOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            switch (event.target.value) {
                case 'limited':
                    const updatedRewardToLimited = { ...rewardsState[index], limited: true };
                    setRewardsState([
                        ...rewardsState.slice(0, index),
                        updatedRewardToLimited,
                        ...rewardsState.slice(index + 1)
                    ]);
                    break;
                case 'unlimited':
                    const updatedRewardToUnlimited = { ...rewardsState[index], limited: false };
                    setRewardsState([
                        ...rewardsState.slice(0, index),
                        updatedRewardToUnlimited,
                        ...rewardsState.slice(index + 1)
                    ]);
                    break;
                default:
                    const updatedRewardToDefault = { ...rewardsState[index], limited: false };
                    setRewardsState([
                        ...rewardsState.slice(0, index),
                        updatedRewardToDefault,
                        ...rewardsState.slice(index + 1)
                    ]);
                    break;
            }
        };

        const limitCounterInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const updatedReward = {
                ...rewardsState[index],
                limit: event.target.validity.valid ? Number(event.target.value) : rewardsState[index].limit
            };
            const newRewards = [...rewardsState.slice(0, index), updatedReward, ...rewardsState.slice(index + 1)];
            setRewardsState(newRewards);
        };

        const incrementLimit = () => {
            const updatedReward = {
                ...rewardsState[index],
                limit: rewardsState[index].limit + 1
            };
            const newRewards = [...rewardsState.slice(0, index), updatedReward, ...rewardsState.slice(index + 1)];
            setRewardsState(newRewards);
        };

        const decrementLimit = () => {
            if (rewardsState[index].limit > 0) {
                const updatedReward = {
                    ...rewardsState[index],
                    limit: rewardsState[index].limit - 1
                };
                const newRewards = [...rewardsState.slice(0, index), updatedReward, ...rewardsState.slice(index + 1)];
                setRewardsState(newRewards);
            }
        };

        return (
            <div key={index} className={styles.item}>
                <SingleRewardForm
                    removeRewardOnClickHandler={removeRewardOnClickHandler}
                    rewardNameInputValue={rewardsState[index].name}
                    rewardNameInputOnChangeHandler={rewardNameInputOnChangeHandler}
                    rewardPriceInputValue={rewardsState[index].price}
                    rewardPriceInputOnChangeHandler={rewardPriceInputOnChangeHandler}
                    isLimited={rewardsState[index].limited}
                    limitOptionOnChangeHandler={limitOptionOnChangeHandler}
                    index={index}
                    rewardDescriptionTextAreaValue={rewardsState[index].description}
                    rewardDescriptionTextAreaOnChange={rewardDescriptionTextAreaOnChange}
                    limitCounterInputValue={rewardsState[index].limit}
                    limitCounterInputOnChangeHandler={limitCounterInputOnChangeHandler}
                    incrementLimit={incrementLimit}
                    decrementLimit={decrementLimit}
                />
            </div>
        );
    };

    const rewardsSection = rewardsState.map((reward, index) => generateRewardsSection(index));

    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>{rewardsSection}</div>
            <div className={styles.item}>
                <AddRewardButton onButtonClick={addRewardOnClickHandler} />
            </div>
        </div>
    );
};
