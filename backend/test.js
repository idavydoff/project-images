arr = ["123", "23", "45", "213", "!@34"];

page = 1;
items_per_page = 2;

page_limit = items_per_page * page;
page_offset = page_limit - items_per_page;


pages = Math.round(arr.length / items_per_page);
console.log(arr.slice(page_offset, page_limit));
console.log(pages)