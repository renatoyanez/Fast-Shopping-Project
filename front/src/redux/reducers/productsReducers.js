import { FETCH_PRODUCTS } from '../utils/constants'

const initialState = {
    products: []
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_PRODUCTS: {
            return Object.assign({}, state, { products: action.products })
        };
        case 'SORT_BY_ALPHA': {
            const sortedArray = action.products.sort(function (a, b) {
                if (a.name > b.name) {
                  return 1;
                }
                if (a.name < b.name) {
                  return -1;
                }
                return 0;
              });
              return Object.assign({}, state, { products: sortedArray })
        }
        case 'SORT_BY_PRICE': {
            const lowestPrice = products => products.sort((a, b) => a.price - b.price)
            const sortedArray = lowestPrice(action.products)
            return Object.assign({}, state, { products: sortedArray })
        };
        case 'MOST_RECENT': {
            const sortedArray = action.products.sort(function(a, b) {
                var dateA = new Date(a.updatedAt), dateB = new Date(b.updatedAt);
                return dateA - dateB;
            });
            return Object.assign({}, state, { products: sortedArray })     
        };
        default:
            return state;
    }
}