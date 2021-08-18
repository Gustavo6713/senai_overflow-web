import Header from "../../componentes/Header";
import Coments from "../../componentes/Coments";

import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home(){

    return (
        <>
            <Header />
            <Main>
                <nav>
                    Profile
                </nav>
                <FeedContainer>
                   <PostCard/>
                   <PostCard/>
                   <PostCard/>
                   <PostCard/>
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard() {
    return (
        <Post>
            <header>
                <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-128.png"/>
                <div>
                    <strong>
                        Gustavo Marques Fernandes
                    </strong>
                    <p>
                        em 18/08/2021 às 08:50
                    </p>
                </div>
                <GistIcon/>
            </header>
            <main>
                <div>
                    <h1>Título</h1>
                    <p>Descrição da postagem...</p>
                </div>
                <img src="https://images.memphistours.com/xlarge/54dad79c1e9a650dd95acea2cae6940d.jpg"/>
                <section>
                    <p>Front-end</p>
                    <p>CSS</p>
                    <p>JS</p>
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                <Coments/>
            </footer>
    </Post>
    )
}

export default Home;