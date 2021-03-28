export const addToCartHandler = (previousItems, currentItem) => {
    const existItem = previousItems.find(item => item.id === currentItem.id);
    const items = previousItems.map(item => {
        return item.id === currentItem.id ? 
        {...item, quantity: item.quantity + 1} : 
        item
        }
    );

    return existItem ? items : [...items, {...currentItem, quantity: 1}];
};

export const removeToCartHandler = (previousItems, currentItem) => {
    const existItem = previousItems.find(item => item.id === currentItem.id);

    if(existItem.quantity === 1) {
        return previousItems.filter(item => item.id !== currentItem.id);
    }

    return previousItems.map(item => {
        return item.id === currentItem.id ? 
        {...item, quantity: item.quantity - 1} : 
        item
        }
    );
}