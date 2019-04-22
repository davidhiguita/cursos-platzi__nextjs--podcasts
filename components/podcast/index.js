import Link from 'next/link';
import styles from './styles';

const Podcast = ({ podcast }) => (
    <Link href={`/podcast?id=${podcast.id}`}>
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
