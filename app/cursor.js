export const customCursor = () => {
    const cursorSpan = document.createElement('span');
    cursorSpan.className = 'custom_cursor';

    document.body.insertBefore(cursorSpan, document.body.firstChild)

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        cursorSpan.style.left = `${clientX}px`;
        cursorSpan.style.top = `${clientY}px`;
    });
}