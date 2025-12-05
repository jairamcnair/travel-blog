

const jumpToItinerary = document.querySelector('jumpToItinerary');
const itinerary = document.getElementById('itinerary');


function scrollToItinerary() {
  itinerary.scrollIntoView({
    behavior: 'smooth', // 'auto' (default), 'smooth', or 'instant'
    block: 'start',     // 'start' (default), 'center', 'end', or 'nearest'
    inline: 'nearest'   // 'start', 'center', 'end', or 'nearest' (default)
});}
jumpToItinerary.addEventListener('click', scrollToItinerary);


