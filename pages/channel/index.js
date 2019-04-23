import 'isomorphic-fetch';

import ChannelsGrid from '../../components/channels-grid';
import Layout from '../../components/layout';
import Podcast from '../../components/podcast';
import ModalPodcast from '../../components/modal-podcast';

import styles from './styles';

class ChannelPage extends React.Component {
    state = {
        activePodcast: null
    };

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

    handleOpenPodcast = podcast => (event) => {
        event.preventDefault();
        this.setState({ activePodcast: podcast });
    }

    render() {
        const {
            channel,
            clips,
            series
        } = this.props;

        const { activePodcast } = this.state;

        return (
            <Layout
                headerTitle={channel.title}
                title="channel"
            >
                { activePodcast && (
                    <ModalPodcast
                        audio_clip={activePodcast}
                        onClose={this.handleOpenPodcast(null)}
                    />
                ) }
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
                            <Podcast key={clip.id} onClick={this.handleOpenPodcast} podcast={clip} />
                        ))}
                    </section>
        
                    <style jsx>{styles}</style>
                </div>
            </Layout>
        );
    }
}

export default ChannelPage;