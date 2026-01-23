const controller = new AbortController();
const signal = controller.signal;
async function fetchData() {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
setTimeout(() => {
  controller.abort();
}, 2000);
fetchData();
