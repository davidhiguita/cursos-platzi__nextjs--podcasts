import css from 'styled-jsx/css';

export default css`
    .clip {
        border: solid green 2px;
        border-radius: 10px;
        cursor: pointer;
        padding: 5px;
    }

    .clip audio {
        max-width: 90%;
    }

    .clip:hover {
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
    }

    .clip__title {
        color: black;
        padding: 5px;
        text-align: center;
    }
`;