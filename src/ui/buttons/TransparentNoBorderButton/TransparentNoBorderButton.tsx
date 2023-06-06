import { FC } from 'react';

interface ITransparentNoBorderButtonProps {
    btnText: string;
    btnClickHandler: () => void;
}

export const TransparentNoBorderButton: FC<ITransparentNoBorderButtonProps> = (props) => {
    const { btnText, btnClickHandler } = props;

    return (
        <div className="w-28 flex items-center justify-center">
            <button
                className="border-none text-accent text-xl font-nunito font-bold group transition"
                onClick={btnClickHandler}
            >
                {btnText}
                <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-accent" />
            </button>
        </div>
    );
};
