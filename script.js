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

/* =========================
   ADJUDICATOR ACCORDION
   ========================= */

const adjudicatorItems =
    document.querySelectorAll(".adjudicator-item");

adjudicatorItems.forEach((item) => {

    const toggle =
        item.querySelector(".adjudicator-toggle");

    const content =
        item.querySelector(".adjudicator-content");

    toggle.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("open");


        // Close every adjudicator

        adjudicatorItems.forEach((otherItem) => {

            const otherContent =
                otherItem.querySelector(".adjudicator-content");

            otherItem.classList.remove("open");

            otherContent.style.maxHeight = null;

        });


        // Open the one that was clicked

        if (!isOpen) {

            item.classList.add("open");

            content.style.maxHeight =
                content.scrollHeight + "px";

        }

    });

});
const adjudicatorsCard =
    document.getElementById("adjudicators-card");

const adjudicatorsSection =
    document.getElementById("adjudicators");

const planCards =
    document.querySelectorAll(".plan-grid .discipline-card");

planCards.forEach((card) => {

    card.addEventListener("click", (event) => {

        // ADJUDICATORS CARD
        if (card === adjudicatorsCard) {

            event.preventDefault();

            const isHidden = adjudicatorsSection.hidden;

            // Close first
            adjudicatorsSection.hidden = true;

            // Toggle it back open if it was closed
            if (isHidden) {

                adjudicatorsSection.hidden = false;

                setTimeout(() => {
                    adjudicatorsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 50);
            }

        }

        // ANY OTHER PLAN CARD
        else {
            adjudicatorsSection.hidden = true;
        }

    });

});