import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Post, PostList } from "./models";

const SAMPLE_POST: Post = {
    "id": "1",
    "title": "Example blog post title",
    "publish_date": "Sun, 27 Sep 2020 21:16:01 GMT",
    "visible": true,
    "source": "https://raw.githubusercontent.com/iletthedawgsout/blogposts/master/all_dogs_go_to_heaven/all_dawgs_go_to_heaven.txt",
    "last_edited": "Sun, 27 Sep 2020 21:16:01 GMT",
    "upvotes": 0
};

const SAMPLE_POST_LIST: PostList = {
    posts: [SAMPLE_POST]
};

const getPosts = () => Promise.resolve(SAMPLE_POST_LIST);

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const posts = await getPosts();
    context.res = {
        body: posts
    };

};

export default httpTrigger;