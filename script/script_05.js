const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


function isRented(){
  let rented = true
  for (let book of books) {
    if (book.rented === 0)
    rented = false
  }
  console.log(`All books are rented more than 1 time : ${rented}`);
}

isRented()


function moreRented(){
  console.log(books.sort((a, b) => b.rented - a.rented)[0]);
}

moreRented()


function leastRented(){
  console.log(books.sort((a, b) => a.rented - b.rented)[0]);
}

leastRented()


function book873495(){
  console.log(books.find(book => book.id === 873495));
}

book873495()


function bookDelete133712AndSort(){
  const idToDelete = 133712;
  const books2 = books.filter(book => book.id !== idToDelete);
  books2.sort(function(a,b) {
  return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;
  })
  console.log(books2);
}

bookDelete133712AndSort()

