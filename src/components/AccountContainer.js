import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    // fetch("http://localhost:3000/transactions?q=" + query)
    fetch("https://api.jsonbin.io/v3/b/63ca550001a72b59f24f5abd/transactions?q=" + query)
    
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm />
      <TransactionsList transactions={transaction} />
    </div>
  );
}

export default AccountContainer;
