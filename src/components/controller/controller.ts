import AppLoader from './appLoader';
import { TotalAPiObject } from '../view/appView';

type CallbackFunc = (data?: TotalAPiObject) => void;

class AppController extends AppLoader {
    getSources(callback: CallbackFunc) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: CallbackFunc) {
        let target = <HTMLTemplateElement>e.target;
        const newsContainer = <HTMLTemplateElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id') as string;
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

                return;
            }
            target = <HTMLTemplateElement>target.parentNode;
        }
    }
}

export default AppController;
