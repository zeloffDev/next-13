export async function getData(): Promise<typeDataBlog[]> {
  const res = await fetch("http://localhost:8000/blogs");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}
