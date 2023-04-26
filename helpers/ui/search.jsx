export const searchQuestionsWord = (array, word) => {
  if (word === "") {
    return array;
  } else {
    let newArray = array.filter(
      (item) =>
        item.titulo.toLowerCase().indexOf(word.toLowerCase()) > -1 ||
        item.contenido.toLowerCase().indexOf(word.toLowerCase()) > -1
    );
    return newArray;
  }
};
