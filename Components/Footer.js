import styled from "styled-components"

const FooterStyles = styled.div`
    width: 100%;
    background-color: lightgray;
    padding: 2rem 1rem;
    margin-top: 1rem;

    p {
        margin: 0;
        padding: 0;
        font-size: 2rem;
        text-align: center;
    }
`;

export default function Footer() {
    return (
        <FooterStyles>
            <p>&copy;2021 Jereme Lentz</p>
        </FooterStyles>
    )
}
