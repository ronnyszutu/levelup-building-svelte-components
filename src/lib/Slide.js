export function slide(node, isOpen) {
    // console.log('node, isOpen', node, isOpen);

    // Initialize
    let initialHeight = node.offsetHeight;
    node.style.height = isOpen ? 'auto' : 0;
    node.style.overflow = "hidden";

    return {
        update: (isOpen) => {
            node.style.height = isOpen ? 'auto' : 0;
            console.log('isOpen', isOpen);
        }
    }
}