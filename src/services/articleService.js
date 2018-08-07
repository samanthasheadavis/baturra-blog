import { firebase } from ".";

export const AddArticle = articleObj => {
  return firebase.db
    .collection("articles")
    .add({
      title: articleObj.title,
      author: articleObj.author,
      body: articleObj.body,
      created_at: new Date()
    })
    .then(function(docRef) {
      return docRef.id;
    })
    .catch(function(error) {
      return error;
    });
};

export const UpdateArticle = (articleObj, id) => {
  return firebase.db
    .collection("articles")
    .doc(id)
    .set(
      {
        title: articleObj.title,
        author: articleObj.author,
        body: articleObj.body,
        updated_at: new Date()
      },
      { merge: true }
    )
    .then(function(docRef) {
      return docRef.id;
    })
    .catch(function(error) {
      return error;
    });
};
