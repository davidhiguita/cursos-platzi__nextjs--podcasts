import css from 'styled-jsx/css';

export default css`
    .channel {
        display: grid;
        grid-template-areas: "title"
                             "content";
        grid-template-columns: 1fr;
        grid-template-rows: 60px 1fr;
        height: 100vh;
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

    .channel__content {
        display: grid;
        grid-area: content;
        grid-template-areas: "childs"
                             "childs"
                             "clips";
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 1fr);
        overflow-y: auto;
    }

    .channel__childs {
        box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5);
        display: grid;
        grid-area: childs;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-template-rows: 1fr;
        overflow-y: auto;
    }

    .channel__clips {
        box-sizing: border-box;
        display: grid;
        grid-area: clips;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-template-rows: minmax(100px, 1fr);
        grid-auto-rows: minmax(100px, 1fr);
        overflow-y: auto;
        padding: 15px;
    }

    .not-found-info {
        display: flex;
        font-size: 1.8rem;
        font-weight: bold;
    }
`;