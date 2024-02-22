// Understanding the built in to fetch api json method 

fetch('/posts')
  .then(res => res.text()) // Assuming the response body is a JSON string
  .then(jsonString => JSON.parse(jsonString))
  .then(resBody => console.log(resBody));


// is equivilant to 

(async function () {
  const res = await fetch('/posts');
  const body = await res.json();
  console.log(body);
})();


// another additonal way to post using async/await


(async function () {
  await fetch("/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: "nigga this works" })
  })
})()

// which is pointless because there are no then chained here on second though but yeah 