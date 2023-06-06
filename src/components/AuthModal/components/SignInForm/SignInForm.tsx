import { FC, useState, ChangeEvent } from 'react';
import { EmailInput } from '../../../../ui/inputs/EmailInput/EmailInput';
import { PasswordInput } from '../../../../ui/inputs/PasswordInput/PasswordInput';
import { AccentRoundedButton } from '../../../../ui/buttons/AccentRoundedButton/AccentRoundedButton';
import { OrContainer } from '../../../../ui/panels/OrContainer/OrContainer';
import { ContinueWithGoogleButton } from '../../../../ui/buttons/ContinueWithGoogleButton/ContinueWithGoogleButton';
import styles from './SignInStyles.module.scss';

interface ISignInFormProps {
    navigateToSignUpModalHandler: () => void;
}

export const SignInForm: FC<ISignInFormProps> = (props) => {
    const { navigateToSignUpModalHandler } = props;

    const [valuesLogIn, setValuesLogIn] = useState({
        emailLogIn: '',
        passwordLogIn: ''
    });

    //input value change event handlers
    const emailInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValuesLogIn({ ...valuesLogIn, emailLogIn: event.target.value });
    };

    const passInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValuesLogIn({ ...valuesLogIn, passwordLogIn: event.target.value });
    };

    const onSubmitBtnHandler = () => {
        const emailInput = document.getElementById('username') as HTMLInputElement | null;
        const passInput = document.getElementById('password') as HTMLInputElement | null;
        if (emailInput && passInput) {
            if (emailInput.validity.valid && passInput.validity.valid) {
                console.log('sign up sumbit event fired');
            } else {
                if (!emailInput.validity.valid) {
                    emailInput.focus();
                }
                if (emailInput.validity.valid && !passInput.validity.valid) {
                    passInput.focus();
                }
            }
        }
    };

    const onForgotClickHandler = () => {
        console.log('forgot password event fired');
    };

    const onContinueWithGoogle = () => {
        console.log('continue with google fired');
    };

    return (
        <div className={styles.wrapper}>
            <EmailInput inputValue={valuesLogIn.emailLogIn} emailInputOnChangeHandler={emailInputOnChangeHandler} />
            <PasswordInput
                inputIdandName="password"
                inputAutoComplete="current-password"
                inputPlaceholder="Enter your password"
                inputPattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,20}$"
                inputValue={valuesLogIn.passwordLogIn}
                passInputOnChangeHandler={passInputOnChangeHandler}
            />
            <div className={styles.links}>
                <button className={`${styles.linkItem} group`} onClick={navigateToSignUpModalHandler}>
                    Sign Up
                    <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-accent" />
                </button>
                <button className={`${styles.linkItem} group`} onClick={onForgotClickHandler}>
                    Forgot password?
                    <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-accent" />
                </button>
            </div>
            <AccentRoundedButton bntText="SIGN IN" onClickHandler={onSubmitBtnHandler} />
            <OrContainer />
            <ContinueWithGoogleButton onClickHandler={onContinueWithGoogle} />
        </div>
    );
};
