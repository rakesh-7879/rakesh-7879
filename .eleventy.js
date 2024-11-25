const fs = require("fs");
const path = require("path");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

    // Configure Markdown-it with custom rendering rules
    const mdLib = markdownIt({
        html: true,
        breaks: false,
        linkify: true,
    });

    // Override render rules for paragraphs if needed
    mdLib.renderer.rules.paragraph_open = () => "";
    mdLib.renderer.rules.paragraph_close = () => "";

    // Set Markdown library in Eleventy
    eleventyConfig.setLibrary("md", mdLib);

    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addWatchTarget("src/assets/css");

    const blogsData = require("./src/_data/blogs.json");

    // Create a markdown file for each chapter
    blogsData.forEach((chapter, index) => {
        const chapterSlug = chapter.key;
        const markdownContent = `---
layout: layouts/default/base.njk
title: ${chapter.title}
permalink: blogs/${chapterSlug}.html
---

{% include "sections/blogs/blog-layout.njk" contentData:blogs index:${index}  %}`;
        // Write the markdown file
        const blogsDir = path.join('src/features/blogs');
        if (!fs.existsSync(blogsDir)) {
            fs.mkdirSync(blogsDir, { recursive: true });
        }
        fs.writeFileSync(
            path.join(blogsDir, `${chapterSlug}.md`),
            markdownContent
        );
    });



    // Ensure the output directory for chapters exists
    const chaptersDir = path.join(__dirname, "src/chapters");
    if (!fs.existsSync(chaptersDir)) {
        fs.mkdirSync(chaptersDir);
    }


    return {
        dir: {
            input: "src", // Input directory
            includes: "_includes", // Includes directory
            data: "_data", // Data directory
            output: "_site" // Output directory
        }
    };
};