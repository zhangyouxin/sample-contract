pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./TangpingToken.sol";

contract TangpingIssuer is ERC20,Ownable {
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }

    function burn(address _from ,uint256 _amount) public onlyOwner {
        _burn(_from, _amount);
    }

    TangpingToken public tangping;

    constructor(
        TangpingToken _tangping
    )  ERC20("TangpingIssuer", "TANGPINGI") {
        tangping = _tangping;
    }

    // Safe tangping transfer function, just in case if rounding error causes pool to not have enough TANGPINGs.
    function safeTangpingTransfer(address _to, uint256 _amount) public onlyOwner {
        uint256 tangpingBal = tangping.balanceOf(address(this));
        if (_amount > tangpingBal) {
            tangping.transfer(_to, tangpingBal);
        } else {
            tangping.transfer(_to, _amount);
        }
    }
}
