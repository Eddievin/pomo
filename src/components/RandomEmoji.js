const emojis = ['π', 'π', 'π', 'πͺ', 'π€ ', 'πΎ', 'π¦Έπ½ββοΈ', 'π§π½', 'π€', 'π€', 'βΊοΈ', 'π']
const random = Math.floor(Math.random() * emojis.length)

export default () => {
  return emojis[random]
}
