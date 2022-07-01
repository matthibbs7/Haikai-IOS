# Haikai - Generate Haiku Poems about an Image

<img src="https://i.imgur.com/pxh82k6.png" width="340" height="300">

Haikai is a IOS application that lets users take or upload a photo and generate a Natural Language Haiku Poem about the image uploaded, using computer vision models to derive descriptive attributes.

* Uses ImageNet for image classification.
* Takes the image classification, and creates a bag of words using ConceptNet database
* Generates a Natural Language Haiku Poem using the bag of words with Uber's PPLM Model
* The app lets users save their poems, update the titles, and delete poems using a compact SQLite database
* Utilizes a Flask REST API to process requests

## Built with

* [React Native](https://github.com/facebook/react-native)
* [Expo Managed Workflow](https://github.com/expo/expo)
* [AWS Amplify Cognito](https://github.com/aws-amplify/amplify-js)
* [SQLite](https://github.com/topics/sqlite)
* [Flask](https://github.com/pallets/flask)
* [ConceptNet](https://github.com/commonsense/conceptnet)
* [TensorFlow](https://github.com/tensorflow/tfjs)

## Login Flow and UI

1. Initial Login page when users first open the application. Allows Google oAuth sign in, and user accounts are validated through AWS Cognito's service
 
<img src="https://i.imgur.com/FR7uxHv.png" width="200" height="400">
   
2. If users click create new account they will be brought to this page. All form fields feature various checks for validity and use regex to confirm field types (ie: email or password)
   
<img src="https://i.imgur.com/dT4FV4Q.png" width="200" height="400" >
   
## Generating Poems

1. Home page for signed in users. Features previously saved poems in a scroll view. The poems are displayed with the image uploaded, the poem title (in bold) that the user gave and can edit, and the image classification keyword for the image from ImageNet + "Poem"

<img src="https://i.imgur.com/FLQy88K.jpg" width="200" height="400">

2. Creation page, prompting users to begin process to generate a new poem. Clicking 'Take photo' will bring up the iPhone camera, and once a photo is taken a cropping box (square) will allow the user to select a range from the image, similarly when 'Choose from library' is selected the application will access the devices photo library and allow the user to upload an image from there

<img src="https://i.imgur.com/ntdJNDC.jpg" width="200" height="400">

3. After pressing 'Generate Poem' and selecting an Image, an API call will be sent and received from the Flask REST API, then the poem text will be displayed like below. Users will be given the option to save the Poem to the SQLite database

<img src="https://i.imgur.com/RVTRfnb.png" width="200" height="400">

4. If the 'Save Poem' button is pressed, the modal will update allowing users to enter a Poem Title for the saved Poem, after confirming the poem will appear on the main home page at the bottom of the scrollview

<img src="https://i.imgur.com/NnMg7Oq.png" width="200" height="400">


## How Poems are Generated

The process for generating each Haiku Poem is the following:
* First a user takes or uploads a photo through the app
* They will be prompted to 'Generate New Poem', which when clicked calls the Flask REST API, sending the Image in base64
* The REST API will decode the base64, then reformat image for Keras ImageNet utilities
* ImageNet will return 5 potential words that classify the image, for each of these words the ConceptNet DB is called to fetch a bag of similar words
* Once the bag of words is gathered, a trained PPLM model is ran using the bag of words to generate the Natural Language Haiku Poem
* Finally the API returns the textual poem back to the sender

## Flask REST API


