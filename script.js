const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv"
            },
            {
                title: "O homem mais rico da bibilônia",
                author: "George"
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T."
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituvel",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade",
                author: "Augusto Cury"
            }
        ]
    },
];


const booksAmount = () => {
    for(let dados of booksByCategory){
        console.log("Categoria " + dados.category) 
        console.log("Total de livros: " + dados.books.length)
    }
}

const authorAmount = () => {
    let authors = 0;

    for (let dados of booksByCategory)
        for(let book of dados.books)
            if('author' in book)
                authors++

    console.log("Total de autores: " + authors)
    
}

function booksOfAugustoCury() {
    for (let dados of booksByCategory)
        for(let book of dados.books)
            if(book.author == "Augusto Cury")
                console.log(book.title)
}


//_____________________________________________________

let palavrasSemRepeticao =  [];

document.getElementById('inputfile').addEventListener('change', function() {
              
    var fr=new FileReader();

    
    fr.onload=function(){
        let palavrasDoEpComEspaco = fr.result.replace(/[0-9]/g, '').replace(/\:/g, '').replace(/\,/g, '').replace(/\-/g, '').replace(/\./g, '').replace(/\>/g, '').replace(/\?/g, '').replace(/\!/g, '').replace(/\n/g, ' ').replace(/\s{2,}/g, ' ').toLowerCase()
        let todasPalavrasSplitado = palavrasDoEpComEspaco.split(" ")

        for(let palavra of todasPalavrasSplitado){
            if(palavrasSemRepeticao.indexOf(palavra) == -1){
                palavrasSemRepeticao.push(palavra)
            }
        }

    console.log(palavrasSemRepeticao.length)



        document.getElementById('output').textContent=palavrasSemRepeticao.length
    }



              
    fr.readAsText(this.files[0]);
})




