import { Link } from '../../routes';
import slug from '../../helpers/slug';

import styles from './styles';

const Channel = ({ channel }) => (
    <Link
        route="channel"
        params={{
            id: channel.id,
            slug: slug(channel.title)
        }}
    >
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
