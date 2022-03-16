const images = document.querySelectorAll('.item');
images.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        removeFocus();
        item.classList.add('itemTwo');
    })
    removeFocus = function() {
        images.forEach(function(item) {
            item.classList.remove('itemTwo');
        })
    }
})

gsap.to('.text', {text: 'В сентябре: - 50% на диваны при любой покупке', duration: 3, delay: 1})
gsap.to('.heading', {ease: 'power2.out', duration: 3, opacity: 1, y: -20, delay: 1})

