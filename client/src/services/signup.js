const signup = async (userData) => {
  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Signup failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Signup error:", error.message);
    return { error: error.message };
  }
};

export default signup;
