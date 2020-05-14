export const addToCartHandler = (previousItems, currentItem) => {
    let isExist = false;
    const items =  previousItems.map(item => {
        if(item.id === currentItem.id) {
            item.quantity += 1;
            isExist = true;
        }
        return item
    });

    return isExist ? items : [...items, {...currentItem, quantity: 1}];
};