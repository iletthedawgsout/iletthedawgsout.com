import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const sample_post = {
    "id": "1",
    "title": "Example blog post title",
    "publish_date": "Sun, 27 Sep 2020 21:16:01 GMT",
    "visible": true,
    "source": "https://raw.githubusercontent.com/iletthedawgsout/blogposts/master/all_dogs_go_to_heaven/all_dawgs_go_to_heaven.txt",
    "last_edited": "Sun, 27 Sep 2020 21:16:01 GMT",
    "upvotes": 0,
    "_rid": "mG4DAImaDzUBAAAAAAAAAA==",
    "_self": "dbs/mG4DAA==/colls/mG4DAImaDzU=/docs/mG4DAImaDzUBAAAAAAAAAA==/",
    "_etag": "\"c5022df4-0000-0800-0000-5f7103930000\"",
    "_attachments": "attachments/",
    "_ts": 1601242003
};

const getPosts = () => {
    return [sample_post];
};

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const posts = getPosts();
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            text: "Blog posts would go here"
          }
    };

};

export default httpTrigger;