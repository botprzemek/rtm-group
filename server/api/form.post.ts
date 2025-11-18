export default defineEventHandler(async (event) => {
    const data = readMultipartFormData(event);

    console.log(data);
});
