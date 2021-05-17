const details = [
    {
      images: '/images/blog.png',
      alts: 'blog image',
      urls: 'https://github.com/ibsa-ejeta/journal',
      sites: '/blog',
      titles: 'Blog',
      projectDescription:
        'Lets users create a post with title and content, has an about page which gives information about the site. also includes a contact us page all the links on this website share the same header and footer which is implemented using ejs partials. the posts created by the user are stored in mongoDB database two connections are created one to local mongoDB server which enables working on localhost the other on online on mongoDB server which allow user see posts by other users.',
    },
    {
      images: '/images/landing.png',
      alts: 'landing image',
      urls: 'https://github.com/ibsa-ejeta/landing_page',
      sites: '/Landing_Page',
      titles: 'Landing Page',
      projectDescription:
        'Displays different product options to customers supported by video illustration, lets customers register for newsletter on mailchimp server. Bootstrap is used to create the navigation bar and cards. Form for mailchimp registaration is initially posted to node js server via post method then the server reaches out to the mailchimp server to save the subscription details.',
    },
    {
      images: '/images/Nikola-Tesla.png',
      alts: 'tribute image',
      urls: 'https://github.com/ibsa-ejeta/tribute_page',
      sites: '/Tribute_Page',
      titles: 'Tribute Page',
      projectDescription:
        'Simple single tribute page dedicated to Nikola Tesla. It has two calculators which perform power to decibel (dBm) conversion and vice versa. The calculation is done on the front end using DOM manipulation, responsive CSS3 grid layout is used to separate the main content from the calculators.',
    },
    {
      images: '/images/technicaldocumentation.png',
      alts: 'technical documentation image',
      urls: 'https://github.com/ibsa-ejeta/tech_documentation',
      sites: '/Technical_Documentation',
      titles: 'Technical Documentation',
      projectDescription:
        'A JavaScript technical documentation page, which is made responsive using the CSS3 Grid Layout. Menu, which enables readers to select a topic, is displayed on the left for large screen sizes, and become a dropdown for smaller screen sizes. The buttons, images and links on this homepage are generated using for loop and appended to the section element. The images, urls, the routes to sites and the project description are created as an array.',
    },
    {
      images: '/images/surveyform.png',
      alts: 'survey image',
      urls: 'https://github.com/ibsa-ejeta/survey_form',
      sites: '/Survey_Form',
      titles: 'Survey Form',
      projectDescription:
        'This project uses all the major HTML form input types such radio, checkbox, text and email. The data from the user is then submitted to MongoDB database. Mongoose library is used to manage relationship between data, to provide schema validation and to translate between objects in the code and the representation of those objects in MongoDB.',
    },
  ];