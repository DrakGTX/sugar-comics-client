import { useState } from 'react';

export const AuthModalHelper = () => {
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    // open modals handlers
    const openSignInModalHandler = () => {
        setIsSignInModalOpen(true);
    };

    const openSignUpModalHandler = () => {
        setIsSignUpModalOpen(true);
    };

    // close modals handler
    const closeModalHandler = () => {
        isSignInModalOpen && setIsSignInModalOpen(false);
        isSignUpModalOpen && setIsSignUpModalOpen(false);
    };

    // navigate through modals event handlers
    const navigateToSignInModalHandler = () => {
        setIsSignUpModalOpen(false);
        setIsSignInModalOpen(true);
    };

    const navigateToSignUpModalHandler = () => {
        setIsSignInModalOpen(false);
        setIsSignUpModalOpen(true);
    };

    return {
        isSignInModalOpen,
        isSignUpModalOpen,
        openSignInModalHandler,
        openSignUpModalHandler,
        closeModalHandler,
        navigateToSignInModalHandler,
        navigateToSignUpModalHandler
    };
};
