const url = './src/components/blogs/blogs.json';

export const getAllBlogsConfig = async () => {

  console.log(url);
  const response = await fetch(`${url}/blogs`);
  const data = await response.json();

  return data.blogs;
}

export const getBlogById = async (id) => {
  const response = await fetch(`${url}/blogs/$id`);
  const data = await response.json();

  return data.blogs;
}

export const getAllStyles = async () => {
  const response = await fetch(`${url}/styles`);
  const data = await response.json();

  return data.styles;
}