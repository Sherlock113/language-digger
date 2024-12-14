document.addEventListener('DOMContentLoaded', function() {
    // Find all <pre> elements
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach(block => {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>';

        // Add click event
        copyButton.addEventListener('click', async () => {
            const code = block.querySelector('code').innerText;

            try {
                await navigator.clipboard.writeText(code);

                // Visual feedback
                const originalInnerHTML = copyButton.innerHTML;
                copyButton.innerHTML = '✓';

                setTimeout(() => {
                    copyButton.innerHTML = originalInnerHTML;
                }, 1000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });

        // Add button to code block
        block.appendChild(copyButton);
    });
});