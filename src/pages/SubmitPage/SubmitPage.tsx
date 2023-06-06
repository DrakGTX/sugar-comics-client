import { useState } from 'react';
import { PageContentPanel } from '../../ui/panels/PageContentPanel/PageContentPanel';
import { ProjectInfoSection } from '../../modules/ProjectInfoSection';
import { RewardsSection } from '../../modules/RewardsSection';
import { SubmitFormButton } from './components/SubmitFormButton/SubmitFormButton';
import styles from './SubmitPage.module.scss';
import { SuccessPanel } from './components/SuccessPanel/SuccessPanel';

export const SubmitPage = () => {
    const [itemId, setItemId] = useState<number | undefined>(undefined);

    const itemIdSetter = (itemId: number) => {
        setItemId(itemId);
    };

    return (
        <PageContentPanel
            content={
                <div className={styles.wrapper}>
                    <div className={styles.infoSection}>
                        PROJECT INFO SECTION
                        <hr className={styles.horizontalLine} />
                    </div>
                    <ProjectInfoSection itemId={itemId} />
                    <div className={styles.rewardsSection}>
                        REWARDS SECTION
                        <hr className={styles.horizontalLine} />
                    </div>
                    <RewardsSection />
                    {itemId ? (
                        <SuccessPanel />
                    ) : (
                        <div className={styles.submitBtnWrapper}>
                            <SubmitFormButton itemIdSetter={itemIdSetter} />
                        </div>
                    )}
                </div>
            }
        />
    );
};
