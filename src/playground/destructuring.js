const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {publisher: publisherName = 'Self published'} = book.publisher

console.log(publisherName)
//console log du publishername et default value de self published

const item = ['Cofee (hot)', , '$2.50']

const [cofee, small, medium, large] = item;

console.log(`A medium ${cofee} cost ${medium}`)