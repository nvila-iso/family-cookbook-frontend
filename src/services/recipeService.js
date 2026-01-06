export async function createRecipe(payload, token) {
  const res = await fetch("http://localhost:5000/api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to create recipe");
  }
  return res.json();
}
