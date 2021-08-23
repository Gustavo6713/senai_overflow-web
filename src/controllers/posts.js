const { UPDATE } = require("sequelize/types/lib/query-types");


module.exports = {
    index(req, res){

            const posts = [{
                author: {
                    name: "Gustavo",
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
                            name: "Amanda",
                        },
                        created_at: "11/10/2021",
                        description: "Realmente JS é muito legal"
                    }
                ]
            }];
        res.send(posts);
    },

    find(req, res) {

    },

    store(req, res) {

    },

    update(req, res) {

    },

    delete(req, res) {

    }
}