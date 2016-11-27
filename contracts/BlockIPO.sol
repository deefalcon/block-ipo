contract BlockIPO {
    string public name;
    address public owner;
    mapping (address => uint) shares;
    mapping (uint => address) owners;
    uint public ownerCount;
    
    function BlockIPO(string _name) {
        name = _name;
    }

    function getName() returns (string name) {
        return name;
    }

    function issue(address _to, uint _shares) {
        shares[_to] += _shares;
    }

    function transfer(address _to, uint _shares) {
        if (shares[msg.sender] < _shares) {
            throw;
        }
        shares[msg.sender] -= _shares;
        shares[_to] += _shares;
    }

    function split(uint times) {
        for (uint i=0; i < ownerCount; i++) {
            shares[owners[i]] = shares[owners[i]] * times;
        }
    }

    function () {
        throw;
    }
}