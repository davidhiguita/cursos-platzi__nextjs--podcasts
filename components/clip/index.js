import styles from './styles';

const Clip = ({ clip }) => (
    <div className="clip">
        <div className="clip__image">
        </div>

        <div className="clip__title">
            {clip.title}
        </div>

        <div className="clip__audio">
            <audio controls>
                <source src={clip.urls.high_mp3} />
            </audio>
        </div>

        <style jsx>{styles}</style>
    </div>
);

export default Clip;
