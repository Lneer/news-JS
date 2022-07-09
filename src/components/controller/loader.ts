import { CallbackFunc, ResponseSources } from '../../constants/index.types'
interface RequestSettings {
    endpoint: string;
    options?: RequestOptions;
}

interface RequestOptions {
    [key: string]: string;
}

interface LoaderBase {
    baseLink: string;
    options: RequestOptions;
    getResp({ endpoint, options }: RequestSettings, callback: CallbackFunc<void>) :void;
    errorHandler(res: Response): Response;
    makeUrl(options: Partial<RequestOptions>, endpoint: string): string;
    load<T>(method: string, endpoint: string, callback: CallbackFunc<T | void>, options: RequestOptions): void;
}

enum BadResponseStatus  {
    'Unauthorized' =  401,
    'Not Found' = 404,
}

class Loader implements LoaderBase {
    baseLink: string;
    options: RequestOptions;
    constructor(baseLink: string, options: RequestOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: RequestSettings,
        callback = () => {
            console.error('No callback for GET response');
        }
    ):void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response):Response {
        if (!res.ok) {
            if( Object.values(BadResponseStatus).includes(res.status))
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Partial<RequestOptions>, endpoint: string): string {
        const urlOptions: Partial<RequestOptions> = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<ResponseSources>(method: 'GET' | 'POST', endpoint: string, callback: CallbackFunc<ResponseSources>, options: Partial<RequestOptions> = {}):void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res:Response):Promise<ResponseSources> => res.json())
            .then((data:ResponseSources) => callback(data))
            .catch((err:Error) => console.error(err));
    }
}

export default Loader;
