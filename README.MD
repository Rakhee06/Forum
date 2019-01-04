# DECENTRALIZED & INCENTIVIZED Q&A FORUM USING BLOCKCHAIN

This project is developed to facilitate students of UMass Boston to post the questions they have regarding their course in a public forum. These questions can be viewed by other students and professors. This forum is totally incentivized. Every question posted carries a value and that value can be earned by anyone who posts the best answer


## Assumptions
This project is a decentralized web application. Anyone who needs to use this application is required to have an Ethereum account and an injected Web3 provider. Future version of the application will provide a wallet to the users who sign up and hence the above requirement is no longer needed.

## Prerequisites to run this project locally
To run this project locally before deployment, the user must have latest version of Node.js and npm module installed in their systems

## Steps to Run the application
#### Development mode
* Create a new directory in your local file system. - `mkdir forum`
* Copy the given project zip files in that directory and extract the zip file. 
* Open the terminal or command prompt window in that directory and type - `npm install`. 
* The installation of all the dependencies takes approximately 10 minutes. 
* Once the dependencies are installed, type `npm run dev` to start the application. 
* The application boots up on your `localhost:3000`. Therefore, if you have anything running on this port, please close it.

#### Production mode
* Create a new directory in your local file system. - `mkdir Forum`
* Copy the given project zip files in that directory and extract the zip file. 
* Open the terminal or command prompt window in that directory and type - `npm install`. 
* The installation of all the dependencies takes approximately 10 minutes.
* Once the dependencies are installed, type `npm start` to start the application.
* The application will be hosted on any free port available. The output console will show the port number.


## Steps to use the application
#### To create a new question
* Click on `Ask a question` button or `+` button next to Questions on the header of the page.
* Set the value for the question. The unit is `Wei`.
* Write a small title for the question and then the description. 
* Sign in to your *injected web3 provider*. 
* Click on `Ask` button. It take approximately 15 seconds to add your transaction to the blockchain. You will be redirected to homepage and you can see your newly posted question added in the list.

#### To post an answer 
* Click on any question you want to answer from the list of questions on the homepage. 
* You will be shown the value, title and description for the question. 
* Sign in to your *injected web3 provider*. 
* You can type your answer in the field provided and click on post your answer button.
* It takes approximately 15 seconds to add your transaction to the blockchain.
* You can click on `View Answers` button to view your answer. 
#### To vote for an answer 
* Click on any question you want to answer from the list of questions on the homepage. 
* You will be shown the value, title and description for the question. 
* Sign in to your *injected web3 provider*. 
* Click on `View Answers` button to see all the answers for that particular question. 
* Select the answer from the list and click on `Vote` button to vote for that answer. 
* You can’t vote for the answer you posted. 
#### Finalize an answer 
* Select the question you posted from the list of questions on the homepage. 
* Click on view answers button. 
* Select the best answer you want to finalize. 
* Click on `Finalize` button. It takes approximately 15 seconds to add the transaction to the blockchain. The value of the question is transferred from your account to the account of the person who posted the best answer.

### Link to the deployed Application
https://umass-forum.herokuapp.com
