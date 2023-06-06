import { FC, useState, ChangeEvent } from 'react';
import { EmailInput } from '../../../../ui/inputs/EmailInput/EmailInput';
import { PasswordInput } from '../../../../ui/inputs/PasswordInput/PasswordInput';
import { AccentRoundedButton } from '../../../../ui/buttons/AccentRoundedButton/AccentRoundedButton';
import { OrContainer } from '../../../../ui/panels/OrContainer/OrContainer';
import { ContinueWithGoogleButton } from '../../../../ui/buttons/ContinueWithGoogleButton/ContinueWithGoogleButton';
import styles from './SignUpForm.module.scss';

interface ISignUpFormProps {
    navigateToSignInModalHandler: () => void;
}

export const SignUpForm: FC<ISignUpFormProps> = (props) => {
    const { navigateToSignInModalHandler } = props;

    const [valuesSignUp, setValuesSignUp] = useState({
        emailSignUp: '',
        passwordSignUp: '',
        confirmSignUp: ''
    });

    //input value change event handlers
    const emailInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValuesSignUp({ ...valuesSignUp, emailSignUp: event.target.value });
    };

    const passInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValuesSignUp({ ...valuesSignUp, passwordSignUp: event.target.value });
    };

    const confirmInputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValuesSignUp({ ...valuesSignUp, confirmSignUp: event.target.value });
    };

    const onSubmitBtnHandler = () => {
        const emailInput = document.getElementById('username') as HTMLInputElement | null;
        const passInput = document.getElementById('password') as HTMLInputElement | null;
        const confirmInput = document.getElementById('new-password-confirm') as HTMLInputElement | null;
        if (emailInput && passInput && confirmInput) {
            if (emailInput.validity.valid && passInput.validity.valid && confirmInput.validity.valid) {
                console.log('sign up sumbit event fired');
            } else {
                if (!emailInput.validity.valid) {
                    emailInput.focus();
                }
                if (emailInput.validity.valid && !passInput.validity.valid) {
                    passInput.focus();
                }
                if (emailInput.validity.valid && passInput.validity.valid && !confirmInput.validity.valid) {
                    confirmInput.focus();
                }
            }
        }
    };

    const onContinueWithGoogle = () => {
        console.log('continue with google fired');
    };

    return (
        <div className={styles.wrapper}>
            <EmailInput inputValue={valuesSignUp.emailSignUp} emailInputOnChangeHandler={emailInputOnChangeHandler} />
            <PasswordInput
                inputIdandName="password"
                inputAutoComplete="new-password"
                inputPlaceholder="Enter your password"
                inputPattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,20}$"
                inputValue={valuesSignUp.passwordSignUp}
                passInputOnChangeHandler={passInputOnChangeHandler}
            />
            <PasswordInput
                inputIdandName="new-password-confirm"
                inputAutoComplete="new-password"
                inputPlaceholder="Confirm your password"
                inputPattern={valuesSignUp.passwordSignUp}
                inputValue={valuesSignUp.confirmSignUp}
                passInputOnChangeHandler={confirmInputOnChangeHandler}
            />
            <div className={styles.links}>
                <button className={`${styles.linkItem} group`} onClick={navigateToSignInModalHandler}>
                    Sign In
                    <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-accent" />
                </button>
            </div>
            <AccentRoundedButton bntText="SIGN UP" onClickHandler={onSubmitBtnHandler} />
            <OrContainer />
            <ContinueWithGoogleButton onClickHandler={onContinueWithGoogle} />
        </div>
    );
};
