//  SPDX-Licence-Identifier: MIT

pragma solidity >= 0.7.3;

contract HelloWorld {
    // three things go into the contract
    // 1. state variables - what you want the contract to keep track of
    // 2. functions - they allow you to read, write or modify that state
    // 3. events - they are called when the function is run, the blockchain knows when an even is happening

    event UpdatedMessages (string oldStr, string newStr);
    // the event is broadcasting the old and the new string to


    // now we define the state
    string public message;

    constructor (string memory initMessage) {
        // initMessage is an argument to the constructor 
        message = initMessage;
    }

    function update (string memory newMessage) public {
        //updates the state variables in the contract
        string memory oldMsg = message;
        // set state variables message to new message passed in function
        message = newMessage;
        emit UpdatedMessages(oldMsg, newMessage);
        // emit shows the change of events, the old message and the new message

    }
}