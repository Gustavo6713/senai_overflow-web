import Header from "../../componentes/Header";
import Coments from "../../componentes/Coments";

import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home(){

    const posts = [{
        author: {
            name: "Gustavo Marques",
        },
        created_at: "10/10/2021",
        title: "Este é um post Js",
        description: "Js é uma linguagem de programação muito top",
        image: "https://images.memphistours.com/xlarge/54dad79c1e9a650dd95acea2cae6940d.jpg",
        gist: "https://github.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        coments: [
            {
                author: {
                    name: "Amanda Silva",
                },
                created_at: "11/10/2021",
                description: "Realmente JS é muito legal"
            }
        ]
    }];


    return (
        <>
            <Header />
            <Main>
                <nav>
                    Profile
                </nav>
                <FeedContainer>
                  {posts.map(post => <PostCard post={post}/>)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard({post}) {
    return (
        <Post>
            <header>
                <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user2-128.png"/>
                <div>
                    <strong>
                        por {post.author.name}
                    </strong>
                    <p>
                        em {post.created_at} às 08:20   
                    </p>
                </div>
                {post.gist && <GistIcon/>}
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src="https://images.memphistours.com/xlarge/54dad79c1e9a650dd95acea2cae6940d.jpg"/>
                <section>
                    {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => < Coments coment={coment} />)}
            </footer>
    </Post>
    )
} 

export default Home;