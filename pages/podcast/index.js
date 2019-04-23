import 'isomorphic-fetch';
import Layout from '../../components/layout';
import styles from './styles';

export default class Podcast extends React.PureComponent {
    static async getInitialProps({ query }) {
        const { id: podcastId } = query;
        const resClip = await fetch(`https://api.audioboom.com/audio_clips/${podcastId}.mp3`)
        const { body: { audio_clip } } = await resClip.json();
        return { audio_clip };
    }

    render() {
        const { audio_clip } = this.props;

        return (
            <Layout
                headerTitle={audio_clip.title}
                title={audio_clip.title}
            >
                <div className="podcast-page">
                    <div className="podcast-page__image">
                        <img src={audio_clip.channel.urls.logo_image.original} alt={audio_clip.title} />
                    </div>
                    <div className="podcast-page__description">
                        {audio_clip.description}
                    </div>
                    <div className="podcast-page__channel">
                        {audio_clip.channel.title}
                    </div>
                    <div className="podcast-page__audio">
                        <audio controls autoPlay>
                            <source src={audio_clip.urls.high_mp3} />
                        </audio>
                    </div>

                    <style jsx>{styles}</style>
                </div>
            </Layout>
        );
    }
}