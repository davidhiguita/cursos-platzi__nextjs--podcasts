import 'isomorphic-fetch';

import ChannelsGrid from '../../components/channels-grid';
import Layout from '../../components/layout';
import Podcast from '../../components/podcast';

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
            <Layout
                headerTitle={channel.title}
                title="channel"
            >
                <div className="channel">
                    <section className="channel__channels-list">
                        {!!series.length && (
                            <ChannelsGrid channels={series} />
                        )}
                        {!series.length && (
                            <div className="not-found-info">Not childs found</div>
                        )}
                    </section>

                    <section className="channel__audios-list">
                        {clips.map(clip => (
                            <Podcast key={clip.id} podcast={clip} />
                        ))}
                    </section>
        
                    <style jsx>{styles}</style>
                </div>
            </Layout>
        );
    }
}

export default ChannelPage;