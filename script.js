document.addEventListener('DOMContentLoaded', function() {
    let sidebarTimeout;
    let animationTriggered = false // Thumbnail animation loads up as soon as the website loads for some reason instead of waiting for the event to start. A better programmer would fix it without a flag. Too bad!

    // Delay the sidebar functionality until after the animations have completed
    setTimeout(function() {
        document.querySelectorAll('.slide-button').forEach(button => {
            button.addEventListener('mouseover', function() {
                clearTimeout(sidebarTimeout); // Clear any existing timeout in the sidebar to make it load another description as soon as you hover on it
                let description = '';
                switch (button.querySelector('img').alt) {
                    case 'Twitter':
                        description = 'My personal Twitter account!';
                        break;
                    case 'Reddit':
                        description = 'This is the Reddit account where I mostly post memes and whatnot.';
                        break;
                    case 'YouTube':
                        description = 'This is a test channel:<br>I have uploaded 3 to 5 videos daily every single day for a month in here as a challenge about the Terraria Calamity mod to check out how shorts were favored from the Youtube algorithm.<br><br>It worked surprisingly well, with almost 3k subs by the end of the first month without any kind of external push!';
                        break;
                    case 'Contacts':
                        description = 'You can easily contact me!<br><br>On ' +
                                      '<span class="contact-twitter">Twitter: @DDismas1</span>' + ' (DMs are always open!)<br><br>' +
                                      '<span class="contact-discord">Discord:</span> ddismas1 / Dismas#8659<br><br>' +
                                      'Or via email by either clicking this button or emailing<br>' +
                                      '<span class="contact-email">spaccalberi@gmail.com</span>';
                        break;
                    default:
                        description = 'Hover over a button for details. You should not be able to read this!';
                }
                document.getElementById('sidebar-content').innerHTML = description;
                document.getElementById('sidebar').style.right = '0';
            });

            button.addEventListener('mouseout', function() {
                // Start a timeout to hide the sidebar after 0.5 seconds of it not being utilized
                sidebarTimeout = setTimeout(function() {
                    document.getElementById('sidebar').style.right = '-250px';
                }, 500);
            });
        });
    }, 3000); // End of the setTimeout for the sidebar

    const textContainer = document.querySelector('.text-container');
    const videoGridContainer = document.getElementById('video-grid-container');
    setTimeout(function() {
        const textContainer = document.querySelector('.text-container');
        const videoGridContainer = document.getElementById('video-grid-container');

        textContainer.addEventListener('mouseover', function() {
            if (!animationTriggered) {
                animationTriggered = true;
                this.classList.add('text-container-move-up');
                setTimeout(function() {
                    videoGridContainer.style.visibility = 'visible';
                    const iframes = videoGridContainer.querySelectorAll('iframe');
                    iframes.forEach(iframe => {
                        iframe.style.display = 'none';
                        iframe.offsetHeight; // Re-display the whole thing. I don't care. This embed shit sucks
                        iframe.style.display = '';
                        iframe.classList.add('fade-in-animation');
                    });
                }, 500);
            }
        });
    }, 3000); // Delay the hover event listener activation for 3 seconds after the site loads, since for some reason it loads immediately

});
