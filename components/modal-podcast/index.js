import 'isomorphic-fetch';
import Layout from '../../components/layout';
import styles from './styles';

const ModalPodcast = ({ audio_clip, onClose }) => (
    <Layout
        headerTitle={audio_clip.title}
        title={audio_clip.title}
    >
        <div className="modal-podcast">
            <div
                className="modal-podcast__close-button"
                onClick={onClose}
            >
                Close
            </div>
            <div className="modal-podcast__image">
                <img src={audio_clip.channel.urls.logo_image.original} alt={audio_clip.title} />
            </div>
            <div className="modal-podcast__description">
                {audio_clip.description}
            </div>
            <div className="modal-podcast__channel">
                {audio_clip.channel.title}
            </div>
            <div className="modal-podcast__audio">
                <audio controls autoPlay>
                    <source src={audio_clip.urls.high_mp3} />
                </audio>
            </div>

            <style jsx>{styles}</style>
        </div>
    </Layout>
);

export default ModalPodcast;
