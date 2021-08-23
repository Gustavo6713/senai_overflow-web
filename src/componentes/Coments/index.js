import { Container } from "./styles";

function Coments({coment}) {
    return (
        <Container>
            <header>
                <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-128.png" />
                <strong>
                    por {coment.author.name}
                </strong>
                <p>
                    em {coment.created_at} às 08:51
                </p>
            </header>
            <p>{coment.description}</p>
        </Container>
    );
}

export default Coments;