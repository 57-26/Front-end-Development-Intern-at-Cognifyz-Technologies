<script>
    // Select the button element
    const btn = document.getElementById('changeColorBtn');
    
    // Define an array of colors
    const colors = ['#f4f4f4', '#ffb6b9', '#ff6f61', '#6b5b95', '#feb236'];
    
    // Add click event listener to the button
    btn.addEventListener('click', function() {
        // Generate a random index to choose a color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the background color of the body
        document.body.style.backgroundColor = randomColor;
    });
</script>
