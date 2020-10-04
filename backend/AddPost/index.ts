import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const CRITICAL_FIELDS = ['title', 'relativeImagePath', 'relativeMarkdownPath'];

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    if (!req.body) {
        context.res = {
            status: 400,
            body: "Please pass a request body"
        };
        return;
    }

    let { title, publish_date, visible, imageAltText, relativeImagePath, relativeMarkdownPath } = req.body;

    // Data validation for critical fields
    for (const criticalField of CRITICAL_FIELDS) {
        const valid = !!req.body[criticalField];
        if (!valid) {
            context.res = {
                status: 400,
                body: `Missing critical field: ${criticalField}`
            };
            return;
        }
    }

    // Fixing optional fields
    if (visible === undefined) {
        visible = true;
    }

    const data = { title, publish_date, visible, imageAltText, relativeImagePath, relativeMarkdownPath };
    context.log(data);
    context.res = {
        body: data
    };
};

export default httpTrigger;