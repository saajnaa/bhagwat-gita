document.addEventListener("DOMContentLoaded", getChapters);

const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '57c1841b0bmsh0f8b0f457d1bceep14a871jsne30ab18e84af',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
    }
};

let currentChapterIndex = 0;
let chapters = [];

async function getChapters() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        chapters = result;

        displayChapter(currentChapterIndex);

    } catch (error) {
        console.error(error);
        document.getElementById("paragraph").innerText = "check your internet connection";
    }
}

function displayChapter(index) {
    if (index >= 0 && index < chapters.length) {
        const chapter = chapters[index];
        document.querySelector('.chapter_number').innerText = ` Chapter Number: ${chapter.chapter_number} `;
        document.querySelector('.name').innerText = ` Name: ${chapter.name} `;
        document.getElementById("paragraph").innerText = ` ${chapter.chapter_summary_hindi}`;
        document.querySelector('.name_meaning').innerText = ` Name Meaning: ${chapter.name_meaning} `;
    }
}

function getNewChapter() {
    if (currentChapterIndex < chapters.length - 1) {
        currentChapterIndex++;
        displayChapter(currentChapterIndex);
    }
}

function getprevChapter() {
    if (currentChapterIndex > 0) {
        currentChapterIndex--;
        displayChapter(currentChapterIndex);
    }
}

const nextbtn = document.getElementById("nextbtn");
nextbtn.addEventListener("click", getNewChapter);

const prevbtn = document.getElementById("prevbtn");
prevbtn.addEventListener("click", getprevChapter);




