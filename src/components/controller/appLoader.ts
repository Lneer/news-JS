import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            //apiKey: '261a2c4f986840a685c263a6c925bbab', // получите свой ключ https://newsapi.org/
            apiKey: 'f9927a0915ae479e832a4596c6059cec',
            //apiKey: '09a7e04694a8400386268afb70f9cbd9',
        });
    }
}

export default AppLoader;
