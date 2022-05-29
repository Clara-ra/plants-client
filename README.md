# Plants-Client
This is a site that suggests the next plant you should buy. The basic functionality is in place, but it is a work in progress.

**Link to project:** http://....TODO..../

![alt tag](https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80)

## How It's Made:

**Tech used:** HTML, CSS, and JavaScript.

Using javascript, an event listener was placed on a button. When this button is clicked, a request is sent to an API I created (hosted on heroku at https://what-plant-should-i-buy-api.herokuapp.com/). When the response is recieved, The page is dynamically adjusted to include the name of the suggested plant and an image. 


## Optimizations
Currently, the site simply serves up the image provided by the API as given. These images are varying sizes. Future plans include setting constraints using CSS to adjust or crop the size of the image, keeping in mind that this will need to be elastic so that the client works on varying screen sizes.
Additionally, the styling will be adjusted to be more aesthetic.


## Lessons Learned:

There are several ways to represent Promises. await/async are simply syntactical sugar, and can be used to avoid nesting hell.
