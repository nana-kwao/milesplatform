const signup = async () => {
  const data = {
    fullname: "Freiku Nana Kwao",
    username: "nanakwao",
    telephone: "233559082614",
    email: "nanakwaofreiku@gmail.com",
    password: "nana",
  };

  try {
    let sendDataToDB = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(data),
    });
    return sendDataToDB.json();
  } catch (error) {
    console.log(error.message);
  }
};

const res = () => {
  signup()
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

