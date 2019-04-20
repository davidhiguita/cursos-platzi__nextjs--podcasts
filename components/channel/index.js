import Link from 'next/link';

import styles from './styles';

const Channel = ({ channel }) => (
    <Link href={`/channel?id=${channel.id}`}>
        <a className="channel">
            <div className="channel__image">
                <img src={channel.urls.logo_image.original} alt="channel" />
            </div>

            <div className="channel__title">
                {channel.title}
            </div>

            <style jsx>{styles}</style>
        </a>
    </Link>
);

export default Channel;
