import dispatcher from '../dispatcher';

export function addPerson(data) {
  dispatcher.dispatch({
    type: "ADD_PERSON",
    data
  })
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    id
  })
}
