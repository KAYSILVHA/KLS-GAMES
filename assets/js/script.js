function searchPage() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const content = document.querySelector('.content');
    const elements = content.querySelectorAll('*');

    elements.forEach(el => {
        el.normalize(); // Normaliza o texto para facilitar a pesquisa
        el.childNodes.forEach(child => {
            if (child.nodeType === 3) { // Nó de texto
                const text = child.textContent.toLowerCase();
                let index = -1;
                let matchCount = 0;
                while ((index = text.indexOf(searchTerm, index + 1)) !== -1) {
                    const before = document.createTextNode(child.textContent.substring(0, index));
                    const match = document.createElement('mark');
                    match.textContent = child.textContent.substring(index, index + searchTerm.length);
                    match.classList.add('highlight');
                    const after = document.createTextNode(child.textContent.substring(index + searchTerm.length));
                    child.textContent = ''; // Limpa o nó de texto original
                    child.appendChild(before);
                    child.appendChild(match);
                    child.appendChild(after);
                    index += searchTerm.length - 1; // Avança para o próximo possível correspondência
                    matchCount++;
                }
                // Remove todos os nós <mark> que não correspondem mais ao termo de pesquisa
                const toRemove = Array.from(el.querySelectorAll('.highlight')).slice(matchCount);
                toRemove.forEach(node => {
                    const textNode = document.createTextNode(node.textContent);
                    node.replaceWith(textNode);
                });
            }
        });
    });
}
