const tagsElement = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", function(e) {
    createTags(e.target.value);

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10);
        randomSelect();
    }
});

const createTags = function(input) {
    const tags = input
        .split(",")
        .filter((tag) => tag.trim() !== "")
        .map((tag) => tag.trim());
    tagsElement.innerHTML = "";
    tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText = tag;
        tagsElement.appendChild(tagElement);
    });
};

const randomSelect = function() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomtag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomtag();
            highlightTag(randomTag);
        }, 100);
    }, times * 100);
};

const pickRandomtag = function() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = function(tag) {
    tag.classList.add("highlight");
};

const unHighlightTag = function(tag) {
    tag.classList.remove("highlight");
};