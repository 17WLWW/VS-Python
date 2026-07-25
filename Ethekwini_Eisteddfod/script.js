const entryButton = document.getElementById("entryButton");
const message = document.getElementById("message");

if (entryButton && message) {
    entryButton.addEventListener("click", function () {
        message.textContent = "Online entries will open soon.";
    });
}
window.addEventListener("load", () => {

    const indicator = document.getElementById("scroll-indicator");

    const entryDownloadButton =
    document.getElementById("entry-download-button");

if (
    window.location.hash === "#download-entry" &&
    entryDownloadButton
) {
    setTimeout(() => {
        entryDownloadButton.classList.add("pulse-entry-button");
    }, 400);
}

    // Skip the effect when loading an anchor link
    if (window.location.hash !== "") {
        if (indicator) {
            indicator.style.display = "none";
        }

        return;
    }

    // Nudge the page first
    setTimeout(() => {

        window.scrollBy({
            top: 10,
            behavior: "smooth"
        });

        setTimeout(() => {

            window.scrollBy({
                top: -10,
                behavior: "smooth"
            });

            // Show the chevrons after the nudge finishes
            setTimeout(() => {
                if (indicator) {
                    indicator.classList.add("show");
                }
            }, 250);

        }, 180);

    }, 500);
});