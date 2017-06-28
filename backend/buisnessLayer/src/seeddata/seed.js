import BookService from '../services/bookservice'
import AuthorService from '../services/authorservice'
import Book from '../entities/book'
import Author from '../entities/author'


var adjectives = ["adamant", "adroit", "amatory", "animistic", "antic", "arcadian", "baleful", "bellicose", "bilious", "boorish", "calamitous", "caustic", "cerulean", "comely", "concomitant", "contumacious", "corpulent", "crapulous", "defamatory", "didactic", "dilatory", "dowdy", "efficacious", "effulgent", "egregious", "endemic", "equanimous", "execrable", "fastidious", "feckless", "fecund", "friable", "fulsome", "garrulous", "guileless", "gustatory", "heuristic", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "intransigent", "inveterate", "invidious", "irksome", "jejune", "jocular", "judicious", "lachrymose", "limpid", "loquacious", "luminous", "mannered", "mendacious", "meretricious", "minatory", "mordant", "munificent", "nefarious", "noxious", "obtuse", "parsimonious", "pendulous", "pernicious", "pervasive", "petulant", "platitudinous", "precipitate", "propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent", "rhadamanthine", "risible", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic", "serpentine", "spasmodic", "strident", "taciturn", "tenacious", "tremulous", "trenchant", "turbulent", "turgid", "ubiquitous", "uxorious", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
var nouns = ["ninja", "chair", "pancake", "statue", "unicorn", "rainbows", "laser", "senor", "bunny", "captain", "nibblets", "cupcake", "carrot", "gnomes", "glitter", "potato", "salad", "toejam", "curtains", "beets", "toilet", "exorcism", "stick figures", "mermaid eggs", "sea barnacles", "dragons", "jellybeans", "snakes", "dolls", "bushes", "cookies", "apples", "ice cream", "ukulele", "kazoo", "banjo", "opera singer", "circus", "trampoline", "carousel", "carnival", "locomotive", "hot air balloon", "praying mantis", "animator", "artisan", "artist", "colorist", "inker", "coppersmith", "director", "designer", "flatter", "stylist", "leadman", "limner", "make-up artist", "model", "musician", "penciller", "producer", "scenographer", "set decorator", "silversmith", "teacher", "auto mechanic", "beader", "bobbin boy", "clerk of the chapel", "filling station attendant", "foreman", "maintenance engineering", "mechanic", "miller", "moldmaker", "panel beater", "patternmaker", "plant operator", "plumber", "sawfiler", "shop foreman", "soaper", "stationary engineer", "wheelwright", "woodworkers"];
var genre = ["love", "horror", "finance", "politics", "science"]
var gender = ["male","female"]


class Seed{


    randomEl(list) {
        let i = Math.floor(Math.random() * list.length);
        return list[i];
    }

    randomNum (max)
    {
        return Math.floor(Math.random() * max);
    }


    GenerateHundredAuthors ()
    {
        const TOTAL = 100;

        let authorservice = new AuthorService();

        let author = null;
        let authors = [];

        for(let i=0; i<TOTAL; i++)
        {
            author = new Author();

            author.name= this.randomEl(adjectives)+' '+this.randomEl(nouns)
            author.gender = this.randomEl(gender)
            authors.push(author);
        }

        authorservice.Save(authors);

        return  authorservice;

    }

    
    GenerateOneMillionBooks(authorservice)
    {
        const TOTAL = 100;

        let bookservice = new BookService();

        let book = null;
        let books = [];
        for(let i=0; i<TOTAL; i++)
        {
            book = new Book();

            book.name= this.randomEl(adjectives)+' '+this.randomEl(nouns)
            book.publishdate = Date.now
            book.genre = this.randomEl(genre)
             
            book.author = authorservice.GetAt(this.randomNum(authorservice.Count()))

            books.push(book);
        }

        bookservice.Save(books); 

        return bookservice;
    }
    
}

const aux = new Seed()
    
aux.GenerateOneMillionBooks( aux.GenerateHundredAuthors() )