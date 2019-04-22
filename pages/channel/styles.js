import css from 'styled-jsx/css';

export default css`
    .channel {
        display: grid;
        grid-template-areas: "channels audios";
        grid-template-columns: 1fr 250px;
        grid-template-rows: 1fr;
        height: calc(100vh - 60px);
    }

    .channel__title {
        background-color: #5c6bc0;
        align-items: center;
        color: white;
        display: flex;
        grid-area: title;
        font-size: 2rem;
        font-weight: bold;
        justify-content: center;
    }

    .channel__channels-list {
        grid-area: channels;
        overflow-y: auto;
        position: relative;
    }

    .channel__audios-list {
        border-left: solid 2px lightgray;
        grid-area: audios;
        overflow-y: auto;
        position: relative;
    }

    .not-found-info {
        align-items: center;
        color: gray;
        display: flex;
        font-size: 1.8rem;
        font-weight: bold;
        height: 100%;
        justify-content: center;
    }
`;