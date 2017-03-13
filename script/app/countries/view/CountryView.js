'use strict';

var CountryView = (function () {
  function CountryView (country) {
    var viewElem = document.createElement('tr'),
        likeButton, dislikeButton, deleteButton;
    
    this.getViewElem = function () {
      var countryInfo = country.toJSON();
      viewElem.innerHTML = renderTemplate(countryTemplate, countryInfo);
      
      if (country.isLiked()) {
        viewElem.classList.add('liked');
      }
      
      likeButton = viewElem.querySelector('.like-button');
      dislikeButton = viewElem.querySelector('.dislike-button');
      deleteButton = viewElem.querySelector('.delete-button');
      
      likeButton.addEventListener('click', countryLike, false);
      dislikeButton.addEventListener('click', countryDislike, false);
      deleteButton.addEventListener('click', countryDelete, false);
      
      return viewElem;
    };
    
    function removeViewElem () {
      likeButton.removeEventListener('click', countryLike);
      dislikeButton.removeEventListener('click', countryDislike);
      deleteButton.removeEventListener('click', countryDelete);
      
      if (viewElem.parentNode) {
        viewElem.parentNode.removeChild(viewElem);
      }
    };
    
    function countryLike () {
      country.like();
      viewElem.classList.toggle('liked');
    }
    
    function countryDislike () {
      removeViewElem();
    };
    
    function countryDelete () {
      removeViewElem();
      mediator.pub('countryDeleted', country);
    }
    
    mediator.sub('coyntryListRendered', removeViewElem);
    
    return this;
  }
  
  return CountryView;
})();