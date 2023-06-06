import { PageContentPanel } from '../../ui/panels/PageContentPanel/PageContentPanel';
import { CardsList } from '../../modules/CardsList';
// import { Filters } from '../../modules/Filters';
// import styles from './ExplorePage.module.scss';

export const ExplorePage = () => {
    return (
        <PageContentPanel
            content={
                <>
                    {/* <Filters /> */}
                    <CardsList />
                </>
            }
        />
    );
};
