import css from 'styled-jsx/css';

export default css`
    .podcast {
        align-items: flex-start;
        border-bottom: solid 1px gray;
        box-sizing: border-box;
        color: black;
        display: flex;
        flex-direction: column;
        height: 80px;
        justify-content: space-between;
        padding: 10px;
        text-decoration: none;
    }

    .podcast__title {
        font-weight: bold;
    }

    .podcast__duration {
        align-self: flex-end;
        background-color: #6ab7ff;
        border: solid 1px #6ab7ff;
        border-radius: 10px;
        color: white;
        padding: 3px;
    }
`;
