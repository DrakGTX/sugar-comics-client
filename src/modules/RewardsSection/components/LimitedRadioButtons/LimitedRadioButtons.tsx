import { FC, ChangeEvent } from 'react';

interface ILimitedRadioButtonsProps {
    index: number;
    isLimited: boolean;
    limitOptionOnChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const LimitedRadioButtons: FC<ILimitedRadioButtonsProps> = (props) => {
    const { index, isLimited, limitOptionOnChangeHandler } = props;

    return (
        <div className="grid grid-cols-2 space-x-2 rounded bg-stroke p-2">
            <div>
                <input
                    type="radio"
                    name={`first${index}`}
                    id={`first${index}`}
                    className="peer hidden"
                    value="unlimited"
                    checked={!isLimited}
                    onChange={limitOptionOnChangeHandler}
                />
                <label
                    htmlFor={`first${index}`}
                    className="block cursor-pointer select-none rounded p-2 font-semibold text-center transition-all hover:bg-violet-400 hover:text-white peer-checked:bg-accent peer-checked:font-bold peer-checked:text-white"
                >
                    Unlimited
                </label>
            </div>

            <div>
                <input
                    type="radio"
                    name={`second${index}`}
                    id={`second${index}`}
                    className="peer hidden"
                    value="limited"
                    checked={isLimited}
                    onChange={limitOptionOnChangeHandler}
                />
                <label
                    htmlFor={`second${index}`}
                    className="block cursor-pointer select-none font-semibold rounded p-2 text-center transition-all hover:bg-violet-400 hover:text-white peer-checked:bg-accent peer-checked:font-bold peer-checked:text-white"
                >
                    Limited
                </label>
            </div>
        </div>
    );
};
