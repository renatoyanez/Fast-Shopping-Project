import { FETCH_PRODUCTS, FETCH_CATEGORY } from '../utils/constants'
import axios from 'axios'

export const productsAction = products => ({
    type: FETCH_PRODUCTS,
    products
});


export const sortByPrice = products => ({
  type: 'SORT_BY_PRICE',
  products
})
  
export const sortByAlpha = products => ({
  type: 'SORT_BY_ALPHA',
  products
})

export const sortBymostRecent = products => ({
  type: 'MOST_RECENT',
  products
})


export const categoryAction = category => ({
  type: FETCH_CATEGORY,
  category
})

/****** Fetches all products *****/
export const fetchProducts = () => dispatch => {
    axios.get(`/api/products/all`).then(products => {
      dispatch(productsAction(products.data));
    });
};

export const fetchProductsByPrice = () => dispatch => {
  axios.get(`/api/products/all`).then(products => {
    dispatch(sortByPrice(products.data))
  })
}

export const fetchProductsByAlpha = () => dispatch => {
  axios.get(`/api/products/all`).then(products => {
    dispatch(sortByAlpha(products.data))
  })
}

export const fetchProductsByDate = () => dispatch => {
  axios.get(`/api/products/all`).then(products => {
    dispatch(sortBymostRecent(products.data))
  })
}