import { AzureFunction, Context, HttpRequest } from "@azure/functions"


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    if (!req.body) {
        context.res = {
            status: 400,
            body: "Please pass a request body"
        };
        return;
    }
    const { title, publish_date, visible, imgAltText, relativeImagePath, relativeMarkdownPath } = req.body;
    const data = { title, publish_date, visible, imgAltText, relativeImagePath, relativeMarkdownPath };
    context.log(data);
    context.res = {
        body: data
    };
};

export default httpTrigger;