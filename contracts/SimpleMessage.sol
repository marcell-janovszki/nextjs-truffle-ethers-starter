// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleMessage {
    event messageChange(string _message);

    string public message = "hey";

    function setMessage(string memory _message) public {
        message = _message;
        emit messageChange(_message);
    }
}
