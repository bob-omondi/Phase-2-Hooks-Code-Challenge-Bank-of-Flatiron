import React,{useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions]= useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.includes(e.target.value)
    );
    setTransactions(filteredTransactions);
  };

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((transactions) => setTransactions(transactions));
  }, []);
  function addTransaction (newTransaction){
    setTransactions([...transactions, newTransaction])
  }

  return (
    <div>
      <Search search={search} transactions={transactions} handleSearch={handleSearch} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
