async function newFormHandler(event) {
  event.preventDefault();
  console.log("newFormHandler in add dish");

  const dish_name = document.querySelector("#dish_name").value;
  const description = document.querySelector("#description").value;
  const guest_name = document.querySelector("#guest_name").value;
  const rating = document.querySelector("#rating:checked") ? true : false;

  const response = await fetch(`/api/dish`, {
    method: "POST",
    body: JSON.stringify({
      dish_name,
      description,
      guest_name,
      rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add dish");
  }
}

document
  .querySelector(".new-dish-form")
  .addEventListener("submit", newFormHandler);
