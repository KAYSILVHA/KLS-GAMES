function searchPage() {
    removeHighlights(); // Remove any existing highlights

    let searchText = document.getElementById('searchInput').value.trim();
    if (!searchText) {
        return;
    }

    let regex = new RegExp(searchText, 'gi');
    highlightMatches(document.body, regex);

    // Scroll to the first occurrence
    let firstHighlight = document.querySelector('.highlight');
    if (firstHighlight) {
        firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function highlightMatches(node, regex) {
    if (node.nodeType === 3) { // Text node
        let match = node.data.match(regex);
        if (match) {
            let span = document.createElement('span');
            span.className = 'highlight';
            let middleIndex = match.index;
            span.appendChild(document.createTextNode(node.data.substr(middleIndex, match[0].length)));

            let after = node.splitText(middleIndex);
            after.data = after.data.substr(match[0].length);
            node.parentNode.insertBefore(span, after);
        }
    } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
        for (let i = 0; i < node.childNodes.length; i++) {
            highlightMatches(node.childNodes[i], regex);
        }
    }
}

function removeHighlights() {
    let highlights = document.querySelectorAll('.highlight');
    highlights.forEach(function (highlight) {
        let parent = highlight.parentNode;
        parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
        parent.normalize();
    });
}
