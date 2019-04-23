import css from 'styled-jsx/css';

export default css`
    .modal-podcast {
        display: grid;
        grid-template-areas: "image"
                             "description"
                             "channel"
                             "audio";
        grid-template-columns: 1fr;
        grid-template-rows: 350px 180px 100px;
        left: 0;
        position: fixed;
        top: 0;
        z-index: 10;
    }

    .modal-podcast__image {
        grid-area: image;
    }
    .modal-podcast__close-button {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        color: white;
        cursor: pointer;
        left: 10px;
        padding: 10px;
        position: absolute;
        top: 10px;
    }
    .modal-podcast__image img {
        height: 100%;
        width: 100%;
    }

    .modal-podcast__description {
        align-items: center;
        boz-sizing: border-box;
        display: flex;
        font-size: 1.2rem;
        grid-area: description;
        justify-content: center;
        overflow-y: auto;
        padding: 20px;
    }

    .modal-podcast__channel {
        align-items: center;
        boz-sizing: border-box;
        display: flex;
        font-size: 2rem;
        font-weight: bold;
        grid-area: channel;
        justify-content: center;
        padding: 20px;
    }

    .modal-podcast__audio {
        bottom: 2px;
        grid-area: audio;
        left: 2px;
        position: fixed;
        width: 100%;
    }
    .modal-podcast__audio audio {
        width: 100%;
    }
`;