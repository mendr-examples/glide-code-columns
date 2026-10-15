import * as glide from "../glide";

const { marked }: typeof import("marked") = require("marked");

export default glide
    .columnNamed("Markdown to HTML")
    .withCategory("Text")

    // Not sure if we can run this unsandboxed
    .withReleased("sandboxed")

    .withDescription(`Convert markdown to HTML.`)

    .withRequiredStringParam("markdown")
    .withBooleanParam("inline")
    .withStringResult()

    .withTest({ markdown: `*Hello*`, inline: true }, "<em>Hello</em>")
    .withTest({ markdown: `*Hello*` }, "<p><em>Hello</em></p>\n")

    .run(({ markdown, inline = false }) => {
        const parse = inline ? marked.parseInline : marked;
        return parse(markdown);
    });
