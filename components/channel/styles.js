import css from 'styled-jsx/css';

export default css`
    .channel {
        border: solid green 2px;
        border-radius: 10px;
        cursor: pointer;
        display: grid;
        grid-template-areas: "image"
                             "title";
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 40px;
        text-decoration: none;
    }

    .channel:hover {
        box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
    }

    .channel__image {
        grid-area: image;
        position: relative;
    }

    .channel__image img {
        border-radius: 7px 7px 0 0;
        height: 100%;
        max-width: 100%;
        position: absolute;
        width: 100%;
    }

    .channel__title {
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 0 0 7px 7px;
        color: white;
        grid-area: title;
        text-align: center;
    }
`;