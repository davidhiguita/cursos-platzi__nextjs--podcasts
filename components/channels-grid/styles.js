import css from 'styled-jsx/css';

export default css`
    .channels-grid {
        box-sizing: border-box;
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        grid-auto-rows: 160px;
        grid-template-rows: repeat(auto-fill, minmax(160px, 1fr));
        height: 100%;
        overflow-y: auto;
        padding: 15px;
    }
`;
