import 'isomorphic-fetch';

// @components
import ChannelsGrid from '../components/channels-grid';
import Layout from '../components/layout';

class PodcastsList extends React.Component {
    static async getInitialProps() {
        const response = await fetch('https://api.audioboom.com/channels/recommended');
        const { body: channels } = await response.json();
        return { channels };
    }

    render() {
        const { channels } = this.props;
        return (
            <Layout
                headerTitle="Recommended Podcasts"
                title="Recommended podcast"
            >
                <ChannelsGrid channels={channels} />
            </Layout>
        );
    }
};

export default PodcastsList;