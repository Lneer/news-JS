import './news.css';
type source = {
    id: string;
    name: string;
};
// interface NewsObject {
//     [key: string]: string | source;
// }
export interface NewsObject {
    source: source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

class News {
    draw(data: Array<NewsObject>): void {
        const news: NewsObject[] = data.length >= 10 ? data.filter((_item: NewsObject, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: NewsObject, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLTemplateElement).classList.add('alt');
            (newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;

            (newsClone.querySelector('.news__meta-author') as HTMLTemplateElement).textContent =
                item.author || item.source.name;

            (newsClone.querySelector('.news__meta-date') as HTMLTemplateElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLTemplateElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLTemplateElement).textContent =
                item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLTemplateElement).textContent =
                item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLTemplateElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLTemplateElement).innerHTML = '';
        (document.querySelector('.news') as HTMLTemplateElement).appendChild(fragment);
    }
}

export default News;
