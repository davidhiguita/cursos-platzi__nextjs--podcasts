import css from 'styled-jsx/css';

export default css`
    .layout {
        display: grid;
        grid-template-areas: "layout-header"
                             "layout-content";
        grid-template-columns: 1fr;
        grid-template-rows: 60px 1fr;
        height: 100vh;
        width: 100vw;
    }

    .layout__header {
        align-items: center;
        background-color: #1e88e5;
        display: flex;
        grid-area: layout-header;
        justify-content: center;
    }

    .layout__header a {
        color: white;
        font-size: 1.8rem;
        text-decoration: none;
    }

    .layout__content {
        grid-area: layout-content;
        overflow-y: auto;
    }
`;
