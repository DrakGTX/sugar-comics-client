import { IconContainer } from '../../../../ui/panels/IconContainer/IconContainer';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import styles from './TopPanel.module.scss';

export const TopPanel = () => {
    return (
        <div className={styles.wrapper}>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <IconContainer icon={<YouTubeIcon />} />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <IconContainer icon={<FacebookIcon />} />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <IconContainer icon={<TwitterIcon />} />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <IconContainer icon={<InstagramIcon />} />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <IconContainer icon={<TelegramIcon />} />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <IconContainer icon={<LinkedInIcon />} />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                <IconContainer icon={<GitHubIcon />} />
            </a>
        </div>
    );
};
