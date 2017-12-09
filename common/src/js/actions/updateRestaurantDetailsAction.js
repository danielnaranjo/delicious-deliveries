import axios from 'axios';

export const types = {
    UPDATE_RESTAURANT: 'UPDATE_RESTAURANT',
    FOOD_TOGGLE: 'FOOD_TOGGLE',
    ADD_RESTAURANT_NAME: 'ADD_RESTAURANT_NAME',
    ADD_ADDRESS1: 'ADD_ADDRESS1',
    ADD_ADDRESS2: 'ADD_ADDRESS2',
    ADD_CITY: 'ADD_CITY',
    ADD_STATE: 'ADD_STATE',
    ADD_ZIP: 'ADD_ZIP',
    ADD_IMAGE: 'ADD_IMAGE',
    ADD_PHONE_NUMBER: 'ADD_PHONE_NUMBER',

}

export function foodToggle(value) {
    return {
        type: types.FOOD_TOGGLE,
        payload: value
    };
}

export function updateRestaurantName(name) {
    return {
        type: types.ADD_RESTAURANT_NAME,
        payload: name
    };
}

export function updateAddress1(address1) {
    return {
        type: types.ADD_ADDRESS1,
        payload: address1
    };
}

export function updateAddress2(address2) {
    return {
        type: types.ADD_ADDRESS2,
        payload: address2
    };
}

export function updateCity(city) {
    return {
        type: types.ADD_CITY,
        payload: city
    };
}

export function updateStateInput(state) {
    return {
        type: types.ADD_STATE,
        payload: state
    };
}

export function updateZipCode(zip) {
    return {
        type: types.ADD_ZIP,
        payload: zip
    };
}

export function updateImageInput(image) {
    return {
        type: types.ADD_IMAGE,
        payload: image
    };
}

export function updatePhoneNumber(phone_number) {
    return {
        type: types.ADD_PHONE_NUMBER,
        payload: phone_number
    };
}

export function pickRestaurant(index) {
    return {
      type: 'PICK_RESTAURANT',
      payload: index
    };
}

export function updateRestaurant(food_type, name, address1, address2, city, state, zip, image, phone_number, ownerId, restaurantId) {
    console.log({food_type, name, address1, address2, city, state, zip, image, phone_number, ownerId, restaurantId});
    window.location.href= `http://localhost:3000/#/owner/${ownerId}`;
    return (dispatch) => {
        axios.put(`http://localhost:3000/api/Owners/${ownerId}/restaurants/${restaurantId}`, {food_type, name, address1, address2, city, state, zip, image, phone_number})
            .then(results => {
                alert('Update Successful')
                console.log(results.data);
                dispatch({
                    type: types.UPDATE_RESTAURANT,
                    payload: results.data
                })
            })
            .catch(err => console.log(err));
    };              
}

export const getOwnerRestaurants = ownerId => {
    return (dispatch) => {
        dispatch({
            type: 'GET_OWNER_RESTAURANTS',
        });
        axios.get(`http://localhost:3000/api/Owners/${ownerId}/restaurants`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: 'GET_OWNER_RESTAURANTS_SUCCESS',
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'GET_OWNER_RESTAURANTS_REJECTED',
                payload: err
            })
        })
    }
}