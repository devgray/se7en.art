
/* ---------- Bento motifs ----------
    Each entry becomes one tile. Fields:
        src     image url (leave empty for a grey placeholder tile)
        label   caption shown on hover
        href    optional link, defaults to the brand section
        size    "1" square, "2" wide, "half" half height (two halves are stacked automatically)
        brand   which section the tile belongs to
*/
const BENTO = [
    // The Thumb Dance gif is 24 MB, too heavy for the marquee. Use a still frame here once you have one.
    { src: "https://asdfgray.com/img/frey%20wallpaper.png", label: "Frey", size: "2", brand: "elgato" },
    { src: "https://asdfgray.com/img/Squirrel%20Deck%20preview.png", label: "Squirrel Deck", size: "1", brand: "elgato" },
    { src: "https://asdfgray.com/img/Cat%20Deck.png", label: "Cat Deck", size: "half", brand: "elgato" },
    { src: "https://asdfgray.com/img/Lazrik%20on%20Twitch.png", label: "Lazrik Workspace", size: "half", brand: "elgato" },
    { src: "", label: "next motif", size: "1", brand: "elgato" },
    { src: "https://asdfgray.com/img/sleepy%20trainer.png", label: "Sleepy Trainer", size: "1", brand: "elgato" },
    { src: "", label: "next motif", size: "2", brand: "elgato" },
    { src: "https://asdfgray.com/img/emote%20avi.png", label: "Emote", size: "half", brand: "elgato" },
    { src: "https://asdfgray.com/img/cutesyhazel%20-preview.png", label: "CutesyHazel", size: "half", brand: "elgato" },
];

function tile(item) {
    const a = document.createElement("a");
    a.className = "bento-tile " + (item.size === "2" ? "w-2" : "w-1") + (item.size === "half" ? " h-half" : "");
    a.href = item.href || ("#brand-" + item.brand);
    a.setAttribute("aria-label", item.label);
    if (item.src) {
        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.label;
        img.loading = "lazy";
        a.appendChild(img);
        const cap = document.createElement("span");
        cap.className = "bento-caption";
        cap.textContent = item.label;
        a.appendChild(cap);
    } else {
        a.classList.add("is-placeholder");
        a.textContent = item.label;
    }
    return a;
}

function buildTrack(items) {
    const track = document.createElement("div");
    track.className = "bento-track";
    for (let i = 0; i < items.length; i++) {
        if (items[i].size === "half" && items[i + 1] && items[i + 1].size === "half") {
            const stack = document.createElement("div");
            stack.className = "bento-stack";
            stack.appendChild(tile(items[i]));
            stack.appendChild(tile(items[i + 1]));
            track.appendChild(stack);
            i++;
        } else {
            track.appendChild(tile(items[i]));
        }
    }
    return track;
}

function buildRow(items, direction, duration) {
    const row = document.createElement("div");
    row.className = "bento-row " + direction;
    row.style.setProperty("--dur", duration);
    // Two identical tracks make the loop seamless.
    row.appendChild(buildTrack(items));
    row.appendChild(buildTrack(items).cloneNode(true));
    return row;
}

const marquee = document.getElementById("bento-marquee");
const reversed = BENTO.slice().reverse();
marquee.appendChild(buildRow(BENTO, "to-left", "75s"));
marquee.appendChild(buildRow(reversed, "to-right", "90s"));

/* ---------- Brand switcher ----------
    Clicking a logo scrolls to its section. The active logo follows the section in view. */
const links = document.querySelectorAll("#brand-switcher a[data-brand]");
const sections = document.querySelectorAll(".brand-section[data-brand]");

links.forEach(link => {
    link.addEventListener("click", e => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", link.getAttribute("href"));
    });
});

if ("IntersectionObserver" in window && sections.length > 1) {
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const brand = entry.target.dataset.brand;
            links.forEach(l => l.classList.toggle("is-active", l.dataset.brand === brand));
        });
    }, { rootMargin: "-40% 0px -50% 0px" });
    sections.forEach(s => io.observe(s));
}