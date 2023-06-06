import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthModalHelper } from './helpers/AuthModalHelper';

//fonts
import './assets/fonts/RemachineScript_Personal_Use.ttf';
import './assets/fonts/CoreCircus.ttf';

//layout
import { Header } from './modules/Header';
import { Footer } from './modules/Footer';
import { ErrorPage } from './pages/ErrorPage';
import { ExplorePage } from './pages/ExplorePage';
import { SubmitPage } from './pages/SubmitPage';
import { ItemPage } from './pages/ItemPage';

//modal
import { AuthModal } from './components/AuthModal/AuthModal';

//styles
import styles from './App.module.scss';

function App() {
    const {
        navigateToSignInModalHandler,
        navigateToSignUpModalHandler,
        closeModalHandler,
        isSignInModalOpen,
        isSignUpModalOpen,
        openSignInModalHandler,
        openSignUpModalHandler
    } = AuthModalHelper();

    return (
        <div className={styles.app}>
            {(isSignInModalOpen || isSignUpModalOpen) && (
                <AuthModal
                    navigateToSignInModalHandler={navigateToSignInModalHandler}
                    navigateToSignUpModalHandler={navigateToSignUpModalHandler}
                    closeModalHandler={closeModalHandler}
                    isSignInModalOpen={isSignInModalOpen}
                    isSignUpModalOpen={isSignUpModalOpen}
                />
            )}
            <BrowserRouter>
                <Header
                    openSignInModalHandler={openSignInModalHandler}
                    openSignUpModalHandler={openSignUpModalHandler}
                />
                <Routes>
                    <Route path="/" element={<Navigate to="/explore" />} />
                    <Route path="/home" element={<Navigate to="/expore" />} />
                    <Route path="/explore" element={<ExplorePage />} />
                    <Route path="/submit" element={<SubmitPage />} />
                    <Route path="/explore/:id" element={<ItemPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
