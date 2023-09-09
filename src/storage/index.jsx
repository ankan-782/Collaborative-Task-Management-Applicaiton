export const storage = {
    getItem: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
    setItem: (key, item) => {
        try {
            localStorage.setItem(key, JSON.stringify(item));
            return { status: 201 };
        } catch (error) {
            console.log(error);
        }
    },
    removeItem: (key) => {
        try {
            localStorage.removeItem(key);
            return { status: 200 };
        } catch (error) {
            console.log(error);
        }
    },
};