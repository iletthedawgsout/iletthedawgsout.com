import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Post } from "./models";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest, posts: Post[]): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    context.res = {
        body: posts
    };
};

export default httpTrigger;