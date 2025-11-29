


const jumpToItinerary = document.querySelector('.jumpToItinerary');
const jumpToOverview = document.querySelector('.jumpToOverview');


const itinerary = document.getElementById('itinerary');
const overview = document.getElementById('overview');


function scrollToItinerary() {
  itinerary.scrollIntoView({
    behavior: 'smooth', // 'auto' (default), 'smooth', or 'instant'
    block: 'start',     // 'start' (default), 'center', 'end', or 'nearest'
    inline: 'nearest'   // 'start', 'center', 'end', or 'nearest' (default)
});
}
function scrollToOverview() {
  overview.scrollIntoView({
    behavior: 'smooth', // 'auto' (default), 'smooth', or 'instant'
    block: 'start',     // 'start' (default), 'center', 'end', or 'nearest'
    inline: 'nearest'   // 'start', 'center', 'end', or 'nearest' (default)
});
}

jumpToItinerary.addEventListener('click', scrollToItinerary);
jumpToOverview.addEventListener('click', scrollToOverview);