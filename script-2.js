

const jumpToItinerary = document.querySelector('jumpToItinerary');
const itinerary = document.querySelector('itinerary');
function scrollToItinerary() {
  itinerary.scrollIntoView({
    behavior: 'smooth', // 'auto' (default), 'smooth', or 'instant'
    block: 'start',     // 'start' (default), 'center', 'end', or 'nearest'
    inline: 'nearest'   // 'start', 'center', 'end', or 'nearest' (default)
});}
jumpToItinerary.addEventListener('click', scrollToItinerary);


const jumpToIntro = document.querySelector('jumpToIntro');
const intro = document.querySelector('intro');
function scrollToIntro() {
  intro.scrollIntoView({
    behavior: 'smooth', // 'auto' (default), 'smooth', or 'instant'
    block: 'start',     // 'start' (default), 'center', 'end', or 'nearest'
    inline: 'nearest'   // 'start', 'center', 'end', or 'nearest' (default)
});}
jumpToIntro.addEventListener('click', scrollToIntro);


