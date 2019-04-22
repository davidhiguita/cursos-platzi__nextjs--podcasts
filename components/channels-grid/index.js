import Channel from '../channel';

import styles from './styles';

const ChannelsGrid = ({ channels }) => (
    <div className="channels-grid">
        {channels.map(channel => (
            <Channel key={channel.id} channel={channel} />
        ))}

        <style jsx>{styles}</style>
    </div>
);

export default ChannelsGrid;
