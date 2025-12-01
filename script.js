


const jumpToItinerary = document.querySelector('.jumpToItinerary');
const jumpToOverview = document.querySelector('.jumpToOverview');
const jumpToTransportation = document.querySelector('.jumpToTransportation')


const itinerary = document.getElementById('itinerary');
const overview = document.getElementById('overview');
const transportation = document.getElementById('transportation');


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
function scrollToTransportation(){
  transportation.scrollIntoView({
    behavior: 'smooth', // 'auto' (default), 'smooth', or 'instant'
    block: 'start',     // 'start' (default), 'center', 'end', or 'nearest'
    inline: 'nearest'   // 'start', 'center', 'end', or 'nearest' (default)
});
}
jumpToItinerary.addEventListener('click', scrollToItinerary);
jumpToOverview.addEventListener('click', scrollToOverview);
jumpToTransportation.addEventListener('click', scrollToTransportation);