import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import {ResponseNews, ResponseSources, SourcesData, NewsArticle } from '../../constants/index.types'

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document.querySelector('.sources') as HTMLTemplateElement).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data: ResponseNews | undefined ): void => {
                if (data) {
                    this.view.drawNews(data);
                }
            })
        );
        this.controller.getSources((data: ResponseSources | undefined): void => {
            if (data) this.view.drawSources(data);
        });

        (document.querySelector('.alpha-filter') as HTMLTemplateElement).addEventListener('click', (e: Event) => {
            let newsArr = document.querySelectorAll('.source__item') as NodeListOf<Element>;
            let filterLetter: string = (e.target as HTMLTemplateElement).innerText;
            newsArr.forEach((elem) => {
                if (elem.getAttribute('style')) {
                    elem.removeAttribute('style');
                }
                let title: string = (elem.textContent as string).trim();
                if (title[0].toLowerCase() !== filterLetter.toLowerCase()) elem.setAttribute('style', 'display:none');
            });
        });
    }
}

export default App;
