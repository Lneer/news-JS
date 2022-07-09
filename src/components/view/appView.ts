import News from './news/news';
import Sources from './sources/sources';
import {ResponseNews, ResponseSources, SourcesData, NewsArticle } from '../../constants/index.types'

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ResponseNews): void {
        const values: NewsArticle[]  = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ResponseSources) {
        const values: SourcesData[]  = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
