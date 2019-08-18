export const addItem = (item: {}): {} => ({
    type: 'ADD_ITEM',
    payload: item
});

export const deleteItem = (id: string): {} =>  ({
    type: 'DELETE_ITEM',
    payload: id
});
