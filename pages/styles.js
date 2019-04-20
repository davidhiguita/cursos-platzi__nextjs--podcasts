import css from 'styled-jsx/css';

export default css`
    .podcasts {
        display: grid;
        grid-template-areas: "header"
                             "list";
        grid-template-columns: 1fr;
        grid-template-rows: 60px 1fr;
        height: 100vh;
        width: 100vw;
    }

    header {
        align-items: center;
        background-color: blue;
        display: flex;
        color: white;
        font-size: 2rem;
        font-weight: bold;
        grid-area: header;
        justify-content: center;
    }

    .podcasts-list {
        box-sizing: border-box;
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-area: list;
        overflow-y: auto;
        padding: 15px;
    }
`;