export type SourcesData =  {
	id: string;
	name: string;
	description: string;
	url: string;
	category: string;
	language: string;
	country: string;
}
type NewsSource = {
	id:string;
	name: string;
}

export type NewsArticle = {
	source:NewsSource;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content:string;
}

export interface ResponseSources {
	status: 'error '| 'ok';
	sources: SourcesData[];
	message?:string;
	code?: string
}

export interface ResponseNews {
	status: 'error '| 'ok';
	totalResults: number;
	articles: NewsArticle[];
	message?:string;
	code?: string
}

export type CallbackFunc <T> = (data?: T) => void;