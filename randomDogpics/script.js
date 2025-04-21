// //-------------------------------------------------------------------------------------------
// //  Random Dog pic generator with promises
// //-------------------------------------------------------------------------------------------

// const errmessage = document.getElementById("errmessage");
// const container = document.querySelector(".container");
// const btn = document.getElementById("btn");
// const URL = "https://dog.ceo/api/breeds/image/random";

// function getDogpic(num) {
//   return new Promise((resolve, reject) => {
//     const response = fetch(URL + "/" + num);
//     response
//       .then((response) => {
//         const data = response.json();
//         return data;
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch(() => {
//         reject("Failed to fetch Images");
//       });
//   });
// }

// btn.addEventListener("click", () => {
//   getDogpic(10)
//     .then((data) => {
//         data.message.forEach((url) => {
//           const newImage = document.createElement("img");
//           newImage.setAttribute("src", url);
//           container.appendChild(newImage);
//         })
//     })
//     .catch((error) => {
//       errmessage.textContent = error;
//     });
// });

// //--------------------------------------------------------------------------------------------
// //  Random Dig Pic Generator using async and await
// //---------------------------------------------------------------------------------------------


const errmessage = document.getElementById("errmessage");
const container = document.querySelector(".container");
const btn = document.getElementById("btn");
const URL = "https://dog.ceo/api/breeds/image/random";

async function getDogpic(num) {
  try {
    const response = await fetch(`${URL}/${num}`);
    console.log(response)
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("failed to fetch data");
  }
}

btn.addEventListener("click", async () => {
  try {
    const data = await getDogpic(10);
    data.message.forEach((imgurl) => {
      const newImg = document.createElement("img");
      newImg.setAttribute("src", imgurl);
      container.appendChild(newImg);
    });
  } catch (error) {
    errmessage.textContent = error;
  }
});
