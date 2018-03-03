let key = '8087735-06933422235a1d696ee88464b';
let api = {
    getImages(title, page) {
        let query;
        if(title==="") query = "yellow+flowers";
        else query = title.split(" ").join("+");
        let url = `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&page=${page}`;
        return fetch(url)
            .then(res => res.json());
    },
    getSpecificImages(title) {
        let query = title.split(" ").join("+");
        let url = `https://pixabay.com/api/?key=${key}&q=${query}&page=1`;
        return fetch(url)
            .then(res => res.json());
    },
};

module.exports = api;