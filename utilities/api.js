let key = '8087735-06933422235a1d696ee88464b';
let api = {
    getImages() {
        let url = `https://pixabay.com/api/?key=${key}&q=yellow+flowers&image_type=photo`;
        return fetch(url)
            .then(res => res.json());
    }
};

module.exports = api;