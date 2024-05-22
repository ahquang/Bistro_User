export const handleSaveListDataToStorage = (state) => {
    //handle save data to localStorage
    try {
        const convertState = JSON.stringify(state);
        localStorage.setItem('listsData', convertState);
    } catch (err) {
        console.log(err);
    }
}

export const handleSaveDataToStorage = (key, value) => {
    //handle save data to localStorage
    try {
        const convertState = JSON.stringify(value);
        localStorage.setItem(key, convertState);
    } catch (err) {
        console.log('error', err);
    }
}

export const handleLoadState = () => {
    //handle get data from localStorage
    try {
        const dataStore = localStorage.getItem('listsData');
        if(dataStore === null) {
            return undefined;
        }
        return JSON.parse(dataStore);
    } catch (err) {
        console.log('error', err)
    }
}

export const handleLoadDataFromStorage = (key) => {
    //handle get data from localStorage
    try {
        const dataStore = localStorage.getItem(key);
        if(dataStore === null) {
            return undefined;
        }
        return JSON.parse(dataStore);
    } catch (err) {
        console.log('error', err)
    }
}