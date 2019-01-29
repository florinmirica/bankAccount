function BankAccount(name, initDep){
  this.myName = name,
  this.myBalance = initDep
};

BankAccount.prototype.changeBalance = function(amount){
  this.myBalance += amount;
};

var account;

$(document).ready(function() {
  $("form#accountRegistration").submit(function(event) {
    event.preventDefault();
    var name = $("#regName").val();
    var balance = parseFloat($("#initDeposit").val());
    account = new BankAccount(name, balance);
    $("#accountName").text(account.myName);
    $("#balance").text("$" + account.myBalance);
  });

  $("form#depositWithdraw").submit(function(event) {
    event.preventDefault();
    if(!account){
      alert("Please create an account first!");
    }
    else if($("#withAmount").val() && parseFloat($("#withAmount").val()) > account.myBalance){
      alert("You can't withdraw more than your available balance!")
    }
    else{
      if($("#depAmount").val()){
        var dep = parseFloat($("#depAmount").val());
        account.changeBalance(dep);
      }
      if($("#withAmount").val()){
        var withdraw = parseFloat($("#withAmount").val()) * -1;
        account.changeBalance(withdraw);
      }
    }
    $("#accountName").text(account.myName);
    $("#balance").text("$" + account.myBalance);
  });
});
