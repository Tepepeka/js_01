function isPalybndrom(word){
  return word.toUpperCase() === word.split('').reverse().join('').toUpperCase()
}

console.log(isPalybndrom("Kayak"))
console.log(isPalybndrom("TepepeKa"))


const students = [
  {
    name: 'Jeremy',
    notes: [15,9,12,16]
  },
  {
    name: 'Cesar',
    notes: [18,8,14,11]
  },
  {
    name: 'Neron',
    notes: [4,17,20,10]
  },
  {
    name: 'AlexTheGreat',
    notes: [8,12,13,7,14]
  },
  {
    name: 'Attila',
    notes: [15,9,11,18]
  }
]

const moyenne = (notes) => {
  let sum = 0
  for (let note of notes) {
    sum += note
  }
  return sum / notes.length
}

const compareStudent = (a,b) => {
 return b.moyenne - a.moyenne
}

for (let student of students){
  student.moyenne = moyenne(student.notes)
  student.worst = Math.min(...student.notes)
  student.best = Math.max(...student.notes)
}

students.sort(compareStudent)

const formatStudent = (student) => {
  return `${student.name} got ${student.moyenne}, best note:${student.best}, worst note:${student.worst}`
}

console.log(`top 3 :
1:${formatStudent(students[0])}
2:${formatStudent(students[1])}
3:${formatStudent(students[2])}
`);


const sentence = "Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n’est pas mon cas, comme je disais là, puisque moi au contraire, j’ai pu ; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu’amour ! Et finalement, quand des gens me disent « Mais comment fais-tu pour avoir cette humanité ? », je leur réponds très simplement que c’est ce goût de l’amour, ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique... mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi..."
const frequencies = {}
const words = sentence
  .toLowerCase()
  .replaceAll(',','')
  .replaceAll('?','')
  .replaceAll('!','')
  .replaceAll(':','')
  .replaceAll('.','')
  .replaceAll(';','')
  .replaceAll('«','')
  .replaceAll('»','')
  .replaceAll('-',' ')
  .split(' ')
for(let word of words){
  if (word !== '') {
    if(frequencies[word]) {
      frequencies[word]++
    } else {
      frequencies[word] = 1
    }
  }
}
const frequenciesArray = []
for (let k in frequencies) {
  frequenciesArray.push({
    word: k,
    count: frequencies[k]
  })

}
frequenciesArray.sort((a,b) => b.count - a.count)

console.log(frequenciesArray);