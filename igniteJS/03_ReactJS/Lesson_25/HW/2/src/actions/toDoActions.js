import dispatcher from '../dispatcher'; 

// создать элемент 
export function createItem(item) {
    dispatcher.dispatch({
        type: 'CREATE_ITEM', 
        item
    })
}

// удалить элемент
export function removeItem(id) {
    dispatcher.dispatch({
        type: 'REMOVE_ITEM', 
        id
    })
} 

// редактировать элемент 
export function editStart(id) {
    dispatcher.dispatch({
        type: 'EDIT_START', 
        id
    })
} 

export function editEnd(item) {
    dispatcher.dispatch({
        type: 'EDIT_END', 
        item
      })
}


export function filterTasks(value) {
    dispatcher.dispatch({
        type: 'FILTER',
        value
   })
}

