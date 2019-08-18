//@ts-check

/**
 * Add Item to store
 * @function addItem
 * @param {object} item - Item object to be added
 * @returns {object} - Action object
 */
export const addItem = (item) => ({
    type: 'ADD_ITEM',
    payload: item
});

/**
 * Delete Item from store
 * @function addItem
 * @param {string} id - Id of item to be removed
 * @returns {object} - Action object
 */
export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    payload: id
});
