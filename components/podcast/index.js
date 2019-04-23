// import { Link } from '../../routes';
// import Link from 'next/link';
import slug from '../../helpers/slug';
import styles from './styles';

const Podcast = ({ onClick, podcast }) => (
    <a
        className="podcast"
        // href={`/${slug(podcast.channel.title)}.${podcast.channel.id}/${slug(podcast.title)}.${podcast.id}`}
        onClick={onClick(podcast)}
    >
        <div className="podcast__title">{podcast.title}</div>
        <div className="podcast__duration">
            {Math.floor(podcast.duration / 60)}m
        </div>

        <style jsx>{styles}</style>
    </a>
);

export default Podcast;
