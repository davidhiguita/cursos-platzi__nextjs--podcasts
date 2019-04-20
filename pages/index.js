import 'isomorphic-fetch';

// @components
import Link from 'next/link';
import Channel from '../components/channel';

// @styles
import styles from './styles';

class PodcastsList extends React.Component {
    static async getInitialProps() {
        const response = await fetch('https://api.audioboom.com/channels/recommended');
        const { body: channels } = await response.json();
        return { channels };
    }

    render() {
        const { channels } = this.props;
        return (
            <div className="podcasts">
                <header>Podcats</header>
                <section className="podcasts-list">
                    {channels.map(channel => (
                        <Channel key={channel.id} channel={channel} />
                    ))}
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
};

export default PodcastsList;