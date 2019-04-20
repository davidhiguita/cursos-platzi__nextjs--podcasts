import 'isomorphic-fetch';

import Channel from '../../components/channel';
import Clip from '../../components/clip';

import styles from './styles';

class ChannelPage extends React.Component {
    static async getInitialProps({ query }) {
        const { id: channelId } = query;
        const [resChannel, resSeries, resClips] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${channelId}`),
            fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`),
            fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`)
        ]);

        const dataChannel = await resChannel.json();
        const { channel } = dataChannel.body;
        const dataSeries = await resSeries.json();
        const { channels: series } = dataSeries.body;
        const dataClips = await resClips.json();
        const { audio_clips: clips } = dataClips.body;

        return { channel, clips, series };
    }

    render() {
        const {
            channel,
            clips,
            series
        } = this.props;

        return (
            <div className="channel">
                <section className="channel__title">{channel.title}</section>
                <section className="channel__content">
                    <section className="channel__childs">
                        {series.map(serie => (
                            <Channel key={serie.id} channel={serie} />
                        ))}
                        {!series.length && (
                            <div className="not-found-info">Not childs found</div>
                        )}
                    </section>
                    <section className="channel__clips">
                        {clips.map(clip => (
                            <Clip key={clip.id} clip={clip} />
                        ))}
                    </section>
                </section>
    
                <style jsx>{styles}</style>
                <style jsx global>{`
                    body {
                        height: 100vh;
                        margin: 0;
                        padding: 0;
                        width: 100vw;
                    }
                `}</style>
            </div>
        );
    }
}

export default ChannelPage;