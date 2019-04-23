import { Link } from '../../routes';
import slug from '../../helpers/slug';
import styles from './styles';

const Podcast = ({ podcast }) => (
    <Link
        route="podcast"
        params={{
            idChannel: podcast.channel.id,
            slugChannel: slug(podcast.channel.title),
            id: podcast.id,
            slug: slug(podcast.title)
        }}
    >
        <a className="podcast">
            <div className="podcast__title">{podcast.title}</div>
            <div className="podcast__duration">
                {Math.floor(podcast.duration / 60)}m
            </div>

            <style jsx>{styles}</style>
        </a>
    </Link>
);

export default Podcast;
