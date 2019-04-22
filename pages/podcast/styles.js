import css from 'styled-jsx/css';

export default css`
    .podcast-page {
        display: grid;
        grid-template-areas: "image"
                             "description"
                             "channel"
                             "audio";
        grid-template-columns: 1fr;
        grid-template-rows: 350px 180px 100px;
        position: relative;
    }

    .podcast-page__image {
        grid-area: image;
    }
    .podcast-page__image img {
        height: 100%;
        width: 100%;
    }

    .podcast-page__description {
        align-items: center;
        boz-sizing: border-box;
        display: flex;
        font-size: 1.2rem;
        grid-area: description;
        justify-content: center;
        overflow-y: auto;
        padding: 20px;
    }

    .podcast-page__channel {
        align-items: center;
        boz-sizing: border-box;
        display: flex;
        font-size: 2rem;
        font-weight: bold;
        grid-area: channel;
        justify-content: center;
        padding: 20px;
    }

    .podcast-page__audio {
        bottom: 2px;
        grid-area: audio;
        left: 2px;
        position: fixed;
        width: 100%;
    }
    .podcast-page__audio audio {
        width: 100%;
    }
`;