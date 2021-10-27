export default {
  inserted: (el) => {
    // Function which replaces the src value with the data-url attribute value
    function loadImage() {
      const imageElement = Array.from(el.children).find(
        (el) => el.nodeName == 'IMG'
      );
      if (imageElement) {
        imageElement.addEventListener('load', () => {
          setTimeout(() => el.classList.add('loaded'), 100);
        });
        imageElement.addEventListener('error', () => console.log('error'));
        imageElement.src = imageElement.dataset.url;
      }
    }

    /**
     * Function that checks if an entry becomes visible to the user.
     *
     * @param {array} entries An array of all elements that are watched by the observer.
     * @param {object} observer The observer itself.
     */
    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        //If entry visible to user
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el); // Remove the element from the watchlist to prevent loading the image over and over.
        }
      });
    }

    /*
     * Function which creates an Intersectionobserver object and attaches to the element
     */
    function createObserver() {
      const options = {
        root: null,
        threshold: '0', //Values 0-1 (0 = first pixel is visible, 1 = the whole element is visible)
      };
      // First argument is the callback function which is called when the threshold is passed
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el); // Attach the element to the observer object.
    }

    if (window['IntersectionObserver']) {
      createObserver();
    } else {
      loadImage();
    }
  },
};
