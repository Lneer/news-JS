import AppLoader from './appLoader';
import { CallbackFunc,ResponseNews, ResponseSources} from '../../constants/index.types'


class AppController extends AppLoader {
    getSources(callback: CallbackFunc<NonNullable<ResponseSources>>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: CallbackFunc<NonNullable<ResponseNews>>): void {
        let target = e.target as HTMLInputElement
        const newsContainer = <HTMLInputElement>e.currentTarget;

        const sourceId: string = target.value;
        if ((newsContainer.getAttribute('data-source') as string) !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
                {
                    endpoint: 'everything',
                    options: {
                        sources: sourceId,
                    },
                },
                callback
            );
        }
    }
}

export default AppController;
