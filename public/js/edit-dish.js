async function editFormHandler(event) {
  event.preventDefault();
  const dish_name = document.querySelector("#dish_name").value;
  const description = document.querySelector("#description").value;
  const guest_name = document.querySelector("#guest_name").value;

  // What will the value of has_nuts be if the box in the form is checked?
  // The value of has_nuts will be true if the box is checked.
  // What do we call this kind of operator?
  // We call this a ternary operator. It begins with a condition followed by a question mark and two code blocks separated by a :.
  const rating = document.querySelector("#rating:checked") ? true : false;

  // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
  let id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // What part of our application will handle this 'put' request?
  // The Controller will handle this 'put' request.
  // ${id}
  console.log(id);

  const response = await fetch(`/api/dish/${id}`, {
    method: "PUT",
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

  // What happens if the response is ok?
  // If the response is ok, that means that the dish was updated successfully.
  if (response.ok) {
    document.location.replace(`/dish/${id}`);
  } else {
    alert("Failed to change dish");
  }
}

document
  .querySelector(".edit-dish-form")
  .addEventListener("submit", editFormHandler);
